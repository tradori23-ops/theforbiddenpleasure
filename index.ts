// Supabase Edge Function: send-email
// Invia un'email transazionale a un utente del sito, tramite Brevo — stessa
// chiave API già usata da subscribe-newsletter, nessun account nuovo.
// Generica (destinatario/oggetto/contenuto) così può servire anche in
// futuro per altri eventi, non solo "nuovo follower".
//
// DEPLOY: supabase dashboard → Edge Functions → Create function → "send-email"
// incolla questo file come index.ts.
//
// SECRETS DA IMPOSTARE (Edge Functions → send-email → Secrets):
//   BREVO_API_KEY      = (la stessa già usata da subscribe-newsletter — puoi
//                         copiarla da lì, oppure condividere il secret tra
//                         le due funzioni se Supabase te lo permette)
//   NOTIFY_FROM_EMAIL  = un indirizzo verificato su Brevo da cui inviare
//                        (es. quello già usato come mittente in subscribe-newsletter)
// (SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY sono già disponibili di default, non vanno aggiunti a mano)

import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  try {
    const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY');
    const FROM_EMAIL = Deno.env.get('NOTIFY_FROM_EMAIL');
    if (!BREVO_API_KEY || !FROM_EMAIL) {
      return new Response(JSON.stringify({ error: 'Config mancante' }), { status: 500, headers: corsHeaders });
    }

    const { user_id, subject, html } = await req.json();
    if (!user_id || !subject || !html) {
      return new Response(JSON.stringify({ error: 'user_id, subject e html sono obbligatori' }), { status: 400, headers: corsHeaders });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // L'email non è pubblica da nessuna parte (giustamente) — la prendiamo
    // dall'account di autenticazione, solo qui, lato server, con la chiave
    // service role. È l'unico posto sicuro per farlo.
    const { data: userData, error: userErr } = await supabase.auth.admin.getUserById(user_id);
    if (userErr || !userData?.user?.email) {
      return new Response(JSON.stringify({ error: 'Utente o email non trovati' }), { status: 404, headers: corsHeaders });
    }

    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: 'LUX COMICS & MEDUSA COMICS', email: FROM_EMAIL },
        to: [{ email: userData.user.email }],
        subject,
        htmlContent: html
      })
    });

    if (!r.ok) {
      const errText = await r.text();
      console.error('Invio email fallito:', errText);
      return new Response(JSON.stringify({ error: 'Invio fallito' }), { status: 502, headers: corsHeaders });
    }

    return new Response(JSON.stringify({ sent: true }), { status: 200, headers: corsHeaders });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Errore interno' }), { status: 500, headers: corsHeaders });
  }
});
