// Edge Function: generate-blog-preview  (v263, il Blog)
// La chiama il sito quando pubblichi, cambi o elimini un articolo del Blog
// (Amministra › Blog). Crea nel repository GitHub la paginetta b/<id>.html
// con l'anteprima social dell'articolo — titolo, testo e la copertina «da
// giornale» con il QR — così WhatsApp, Telegram, Facebook & co. la mostrano
// quando qualcuno condivide il link. Chi apre la pagina finisce subito
// sull'articolo vero (blog.html?post=<id>).
// Con { action: 'delete' } la pagina si toglie.
//
// Solo l'amministratore la può usare: lo controlla chiedendo al database
// (is_site_admin) con l'accesso di chi la chiama.
//
// Variabili d'ambiente (Supabase → Edge Functions → Secrets):
// - GITHUB_TOKEN   la stessa delle altre anteprime (generate-preview-page)
// SUPABASE_URL e SUPABASE_ANON_KEY le mette Supabase da solo.

const SITE_URL = 'https://noxmorningstar.com';
const GITHUB_OWNER = 'tradori23-ops';
const GITHUB_REPO = 'theforbiddenpleasure';

const CORS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// il nome della testata in ogni lingua del sito
const GAZETTE: Record<string, string> = {
  it: "La Gazzetta dell'Archivio", en: 'The Archive Gazette', es: 'La Gaceta del Archivo', fr: "La Gazette de l'Archive",
  de: 'Die Archiv-Zeitung', pt: 'A Gazeta do Arquivo', ru: 'Архивная газета', zh: '档案馆报', ja: 'アーカイブ新聞',
  hi: 'आर्काइव गज़ट', bn: 'আর্কাইভ গেজেট', ar: 'جريدة الأرشيف', pnb: 'آرکائیو گزٹ',
};
const LOCALE: Record<string, string> = {
  it: 'it_IT', en: 'en_GB', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', pt: 'pt_BR', ru: 'ru_RU', zh: 'zh_CN', ja: 'ja_JP',
  hi: 'hi_IN', bn: 'bn_BD', ar: 'ar_AR', pnb: 'pa_PK',
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'usa POST' }, 405);
  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const auth = req.headers.get('Authorization') || '';
    const apikey = req.headers.get('apikey') || Deno.env.get('SUPABASE_ANON_KEY') || '';
    const GITHUB_TOKEN = Deno.env.get('GITHUB_TOKEN');
    if (!SUPABASE_URL) return json({ error: 'SUPABASE_URL mancante' }, 500);
    if (!GITHUB_TOKEN) return json({ error: 'GITHUB_TOKEN mancante tra i secret' }, 500);
    if (!auth.startsWith('Bearer ')) return json({ error: 'accesso mancante' }, 401);

    // solo l'amministratore
    const adm = await fetch(`${SUPABASE_URL}/rest/v1/rpc/is_site_admin`, {
      method: 'POST',
      headers: { apikey, Authorization: auth, 'Content-Type': 'application/json' },
      body: '{}',
    });
    if (!adm.ok || (await adm.json().catch(() => false)) !== true) return json({ error: 'solo l\'amministratore' }, 403);

    const input = await req.json().catch(() => ({}));
    const id = String(input.post_id || '').replace(/[^a-zA-Z0-9_-]/g, '');
    const action = input.action === 'delete' ? 'delete' : 'create';
    if (!id) return json({ error: 'post_id mancante' }, 400);
    const path = `b/${id}.html`;

    if (action === 'delete') {
      const gone = await deleteFromGitHub(path, GITHUB_TOKEN);
      return json({ ok: true, path, deleted: gone });
    }

    // l'articolo (con l'accesso dell'amministratore: si leggono anche le bozze)
    const r = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts?id=eq.${id}&select=*`, {
      headers: { apikey, Authorization: auth },
    });
    if (!r.ok) return json({ error: 'lettura articolo ' + r.status }, 502);
    const rows = await r.json();
    const post = rows && rows[0];
    if (!post) return json({ error: 'articolo non trovato' }, 404);
    if (!post.published) return json({ error: 'bozza', status: 'draft' }, 409);

    await commitToGitHub(path, buildPreviewHtml(post, id), GITHUB_TOKEN, `Blog: anteprima di «${String(post.title || '').slice(0, 60)}»`);
    return json({ ok: true, path });
  } catch (e) {
    console.error(e);
    return json({ error: String((e as Error).message || e) }, 500);
  }
});

function esc(s: string): string {
  return String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' } as Record<string, string>
  )[c]);
}
function cut(s: string, n: number): string {
  const t = String(s || '').replace(/\s+/g, ' ').trim();
  return t.length > n ? t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : t;
}

// deno-lint-ignore no-explicit-any
function buildPreviewHtml(p: any, id: string): string {
  const lang = /^[a-z]{2,3}$/.test(p.lang || '') ? p.lang : 'it';
  const gazette = GAZETTE[lang] || GAZETTE.it;
  const title = String(p.title || gazette);
  let desc = cut(p.body || '', 200);
  if (p.kind === 'link' && p.source_name) desc = (desc ? desc + ' — ' : '') + p.source_name;
  if (!desc) desc = gazette + ' · LUX COMICS & MEDUSA COMICS';
  const hasCover = !!p.og_image;
  const image = p.og_image || p.image_url || `${SITE_URL}/og-image.jpg`;
  const self = `${SITE_URL}/b/${id}.html`;
  const target = `${SITE_URL}/blog.html?post=${id}`;
  const dir = lang === 'ar' || lang === 'pnb' ? ' dir="rtl"' : '';
  return `<!DOCTYPE html>
