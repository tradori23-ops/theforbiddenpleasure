// ============ LOADER — inietta il chrome condiviso (header, footer, modali) ============
// Ogni pagina del sito include questo file al posto del vecchio blocco unico.
// Così header/footer/modali restano scritti UNA SOLA VOLTA (in chrome-top.html,
// chrome-footer.html, chrome-modals.html) invece di essere copiati in ogni pagina:
// se li modifichi, li modifichi in un punto solo e tutte le pagine si aggiornano.
(async function () {
  "use strict";

  // Riquadro rosso con gli errori: v212, SOLO per l'admin (app.js scrive
  // "lux_is_admin" quando entri con l'account admin) o con lux_debug=1 per una
  // diagnosi su un dispositivo senza accesso. I visitatori non vedono più
  // messaggi tecnici: gli errori restano comunque nella console del browser.
  // interruttore di diagnosi dall'indirizzo: ?debug=1 lo accende su questo
  // dispositivo, ?debug=0 lo spegne (comodo da iPhone, senza strumenti)
  try {
    var dbg = new URLSearchParams(location.search).get("debug");
    if (dbg === "1") localStorage.setItem("lux_debug", "1");
    else if (dbg === "0") localStorage.removeItem("lux_debug");
  } catch (err) {}
  function luxShowErrors() {
    try { return localStorage.getItem("lux_is_admin") === "1" || localStorage.getItem("lux_debug") === "1"; }
    catch (err) { return false; }
  }
  window.addEventListener('error', function (e) {
    if (!luxShowErrors()) return;
    var box = document.getElementById('__debugErrorBox');
    if (!box) {
      box = document.createElement('div');
      box.id = '__debugErrorBox';
      box.setAttribute('role', 'alert');
      box.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;max-height:40vh;overflow:auto;background:#b00020;color:#fff;font-family:monospace;font-size:12px;padding:10px 40px 10px 12px;';
      var close = document.createElement('button');
      close.type = 'button';
      close.textContent = '×';
      close.setAttribute('aria-label', 'Chiudi');
      close.style.cssText = 'position:absolute;top:4px;right:6px;width:30px;height:30px;border:0;background:none;color:#fff;font-size:22px;line-height:1;cursor:pointer;';
      close.addEventListener('click', function () { box.parentNode && box.parentNode.removeChild(box); });
      box.appendChild(close);
      document.documentElement.appendChild(box);
    }
    if (box.querySelectorAll('.lux-err-line').length >= 5) return; // al massimo 5 righe
    var line = document.createElement('div');
    line.className = 'lux-err-line';
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
  var V = "228";

  // style.css iniettato qui (non più con un <link> scritto a mano in ogni
  // pagina) così la sua versione segue sempre la stessa V di app.js,
  // ovunque, senza doverla tenere sincronizzata a mano in più file.
  // v219: quanto è veloce la rete? "slow" = 2G o risparmio dati, "mid" = 3G.
  // Dove il browser non lo dice (iPhone), si stima dal tempo che ha
  // impiegato ad arrivare questa stessa pagina.
  var NET = (function () {
    try {
      var c = navigator.connection;
      if (c) {
        if (c.saveData) return "slow";
        // Chrome chiama "3g" anche un 2G vero (300 kbps, 800 ms): conta di più la banda stimata
        var et = c.effectiveType || "", dl = typeof c.downlink === "number" ? c.downlink : 0, rtt = typeof c.rtt === "number" ? c.rtt : 0;
        if (/(^|-)2g$/.test(et) || (dl > 0 && dl < 0.45) || rtt >= 900) return "slow";
        if (et === "3g" || (dl > 0 && dl < 2) || rtt >= 300) return "mid";
        if (et) return "fast";
      }
      var n = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
      if (n && n.transferSize > 0) {
        var d = n.responseEnd - n.requestStart;
        if (d > 2200) return "slow";
        if (d > 900) return "mid";
      }
    } catch (e) {}
    return "fast";
  })();
  window.LUX_NET = NET;
  document.documentElement.setAttribute("data-net", NET);
  // Su rete lenta i caratteri del sito aspettano app.js: il testo si legge
  // subito coi caratteri del telefono e cambia aspetto un attimo dopo,
  // invece di rubare banda proprio a ciò che rende la pagina utilizzabile.
  var lateFonts = [];
  if (NET === "slow") {
    document.querySelectorAll('link[rel="stylesheet"][href*="fonts.googleapis.com"]').forEach(function (l) {
      l.onload = null;
      l.media = "print";
      lateFonts.push(l);
    });
  }

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
  // v219: parte DOPO app.js (vedi in fondo) — prima i suoi 240 KB arrivavano
  // insieme ad app.js e su 2G lo rallentavano di 10-15 secondi. Sui telefoni
  // si scarica la versione leggera; su 2G / risparmio dati niente foto: resta
  // l'anteprima sfocata, che pesa meno di 1 KB.
  var heroBg = document.getElementById("heroBg");
  var heroStarted = false;
  function startHero() {
    if (!heroBg || heroStarted || NET === "slow") return;
    heroStarted = true;
    var small = window.matchMedia && window.matchMedia("(max-width: 700px)").matches;
    var heroImg = new Image();
    var markHero = function () { heroBg.classList.add("is-ready"); };
    heroImg.onload = function () {
      if (heroImg.decode) heroImg.decode().then(markHero, markHero);
      else markHero();
    };
    heroImg.onerror = markHero;
    heroImg.src = small ? "hero-bg-m.webp" : "hero-bg.webp";
  }
  function afterApp() {
    lateFonts.forEach(function (l) { l.media = "all"; });
    lateFonts = [];
    startHero();
  }

  // Tema chiaro/scuro applicato subito, con lo stesso criterio di
  // initTheme() in app.js — chi usa il tema chiaro non vede prima la
  // versione scura per un attimo, in attesa che arrivi app.js.
  // v226: lingua e verso di scrittura subito, prima che la pagina si scopra
  // (arabo e panjabi vanno da destra a sinistra)
  function applyEarlyLang() {
    try {
      var l = localStorage.getItem("lux_lang");
      if (!l) return;
      document.documentElement.lang = l;
      if (["ar", "pnb"].indexOf(l) !== -1) document.documentElement.classList.add("lux-rtl");
    } catch (e) {}
  }
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
    // (su 2G app.js può metterci 15-20 secondi: meglio non scoprire prima
    // sezioni ancora vuote)
    setTimeout(function () {
      document.body.classList.remove("home-loading");
      var s2 = document.getElementById("homeSkeleton");
      if (s2 && s2.parentNode) s2.parentNode.removeChild(s2);
    }, NET === "slow" ? 25000 : (NET === "mid" ? 12000 : 8000));
  }

  // Barra in basso dell'app (solo telefono, vedi style.css): si attiva qui,
  // prima che la pagina si scopra, così non compare a scatti dopo. Su Luxtify
  // (che ha già la sua barra) e su Amministra non c'è.
  function setupAppTabbar() {
    var bar = document.getElementById("appTabbar");
    if (!bar) return;
    var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    // v211: anche Amministra ha la versione app (barra in basso, intestazione compatta)
    if (document.body.classList.contains("lx-page") || page === "luxtify.html") {
      ["appTabbar", "appTuSheet", "appTuBackdrop"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      });
      return;
    }
    document.body.classList.add("has-app-tabbar");
    // v223: da computer la pagina riempie lo schermo (menu a sinistra, Taccuino
    // a destra, colonna larga) e Messaggi ha la scheda del contatto. Amministra
    // resta com'è. Su telefono e tablet non cambia niente (vedi style.css).
    if (page !== "admin.html") document.body.classList.add("lux-wide", "lux-chat3");
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
  // ripresentava — a ogni singola pagina aperta.
  // v224: compare al massimo una volta ogni 30 giorni su ogni dispositivo
  // (la data resta nel browser), e mai a chi ha già confermato l'età sul
  // sito con l'interruttore 18+ (lux_age_ok). Prima ricompariva a ogni
  // nuova visita, cioè ogni volta che si riapriva il browser o l'app.
  // v219: con la memoria del browser bloccata (alcune modalità private)
  // questa riga fermava tutto il caricamento: ora al massimo si salta il widget
  var ageShown = true;
  try {
    var ageEvery = 30 * 24 * 60 * 60 * 1000;
    var ageOk = localStorage.getItem('lux_age_ok') === '1';
    var ageLast = parseInt(localStorage.getItem('lux_age_verify_at') || '0', 10) || 0;
    var ageThisVisit = !!sessionStorage.getItem('lux_age_verify_shown');
    ageShown = ageOk || ageThisVisit || (Date.now() - ageLast >= 0 && Date.now() - ageLast < ageEvery);
    if (!ageShown) {
      sessionStorage.setItem('lux_age_verify_shown', '1');
      localStorage.setItem('lux_age_verify_at', String(Date.now()));
    }
  } catch (e) {}
  if(!ageShown){
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
  applyEarlyLang();
  applyEarlyTheme();
  setLogos();
  // v223: «Condividi» mostra le app (WhatsApp, Telegram, Instagram, Facebook…)
  document.body.classList.add("lux-share-a");
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
  // v209: le traduzioni non italiane sono file a parte. Si carica solo quella
  // scelta, PRIMA di app.js (async=false mantiene l'ordine); se non arriva,
  // app.js parte lo stesso in italiano.
  var luxLang = null;
  try { luxLang = localStorage.getItem("lux_lang"); } catch (e) {}
  if (luxLang && /^(en|es|fr|de|pt|ru|zh|ja|hi|bn|ar|pnb)$/.test(luxLang)) {
    var ls = document.createElement("script");
    ls.src = "lang-" + luxLang + ".js?v=" + V;
    ls.async = false;
    document.body.appendChild(ls);
  }
  var s = document.createElement("script");
  s.src = "app.js?v=" + V;
  s.async = false;
  s.onload = s.onerror = function () { setTimeout(afterApp, 0); };
  // rete veloce: la foto può partire anche prima, non toglie quasi niente ad app.js
  if (NET === "fast") setTimeout(startHero, 1200);
  document.body.appendChild(s);
})();
