// Edge Function: translate-message
// Da creare su Supabase con questo stesso nome (Functions -> Create a new function).
// Riusa il secret DEEPL_API_KEY già configurato per translate-synopsis:
// nessun nuovo secret da aggiungere.
//
// A differenza di translate-synopsis (che parte SEMPRE dall'inglese e
// restituisce le altre 4 lingue insieme), questa traduce un singolo
// messaggio verso UNA lingua target — la lingua di partenza la rileva
// DeepL da solo, quindi funziona qualunque sia la lingua in cui è stato
// scritto il messaggio originale.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const DEEPL_API_KEY = Deno.env.get("DEEPL_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const TARGET_MAP: Record<string, string> = {
  it: "IT",
  en: "EN-GB",
  es: "ES",
  fr: "FR",
  de: "DE",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { text, target } = await req.json();

    if (!text || typeof text !== "string" || !target) {
      return new Response(
        JSON.stringify({ error: "text e target sono richiesti" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const targetLang = TARGET_MAP[target] || String(target).toUpperCase();

    // Nota: se translate-synopsis usa il piano DeepL a pagamento, l'host è
    // api.deepl.com invece di api-free.deepl.com — allinea questa riga a
    // quella già in uso in translate-synopsis se la chiamata fallisce con 403.
    const deeplResp = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        "Authorization": `DeepL-Auth-Key ${DEEPL_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        text,
        target_lang: targetLang,
      }),
    });

    if (!deeplResp.ok) {
      const errText = await deeplResp.text();
      throw new Error(`DeepL error ${deeplResp.status}: ${errText}`);
    }

    const data = await deeplResp.json();
    const translated = data?.translations?.[0]?.text ?? text;

    return new Response(
      JSON.stringify({ translated }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("translate-message error:", err);
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
