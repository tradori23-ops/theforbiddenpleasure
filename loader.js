// ============ LOADER — inietta il chrome condiviso (header, footer, modali) ============
// Ogni pagina del sito include questo file al posto del vecchio blocco unico.
// Così header/footer/modali restano scritti UNA SOLA VOLTA (in chrome-top.html,
// chrome-footer.html, chrome-modals.html) invece di essere copiati in ogni pagina:
// se li modifichi, li modifichi in un punto solo e tutte le pagine si aggiornano.
(async function () {
  "use strict";

  // Banner d'errore visibile in pagina — temporaneo, solo per diagnosticare
  // il problema di stasera da iPhone (senza Mac/Web Inspector a disposizione).
  // Va tolto una volta risolto, non è pensato per restare in produzione.
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
  var V = "4";

  function replaceSlot(id, html) {
    var slot = document.getElementById(id);
    if (!slot) {
      console.error("[loader] slot mancante nella pagina:", id);
      return;
    }
    slot.outerHTML = html;
  }
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
