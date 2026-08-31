// ============ LOADER — inietta il chrome condiviso (header, footer, modali) ============
// Ogni pagina del sito include questo file al posto del vecchio blocco unico.
// Così header/footer/modali restano scritti UNA SOLA VOLTA (in chrome-top.html,
// chrome-footer.html, chrome-modals.html) invece di essere copiati in ogni pagina:
// se li modifichi, li modifichi in un punto solo e tutte le pagine si aggiornano.
(async function () {
  "use strict";

  // Banner d'errore visibile in pagina — temporaneo, per continuare a
  // diagnosticare da iPhone senza Mac/Web Inspector.
  window.addEventListener('error', function (e) {
    var box = document.getElementById('__debugErrorBox');
    if (!box) {
      box = document.createElement('div');
      box.id = '__debugErrorBox';
      box.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#b00020;color:#fff;font-family:monospace;font-size:12px;padding:10px;white-space:pre-wrap;max-height:40vh;overflow:auto;';
      document.documentElement.appendChild(box);
    }
    var line = document.createElement('div');
    line.style.cssText = 'border-top:1px solid rgba(255,255,255,0.3);padding-top:6px;margin-top:6px;';
    line.textContent = (e.message || 'Errore sconosciuto') + '  —  ' + (e.filename || '?') + ':' + (e.lineno || '?') + ':' + (e.colno || '?');
    box.appendChild(line);
  });

  // Numero di versione manuale: aumentalo di 1 ogni volta che carichi un
  // nuovo app.js/style.css e vuoi essere SICURO che tutti lo scarichino
  // subito, ignorando qualunque cache (browser, service worker, o CDN
  // davanti al dominio) — invece di aspettare che si aggiorni da sola.
  // Questo è l'UNICO punto da modificare: style.css e app.js prendono
  // entrambi la versione da qui, su ogni pagina, senza bisogno di
  // toccare anche l'HTML di ciascuna pagina.
  //
  // ATTENZIONE: controlla che questo numero sia più alto dell'ultimo che
  // hai visto live sul sito prima di caricare — questo file parte da una
  // copia salvata in sessione e potrebbe non riflettere bump fatti nel
  // frattempo direttamente su GitHub.
  var V = "44";

  // style.css iniettato qui (non più con un <link> scritto a mano in ogni
  // pagina) così la sua versione segue sempre la stessa V di app.js,
  // ovunque, senza doverla tenere sincronizzata a mano in più file.
  var cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.href = "style.css?v=" + V;
  document.head.appendChild(cssLink);

  function replaceSlot(id, html) {
    var slot = document.getElementById(id);
    if (!slot) {
      console.error("[loader] slot mancante nella pagina:", id);
      return;
    }
    slot.outerHTML = html;
  }
  // Etichetta visibile con la versione caricata — angolo in basso a
  // sinistra, piccola e discreta — così sappiamo sempre con certezza se
  // il sito sta mostrando l'ultima versione, senza controllare altrove.
  var vTag = document.createElement('div');
  vTag.textContent = 'v' + V;
  vTag.style.cssText = 'position:fixed;bottom:4px;left:6px;z-index:99999;font-family:monospace;font-size:10px;color:rgba(201,162,77,0.55);pointer-events:none;';
  document.documentElement.appendChild(vTag);

  // Verifica dell'età (soluzione temporanea) — widget esterno Common Ninja,
  // iniettato qui così parte su ogni pagina senza doverlo copiare a mano
  // in ciascun file HTML. Le impostazioni del widget (una volta sola per
  // sessione, aspetto, testo) si gestiscono dalla dashboard Common Ninja,
  // non da qui.
  var ninjaScript = document.createElement('script');
  ninjaScript.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
  ninjaScript.defer = true;
  document.head.appendChild(ninjaScript);
  var ninjaDiv = document.createElement('div');
  ninjaDiv.className = 'commonninja_component pid-9e95d41c-4e88-4295-9e10-33ca7dbb7d0b';
  document.body.appendChild(ninjaDiv);

  try {
    var [topHtml, footerHtml, modalsHtml] = await Promise.all([
      fetch("chrome-top.html?v=" + V).then(function (r) { return r.text(); }),
      fetch("chrome-footer.html?v=" + V).then(function (r) { return r.text(); }),
      fetch("chrome-modals.html?v=" + V).then(function (r) { return r.text(); })
    ]);
    replaceSlot("chrome-top-slot", topHtml);
    replaceSlot("chrome-footer-slot", footerHtml);
    replaceSlot("chrome-modals-slot", modalsHtml);
  } catch (err) {
    console.error("[loader] impossibile caricare header/footer/modali condivisi:", err);
    // Non blocchiamo comunque il caricamento di app.js: meglio una pagina
    // con qualche pezzo mancante che una pagina completamente morta.
  }
  // app.js si aspetta che TUTTO il DOM (header, sezione, footer, modali)
  // sia già presente quando parte: lo carichiamo solo ora, a iniezione completata.
  var s = document.createElement("script");
  s.src = "app.js?v=" + V;
  document.body.appendChild(s);
})();
