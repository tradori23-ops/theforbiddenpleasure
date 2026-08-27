// ============ LOADER — inietta il chrome condiviso (header, footer, modali) ============
// Ogni pagina del sito include questo file al posto del vecchio blocco unico.
// Così header/footer/modali restano scritti UNA SOLA VOLTA (in chrome-top.html,
// chrome-footer.html, chrome-modals.html) invece di essere copiati in ogni pagina:
// se li modifichi, li modifichi in un punto solo e tutte le pagine si aggiornano.
(async function () {
  "use strict";

  // Numero di versione manuale: aumentalo di 1 ogni volta che carichi un
  // nuovo app.js/style.css e vuoi essere SICURO che tutti lo scarichino
  // subito, ignorando qualunque cache (browser, service worker, o CDN
  // davanti al dominio) — invece di aspettare che si aggiorni da sola.
  var V = "5";

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
