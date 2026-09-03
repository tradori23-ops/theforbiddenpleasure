// Edge Function: notify-admin-activity
// Manda una mail a te (non agli iscritti) quando:
//  - qualcuno ti scrive un messaggio privato (tabella dm_messages, INSERT)
//  - qualcuno lascia un commento su un titolo (tabella comments, INSERT)
//  - un ALTRO utente pubblica un nuovo titolo (tabella catalog, INSERT)
//  - un titolo riceve un nuovo mi piace o una condivisione (tabella
//    catalog, UPDATE — confrontando il numero prima/dopo: like_count e
//    share_count sono solo contatori, quindi qui NON si può sapere chi è
//    stato, solo che è successo e su quale titolo)
//  - si crea un nuovo account (tabella profiles, INSERT)
// Affianca le notifiche push, non le sostituisce — questa funzione non le tocca.
//
// Va collegata con CINQUE Database Webhook separati (stesso target,
// tabelle/eventi diversi), vedi istruzioni. Il payload include sempre
// quale tabella e quale tipo di evento (INSERT/UPDATE) ha fatto scattare
// la chiamata, quindi la funzione si comporta di conseguenza da sola.
//
// Variabili d'ambiente richieste (Supabase → Edge Functions → Secrets):
// - BREVO_API_KEY            stessa chiave delle altre due funzioni
// - BREVO_SENDER_EMAIL       mittente verificato su Brevo
// - BREVO_SENDER_NAME        facoltativo
// - ADMIN_NOTIFY_EMAIL       l'email dove vuoi ricevere questi avvisi
// - ADMIN_USER_ID            il tuo UUID utente (stesso di notify-new-title)
// - SUPABASE_URL             es. https://ukafvwyxdjsfzzoewujq.supabase.co
// - SUPABASE_SERVICE_ROLE_KEY  la chiave "service_role" (Project Settings →
//                             API) — serve per leggere dm_threads/profiles e
//                             risalire a chi ha scritto o chi è il
//                             destinatario, bypassando le policy RLS
//                             normali (è legittimo qui perché gira lato
//                             server, mai nel browser)
// - SITE_URL                 es. https://noxmorningstar.com (senza slash finale)

function sendEmail(subject: string, htmlContent: string) {
  const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY')!;
  const SENDER_EMAIL = Deno.env.get('BREVO_SENDER_EMAIL')!;
  const SENDER_NAME = Deno.env.get('BREVO_SENDER_NAME') || 'LUX COMICS & MEDUSA COMICS';
  const ADMIN_NOTIFY_EMAIL = Deno.env.get('ADMIN_NOTIFY_EMAIL')!;

  return fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      to: [{ email: ADMIN_NOTIFY_EMAIL }],
      subject,
      htmlContent,
    }),
  });
}

function emailShell(title: string, body: string, link: string, linkLabel: string) {
  const SITE_URL = Deno.env.get('SITE_URL') || 'https://noxmorningstar.com';
  return `
  <div style="background:#0b0607; padding:32px 16px; font-family: Georgia, 'Times New Roman', serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; margin:0 auto; background:#150d0e; border:1px solid #3a2a1e; border-radius:12px; overflow:hidden;">
      <tr>
        <td style="padding:0; line-height:0;">
          <img src="${SITE_URL}/email-header-art.jpg" width="560" alt="Lux Comics &amp; Medusa Comics" style="display:block; width:100%; max-width:560px; height:auto; border:0;">
        </td>
      </tr>
      <tr>
        <td style="padding:32px; background:#150d0e;">
          <p style="color:#c9a24d; letter-spacing:0.06em; font-size:13px; text-transform:uppercase; margin:0 0 14px; font-weight:bold;">${title}</p>
          <div style="line-height:1.65; color:#e0d4b8; font-size:15px;">${body}</div>
          <a href="${link}" style="display:inline-block; margin-top:24px; background:#6e1423; color:#f0e4cd; padding:13px 28px; border-radius:8px; text-decoration:none; font-weight:bold; font-size:14px; letter-spacing:0.02em;">${linkLabel}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:0; line-height:0;">
          <img src="${SITE_URL}/email-footer-art.jpg" width="560" alt="" style="display:block; width:100%; max-width:560px; height:auto; border:0;">
        </td>
      </tr>
      <tr>
        <td style="padding:14px 32px; background:#150d0e; border-top:1px solid #3a2a1e; text-align:center;">
          <div style="font-size:11px; color:#6b5d4a;">Ricevi questa mail perché sei l'amministratore di noxmorningstar.com</div>
        </td>
      </tr>
    </table>
  </div>
  `;
}

