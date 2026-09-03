// Edge Function: generate-preview-page
// Riceve un webhook quando viene creato un nuovo titolo o un nuovo annuncio,
// costruisce una paginetta statica con l'anteprima social corretta per QUEL
// contenuto specifico, e la carica su GitHub — così GitHub Pages la serve
// subito, senza che tu debba caricare nulla a mano.

const SITE_URL = 'https://noxmorningstar.com';
const GITHUB_OWNER = 'tradori23-ops';
const GITHUB_REPO = 'theforbiddenpleasure';

Deno.serve(async (req: Request) => {
  try {
    const payload = await req.json();
    const table = payload.table;
    const record = payload.record;

    const GITHUB_TOKEN = Deno.env.get('GITHUB_TOKEN');
    if (!GITHUB_TOKEN) {
      console.error('GITHUB_TOKEN non configurato tra i secret.');
      return new Response('Config mancante', { status: 500 });
    }

    var filePath: string, ogTitle: string, ogDescription: string, ogImage: string, redirectUrl: string;
    var safeId = String(record.id).replace(/[^a-zA-Z0-9_-]/g, ''); // difesa: solo caratteri sicuri per un nome file

    if (table === 'catalog') {
      filePath = `t/${safeId}.html`;
      ogTitle = record.title || 'LUX COMICS & MEDUSA COMICS';
      ogDescription = (record.synopsis || '').slice(0, 200);
      ogImage = record.cover_url || `${SITE_URL}/og-image.jpg`;
      redirectUrl = `${SITE_URL}/?title=${encodeURIComponent(record.id)}`;
    } else if (table === 'announcements') {
      filePath = `a/${safeId}.html`;
      ogTitle = record.title || 'LUX COMICS & MEDUSA COMICS';
      ogDescription = (record.body || '').slice(0, 200);
      ogImage = record.image_url || `${SITE_URL}/og-image.jpg`;
      redirectUrl = `${SITE_URL}/?announcement=${encodeURIComponent(record.id)}`;
    } else if (table === 'songs') {
      filePath = `s/${safeId}.html`;
      ogTitle = record.title || 'LUX COMICS & MEDUSA COMICS';
      ogDescription = record.artist ? `Musica — ${record.artist}` : 'Musica da LUX COMICS & MEDUSA COMICS';
      ogImage = record.cover_url || `${SITE_URL}/og-image.jpg`;
      // riporta alla scheda del titolo a cui la canzone appartiene, dove il
      // lettore musica è raggiungibile dal bottone "Ascolta musica"
      redirectUrl = record.catalog_id
        ? `${SITE_URL}/schedario.html?title=${encodeURIComponent(record.catalog_id)}#library`
        : `${SITE_URL}/schedario.html#library`;
    } else {
      return new Response('Tabella ignorata', { status: 200 });
    }

    const html = buildPreviewHtml(ogTitle, ogDescription, ogImage, redirectUrl);
    await commitToGitHub(filePath, html, GITHUB_TOKEN);

    return new Response('OK', { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response('Errore interno: ' + String(e), { status: 500 });
  }
});

function esc(s: string): string {
  return String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' } as Record<string, string>
  )[c]);
}

function buildPreviewHtml(title: string, description: string, image: string, redirectUrl: string): string {
  return `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>${esc(title)}</title>
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${esc(image)}">
<meta property="og:url" content="${esc(redirectUrl)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(image)}">
<meta http-equiv="refresh" content="0; url=${esc(redirectUrl)}">
<script>window.location.replace(${JSON.stringify(redirectUrl)});</script>
</head>
<body>
<p>Reindirizzamento a <a href="${esc(redirectUrl)}">${esc(title)}</a>…</p>
</body>
</html>`;
}

async function commitToGitHub(path: string, content: string, token: string) {
  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;
  const encoded = btoa(unescape(encodeURIComponent(content)));

  // se il file esiste già (es. lo stesso titolo pubblicato due volte), serve il suo "sha" per poterlo sovrascrivere
  var sha: string | undefined;
  const existing = await fetch(apiUrl, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' }
  });
  if (existing.ok) {
    const data = await existing.json();
    sha = data.sha;
  }

  const res = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: `Anteprima automatica: ${path}`,
      content: encoded,
      sha
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`GitHub ha rifiutato la scrittura (HTTP ${res.status}): ${errText}`);
  }
}