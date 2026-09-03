// Edge Function: notify-new-song
// Si attiva da un Database Webhook di Supabase su INSERT nella tabella
// "songs" — clonata da notify-new-title, stesso identico meccanismo ma
// per l'annuncio di una nuova canzone invece di un nuovo titolo.
//
// Va collegata con un Database Webhook: tabella songs, evento INSERT.
// Usa GLI STESSI secrets già configurati per notify-new-title — nessuna
// variabile nuova da aggiungere.

Deno.serve(async (req) => {
  try {
    const payload = await req.json();

    if (payload.type !== 'INSERT' || payload.table !== 'songs') {
      return new Response(JSON.stringify({ skipped: true }), { status: 200 });
    }

    const record = payload.record;
    if (!record || !record.title) {
      return new Response(JSON.stringify({ skipped: true, reason: 'no title' }), { status: 200 });
    }

    const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY');
    const BREVO_LIST_ID = Deno.env.get('BREVO_LIST_ID');
    const SENDER_EMAIL = Deno.env.get('BREVO_SENDER_EMAIL');
    const SENDER_NAME = Deno.env.get('BREVO_SENDER_NAME') || 'LUX COMICS & MEDUSA COMICS';
    const SITE_URL = Deno.env.get('SITE_URL') || 'https://noxmorningstar.com';

    if (!BREVO_API_KEY || !BREVO_LIST_ID || !SENDER_EMAIL) {
      console.error('notify-new-song: variabili d\'ambiente mancanti');
      return new Response(JSON.stringify({ error: 'missing config' }), { status: 500 });
    }

    const title = record.title;
    const artist = record.artist || '';
    const coverUrl = record.cover_url || '';
    // riporta alla scheda del titolo, dove il lettore musica è raggiungibile
    const songUrl = record.catalog_id
      ? `${SITE_URL}/schedario.html?title=${encodeURIComponent(record.catalog_id)}#library`
      : `${SITE_URL}/schedario.html#library`;

    const htmlContent = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background:#150d0e; color:#f0e4cd; padding:32px;">
        <p style="color:#c9a24d; letter-spacing:0.08em; font-size:13px; text-transform:uppercase;">🎵 Nuova canzone pubblicata</p>
        <h1 style="font-size:26px; margin:8px 0 16px;">${title}</h1>
        ${coverUrl ? `<img src="${coverUrl}" alt="" style="width:100%; max-width:320px; border-radius:8px; margin-bottom:16px;">` : ''}
        <p style="color:#c9a24d; margin:0 0 4px;">${artist}</p>
        <a href="${songUrl}" style="display:inline-block; margin-top:20px; background:#6e1423; color:#f0e4cd; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold;">Ascolta ora</a>
      </div>
    `;

    const createRes = await fetch('https://api.brevo.com/v3/emailCampaigns', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Nuova canzone — ${title} — ${new Date().toISOString()}`,
        subject: `🎵 Nuova musica su LUX COMICS: ${title}`,
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        type: 'classic',
        htmlContent,
        recipients: { listIds: [Number(BREVO_LIST_ID)] },
      }),
    });

    if (!createRes.ok) {
      const errText = await createRes.text();
      console.error('Creazione campagna Brevo fallita:', errText);
      return new Response(JSON.stringify({ error: 'brevo create failed', detail: errText }), { status: 502 });
    }

    const created = await createRes.json();
    const campaignId = created.id;

    const sendRes = await fetch(`https://api.brevo.com/v3/emailCampaigns/${campaignId}/sendNow`, {
      method: 'POST',
      headers: { 'api-key': BREVO_API_KEY },
    });

    if (!sendRes.ok) {
      const errText = await sendRes.text();
      console.error('Invio campagna Brevo fallito:', errText);
      return new Response(JSON.stringify({ error: 'brevo send failed', detail: errText }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true, campaignId }), { status: 200 });
  } catch (err) {
    console.error('notify-new-song errore:', err);
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
});