async function lookupDisplayName(SUPABASE_URL: string, SERVICE_ROLE_KEY: string, userId: string): Promise<string> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/profiles?id=eq.${userId}&select=display_name`,
      { headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}` } }
    );
    const rows = await res.json();
    if (rows && rows[0] && rows[0].display_name) return rows[0].display_name;
  } catch (_e) {
    // se il profilo non si trova, si usa il nome generico invece di bloccarsi
  }
  return 'Qualcuno';
}

Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    const ADMIN_USER_ID = Deno.env.get('ADMIN_USER_ID')!;
    const SITE_URL = Deno.env.get('SITE_URL') || 'https://noxmorningstar.com';
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const record = payload.record;
    const oldRecord = payload.old_record;

    // ---------- Nuovo messaggio privato ----------
    if (payload.type === 'INSERT' && payload.table === 'dm_messages') {
      if (!record || record.sender_id === ADMIN_USER_ID) {
        return new Response(JSON.stringify({ skipped: true, reason: 'own message' }), { status: 200 });
      }

      // Bisogna leggere dm_threads per sapere se il messaggio è davvero
      // diretto a te (sei user_a o user_b) — la tabella dm_messages da sola
      // non lo dice.
      const threadRes = await fetch(
        `${SUPABASE_URL}/rest/v1/dm_threads?id=eq.${record.thread_id}&select=user_a,user_b`,
        { headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}` } }
      );
      const threads = await threadRes.json();
      const thread = threads[0];
      if (!thread || (thread.user_a !== ADMIN_USER_ID && thread.user_b !== ADMIN_USER_ID)) {
        return new Response(JSON.stringify({ skipped: true, reason: 'not your thread' }), { status: 200 });
      }

      const senderName = await lookupDisplayName(SUPABASE_URL, SERVICE_ROLE_KEY, record.sender_id);
      const preview = (record.body || (record.attachment_url ? '[allegato]' : '')).slice(0, 200);
      const html = emailShell(
        `Nuovo messaggio privato da ${senderName}`,
        `<p>${preview}</p>`,
        `${SITE_URL}/community.html`,
        'Apri i messaggi'
      );
      const r = await sendEmail(`Nuovo messaggio privato da ${senderName}`, html);
      return new Response(JSON.stringify({ ok: r.ok }), { status: r.ok ? 200 : 502 });
    }

    // ---------- Nuovo commento (su un titolo O su una canzone — stessa tabella "comments") ----------
    if (payload.type === 'INSERT' && payload.table === 'comments') {
      if (!record || record.user_id === ADMIN_USER_ID) {
        return new Response(JSON.stringify({ skipped: true, reason: 'own comment' }), { status: 200 });
      }
      const authorName = await lookupDisplayName(SUPABASE_URL, SERVICE_ROLE_KEY, record.user_id);
      const preview = (record.body || '').slice(0, 200);
      const isSongComment = !!record.song_id;
      const subject = isSongComment
        ? `Nuovo commento su una canzone da ${authorName}`
        : `Nuovo commento da ${authorName}`;
      const html = emailShell(
        subject,
        `<p>${preview}</p>`,
        `${SITE_URL}/schedario.html#library`,
        'Vedi il titolo'
      );
      const r = await sendEmail(subject, html);
      return new Response(JSON.stringify({ ok: r.ok }), { status: r.ok ? 200 : 502 });
    }

    // ---------- Nuovo like su una canzone ----------
    // Va collegato con un SESTO Database Webhook: tabella song_likes, evento INSERT.
    if (payload.type === 'INSERT' && payload.table === 'song_likes') {
      if (!record || record.user_id === ADMIN_USER_ID) {
        return new Response(JSON.stringify({ skipped: true, reason: 'own like' }), { status: 200 });
      }
      var songTitle = 'una canzone';
      try {
        const songRes = await fetch(
          `${SUPABASE_URL}/rest/v1/songs?id=eq.${record.song_id}&select=title`,
          { headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}` } }
        );
        const songs = await songRes.json();
        if (songs && songs[0] && songs[0].title) songTitle = songs[0].title;
      } catch (_e) {
        // se la canzone non si trova per qualche motivo, si usa il nome generico invece di bloccarsi
      }
      const authorName = await lookupDisplayName(SUPABASE_URL, SERVICE_ROLE_KEY, record.user_id);
      const html = emailShell(
        `"${songTitle}" ha ricevuto un nuovo mi piace`,
        `<p><strong>${authorName}</strong> ha messo like a "${songTitle}".</p>`,
        `${SITE_URL}/schedario.html#library`,
        'Vedi il titolo'
      );
      const r = await sendEmail(`Nuovo like su "${songTitle}"`, html);
      return new Response(JSON.stringify({ ok: r.ok }), { status: r.ok ? 200 : 502 });
    }

    // ---------- Nuovo titolo da un altro utente ----------
    if (payload.type === 'INSERT' && payload.table === 'catalog') {
      if (!record || record.created_by === ADMIN_USER_ID) {
        return new Response(JSON.stringify({ skipped: true, reason: 'own title' }), { status: 200 });
      }
      const html = emailShell(
        'Nuovo titolo pubblicato da un utente',
        `<p><strong>${record.title || ''}</strong></p><p>${record.character || ''}</p>`,
        `${SITE_URL}/schedario.html#library`,
        'Vedi il titolo'
      );
      const r = await sendEmail(`Nuovo titolo pubblicato: ${record.title || ''}`, html);
      return new Response(JSON.stringify({ ok: r.ok }), { status: r.ok ? 200 : 502 });
    }

    // ---------- Nuovo mi piace / condivisione ----------
    // like_count e share_count sono solo numeri sul titolo, non righe per
    // persona — quindi qui si può dire SOLO che è successo e su quale
    // titolo, mai chi è stato. Se un giorno servirà sapere anche chi, va
    // creata una tabella dedicata (una riga per ogni like/condivisione).
    if (payload.type === 'UPDATE' && payload.table === 'catalog') {
      if (!record || !oldRecord) {
        return new Response(JSON.stringify({ skipped: true, reason: 'missing old_record' }), { status: 200 });
      }
      const likeIncreased = (record.like_count || 0) > (oldRecord.like_count || 0);
      const shareIncreased = (record.share_count || 0) > (oldRecord.share_count || 0);
      if (!likeIncreased && !shareIncreased) {
        return new Response(JSON.stringify({ skipped: true, reason: 'not a like/share change' }), { status: 200 });
      }
      const what = likeIncreased ? 'un nuovo mi piace' : 'una nuova condivisione';
      const html = emailShell(
        `${record.title || 'Un titolo'} ha ricevuto ${what}`,
        `<p><strong>${record.title || ''}</strong></p>`,
        `${SITE_URL}/schedario.html#library`,
        'Vedi il titolo'
      );
      const r = await sendEmail(`${record.title || 'Un titolo'} ha ricevuto ${what}`, html);
      return new Response(JSON.stringify({ ok: r.ok }), { status: r.ok ? 200 : 502 });
    }

    // ---------- Nuovo account ----------
    if (payload.type === 'INSERT' && payload.table === 'profiles') {
      if (!record || record.id === ADMIN_USER_ID) {
        return new Response(JSON.stringify({ skipped: true, reason: 'own profile' }), { status: 200 });
      }
      const name = record.display_name || 'Un nuovo utente';
      const html = emailShell(
        'Nuovo account su LUX COMICS',
        `<p><strong>${name}</strong> si è appena iscritto.</p>`,
        `${SITE_URL}/admin.html`,
        'Vedi in Amministra'
      );
      const r = await sendEmail(`Nuovo account: ${name}`, html);
      return new Response(JSON.stringify({ ok: r.ok }), { status: r.ok ? 200 : 502 });
    }

    return new Response(JSON.stringify({ skipped: true, reason: 'unhandled table/event' }), { status: 200 });
  } catch (err) {
    console.error('notify-admin-activity errore:', err);
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
});