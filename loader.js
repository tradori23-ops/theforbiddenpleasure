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
  var V = "205";

  // style.css iniettato qui (non più con un <link> scritto a mano in ogni
  // pagina) così la sua versione segue sempre la stessa V di app.js,
  // ovunque, senza doverla tenere sincronizzata a mano in più file.
  var cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.href = "style.css?v=" + V;
  // Avvio pulito: ogni pagina parte coperta dal suo colore di fondo (blocco
  // "luxBoot" nel <head>) e si scopre solo quando lo stile è arrivato E
  // l'intestazione è già al suo posto — niente lampo di pagina bianca senza
  // stile, niente intestazione che spunta dopo spingendo giù tutto il resto.
  var cssReady = new Promise(function (resolve) {
    cssLink.onload = resolve;
    cssLink.onerror = resolve; // anche se lo stile non arriva, la pagina non resta coperta
  });
  document.head.appendChild(cssLink);

  // Sfondo della home: si scarica e si decodifica per intero PRIMA di
  // mostrarlo (vedi .hero-bg::before in style.css), poi appare in
  // dissolvenza — mai più l'immagine che si disegna a quadretti. Parte
  // dopo lo stile, così non gli ruba banda: nel frattempo si vede
  // l'anteprima sfocata già contenuta nel CSS.
  var heroBg = document.getElementById("heroBg");
  if (heroBg) {
    cssReady.then(function () {
      var heroImg = new Image();
      var markHero = function () { heroBg.classList.add("is-ready"); };
      heroImg.onload = function () {
        if (heroImg.decode) heroImg.decode().then(markHero, markHero);
        else markHero();
      };
      heroImg.onerror = markHero;
      heroImg.src = "hero-bg.webp";
    });
  }

  // Tema chiaro/scuro applicato subito, con lo stesso criterio di
  // initTheme() in app.js — chi usa il tema chiaro non vede prima la
  // versione scura per un attimo, in attesa che arrivi app.js.
  function applyEarlyTheme() {
    try {
      var theme = localStorage.getItem("lux_theme");
      if (!theme && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) theme = "light";
      if (theme === "light") document.body.classList.add("theme-light");
    } catch (e) {}
  }
  // Il sigillo nell'intestazione compare insieme a lei, non dopo (prima lo
  // impostava solo app.js, che arriva per ultimo).
  function setLogos() {
    document.querySelectorAll('.seal-img[data-size="sm"]').forEach(function (img) { if (!img.getAttribute("src")) img.src = "logo-sm.webp"; });
    document.querySelectorAll('.seal-img[data-size="lg"]').forEach(function (img) { if (!img.getAttribute("src")) img.src = "logo-lg.webp"; });
  }
  function reveal() { document.documentElement.classList.add("lux-ready"); }

  // Home: le sezioni sotto la copertina d'apertura restano coperte (con un
  // segnaposto discreto) finché catalogo, novità ed eventi non sono arrivati;
  // poi app.js le scopre tutte insieme, già al loro posto. Prima comparivano
  // in ordine sparso e spingevano giù quello che si stava guardando.
  function setupHomeLoading() {
    if (!document.getElementById("heroBg")) return;
    var hero = document.getElementById("testo") || document.querySelector(".hero");
    if (!hero || !hero.parentNode) return;
    document.body.classList.add("home-loading");
    if (!document.getElementById("homeSkeleton")) {
      var sk = document.createElement("div");
      sk.id = "homeSkeleton";
      sk.setAttribute("aria-hidden", "true");
      sk.innerHTML = '<div class="hs-title"></div><div class="hs-card"></div><div class="hs-row"><div></div><div></div></div>';
      hero.parentNode.insertBefore(sk, hero.nextSibling);
    }
    // rete di sicurezza: se app.js non arriva, la pagina si mostra comunque
    setTimeout(function () {
      document.body.classList.remove("home-loading");
      var s2 = document.getElementById("homeSkeleton");
      if (s2 && s2.parentNode) s2.parentNode.removeChild(s2);
    }, 8000);
  }

  // Barra in basso dell'app (solo telefono, vedi style.css): si attiva qui,
  // prima che la pagina si scopra, così non compare a scatti dopo. Su Luxtify
  // (che ha già la sua barra) e su Amministra non c'è.
  function setupAppTabbar() {
    var bar = document.getElementById("appTabbar");
    if (!bar) return;
    var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (document.body.classList.contains("lx-page") || page === "luxtify.html" || page === "admin.html") {
      ["appTabbar", "appTuSheet", "appTuBackdrop"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      });
      return;
    }
    document.body.classList.add("has-app-tabbar");
    var map = { "index.html": "home", "schedario.html": "schedario", "dossier.html": "schedario",
                "community.html": "community", "contatti.html": "messaggi", "chat.html": "messaggi" };
    var key = map[page] || "tu";
    var cur = bar.querySelector('[data-tab="' + key + '"]');
    if (!cur) return;
    if (cur.tagName === "A") cur.setAttribute("aria-current", "page");
    else cur.classList.add("is-section"); // le pagine raggiungibili da "Tu"
  }

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
  // v204: il numero di versione non è più un'etichetta fissa in basso a
  // sinistra: si legge nelle impostazioni (foglio "Tu" su telefono, in fondo
  // al menu da computer). app.js lo prende da qui.
  window.LUX_VERSION = V;

  // Verifica dell'età (soluzione temporanea) — widget esterno Common Ninja,
  // iniettato qui così parte su ogni pagina senza doverlo copiare a mano
  // in ciascun file HTML. Le impostazioni del widget (una volta sola per
  // sessione, aspetto, testo) si gestiscono dalla dashboard Common Ninja,
  // non da qui.
  //
  // Il sito è multi-pagina: loader.js gira di nuovo a ogni cambio pagina,
  // quindi senza questo controllo il widget si reiniettava — e si
  // ripresentava — a ogni singola pagina aperta. sessionStorage sopravvive
  // ai cambi pagina ma si azzera da solo alla chiusura della scheda/del
  // browser, quindi lo mostriamo una sola volta per sessione, non ad ogni
  // click su un titolo o un menu.
  if(!sessionStorage.getItem('lux_age_verify_shown')){
    sessionStorage.setItem('lux_age_verify_shown', '1');
    var ninjaScript = document.createElement('script');
    ninjaScript.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
    ninjaScript.defer = true;
    document.head.appendChild(ninjaScript);
    var ninjaDiv = document.createElement('div');
    ninjaDiv.className = 'commonninja_component pid-9e95d41c-4e88-4295-9e10-33ca7dbb7d0b';
    document.body.appendChild(ninjaDiv);
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
  applyEarlyTheme();
  setLogos();
  setupAppTabbar();
  setupHomeLoading();
  cssReady.then(function () {
    // Il lettore applica subito lo stile a tutta la pagina (ancora coperta):
    // così i caratteri del sito iniziano a scaricarsi, e le transizioni
    // dei pulsanti non "animano" il passaggio da pagina grezza a pagina
    // finita davanti agli occhi di chi guarda.
    void document.body.offsetWidth;
    // Si aspettano anche i caratteri del sito (al massimo 0,8 s), così il
    // testo non cambia forma e non si sposta subito dopo essere apparso.
    var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    var maxWait = new Promise(function (resolve) { setTimeout(resolve, 800); });
    Promise.race([fontsReady, maxWait]).then(function () {
      void document.body.offsetWidth;
      reveal();
    });
  });
  // app.js si aspetta che TUTTO il DOM (header, sezione, footer, modali)
  // sia già presente quando parte: lo carichiamo solo ora, a iniezione completata.
  var s = document.createElement("script");
  s.src = "app.js?v=" + V;
  document.body.appendChild(s);
})();