<html lang="${esc(lang)}"${dir}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} — ${esc(gazette)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(self)}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="${esc(gazette)} · LUX COMICS &amp; MEDUSA COMICS">
<meta property="og:locale" content="${esc(LOCALE[lang] || 'it_IT')}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(image)}">
${hasCover ? '<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n' : ''}<meta property="og:image:alt" content="${esc(title)}">
<meta property="og:url" content="${esc(self)}">
<meta property="article:published_time" content="${esc(p.published_at || p.created_at || '')}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(image)}">
<style>body{margin:0;background:#0b0607;color:#ece2c6;font-family:Georgia,serif;display:flex;min-height:100vh;align-items:center;justify-content:center;text-align:center;padding:24px}a{color:#e3c273}</style>
</head>
<body>
<p><a href="${esc(target)}">${esc(title)}</a></p>
<script>location.replace(${JSON.stringify(target)});</script>
</body>
</html>
`;
}

async function getSha(apiUrl: string, token: string): Promise<string | undefined> {
  const r = await fetch(apiUrl, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' } });
  if (!r.ok) return undefined;
  const data = await r.json();
  return data && data.sha;
}

async function commitToGitHub(path: string, content: string, token: string, message: string) {
  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;
  const encoded = btoa(unescape(encodeURIComponent(content)));
  const sha = await getSha(apiUrl, token); // il file c'è già (articolo cambiato): serve il suo «sha» per riscriverlo
  const res = await fetch(apiUrl, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, content: encoded, sha }),
  });
  if (!res.ok) throw new Error(`GitHub ha rifiutato la scrittura (HTTP ${res.status}): ${(await res.text()).slice(0, 300)}`);
}

async function deleteFromGitHub(path: string, token: string): Promise<boolean> {
  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;
  const sha = await getSha(apiUrl, token);
  if (!sha) return false; // non c'era: niente da togliere
  const res = await fetch(apiUrl, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: `Blog: tolta l'anteprima ${path}`, sha }),
  });
  if (!res.ok) throw new Error(`GitHub non ha tolto il file (HTTP ${res.status}): ${(await res.text()).slice(0, 300)}`);
  return true;
}
