(function(){
"use strict";
var BUILD = "20260820-lux-v2";
var LOGO_SM = "logo-sm.webp";
var LOGO_LG = "logo-lg.webp";

/* ============ I18N ============ */
var STR = {
  it:{
    "gate.sub":"Contenuto per adulti",
    "gate.body":"Questo archivio contiene opere destinate a un pubblico maturo. Per proseguire dichiari di avere almeno 18 anni e di accettare consapevolmente contenuti espliciti.",
    "gate.enter":"Ho almeno 18 anni — Sblocca",
    "gate.leave":"Annulla",
    "gate.legal":"Continuando dichiari inoltre di rispettare le leggi vigenti nella tua giurisdizione riguardo l'accesso a contenuti per adulti.",
    "nav.library":"Schedario","nav.characters":"Dossier","nav.founder":"Fondatore","nav.admin":"Amministra","nav.login":"Accedi","nav.logout":"Esci",
    "hero.title1":"L'ARCHIVIO DEL","hero.title2":"PIACERE PROIBITO",
    "hero.tagline":"Fumetti d'autore — edizione riservata",
    "hero.lede":"Quattro sigilli, quattro voci: Lucifer, Lilith, Lucifera e Lucio custodiscono le collane di questa casa. Lo schedario è aperto a tutti — i contenuti 18+ restano dietro un interruttore separato, da sbloccare quando vuoi. Ogni tavola nasce in inglese ed entra nello schedario così com'è — solo la tua lingua d'accesso è cosa nostra.",
    "hero.cta1":"Sfoglia lo schedario","hero.cta2":"Incontra i dossier",
    "characters.eyebrow":"Dossier","characters.title":"I Quattro Sigilli","characters.desc":"Ogni personaggio guida una collana propria, con tono e mitologia distinti.",
    "library.eyebrow":"Schedario","library.title":"Catalogo delle Opere",
    "founder.eyebrow":"Casa Editrice","founder.title":"Il Fondatore","founder.role":"Fondatore & Direttore Editoriale",
    "founder.body":"Nox Morningstar ha fondato LUX COMICS & MEDUSA COMICS come rifugio per storie che altrove non troverebbero casa: opere disegnate per un pubblico adulto e consapevole, dove il proibito è materia narrativa, non provocazione fine a sé stessa. Ogni collana — Lucifer, Lilith, Lucifera, Lucio — porta la sua firma sotto forma di sigillo, garanzia di un'unica visione editoriale dietro voci diverse.",
    "admin.eyebrow":"Area Riservata","admin.title":"Amministrazione Schedario",
    "admin.noticeLabel":"Stato —",
    "admin.tab.catalog":"Catalogo","admin.tab.stats":"Statistiche","admin.tab.social":"Personaggi & Social",
    "admin.tab.comments":"Commenti","admin.tab.requests":"Richieste","admin.tab.announcements":"Novità","admin.tab.users":"Utenti","admin.tab.maintenance":"Manutenzione",
    "users.title":"Utenti registrati","users.hint":"La spunta blu si può assegnare solo dopo 90 giorni dall'iscrizione. Decidi tu, titolo per titolo.",
    "users.empty":"Nessun utente registrato ancora.","users.noName":"Utente","users.joined":"Iscritto il","users.daysHere":"{n} giorni sul sito",
    "users.eligible":"Idoneo","users.waitingDays":"ancora {n} giorni","users.grant":"Assegna spunta","users.revoke":"Rimuovi spunta","users.earlyGrantConfirm":"{name} non ha ancora raggiunto i 90 giorni (ne mancano {n}). Vuoi assegnare comunque la spunta come eccezione?",
    "notif.title":"Notifiche","notif.markAll":"Segna tutte come lette","notif.empty":"Nessuna notifica.","notif.someone":"Qualcuno","notif.justNow":"Adesso","notif.minsAgo":"{n} min fa","notif.hoursAgo":"{n} h fa","notif.daysAgo":"{n} g fa",
    "nav.community":"Community","community.eyebrow":"Fuori dallo Schedario","community.title":"Community","community.rule":"Niente materiale pornografico: al massimo contenuti sensuali. Chi viola la regola viene bannato ed eliminato dal sito.","community.tabChannels":"Canali","community.tabDms":"Messaggi privati","community.tabCollab":"Collaboratori","community.collabHint":"Le opere pubblicate insieme ai collaboratori invitati, tutte in un unico posto.","diary.tab":"Diario","diary.hint":"Condividi una foto, uno stato d'animo o una nota della giornata — tutti li vedranno qui.","diary.kindPhoto":"📷 Foto","diary.kindMood":"🙂 Stato d'animo","diary.kindNote":"📝 Nota del giorno","diary.captionPh":"Didascalia (opzionale)…","diary.moodPh":"Vuoi aggiungere due parole? (opzionale)…","diary.notePh":"Com'è andata oggi?","diary.publish":"Pubblica","diary.filterAll":"Tutti","diary.filterBy":"Di {name} ×","diary.needPhoto":"Scegli prima una foto.","diary.needMood":"Scegli prima uno stato d'animo.","diary.publishError":"Pubblicazione non riuscita. Riprova.","diary.empty":"Ancora nessun post — sii il primo.","pubProfile.notFound":"Profilo non trovato.","pubProfile.titlesHeading":"Titoli pubblicati","pubProfile.diaryHeading":"Diario","pubProfile.memberSince":"Membro da {date}","userDir.title":"Utenti","userDir.online":"Online","userDir.offline":"Offline","userDir.empty":"Nessun utente ancora.","userDir.verifiedFriends":"Amici verificati","userDir.others":"Altri utenti","userDir.loadError":"Non riesco a caricare gli utenti al momento. Riprova più tardi.","chat.notFound":"Apri questa pagina da un profilo o dal pannello Utenti.","chat.messagePlaceholder":"Scrivi un messaggio…","chat.file":"File","chat.photo":"Foto","chat.sendError":"Messaggio non inviato. Riprova.","chat.delete":"Elimina","chat.deleteConfirm":"Eliminare questa conversazione? Non si può annullare.","chat.deleteError":"Non è stato possibile eliminare la conversazione. Riprova più tardi.","chat.translate":"Traduci","chat.translateUndo":"Mostra originale","community.archive":"Archivia","community.unarchive":"Ripristina","community.newChannelPh":"Nome nuovo canale (es. Cinema)","community.createChannel":"Crea canale","community.back":"← Torna","community.messagePh":"Scrivi un messaggio…","community.send":"Invia","community.dmHint":"Per scrivere in privato a qualcuno, apri un suo messaggio in un canale e usa \"Messaggio privato\".","community.noChannels":"Nessun canale ancora. Creane uno tu.","community.noMessages":"Nessun messaggio ancora.","community.noDms":"Nessuna conversazione privata ancora.","community.privateMessage":"Messaggio privato","community.report":"Segnala","community.reportPrompt":"Perché segnali questo messaggio? (opzionale)","community.reportSent":"Segnalazione inviata, grazie.","community.you":"Tu","community.tabFriends":"Amici","community.addFriend":"Aggiungi amico","community.requestSent":"Richiesta inviata","community.acceptFriend":"Accetta amicizia","community.declineFriend":"Rifiuta","community.pendingReceived":"Richieste ricevute","community.pendingSent":"Richieste inviate","community.friendsList":"I tuoi amici","community.searchFriends":"Cerca una persona","community.searchFriendsPh":"Nome utente…","community.noResults":"Nessun risultato.",
    "collabSession.title":"Sessioni di creazione attive","collabSession.hint":"Un amico invitato a creare può pubblicare titoli solo finché la sua sessione è attiva.","collabSession.active":"Sessione di creazione attiva","collabSession.hintCollab":"Puoi aggiungere titoli allo schedario finché la sessione è attiva. Se non riesci a finire in tempo, chiedi una proroga.","collabSession.requestExtension":"Non ce la faccio, chiedi una proroga","collabSession.countdown":"Scade tra {h}h {m}min","collabSession.expired":"Sessione scaduta.","collabSession.extensionPending":"Proroga richiesta, in attesa dell'admin","collabSession.invite":"Invita a creare","collabSession.inviteConfirm":"Invitare {name} a creare e pubblicare per 24 ore?","collabSession.inviteSent":"Invito inviato.","collabSession.inviteNotif":"Sei stato invitato a creare e pubblicare un titolo — hai 24 ore.","collabSession.extend48":"Proroga 48h","myTitles.heading":"I tuoi titoli pubblicati","myTitles.cancel":"Annulla modifica",
    "smallnox.title":"Il tuo assistente","smallnox.blurb":"SmallNox approva da solo commenti e iscrizioni pulite, e ti avvisa — arrabbiato — solo quando qualcosa sembra sospetto.","smallnox.communityBlurb":"SmallNox veglia su questi canali — se scrivi qualcosa fuori regola se ne accorge.","smallnox.modalTitle":"Ciao, sono SmallNox","smallnox.modalBody":"Controllo da solo i nuovi commenti e le nuove iscrizioni: se sono puliti li lascio passare subito, altrimenti li segnalo a Nox Morningstar. Nei canali della community faccio lo stesso lavoro — scrivi con rispetto e non mi vedrai mai arrabbiato.","smallnox.tipsTitle":"Un consiglio veloce","smallnox.tip1":"Scrivi @nomeutente in un commento o in un messaggio per taggare qualcuno — riceverà una notifica.","smallnox.tip2":"Nei messaggi privati trovi emoji e GIF sotto il campo di testo.","smallnox.tip3":"Nello Schedario, tocca il filtro \"Collaboratori\" per vedere i lavori di una persona specifica.","smallnox.tip4":"Nella tua Community, i messaggi privati hanno spunte di lettura e pallino verde se l'altra persona è online.","smallnox.tip5":"Hai pubblicato un titolo tu? Puoi modificarlo in qualsiasi momento dall'area Amministra, anche a sessione scaduta.","smallnox.tip6":"Tocca lo stemma in alto a sinistra da qualsiasi pagina per tornare subito alla home.","smallnoxUpdates.title":"Novità dall'Archivio","smallnoxUpdates.sub":"Cosa è cambiato di recente sul sito — te lo riassumo io.","smallnoxUpdates.close":"Ho capito",
    "community.loadError":"Caricamento non riuscito (controlla la connessione).","community.retry":"Riprova",
    "admin.tab.moderation":"Moderazione Community","mod.reportsTitle":"Segnalazioni aperte","mod.flaggedTitle":"Messaggi segnalati automaticamente","mod.bannedTitle":"Utenti bannati (email bloccate)","mod.empty":"Niente al momento.","mod.typeChannel":"Messaggio in canale","mod.typeDm":"Messaggio privato","mod.hide":"Nascondi","mod.ban":"Banna ed elimina","mod.noUser":"Utente non trovato.","mod.banConfirm":"Confermi? L'utente verrà bannato, il suo account eliminato e non potrà registrarsi di nuovo con la stessa email.","mod.banFailed":"Operazione non riuscita.",
    "users.onlineNow":"{n} utenti online ora","users.onlineTag":"Online ora",
    "announcements.eyebrow":"Dalla Redazione","announcements.title":"Novità","announcements.readMore":"Leggi","announcements.share":"Condividi","announcements.downloadPdf":"Scarica il PDF",
    "announcements.archived":"Archiviato","announcements.expiresIn":"scade tra {h}h","announcements.extend":"Estendi 24h",
    "announcements.newTitle":"Nuovo annuncio","announcements.f.title":"Titolo","announcements.f.body":"Testo","announcements.f.link":"Link (opzionale)","announcements.f.image":"Immagine (opzionale — qualsiasi proporzione)","announcements.f.pdf":"File PDF (opzionale)",
    "announcements.publish":"Pubblica annuncio","announcements.publishError":"Pubblicazione non riuscita. Riprova.",
    "announcements.existingTitle":"Annunci pubblicati","announcements.empty":"Nessun annuncio ancora.",
    "announcements.statusPublished":"Pubblicato","announcements.statusHidden":"Nascosto","announcements.hide":"Nascondi","announcements.show":"Mostra",
    "latest.eyebrow":"Appena Pubblicato","latest.title":"Ultimi Capitoli","latest.newTag":"Nuovo",
    "profile.title":"Il mio profilo","profile.sub":"Visibile agli altri quando commenti",
    "profile.displayName":"Nome visibile","profile.bio":"Bio (opzionale)","profile.favChars":"Personaggi preferiti",
    "profile.avatarHd":"Foto profilo HD (opzionale)","profile.avatarHdHint":"Mostrata a piena risoluzione a chi tocca il tuo avatar. Se non la carichi, si vede la foto normale.",
    "profile.banner":"Banner del profilo (opzionale)","profile.socials":"I tuoi social (opzionali)","profile.website":"Sito web","pubProfile.favoritesHeading":"Preferiti",
    "push.enable":"Attiva notifiche","push.enabled":"Notifiche attive","push.unsupported":"Il tuo browser non supporta le notifiche push.","push.denied":"Permesso negato — puoi attivarle di nuovo dalle impostazioni del browser.","push.error":"Non è stato possibile attivare le notifiche, riprova.","push.installFirst":"Installa per notifiche","push.installFirstLong":"Su iPhone/iPad le notifiche funzionano solo dopo aver installato il sito: tocca Condividi → Aggiungi a Home, poi apri l'app da lì e riprova.",
    "profile.birthDate":"Data di nascita","profile.gender":"Sesso","profile.genderUnset":"— Preferisco non dirlo —","profile.genderM":"Maschio","profile.genderF":"Femmina","profile.genderX":"Altro","profile.avatarInfoEmpty":"Nessuna informazione aggiuntiva condivisa",
    "profile.save":"Salva profilo","profile.saveError":"Salvataggio non riuscito. Riprova.",
    "requests.title":"Le mie richieste","requests.hint":"Un titolo che vorresti, una traduzione, un'idea — scrivimi qui, la leggo io.",
    "requests.placeholder":"Scrivi la tua richiesta…","requests.submit":"Invia richiesta","requests.submitError":"Invio non riuscito. Riprova.",
    "requests.statusNew":"In attesa","requests.statusRead":"Letta","requests.adminTitle":"Richieste ricevute",
    "requests.empty":"Nessuna richiesta ricevuta.","requests.markRead":"Segna come letta","requests.sent":"Richiesta inviata! Ti risponderò appena possibile.",
    "sync.notConfigured":"Backend Supabase non ancora collegato — il sito funziona in locale, in attesa della configurazione.",
    "sync.configuredNoToken":"Connesso a Supabase in lettura. Accedi con le credenziali admin per poter pubblicare le modifiche.",
    "sync.ready":"Connesso a Supabase — sei autenticato come amministratore, le modifiche sono pubbliche per tutti.",
    "sync.syncing":"Sincronizzazione in corso…",
    "sync.error":"Errore di sincronizzazione — le modifiche restano salvate solo qui, riprova più tardi.",
    "sync.resync":"Sincronizza ora",
    "admin.signin.email":"Email amministratore","admin.signin.password":"Password",
    "admin.signin.btn":"Accedi come admin","admin.signin.error":"Credenziali non valide o backend non raggiungibile.",
    "admin.signOut":"Esci da admin",
    "admin.f.title":"Titolo","admin.f.character":"Personaggio","admin.f.issue":"Numero / Volume","admin.f.date":"Data pubblicazione","admin.f.synopsis":"Sinossi (inglese — testo delle opere)",
    "admin.add":"Aggiungi allo schedario","admin.edit":"Modifica","admin.saveChanges":"Salva modifiche","admin.export":"Esporta JSON","admin.import":"Importa JSON",
    "footer.line":"ARCHIVIO APERTO A TUTTI · SEZIONE 18+ SU RICHIESTA · TRAD.CLAB WORKS",
    "newsletter.eyebrow":"Resta Aggiornato","newsletter.title":"Iscriviti alla Newsletter",
    "newsletter.sub":"Nuovi titoli, collaborazioni e uscite — direttamente nella tua casella, niente spam.",
    "newsletter.placeholder":"tuo@email.com","newsletter.submit":"Iscrivimi",
    "newsletter.success":"Fatto — controlla la posta per confermare.","newsletter.error":"Iscrizione non riuscita. Riprova.",
    "auth.loginTitle":"Accedi all'Archivio","auth.registerTitle":"Crea il tuo Account","auth.sub":"Account personale",
    "auth.username":"Email","auth.password":"Password","auth.loginBtn":"Accedi","auth.registerBtn":"Registrati","auth.cancel":"Annulla",
    "auth.switchToRegister":"Non hai un account?","auth.switchToRegisterBtn":"Registrati",
    "auth.switchToLogin":"Hai già un account?","auth.switchToLoginBtn":"Accedi",
    "quiz.intro":"Prima di registrarti, dimostra di conoscere l'Archivio.","quiz.lockedOut":"Troppi tentativi sbagliati. Riprova tra {min} minuti.",
    "auth.note":"Nota: l'account salva solo la tua preferenza di lingua per questo sito, in locale su questo browser.",
    "err.userExists":"Nome utente già in uso.","err.badLogin":"Credenziali non valide.","err.required":"Compila tutti i campi.",
    "admin.deleted":"rimosso","admin.confirmDelete":"Rimuovere questo titolo dallo schedario?",
    "filter.all":"Tutti",
    "maintenance.text":"Sito in manutenzione — stiamo aggiornando l'archivio, torna a breve.",
    "maintenance.toggle":"Modalità manutenzione (visibile a tutti i visitatori)","maintenance.scheduleTitle":"Cosa vedono i visitatori","maintenance.scheduleHint":"Spiega perché il sito è in pausa e per quanto — resta salvato anche a interruttore spento, così puoi prepararlo prima.","maintenance.reasonLabel":"Motivazione (cosa stai facendo)","maintenance.reasonPh":"Es. Sto caricando nuovi capitoli e sistemando il lettore pagine.","maintenance.startLabel":"Inizio previsto","maintenance.endLabel":"Fine prevista","maintenance.saveSchedule":"Salva dettagli","maintenance.scheduleSaved":"Salvato.","maintenance.fromLabel":"Dalle","maintenance.toLabel":"alle",
    "night.toggle":"Chiusura notturna automatica","night.hint":"Il sito si blocca da solo ogni notte in questa fascia oraria, per non restare aperto inutilmente, e si riapre da solo al mattino.","night.startLabel":"Chiude alle","night.endLabel":"Riapre alle","night.lockTitle":"Buonanotte","night.lockText":"L'archivio chiude di notte e riapre al mattino.","night.reopensAt":"Riapre alle {time}",
    "offline.title":"Copia offline (solo per te)","offline.hint":"Scarica tutti i titoli, le pagine e le copertine in un unico file compresso sul tuo computer — visibile solo qui, mai ai visitatori.",
    "offline.export":"Scarica tutto per uso offline","offline.preparing":"Preparazione…","offline.progress":"{done}/{total} — {label}","offline.zipping":"Compressione del file…","offline.done":"Fatto — controlla i download del browser.","offline.error":"Esportazione non riuscita.",
    "gate.title":"Sblocca i Contenuti 18+",
    "toggle.mature":"Contenuti 18+",
    "admin.f.mature":"Contenuto per adulti (18+)",
    "badge.allages":"Tutti",
    "state.allages":"Stai vedendo: contenuti per tutti i pubblici.",
    "state.mature":"Stai vedendo: contenuti per tutti i pubblici + 18+ sbloccati.",
    "admin.gate.notSignedIn":"Accedi dal pulsante \"Accedi\" in alto per amministrare lo schedario.",
    "admin.gate.notAdmin":"L'account {email} non ha permessi di amministrazione.",
    "admin.f.price":"Prezzo (EUR, opzionale)",
    "pages.label":"Pagine del fumetto (immagini 1:1, tipo carosello) — trascina per riordinare",
    "pages.uploading":"Caricamento pagina {n} di {total}…","pages.uploadError":"Caricamento pagine non riuscito. Riprova.",
    "cover.label":"Copertina (immagine di anteprima nello schedario)","cover.uploading":"Caricamento copertina…",
    "cover.change":"Cambia copertina","cover.addExisting":"Aggiungi copertina",
    "synopsis.translating":"Traduzione sinossi in corso…","synopsis.translateExisting":"Traduci sinossi",
    "synopsis.retranslate":"Ritraduci sinossi","synopsis.translateError":"Traduzione non riuscita. Riprova.",
    "rewatermark.button":"Ri-filigrana pagine","rewatermark.progress":"Filigrana pagina {n} di {total}…","rewatermark.error":"Filigrana non riuscita. Riprova.","rewatermark.done":"Filigranato",
    "catalog.permanent":"Permanente","catalog.temporary":"A tempo determinato","catalog.makeTemporary":"Rendi a tempo","catalog.makePermanent":"Rendi permanente",
    "collab.name":"Collaboratore (opzionale)","collab.url":"Link al profilo (es. Instagram)",
    "collab.verified":"Collaboratore verificato (mostra la spunta blu)",
    "verified.label":"Verificato","verified.commenter":"Email verificata","verified.founder":"Account ufficiale","verified.collaborator":"Collaboratore verificato",
    "collab.credit":"In collaborazione con","collab.categoryLabel":"Collaboratori","collab.categoryOption":"Collaboratori (fuori dai 4 personaggi)",
    "collab.viewAll":"vedi tutte le opere insieme","collab.collectionBanner":"Opere realizzate con","collab.showAll":"Mostra tutto","titleModal.publishedBy":"Pubblicato da",
    "share.button":"Condividi","share.tagline":"su LUX COMICS & MEDUSA COMICS",
    "share.copied":"Link copiato — incollalo dove vuoi condividerlo.",
    "share.manual":"Copia questo testo per condividerlo:",
    "pdf.label":"Oppure carica il fumetto come PDF (A4) invece delle pagine singole",
    "pdf.uploading":"Caricamento PDF…","pdf.download":"Scarica PDF","pdf.preparing":"Preparazione…","pdf.loginToDownload":"Accedi per scaricare il PDF",
    "maintenance.lockTitle":"Sito in manutenzione","maintenance.lockText":"Stiamo aggiornando l'archivio. Torna tra poco.",
    "charimg.title":"Immagini profilo personaggi",
    "social.title":"Link social (visibili nel footer)","social.save":"Salva link social",
    "comments.moderationTitle":"Commenti in attesa di approvazione",
    "comments.title":"Commenti","comments.submit":"Invia commento",
    "comments.loginToComment":"Accedi per lasciare un commento.",
    "comments.empty":"Nessun commento ancora.","comments.pending":"in attesa","comments.noPending":"Nessun commento in attesa.",
    "comments.submittedPending":"Inviato — in attesa di approvazione.","comments.submittedPublished":"Pubblicato.","comments.reply":"Rispondi",
    "fav.add":"♡ Salva","fav.remove":"♥ Salvato",
    "card.readMore":"Leggi tutto ↓","card.readLess":"Mostra meno ↑",
    "like.add":"👍 Mi piace","like.remove":"👍 Ti piace",
    "stats.title":"Statistiche per titolo","stats.empty":"Nessun titolo ancora pubblicato.",
    "stats.purchaseNote":"Gli \"acquisti\" non sono ancora reali — nessun processore di pagamento è collegato. \"Carrello\" conta l'interesse (quante volte è stato aggiunto), non vendite confermate.",
    "stats.views":"visualizzazioni","stats.comments":"commenti","stats.likes":"mi piace","stats.saves":"salvataggi","stats.shares":"condivisioni","stats.cartAdds":"aggiunte al carrello",
    "cart.open":"Carrello","cart.title":"Il tuo carrello","cart.pending":"Pagamento in configurazione",
    "cart.notice":"Il carrello è pronto, ma il pagamento non è ancora collegato a nessun processore. Quando l'admin ne sceglierà uno, potrai completare l'acquisto qui.",
    "cart.clear":"Svuota carrello","cart.empty":"Il carrello è vuoto.","cart.add":"Aggiungi al carrello",
    "auth.confirmEmailSent":"Controlla la tua email per confermare l'account, poi accedi."
  },
  en:{
    "gate.sub":"Adult content",
    "gate.body":"This archive contains works intended for a mature audience. By continuing you confirm you are at least 18 years old and knowingly consent to explicit content.",
    "gate.enter":"I am 18 or older — Unlock","gate.leave":"Cancel",
    "gate.legal":"By continuing you also confirm compliance with the laws of your jurisdiction regarding access to adult content.",
    "nav.library":"Index","nav.characters":"Dossiers","nav.founder":"Founder","nav.admin":"Admin","nav.login":"Sign in","nav.logout":"Sign out",
    "hero.title1":"THE ARCHIVE OF","hero.title2":"FORBIDDEN PLEASURE",
    "hero.tagline":"Author comics — restricted edition",
    "hero.lede":"Four seals, four voices: Lucifer, Lilith, Lucifera and Lucio each guard a line of this house. The index is open to everyone — 18+ titles sit behind a separate switch, unlockable whenever you like. Every page is drawn in English and enters the index as-is — only your access language is yours to choose.",
    "hero.cta1":"Browse the index","hero.cta2":"Meet the dossiers",
    "characters.eyebrow":"Dossiers","characters.title":"The Four Seals","characters.desc":"Each character leads their own line, with a distinct tone and mythology.",
    "library.eyebrow":"Index","library.title":"Catalog of Works",
    "founder.eyebrow":"Publishing House","founder.title":"The Founder","founder.role":"Founder & Editorial Director",
    "founder.body":"Nox Morningstar founded LUX COMICS & MEDUSA COMICS as a home for stories that would find no shelf elsewhere: works drawn for a mature, consenting audience, where the forbidden is narrative material, not provocation for its own sake. Each line — Lucifer, Lilith, Lucifera, Lucio — carries the founder's signature in the form of a seal, a guarantee of one editorial vision behind different voices.",
    "admin.eyebrow":"Private Area","admin.title":"Index Administration",
    "admin.noticeLabel":"Status —",
    "admin.tab.catalog":"Catalog","admin.tab.stats":"Stats","admin.tab.social":"Characters & Social",
    "admin.tab.comments":"Comments","admin.tab.requests":"Requests","admin.tab.announcements":"News","admin.tab.users":"Users","admin.tab.maintenance":"Maintenance",
    "users.title":"Registered users","users.hint":"The blue checkmark can only be granted 90 days after sign-up. You decide, one at a time.",
    "users.empty":"No registered users yet.","users.noName":"User","users.joined":"Joined on","users.daysHere":"{n} days on the site",
    "users.eligible":"Eligible","users.waitingDays":"{n} days to go","users.grant":"Grant checkmark","users.revoke":"Remove checkmark","users.earlyGrantConfirm":"{name} hasn't reached 90 days yet ({n} to go). Grant the checkmark anyway as an exception?",
    "notif.title":"Notifications","notif.markAll":"Mark all as read","notif.empty":"No notifications.","notif.someone":"Someone","notif.justNow":"Just now","notif.minsAgo":"{n} min ago","notif.hoursAgo":"{n} h ago","notif.daysAgo":"{n} d ago",
    "nav.community":"Community","community.eyebrow":"Beyond the Archive","community.title":"Community","community.rule":"No pornographic material: sensual at most. Anyone who breaks the rule is banned and removed from the site.","community.tabChannels":"Channels","community.tabDms":"Private messages","community.tabCollab":"Collaborators","community.collabHint":"Works published together with invited collaborators, all in one place.","diary.tab":"Diary","diary.hint":"Share a photo, a mood, or a note about your day — everyone will see it here.","diary.kindPhoto":"📷 Photo","diary.kindMood":"🙂 Mood","diary.kindNote":"📝 Daily note","diary.captionPh":"Caption (optional)…","diary.moodPh":"Want to add a few words? (optional)…","diary.notePh":"How did today go?","diary.publish":"Post","diary.filterAll":"All","diary.filterBy":"By {name} ×","diary.needPhoto":"Choose a photo first.","diary.needMood":"Choose a mood first.","diary.publishError":"Post failed. Try again.","diary.empty":"No posts yet — be the first.","pubProfile.notFound":"Profile not found.","pubProfile.titlesHeading":"Published titles","pubProfile.diaryHeading":"Diary","pubProfile.memberSince":"Member since {date}","userDir.title":"Users","userDir.online":"Online","userDir.offline":"Offline","userDir.empty":"No users yet.","userDir.verifiedFriends":"Verified friends","userDir.others":"Other users","userDir.loadError":"Can't load users right now. Try again later.","chat.notFound":"Open this page from a profile or the Users panel.","chat.messagePlaceholder":"Write a message…","chat.file":"File","chat.photo":"Photo","chat.sendError":"Message not sent. Try again.","chat.delete":"Delete","chat.deleteConfirm":"Delete this conversation? This can't be undone.","chat.deleteError":"Couldn't delete the conversation. Try again later.","chat.translate":"Translate","chat.translateUndo":"Show original","community.archive":"Archive","community.unarchive":"Unarchive","community.newChannelPh":"New channel name (e.g. Movies)","community.createChannel":"Create channel","community.back":"← Back","community.messagePh":"Write a message…","community.send":"Send","community.dmHint":"To message someone privately, open one of their messages in a channel and use \"Private message\".","community.noChannels":"No channels yet. Create one.","community.noMessages":"No messages yet.","community.noDms":"No private conversations yet.","community.privateMessage":"Private message","community.report":"Report","community.reportPrompt":"Why are you reporting this message? (optional)","community.reportSent":"Report sent, thank you.","community.you":"You","community.tabFriends":"Friends","community.addFriend":"Add friend","community.requestSent":"Request sent","community.acceptFriend":"Accept friend request","community.declineFriend":"Decline","community.pendingReceived":"Received requests","community.pendingSent":"Sent requests","community.friendsList":"Your friends","community.searchFriends":"Search for someone","community.searchFriendsPh":"Username…","community.noResults":"No results.",
    "collabSession.title":"Active creation sessions","collabSession.hint":"A friend invited to create can publish titles only while their session is active.","collabSession.active":"Active creation session","collabSession.hintCollab":"You can add titles to the catalog while the session is active. If you can't finish in time, request an extension.","collabSession.requestExtension":"I can't make it, request an extension","collabSession.countdown":"Expires in {h}h {m}min","collabSession.expired":"Session expired.","collabSession.extensionPending":"Extension requested, waiting on the admin","collabSession.invite":"Invite to create","collabSession.inviteConfirm":"Invite {name} to create and publish for 24 hours?","collabSession.inviteSent":"Invitation sent.","collabSession.inviteNotif":"You've been invited to create and publish a title — you have 24 hours.","collabSession.extend48":"Extend 48h","myTitles.heading":"Your published titles","myTitles.cancel":"Cancel edit",
    "smallnox.title":"Your assistant","smallnox.blurb":"SmallNox approves clean comments and signups on his own, and warns you — angrily — only when something looks suspicious.","smallnox.communityBlurb":"SmallNox watches over these channels — if you write something out of line, he'll notice.","smallnox.modalTitle":"Hi, I'm SmallNox","smallnox.modalBody":"I check new comments and new signups on my own: if they're clean I let them through right away, otherwise I flag them for Nox Morningstar. I do the same job in the community channels — write with respect and you'll never see me angry.","smallnox.tipsTitle":"A quick tip","smallnox.tip1":"Type @username in a comment or message to tag someone — they get notified.","smallnox.tip2":"In private messages you'll find emoji and GIFs right under the text field.","smallnox.tip3":"In the Index, tap the \"Collaborators\" filter to see one person's work.","smallnox.tip4":"In your Community private messages, you get read receipts and a green dot when the other person is online.","smallnox.tip5":"Published a title yourself? You can edit it anytime from Admin, even after your session expires.","smallnox.tip6":"Tap the crest in the top-left corner from any page to jump back home.","smallnoxUpdates.title":"News from the Archive","smallnoxUpdates.sub":"What's changed on the site lately — let me sum it up.","smallnoxUpdates.close":"Got it",
    "community.loadError":"Loading failed (check your connection).","community.retry":"Retry",
    "admin.tab.moderation":"Community Moderation","mod.reportsTitle":"Open reports","mod.flaggedTitle":"Auto-flagged messages","mod.bannedTitle":"Banned users (blocked emails)","mod.empty":"Nothing right now.","mod.typeChannel":"Channel message","mod.typeDm":"Private message","mod.hide":"Hide","mod.ban":"Ban and delete","mod.noUser":"User not found.","mod.banConfirm":"Confirm? The user will be banned, their account deleted, and they won't be able to register again with the same email.","mod.banFailed":"Operation failed.",
    "users.onlineNow":"{n} users online now","users.onlineTag":"Online now",
    "announcements.eyebrow":"From the Editors","announcements.title":"News","announcements.readMore":"Read","announcements.share":"Share","announcements.downloadPdf":"Download PDF",
    "announcements.archived":"Archived","announcements.expiresIn":"expires in {h}h","announcements.extend":"Extend 24h",
    "announcements.newTitle":"New announcement","announcements.f.title":"Title","announcements.f.body":"Text","announcements.f.link":"Link (optional)","announcements.f.image":"Image (optional — any aspect ratio)","announcements.f.pdf":"PDF file (optional)",
    "announcements.publish":"Publish announcement","announcements.publishError":"Publishing failed. Try again.",
    "announcements.existingTitle":"Published announcements","announcements.empty":"No announcements yet.",
    "announcements.statusPublished":"Published","announcements.statusHidden":"Hidden","announcements.hide":"Hide","announcements.show":"Show",
    "latest.eyebrow":"Just Released","latest.title":"Latest Chapters","latest.newTag":"New",
    "profile.title":"My profile","profile.sub":"Visible to others when you comment",
    "profile.displayName":"Display name","profile.bio":"Bio (optional)","profile.favChars":"Favorite characters",
    "profile.avatarHd":"HD profile photo (optional)","profile.avatarHdHint":"Shown at full resolution to whoever taps your avatar. If you don't upload one, your regular photo is shown.",
    "profile.banner":"Profile banner (optional)","profile.socials":"Your socials (optional)","profile.website":"Website","pubProfile.favoritesHeading":"Favorites",
    "push.enable":"Enable notifications","push.enabled":"Notifications on","push.unsupported":"Your browser doesn't support push notifications.","push.denied":"Permission denied — you can re-enable it from your browser settings.","push.error":"Couldn't enable notifications, try again.","push.installFirst":"Install for notifications","push.installFirstLong":"On iPhone/iPad, notifications only work after installing the site: tap Share → Add to Home Screen, then open the app from there and try again.",
    "profile.birthDate":"Birth date","profile.gender":"Gender","profile.genderUnset":"— Prefer not to say —","profile.genderM":"Male","profile.genderF":"Female","profile.genderX":"Other","profile.avatarInfoEmpty":"No additional information shared",
    "profile.save":"Save profile","profile.saveError":"Save failed. Try again.",
    "requests.title":"My requests","requests.hint":"A title you'd like, a translation, an idea — write it here, I read every one.",
    "requests.placeholder":"Write your request…","requests.submit":"Send request","requests.submitError":"Send failed. Try again.",
    "requests.statusNew":"Pending","requests.statusRead":"Read","requests.adminTitle":"Requests received",
    "requests.empty":"No requests received yet.","requests.markRead":"Mark as read","requests.sent":"Request sent! I'll get back to you soon.",
    "sync.notConfigured":"Supabase backend not yet connected — the site runs locally while it's being set up.",
    "sync.configuredNoToken":"Connected to Supabase for reading. Sign in with the admin credentials to publish changes.",
    "sync.ready":"Connected to Supabase — you're authenticated as admin, changes are public for everyone.",
    "sync.syncing":"Syncing…",
    "sync.error":"Sync error — changes are saved only here for now, try again later.",
    "sync.resync":"Sync now",
    "admin.signin.email":"Admin email","admin.signin.password":"Password",
    "admin.signin.btn":"Sign in as admin","admin.signin.error":"Invalid credentials or backend unreachable.",
    "admin.signOut":"Sign out of admin",
    "admin.f.title":"Title","admin.f.character":"Character","admin.f.issue":"Issue / Volume","admin.f.date":"Publish date","admin.f.synopsis":"Synopsis (English — text of the works)",
    "admin.add":"Add to index","admin.edit":"Edit","admin.saveChanges":"Save changes","admin.export":"Export JSON","admin.import":"Import JSON",
    "footer.line":"OPEN ARCHIVE · 18+ SECTION ON REQUEST · TRAD.CLAB WORKS",
    "newsletter.eyebrow":"Stay Updated","newsletter.title":"Subscribe to the Newsletter",
    "newsletter.sub":"New titles, collaborations, and releases — straight to your inbox, no spam.",
    "newsletter.placeholder":"you@email.com","newsletter.submit":"Subscribe",
    "newsletter.success":"Done — check your inbox to confirm.","newsletter.error":"Subscription failed. Try again.",
    "auth.loginTitle":"Sign in to the Archive","auth.registerTitle":"Create your Account","auth.sub":"Personal account",
    "auth.username":"Email","auth.password":"Password","auth.loginBtn":"Sign in","auth.registerBtn":"Register","auth.cancel":"Cancel",
    "auth.switchToRegister":"No account yet?","auth.switchToRegisterBtn":"Register",
    "auth.switchToLogin":"Already have an account?","auth.switchToLoginBtn":"Sign in",
    "quiz.intro":"Before you register, prove you know the Archive.","quiz.lockedOut":"Too many wrong answers. Try again in {min} minutes.",
    "auth.note":"Note: the account only stores your language preference for this site, locally on this browser.",
    "err.userExists":"Username already taken.","err.badLogin":"Invalid credentials.","err.required":"Fill in every field.",
    "admin.deleted":"removed","admin.confirmDelete":"Remove this title from the index?",
    "filter.all":"All",
    "maintenance.text":"Site under maintenance — we're updating the archive, check back soon.",
    "maintenance.toggle":"Maintenance mode (visible to every visitor)","maintenance.scheduleTitle":"What visitors see","maintenance.scheduleHint":"Explain why the site is paused and for how long — saved even while the switch is off, so you can prepare it in advance.","maintenance.reasonLabel":"Reason (what you're working on)","maintenance.reasonPh":"E.g. Uploading new chapters and fixing the page reader.","maintenance.startLabel":"Expected start","maintenance.endLabel":"Expected end","maintenance.saveSchedule":"Save details","maintenance.scheduleSaved":"Saved.","maintenance.fromLabel":"From","maintenance.toLabel":"to",
    "night.toggle":"Automatic night closure","night.hint":"The site locks itself every night during this time window, so it doesn't stay open needlessly, and reopens on its own in the morning.","night.startLabel":"Closes at","night.endLabel":"Reopens at","night.lockTitle":"Good night","night.lockText":"The archive closes at night and reopens in the morning.","night.reopensAt":"Reopens at {time}",
    "offline.title":"Offline copy (just for you)","offline.hint":"Download every title, page and cover into a single compressed file on your computer — visible only here, never to visitors.",
    "offline.export":"Download everything for offline use","offline.preparing":"Preparing…","offline.progress":"{done}/{total} — {label}","offline.zipping":"Compressing the file…","offline.done":"Done — check your browser's downloads.","offline.error":"Export failed.",
    "gate.title":"Unlock 18+ Content",
    "toggle.mature":"18+ Content",
    "admin.f.mature":"Adult content (18+)",
    "badge.allages":"All Ages",
    "state.allages":"You're viewing: all-ages content.",
    "state.mature":"You're viewing: all-ages content + 18+ unlocked.",
    "admin.gate.notSignedIn":"Sign in from the \"Sign in\" button above to administer the index.",
    "admin.gate.notAdmin":"The account {email} doesn't have admin permissions.",
    "admin.f.price":"Price (EUR, optional)",
    "pages.label":"Comic pages (1:1 images, carousel-style) — drag to reorder",
    "pages.uploading":"Uploading page {n} of {total}…","pages.uploadError":"Page upload failed. Try again.",
    "cover.label":"Cover (preview image in the catalog)","cover.uploading":"Uploading cover…",
    "cover.change":"Change cover","cover.addExisting":"Add cover",
    "synopsis.translating":"Translating synopsis…","synopsis.translateExisting":"Translate synopsis",
    "synopsis.retranslate":"Re-translate synopsis","synopsis.translateError":"Translation failed. Try again.",
    "rewatermark.button":"Re-watermark pages","rewatermark.progress":"Watermarking page {n} of {total}…","rewatermark.error":"Watermarking failed. Try again.","rewatermark.done":"Watermarked",
    "catalog.permanent":"Permanent","catalog.temporary":"Time-limited","catalog.makeTemporary":"Make time-limited","catalog.makePermanent":"Make permanent",
    "collab.name":"Collaborator (optional)","collab.url":"Profile link (e.g. Instagram)",
    "collab.verified":"Verified collaborator (shows the blue checkmark)",
    "verified.label":"Verified","verified.commenter":"Verified email","verified.founder":"Official account","verified.collaborator":"Verified collaborator",
    "collab.credit":"In collaboration with","collab.categoryLabel":"Collaborators","collab.categoryOption":"Collaborators (outside the 4 characters)",
    "collab.viewAll":"see all titles together","collab.collectionBanner":"Titles made with","collab.showAll":"Show all","titleModal.publishedBy":"Published by",
    "share.button":"Share","share.tagline":"on LUX COMICS & MEDUSA COMICS",
    "share.copied":"Link copied — paste it wherever you'd like to share it.",
    "share.manual":"Copy this text to share it:",
    "pdf.label":"Or upload the comic as a PDF (A4) instead of individual pages",
    "pdf.uploading":"Uploading PDF…","pdf.download":"Download PDF","pdf.preparing":"Preparing…","pdf.loginToDownload":"Sign in to download the PDF",
    "maintenance.lockTitle":"Site under maintenance","maintenance.lockText":"We're updating the archive. Check back shortly.",
    "charimg.title":"Character profile images",
    "social.title":"Social links (shown in the footer)","social.save":"Save social links",
    "comments.moderationTitle":"Comments pending approval",
    "comments.title":"Comments","comments.submit":"Submit comment",
    "comments.loginToComment":"Sign in to leave a comment.",
    "comments.empty":"No comments yet.","comments.pending":"pending","comments.noPending":"No pending comments.",
    "comments.submittedPending":"Submitted — pending approval.","comments.submittedPublished":"Published.","comments.reply":"Reply",
    "fav.add":"♡ Save","fav.remove":"♥ Saved",
    "card.readMore":"Read more ↓","card.readLess":"Show less ↑",
    "like.add":"👍 Like","like.remove":"👍 Liked",
    "stats.title":"Stats per title","stats.empty":"No titles published yet.",
    "stats.purchaseNote":"\"Purchases\" aren't real yet — no payment processor is connected. \"Cart\" counts interest (how many times it was added), not confirmed sales.",
    "stats.views":"views","stats.comments":"comments","stats.likes":"likes","stats.saves":"saves","stats.shares":"shares","stats.cartAdds":"cart adds",
    "cart.open":"Cart","cart.title":"Your cart","cart.pending":"Payment being set up",
    "cart.notice":"The cart is ready, but no payment processor is connected yet. Once the admin picks one, you'll be able to complete checkout here.",
    "cart.clear":"Clear cart","cart.empty":"Your cart is empty.","cart.add":"Add to cart",
    "auth.confirmEmailSent":"Check your email to confirm your account, then sign in."
  },
  es:{
    "gate.sub":"Contenido para adultos",
    "gate.body":"Este archivo contiene obras destinadas a un público adulto. Al continuar confirmas tener al menos 18 años y aceptar conscientemente contenido explícito.",
    "gate.enter":"Tengo 18 años o más — Desbloquear","gate.leave":"Cancelar",
    "gate.legal":"Al continuar también confirmas cumplir con las leyes de tu jurisdicción respecto al acceso a contenido para adultos.",
    "nav.library":"Índice","nav.characters":"Expedientes","nav.founder":"Fundador","nav.admin":"Admin","nav.login":"Acceder","nav.logout":"Salir",
    "hero.title1":"EL ARCHIVO DEL","hero.title2":"PLACER PROHIBIDO",
    "hero.tagline":"Cómics de autor — edición restringida",
    "hero.lede":"Cuatro sellos, cuatro voces: Lucifer, Lilith, Lucifera y Lucio custodian las colecciones de esta casa. El índice está abierto a todos — los títulos 18+ quedan tras un interruptor aparte, que puedes desbloquear cuando quieras. Cada página se dibuja en inglés y entra al índice tal cual — solo tu idioma de acceso es asunto tuyo.",
    "hero.cta1":"Explorar el índice","hero.cta2":"Conocer los expedientes",
    "characters.eyebrow":"Expedientes","characters.title":"Los Cuatro Sellos","characters.desc":"Cada personaje lidera su propia colección, con tono y mitología distintos.",
    "library.eyebrow":"Índice","library.title":"Catálogo de Obras",
    "founder.eyebrow":"Casa Editorial","founder.title":"El Fundador","founder.role":"Fundador y Director Editorial",
    "founder.body":"Nox Morningstar fundó LUX COMICS & MEDUSA COMICS como refugio para historias que no tendrían lugar en otro sitio: obras pensadas para un público adulto y consciente, donde lo prohibido es materia narrativa, no provocación gratuita. Cada colección — Lucifer, Lilith, Lucifera, Lucio — lleva su firma en forma de sello, garantía de una única visión editorial detrás de voces distintas.",
    "admin.eyebrow":"Área Privada","admin.title":"Administración del Índice",
    "admin.noticeLabel":"Estado —",
    "admin.tab.catalog":"Catálogo","admin.tab.stats":"Estadísticas","admin.tab.social":"Personajes y redes",
    "admin.tab.comments":"Comentarios","admin.tab.requests":"Solicitudes","admin.tab.announcements":"Novedades","admin.tab.users":"Usuarios","admin.tab.maintenance":"Mantenimiento",
    "users.title":"Usuarios registrados","users.hint":"La marca azul solo se puede otorgar 90 días después del registro. Decides tú, uno por uno.",
    "users.empty":"Aún no hay usuarios registrados.","users.noName":"Usuario","users.joined":"Registrado el","users.daysHere":"{n} días en el sitio",
    "users.eligible":"Apto","users.waitingDays":"faltan {n} días","users.grant":"Otorgar marca","users.revoke":"Quitar marca","users.earlyGrantConfirm":"{name} aún no ha alcanzado los 90 días (faltan {n}). ¿Otorgar la marca de todos modos como excepción?",
    "notif.title":"Notificaciones","notif.markAll":"Marcar todas como leídas","notif.empty":"No hay notificaciones.","notif.someone":"Alguien","notif.justNow":"Ahora mismo","notif.minsAgo":"hace {n} min","notif.hoursAgo":"hace {n} h","notif.daysAgo":"hace {n} d",
    "nav.community":"Comunidad","community.eyebrow":"Fuera del Archivo","community.title":"Comunidad","community.rule":"Nada de material pornográfico: como mucho contenido sensual. Quien incumpla la regla será baneado y eliminado del sitio.","community.tabChannels":"Canales","community.tabDms":"Mensajes privados","community.tabCollab":"Colaboradores","community.collabHint":"Las obras publicadas junto a los colaboradores invitados, todas en un solo lugar.","diary.tab":"Diario","diary.hint":"Comparte una foto, un estado de ánimo o una nota del día — todos lo verán aquí.","diary.kindPhoto":"📷 Foto","diary.kindMood":"🙂 Estado de ánimo","diary.kindNote":"📝 Nota del día","diary.captionPh":"Descripción (opcional)…","diary.moodPh":"¿Quieres añadir algunas palabras? (opcional)…","diary.notePh":"¿Cómo fue tu día?","diary.publish":"Publicar","diary.filterAll":"Todos","diary.filterBy":"De {name} ×","diary.needPhoto":"Elige primero una foto.","diary.needMood":"Elige primero un estado de ánimo.","diary.publishError":"Error al publicar. Inténtalo de nuevo.","diary.empty":"Aún no hay publicaciones — sé el primero.","pubProfile.notFound":"Perfil no encontrado.","pubProfile.titlesHeading":"Títulos publicados","pubProfile.diaryHeading":"Diario","pubProfile.memberSince":"Miembro desde {date}","userDir.title":"Usuarios","userDir.online":"En línea","userDir.offline":"Desconectado","userDir.empty":"Aún no hay usuarios.","userDir.verifiedFriends":"Amigos verificados","userDir.others":"Otros usuarios","userDir.loadError":"No se pueden cargar los usuarios ahora. Inténtalo más tarde.","chat.notFound":"Abre esta página desde un perfil o el panel de Usuarios.","chat.messagePlaceholder":"Escribe un mensaje…","chat.file":"Archivo","chat.photo":"Foto","chat.sendError":"Mensaje no enviado. Inténtalo de nuevo.","chat.delete":"Eliminar","chat.deleteConfirm":"¿Eliminar esta conversación? No se puede deshacer.","chat.deleteError":"No se pudo eliminar la conversación. Inténtalo más tarde.","chat.translate":"Traducir","chat.translateUndo":"Mostrar original","community.archive":"Archivar","community.unarchive":"Restaurar","community.newChannelPh":"Nombre del nuevo canal (ej. Cine)","community.createChannel":"Crear canal","community.back":"← Volver","community.messagePh":"Escribe un mensaje…","community.send":"Enviar","community.dmHint":"Para escribir en privado a alguien, abre uno de sus mensajes en un canal y usa \"Mensaje privado\".","community.noChannels":"Aún no hay canales. Crea uno.","community.noMessages":"Aún no hay mensajes.","community.noDms":"Aún no hay conversaciones privadas.","community.privateMessage":"Mensaje privado","community.report":"Denunciar","community.reportPrompt":"¿Por qué denuncias este mensaje? (opcional)","community.reportSent":"Denuncia enviada, gracias.","community.you":"Tú","community.tabFriends":"Amigos","community.addFriend":"Añadir amigo","community.requestSent":"Solicitud enviada","community.acceptFriend":"Aceptar amistad","community.declineFriend":"Rechazar","community.pendingReceived":"Solicitudes recibidas","community.pendingSent":"Solicitudes enviadas","community.friendsList":"Tus amigos","community.searchFriends":"Buscar a alguien","community.searchFriendsPh":"Nombre de usuario…","community.noResults":"Sin resultados.",
    "collabSession.title":"Sesiones de creación activas","collabSession.hint":"Un amigo invitado a crear puede publicar títulos solo mientras su sesión esté activa.","collabSession.active":"Sesión de creación activa","collabSession.hintCollab":"Puedes añadir títulos al catálogo mientras la sesión esté activa. Si no llegas a tiempo, pide una prórroga.","collabSession.requestExtension":"No llego, pedir prórroga","collabSession.countdown":"Caduca en {h}h {m}min","collabSession.expired":"Sesión caducada.","collabSession.extensionPending":"Prórroga solicitada, esperando al admin","collabSession.invite":"Invitar a crear","collabSession.inviteConfirm":"¿Invitar a {name} a crear y publicar durante 24 horas?","collabSession.inviteSent":"Invitación enviada.","collabSession.inviteNotif":"Has sido invitado a crear y publicar un título — tienes 24 horas.","collabSession.extend48":"Prórroga 48h","myTitles.heading":"Tus títulos publicados","myTitles.cancel":"Cancelar edición",
    "smallnox.title":"Tu asistente","smallnox.blurb":"SmallNox aprueba solo comentarios e inscripciones limpias, y te avisa -enfadado- solo cuando algo parece sospechoso.","smallnox.communityBlurb":"SmallNox vigila estos canales -si escribes algo fuera de norma, se dará cuenta.","smallnox.modalTitle":"Hola, soy SmallNox","smallnox.modalBody":"Reviso solo los nuevos comentarios y las nuevas inscripciones: si están limpios los dejo pasar enseguida, si no se los señalo a Nox Morningstar. En los canales de la comunidad hago el mismo trabajo -escribe con respeto y nunca me verás enfadado.","smallnox.tipsTitle":"Un consejo rápido","smallnox.tip1":"Escribe @usuario en un comentario o mensaje para etiquetar a alguien — recibirá una notificación.","smallnox.tip2":"En los mensajes privados encontrarás emojis y GIFs justo debajo del campo de texto.","smallnox.tip3":"En el Catálogo, toca el filtro \"Colaboradores\" para ver el trabajo de una persona.","smallnox.tip4":"En tus mensajes privados de la Comunidad hay confirmaciones de lectura y un punto verde si la otra persona está en línea.","smallnox.tip5":"¿Publicaste un título tú? Puedes editarlo en cualquier momento desde Administración, incluso con la sesión caducada.","smallnox.tip6":"Toca el escudo arriba a la izquierda desde cualquier página para volver al inicio.","smallnoxUpdates.title":"Novedades del Archivo","smallnoxUpdates.sub":"Qué ha cambiado últimamente en el sitio — te lo resumo yo.","smallnoxUpdates.close":"Entendido",
    "community.loadError":"Error al cargar (revisa tu conexión).","community.retry":"Reintentar",
    "admin.tab.moderation":"Moderación de Comunidad","mod.reportsTitle":"Denuncias abiertas","mod.flaggedTitle":"Mensajes marcados automáticamente","mod.bannedTitle":"Usuarios baneados (emails bloqueados)","mod.empty":"Nada por ahora.","mod.typeChannel":"Mensaje en canal","mod.typeDm":"Mensaje privado","mod.hide":"Ocultar","mod.ban":"Banear y eliminar","mod.noUser":"Usuario no encontrado.","mod.banConfirm":"¿Confirmas? El usuario será baneado, su cuenta eliminada y no podrá registrarse de nuevo con el mismo email.","mod.banFailed":"Operación fallida.",
    "users.onlineNow":"{n} usuarios en línea ahora","users.onlineTag":"En línea ahora",
    "announcements.eyebrow":"De la Redacción","announcements.title":"Novedades","announcements.readMore":"Leer","announcements.share":"Compartir","announcements.downloadPdf":"Descargar PDF",
    "announcements.archived":"Archivado","announcements.expiresIn":"caduca en {h}h","announcements.extend":"Extender 24h",
    "announcements.newTitle":"Nuevo anuncio","announcements.f.title":"Título","announcements.f.body":"Texto","announcements.f.link":"Enlace (opcional)","announcements.f.image":"Imagen (opcional — cualquier proporción)","announcements.f.pdf":"Archivo PDF (opcional)",
    "announcements.publish":"Publicar anuncio","announcements.publishError":"Error al publicar. Inténtalo de nuevo.",
    "announcements.existingTitle":"Anuncios publicados","announcements.empty":"Aún no hay anuncios.",
    "announcements.statusPublished":"Publicado","announcements.statusHidden":"Oculto","announcements.hide":"Ocultar","announcements.show":"Mostrar",
    "latest.eyebrow":"Recién Publicado","latest.title":"Últimos Capítulos","latest.newTag":"Nuevo",
    "profile.title":"Mi perfil","profile.sub":"Visible para otros cuando comentas",
    "profile.displayName":"Nombre visible","profile.bio":"Bio (opcional)","profile.favChars":"Personajes favoritos",
    "profile.avatarHd":"Foto de perfil HD (opcional)","profile.avatarHdHint":"Se muestra a resolución completa a quien toque tu avatar. Si no la subes, se ve la foto normal.",
    "profile.banner":"Banner del perfil (opcional)","profile.socials":"Tus redes sociales (opcional)","profile.website":"Sitio web","pubProfile.favoritesHeading":"Favoritos",
    "push.enable":"Activar notificaciones","push.enabled":"Notificaciones activas","push.unsupported":"Tu navegador no admite notificaciones push.","push.denied":"Permiso denegado — puedes activarlas de nuevo desde los ajustes del navegador.","push.error":"No se pudieron activar las notificaciones, inténtalo de nuevo.","push.installFirst":"Instala para notificaciones","push.installFirstLong":"En iPhone/iPad, las notificaciones solo funcionan tras instalar el sitio: toca Compartir → Añadir a inicio, luego abre la app desde ahí e inténtalo de nuevo.",
    "profile.birthDate":"Fecha de nacimiento","profile.gender":"Sexo","profile.genderUnset":"— Prefiero no decirlo —","profile.genderM":"Masculino","profile.genderF":"Femenino","profile.genderX":"Otro","profile.avatarInfoEmpty":"No se ha compartido información adicional",
    "profile.save":"Guardar perfil","profile.saveError":"Error al guardar. Inténtalo de nuevo.",
    "requests.title":"Mis solicitudes","requests.hint":"Un título que quieras, una traducción, una idea — escríbeme aquí, lo leo yo.",
    "requests.placeholder":"Escribe tu solicitud…","requests.submit":"Enviar solicitud","requests.submitError":"Error al enviar. Inténtalo de nuevo.",
    "requests.statusNew":"Pendiente","requests.statusRead":"Leída","requests.adminTitle":"Solicitudes recibidas",
    "requests.empty":"Aún no hay solicitudes.","requests.markRead":"Marcar como leída","requests.sent":"¡Solicitud enviada! Te responderé pronto.",
    "sync.notConfigured":"Backend de Supabase aún no conectado — el sitio funciona en local mientras se configura.",
    "sync.configuredNoToken":"Conectado a Supabase en lectura. Accede con las credenciales de administrador para publicar cambios.",
    "sync.ready":"Conectado a Supabase — has iniciado sesión como administrador, los cambios son públicos para todos.",
    "sync.syncing":"Sincronizando…",
    "sync.error":"Error de sincronización — los cambios solo se guardan aquí por ahora, inténtalo más tarde.",
    "sync.resync":"Sincronizar ahora",
    "admin.signin.email":"Email de administrador","admin.signin.password":"Contraseña",
    "admin.signin.btn":"Acceder como admin","admin.signin.error":"Credenciales no válidas o backend inaccesible.",
    "admin.signOut":"Salir de admin",
    "admin.f.title":"Título","admin.f.character":"Personaje","admin.f.issue":"Número / Volumen","admin.f.date":"Fecha de publicación","admin.f.synopsis":"Sinopsis (inglés — texto de las obras)",
    "admin.add":"Añadir al índice","admin.edit":"Editar","admin.saveChanges":"Guardar cambios","admin.export":"Exportar JSON","admin.import":"Importar JSON",
    "footer.line":"ARCHIVO ABIERTO A TODOS · SECCIÓN 18+ BAJO PETICIÓN · TRAD.CLAB WORKS",
    "newsletter.eyebrow":"Mantente al Día","newsletter.title":"Suscríbete al Boletín",
    "newsletter.sub":"Nuevos títulos, colaboraciones y estrenos — directo a tu bandeja, sin spam.",
    "newsletter.placeholder":"tu@email.com","newsletter.submit":"Suscribirme",
    "newsletter.success":"Hecho — revisa tu correo para confirmar.","newsletter.error":"Error al suscribirse. Inténtalo de nuevo.",
    "auth.loginTitle":"Acceder al Archivo","auth.registerTitle":"Crea tu Cuenta","auth.sub":"Cuenta personal",
    "auth.username":"Email","auth.password":"Contraseña","auth.loginBtn":"Acceder","auth.registerBtn":"Registrarse","auth.cancel":"Cancelar",
    "auth.switchToRegister":"¿No tienes cuenta?","auth.switchToRegisterBtn":"Registrarse",
    "auth.switchToLogin":"¿Ya tienes cuenta?","auth.switchToLoginBtn":"Acceder",
    "quiz.intro":"Antes de registrarte, demuestra que conoces el Archivo.","quiz.lockedOut":"Demasiados intentos fallidos. Vuelve a intentarlo en {min} minutos.",
    "auth.note":"Nota: la cuenta solo guarda tu preferencia de idioma para este sitio, localmente en este navegador.",
    "err.userExists":"El nombre de usuario ya existe.","err.badLogin":"Credenciales no válidas.","err.required":"Completa todos los campos.",
    "admin.deleted":"eliminado","admin.confirmDelete":"¿Eliminar este título del índice?",
    "filter.all":"Todos",
    "maintenance.text":"Sitio en mantenimiento — estamos actualizando el archivo, vuelve pronto.",
    "maintenance.toggle":"Modo mantenimiento (visible para todos los visitantes)","maintenance.scheduleTitle":"Lo que ven los visitantes","maintenance.scheduleHint":"Explica por qué el sitio está en pausa y por cuánto tiempo — se guarda aunque el interruptor esté apagado, así puedes prepararlo antes.","maintenance.reasonLabel":"Motivo (en qué estás trabajando)","maintenance.reasonPh":"Ej. Subiendo nuevos capítulos y arreglando el lector de páginas.","maintenance.startLabel":"Inicio previsto","maintenance.endLabel":"Fin previsto","maintenance.saveSchedule":"Guardar detalles","maintenance.scheduleSaved":"Guardado.","maintenance.fromLabel":"Desde las","maintenance.toLabel":"hasta las",
    "night.toggle":"Cierre nocturno automático","night.hint":"El sitio se bloquea solo cada noche en esta franja horaria, para no permanecer abierto innecesariamente, y se reabre solo por la mañana.","night.startLabel":"Cierra a las","night.endLabel":"Reabre a las","night.lockTitle":"Buenas noches","night.lockText":"El archivo cierra de noche y reabre por la mañana.","night.reopensAt":"Reabre a las {time}",
    "offline.title":"Copia sin conexión (solo para ti)","offline.hint":"Descarga todos los títulos, páginas y portadas en un único archivo comprimido en tu ordenador — visible solo aquí, nunca para los visitantes.",
    "offline.export":"Descargar todo para uso sin conexión","offline.preparing":"Preparando…","offline.progress":"{done}/{total} — {label}","offline.zipping":"Comprimiendo el archivo…","offline.done":"Listo — revisa las descargas de tu navegador.","offline.error":"Error al exportar.",
    "gate.title":"Desbloquear Contenido 18+",
    "toggle.mature":"Contenido 18+",
    "admin.f.mature":"Contenido para adultos (18+)",
    "badge.allages":"Todos",
    "state.allages":"Estás viendo: contenido para todos los públicos.",
    "state.mature":"Estás viendo: contenido para todos + 18+ desbloqueado.",
    "admin.gate.notSignedIn":"Accede desde el botón \"Acceder\" arriba para administrar el índice.",
    "admin.gate.notAdmin":"La cuenta {email} no tiene permisos de administrador.",
    "admin.f.price":"Precio (EUR, opcional)",
    "pages.label":"Páginas del cómic (imágenes 1:1, tipo carrusel) — arrastra para reordenar",
    "pages.uploading":"Subiendo página {n} de {total}…","pages.uploadError":"Error al subir las páginas. Inténtalo de nuevo.",
    "cover.label":"Portada (imagen de vista previa en el catálogo)","cover.uploading":"Subiendo portada…",
    "cover.change":"Cambiar portada","cover.addExisting":"Añadir portada",
    "synopsis.translating":"Traduciendo sinopsis…","synopsis.translateExisting":"Traducir sinopsis",
    "synopsis.retranslate":"Volver a traducir","synopsis.translateError":"Error al traducir. Inténtalo de nuevo.",
    "rewatermark.button":"Volver a marcar páginas","rewatermark.progress":"Marcando página {n} de {total}…","rewatermark.error":"Error al aplicar la marca. Inténtalo de nuevo.","rewatermark.done":"Marcada",
    "catalog.permanent":"Permanente","catalog.temporary":"A tiempo limitado","catalog.makeTemporary":"Hacer temporal","catalog.makePermanent":"Hacer permanente",
    "collab.name":"Colaborador (opcional)","collab.url":"Enlace al perfil (p. ej. Instagram)",
    "collab.verified":"Colaborador verificado (muestra la marca azul)",
    "verified.label":"Verificado","verified.commenter":"Email verificado","verified.founder":"Cuenta oficial","verified.collaborator":"Colaborador verificado",
    "collab.credit":"En colaboración con","collab.categoryLabel":"Colaboradores","collab.categoryOption":"Colaboradores (fuera de los 4 personajes)",
    "collab.viewAll":"ver todas las obras juntas","collab.collectionBanner":"Obras realizadas con","collab.showAll":"Mostrar todo","titleModal.publishedBy":"Publicado por",
    "share.button":"Compartir","share.tagline":"en LUX COMICS & MEDUSA COMICS",
    "share.copied":"Enlace copiado — pégalo donde quieras compartirlo.",
    "share.manual":"Copia este texto para compartirlo:",
    "pdf.label":"O sube el cómic como PDF (A4) en lugar de páginas individuales",
    "pdf.uploading":"Subiendo PDF…","pdf.download":"Descargar PDF","pdf.preparing":"Preparando…","pdf.loginToDownload":"Inicia sesión para descargar el PDF",
    "maintenance.lockTitle":"Sitio en mantenimiento","maintenance.lockText":"Estamos actualizando el archivo. Vuelve en breve.",
    "charimg.title":"Imágenes de perfil de los personajes",
    "social.title":"Enlaces sociales (visibles en el pie de página)","social.save":"Guardar enlaces sociales",
    "comments.moderationTitle":"Comentarios pendientes de aprobación",
    "comments.title":"Comentarios","comments.submit":"Enviar comentario",
    "comments.loginToComment":"Accede para dejar un comentario.",
    "comments.empty":"Aún no hay comentarios.","comments.pending":"pendiente","comments.noPending":"No hay comentarios pendientes.",
    "comments.submittedPending":"Enviado — pendiente de aprobación.","comments.submittedPublished":"Publicado.","comments.reply":"Responder",
    "fav.add":"♡ Guardar","fav.remove":"♥ Guardado",
    "card.readMore":"Leer más ↓","card.readLess":"Mostrar menos ↑",
    "like.add":"👍 Me gusta","like.remove":"👍 Te gusta",
    "stats.title":"Estadísticas por título","stats.empty":"Aún no hay títulos publicados.",
    "stats.purchaseNote":"Las \"compras\" aún no son reales — no hay ningún procesador de pago conectado. \"Carrito\" cuenta el interés (cuántas veces se añadió), no ventas confirmadas.",
    "stats.views":"visualizaciones","stats.comments":"comentarios","stats.likes":"me gusta","stats.saves":"guardados","stats.shares":"veces compartido","stats.cartAdds":"añadidos al carrito",
    "cart.open":"Carrito","cart.title":"Tu carrito","cart.pending":"Pago en configuración",
    "cart.notice":"El carrito está listo, pero aún no hay ningún procesador de pago conectado. Cuando el admin elija uno, podrás completar la compra aquí.",
    "cart.clear":"Vaciar carrito","cart.empty":"Tu carrito está vacío.","cart.add":"Añadir al carrito",
    "auth.confirmEmailSent":"Revisa tu correo para confirmar la cuenta y luego accede."
  },
  fr:{
    "gate.sub":"Contenu pour adultes",
    "gate.body":"Cette archive contient des œuvres destinées à un public averti. En continuant, vous confirmez avoir au moins 18 ans et consentir sciemment à un contenu explicite.",
    "gate.enter":"J'ai 18 ans ou plus — Débloquer","gate.leave":"Annuler",
    "gate.legal":"En continuant, vous confirmez également respecter les lois de votre juridiction concernant l'accès aux contenus pour adultes.",
    "nav.library":"Index","nav.characters":"Dossiers","nav.founder":"Fondateur","nav.admin":"Admin","nav.login":"Connexion","nav.logout":"Déconnexion",
    "hero.title1":"L'ARCHIVE DU","hero.title2":"PLAISIR INTERDIT",
    "hero.tagline":"Bandes dessinées d'auteur — édition réservée",
    "hero.lede":"Quatre sceaux, quatre voix : Lucifer, Lilith, Lucifera et Lucio veillent chacun sur une collection de cette maison. L'index est ouvert à tous — les titres 18+ restent derrière un interrupteur séparé, à débloquer quand vous voulez. Chaque planche est dessinée en anglais et entre dans l'index telle quelle — seule votre langue d'accès vous appartient.",
    "hero.cta1":"Parcourir l'index","hero.cta2":"Découvrir les dossiers",
    "characters.eyebrow":"Dossiers","characters.title":"Les Quatre Sceaux","characters.desc":"Chaque personnage mène sa propre collection, avec un ton et une mythologie distincts.",
    "library.eyebrow":"Index","library.title":"Catalogue des Œuvres",
    "founder.eyebrow":"Maison d'Édition","founder.title":"Le Fondateur","founder.role":"Fondateur & Directeur Éditorial",
    "founder.body":"Nox Morningstar a fondé LUX COMICS & MEDUSA COMICS comme refuge pour des histoires qui ne trouveraient leur place nulle part ailleurs : des œuvres pensées pour un public adulte et consentant, où l'interdit est matière narrative, non provocation gratuite. Chaque collection — Lucifer, Lilith, Lucifera, Lucio — porte sa signature sous forme de sceau, garantie d'une seule vision éditoriale derrière des voix différentes.",
    "admin.eyebrow":"Espace Privé","admin.title":"Administration de l'Index",
    "admin.noticeLabel":"État —",
    "admin.tab.catalog":"Catalogue","admin.tab.stats":"Statistiques","admin.tab.social":"Personnages & réseaux",
    "admin.tab.comments":"Commentaires","admin.tab.requests":"Demandes","admin.tab.announcements":"Actualités","admin.tab.users":"Utilisateurs","admin.tab.maintenance":"Maintenance",
    "users.title":"Utilisateurs inscrits","users.hint":"Le badge bleu ne peut être accordé que 90 jours après l'inscription. C'est vous qui décidez, au cas par cas.",
    "users.empty":"Aucun utilisateur inscrit pour l'instant.","users.noName":"Utilisateur","users.joined":"Inscrit le","users.daysHere":"{n} jours sur le site",
    "users.eligible":"Éligible","users.waitingDays":"encore {n} jours","users.grant":"Accorder le badge","users.revoke":"Retirer le badge","users.earlyGrantConfirm":"{name} n'a pas encore atteint 90 jours ({n} restants). Accorder le badge quand même, à titre exceptionnel ?",
    "notif.title":"Notifications","notif.markAll":"Tout marquer comme lu","notif.empty":"Aucune notification.","notif.someone":"Quelqu'un","notif.justNow":"À l'instant","notif.minsAgo":"il y a {n} min","notif.hoursAgo":"il y a {n} h","notif.daysAgo":"il y a {n} j",
    "nav.community":"Communauté","community.eyebrow":"En dehors de l'Archive","community.title":"Communauté","community.rule":"Aucun contenu pornographique : sensuel tout au plus. Toute violation entraîne le bannissement et la suppression du site.","community.tabChannels":"Canaux","community.tabDms":"Messages privés","community.tabCollab":"Collaborateurs","community.collabHint":"Les œuvres publiées avec les collaborateurs invités, toutes au même endroit.","diary.tab":"Journal","diary.hint":"Partagez une photo, une humeur ou une note du jour — tout le monde la verra ici.","diary.kindPhoto":"📷 Photo","diary.kindMood":"🙂 Humeur","diary.kindNote":"📝 Note du jour","diary.captionPh":"Légende (facultatif)…","diary.moodPh":"Ajouter quelques mots ? (facultatif)…","diary.notePh":"Comment s'est passée votre journée ?","diary.publish":"Publier","diary.filterAll":"Tous","diary.filterBy":"De {name} ×","diary.needPhoto":"Choisissez d'abord une photo.","diary.needMood":"Choisissez d'abord une humeur.","diary.publishError":"Échec de la publication. Réessayez.","diary.empty":"Aucune publication pour l'instant — soyez le premier.","pubProfile.notFound":"Profil introuvable.","pubProfile.titlesHeading":"Titres publiés","pubProfile.diaryHeading":"Journal","pubProfile.memberSince":"Membre depuis {date}","userDir.title":"Utilisateurs","userDir.online":"En ligne","userDir.offline":"Hors ligne","userDir.empty":"Aucun utilisateur pour l'instant.","userDir.verifiedFriends":"Amis vérifiés","userDir.others":"Autres utilisateurs","userDir.loadError":"Impossible de charger les utilisateurs pour le moment. Réessayez plus tard.","chat.notFound":"Ouvrez cette page depuis un profil ou le panneau Utilisateurs.","chat.messagePlaceholder":"Écrivez un message…","chat.file":"Fichier","chat.photo":"Photo","chat.sendError":"Message non envoyé. Réessayez.","chat.delete":"Supprimer","chat.deleteConfirm":"Supprimer cette conversation ? Action irréversible.","chat.deleteError":"Impossible de supprimer la conversation. Réessayez plus tard.","chat.translate":"Traduire","chat.translateUndo":"Afficher l'original","community.archive":"Archiver","community.unarchive":"Restaurer","community.newChannelPh":"Nom du nouveau canal (ex. Cinéma)","community.createChannel":"Créer un canal","community.back":"← Retour","community.messagePh":"Écrivez un message…","community.send":"Envoyer","community.dmHint":"Pour écrire en privé à quelqu'un, ouvrez un de ses messages dans un canal et utilisez \"Message privé\".","community.noChannels":"Aucun canal pour l'instant. Créez-en un.","community.noMessages":"Aucun message pour l'instant.","community.noDms":"Aucune conversation privée pour l'instant.","community.privateMessage":"Message privé","community.report":"Signaler","community.reportPrompt":"Pourquoi signalez-vous ce message ? (facultatif)","community.reportSent":"Signalement envoyé, merci.","community.you":"Vous","community.tabFriends":"Amis","community.addFriend":"Ajouter un ami","community.requestSent":"Demande envoyée","community.acceptFriend":"Accepter l'amitié","community.declineFriend":"Refuser","community.pendingReceived":"Demandes reçues","community.pendingSent":"Demandes envoyées","community.friendsList":"Vos amis","community.searchFriends":"Rechercher une personne","community.searchFriendsPh":"Nom d'utilisateur…","community.noResults":"Aucun résultat.",
    "collabSession.title":"Sessions de création actives","collabSession.hint":"Un ami invité à créer ne peut publier de titres que tant que sa session est active.","collabSession.active":"Session de création active","collabSession.hintCollab":"Vous pouvez ajouter des titres au catalogue tant que la session est active. Si vous ne pouvez pas terminer à temps, demandez une prolongation.","collabSession.requestExtension":"Je n'y arrive pas, demander une prolongation","collabSession.countdown":"Expire dans {h}h {m}min","collabSession.expired":"Session expirée.","collabSession.extensionPending":"Prolongation demandée, en attente de l'admin","collabSession.invite":"Inviter à créer","collabSession.inviteConfirm":"Inviter {name} à créer et publier pendant 24 heures ?","collabSession.inviteSent":"Invitation envoyée.","collabSession.inviteNotif":"Vous avez été invité à créer et publier un titre — vous avez 24 heures.","collabSession.extend48":"Prolonger de 48h","myTitles.heading":"Vos titres publiés","myTitles.cancel":"Annuler la modification",
    "smallnox.title":"Votre assistant","smallnox.blurb":"SmallNox approuve tout seul les commentaires et inscriptions sans souci, et vous prévient -en colère- seulement quand quelque chose semble suspect.","smallnox.communityBlurb":"SmallNox veille sur ces canaux -s'il vous arrive d'écrire quelque chose hors règles, il le remarquera.","smallnox.modalTitle":"Salut, je suis SmallNox","smallnox.modalBody":"Je vérifie tout seul les nouveaux commentaires et les nouvelles inscriptions : s'ils sont clean je les laisse passer tout de suite, sinon je les signale à Nox Morningstar. Je fais le même travail dans les canaux de la communauté -écrivez avec respect et vous ne me verrez jamais en colère.","smallnox.tipsTitle":"Une astuce rapide","smallnox.tip1":"Écrivez @nomutilisateur dans un commentaire ou un message pour identifier quelqu'un — il recevra une notification.","smallnox.tip2":"Dans les messages privés, les emojis et GIFs se trouvent juste sous le champ de texte.","smallnox.tip3":"Dans l'Index, touchez le filtre \"Collaborateurs\" pour voir le travail d'une personne.","smallnox.tip4":"Dans vos messages privés Communauté, vous avez des accusés de lecture et un point vert si l'autre personne est en ligne.","smallnox.tip5":"Vous avez publié un titre ? Vous pouvez le modifier à tout moment depuis Admin, même après l'expiration de votre session.","smallnox.tip6":"Touchez le blason en haut à gauche depuis n'importe quelle page pour revenir à l'accueil.","smallnoxUpdates.title":"Nouveautés de l'Archive","smallnoxUpdates.sub":"Ce qui a changé récemment sur le site — je vous fais le résumé.","smallnoxUpdates.close":"Compris",
    "community.loadError":"Échec du chargement (vérifiez votre connexion).","community.retry":"Réessayer",
    "admin.tab.moderation":"Modération Communauté","mod.reportsTitle":"Signalements ouverts","mod.flaggedTitle":"Messages signalés automatiquement","mod.bannedTitle":"Utilisateurs bannis (emails bloqués)","mod.empty":"Rien pour l'instant.","mod.typeChannel":"Message de canal","mod.typeDm":"Message privé","mod.hide":"Masquer","mod.ban":"Bannir et supprimer","mod.noUser":"Utilisateur introuvable.","mod.banConfirm":"Confirmer ? L'utilisateur sera banni, son compte supprimé, et il ne pourra plus se réinscrire avec le même email.","mod.banFailed":"Échec de l'opération.",
    "users.onlineNow":"{n} utilisateurs en ligne","users.onlineTag":"En ligne",
    "announcements.eyebrow":"De la Rédaction","announcements.title":"Actualités","announcements.readMore":"Lire","announcements.share":"Partager","announcements.downloadPdf":"Télécharger le PDF",
    "announcements.archived":"Archivée","announcements.expiresIn":"expire dans {h}h","announcements.extend":"Prolonger 24h",
    "announcements.newTitle":"Nouvelle annonce","announcements.f.title":"Titre","announcements.f.body":"Texte","announcements.f.link":"Lien (facultatif)","announcements.f.image":"Image (facultative — tout format)","announcements.f.pdf":"Fichier PDF (facultatif)",
    "announcements.publish":"Publier l'annonce","announcements.publishError":"Échec de la publication. Réessayez.",
    "announcements.existingTitle":"Annonces publiées","announcements.empty":"Aucune annonce pour le moment.",
    "announcements.statusPublished":"Publiée","announcements.statusHidden":"Masquée","announcements.hide":"Masquer","announcements.show":"Afficher",
    "latest.eyebrow":"Vient de Paraître","latest.title":"Derniers Chapitres","latest.newTag":"Nouveau",
    "profile.title":"Mon profil","profile.sub":"Visible par les autres quand vous commentez",
    "profile.displayName":"Nom affiché","profile.bio":"Bio (facultatif)","profile.favChars":"Personnages préférés",
    "profile.avatarHd":"Photo de profil HD (facultatif)","profile.avatarHdHint":"Affichée en pleine résolution à quiconque touche votre avatar. Si vous n'en téléchargez pas, la photo normale s'affiche.",
    "profile.banner":"Bannière du profil (facultatif)","profile.socials":"Vos réseaux sociaux (facultatif)","profile.website":"Site web","pubProfile.favoritesHeading":"Favoris",
    "push.enable":"Activer les notifications","push.enabled":"Notifications activées","push.unsupported":"Votre navigateur ne prend pas en charge les notifications push.","push.denied":"Permission refusée — vous pouvez la réactiver dans les paramètres du navigateur.","push.error":"Impossible d'activer les notifications, réessayez.","push.installFirst":"Installer pour les notifications","push.installFirstLong":"Sur iPhone/iPad, les notifications ne fonctionnent qu'après avoir installé le site : appuyez sur Partager → Sur l'écran d'accueil, puis ouvrez l'app depuis là et réessayez.",
    "profile.birthDate":"Date de naissance","profile.gender":"Sexe","profile.genderUnset":"— Je préfère ne pas le dire —","profile.genderM":"Homme","profile.genderF":"Femme","profile.genderX":"Autre","profile.avatarInfoEmpty":"Aucune information supplémentaire partagée",
    "profile.save":"Enregistrer le profil","profile.saveError":"Échec de l'enregistrement. Réessayez.",
    "requests.title":"Mes demandes","requests.hint":"Un titre que vous aimeriez, une traduction, une idée — écrivez-moi ici, je lis tout.",
    "requests.placeholder":"Écrivez votre demande…","requests.submit":"Envoyer la demande","requests.submitError":"Échec de l'envoi. Réessayez.",
    "requests.statusNew":"En attente","requests.statusRead":"Lue","requests.adminTitle":"Demandes reçues",
    "requests.empty":"Aucune demande reçue.","requests.markRead":"Marquer comme lue","requests.sent":"Demande envoyée ! Je vous répondrai bientôt.",
    "sync.notConfigured":"Backend Supabase pas encore connecté — le site fonctionne en local en attendant la configuration.",
    "sync.configuredNoToken":"Connecté à Supabase en lecture. Connectez-vous avec les identifiants admin pour publier des modifications.",
    "sync.ready":"Connecté à Supabase — vous êtes authentifié comme administrateur, les modifications sont publiques pour tous.",
    "sync.syncing":"Synchronisation en cours…",
    "sync.error":"Erreur de synchronisation — les modifications restent enregistrées ici pour l'instant, réessayez plus tard.",
    "sync.resync":"Synchroniser maintenant",
    "admin.signin.email":"Email administrateur","admin.signin.password":"Mot de passe",
    "admin.signin.btn":"Connexion admin","admin.signin.error":"Identifiants invalides ou backend inaccessible.",
    "admin.signOut":"Déconnexion admin",
    "admin.f.title":"Titre","admin.f.character":"Personnage","admin.f.issue":"Numéro / Volume","admin.f.date":"Date de publication","admin.f.synopsis":"Synopsis (anglais — texte des œuvres)",
    "admin.add":"Ajouter à l'index","admin.edit":"Modifier","admin.saveChanges":"Enregistrer les modifications","admin.export":"Exporter JSON","admin.import":"Importer JSON",
    "footer.line":"ARCHIVE OUVERTE À TOUS · SECTION 18+ SUR DEMANDE · TRAD.CLAB WORKS",
    "newsletter.eyebrow":"Restez Informé","newsletter.title":"Abonnez-vous à la Newsletter",
    "newsletter.sub":"Nouveaux titres, collaborations et sorties — directement dans votre boîte, sans spam.",
    "newsletter.placeholder":"vous@email.com","newsletter.submit":"M'abonner",
    "newsletter.success":"C'est fait — vérifiez votre boîte pour confirmer.","newsletter.error":"Échec de l'inscription. Réessayez.",
    "auth.loginTitle":"Se connecter à l'Archive","auth.registerTitle":"Créer votre Compte","auth.sub":"Compte personnel",
    "auth.username":"Email","auth.password":"Mot de passe","auth.loginBtn":"Connexion","auth.registerBtn":"S'inscrire","auth.cancel":"Annuler",
    "auth.switchToRegister":"Pas encore de compte ?","auth.switchToRegisterBtn":"S'inscrire",
    "auth.switchToLogin":"Déjà un compte ?","auth.switchToLoginBtn":"Connexion",
    "quiz.intro":"Avant de vous inscrire, prouvez que vous connaissez l'Archive.","quiz.lockedOut":"Trop de réponses erronées. Réessayez dans {min} minutes.",
    "auth.note":"Note : le compte enregistre uniquement votre préférence de langue pour ce site, localement sur ce navigateur.",
    "err.userExists":"Nom d'utilisateur déjà utilisé.","err.badLogin":"Identifiants invalides.","err.required":"Remplissez tous les champs.",
    "admin.deleted":"supprimé","admin.confirmDelete":"Supprimer ce titre de l'index ?",
    "filter.all":"Tous",
    "maintenance.text":"Site en maintenance — nous mettons à jour l'archive, revenez bientôt.",
    "maintenance.toggle":"Mode maintenance (visible pour tous les visiteurs)","maintenance.scheduleTitle":"Ce que voient les visiteurs","maintenance.scheduleHint":"Expliquez pourquoi le site est en pause et pour combien de temps — enregistré même si l'interrupteur est éteint, pour tout préparer à l'avance.","maintenance.reasonLabel":"Motif (sur quoi vous travaillez)","maintenance.reasonPh":"Ex. Ajout de nouveaux chapitres et correction du lecteur de pages.","maintenance.startLabel":"Début prévu","maintenance.endLabel":"Fin prévue","maintenance.saveSchedule":"Enregistrer les détails","maintenance.scheduleSaved":"Enregistré.","maintenance.fromLabel":"De","maintenance.toLabel":"à",
    "night.toggle":"Fermeture nocturne automatique","night.hint":"Le site se verrouille automatiquement chaque nuit pendant cette plage horaire, pour ne pas rester ouvert inutilement, et se rouvre seul le matin.","night.startLabel":"Ferme à","night.endLabel":"Rouvre à","night.lockTitle":"Bonne nuit","night.lockText":"L'archive ferme la nuit et rouvre le matin.","night.reopensAt":"Rouvre à {time}",
    "offline.title":"Copie hors ligne (rien que pour vous)","offline.hint":"Téléchargez tous les titres, pages et couvertures dans un seul fichier compressé sur votre ordinateur — visible ici seulement, jamais pour les visiteurs.",
    "offline.export":"Tout télécharger pour un usage hors ligne","offline.preparing":"Préparation…","offline.progress":"{done}/{total} — {label}","offline.zipping":"Compression du fichier…","offline.done":"Terminé — vérifiez les téléchargements de votre navigateur.","offline.error":"Échec de l'exportation.",
    "gate.title":"Débloquer le Contenu 18+",
    "toggle.mature":"Contenu 18+",
    "admin.f.mature":"Contenu pour adultes (18+)",
    "badge.allages":"Tout public",
    "state.allages":"Vous voyez : contenu tout public.",
    "state.mature":"Vous voyez : contenu tout public + 18+ débloqué.",
    "admin.gate.notSignedIn":"Connectez-vous via le bouton \"Connexion\" en haut pour administrer l'index.",
    "admin.gate.notAdmin":"Le compte {email} n'a pas les droits d'administration.",
    "admin.f.price":"Prix (EUR, facultatif)",
    "pages.label":"Pages de la BD (images 1:1, type carrousel) — glissez pour réorganiser",
    "pages.uploading":"Envoi de la page {n} sur {total}…","pages.uploadError":"Échec de l'envoi des pages. Réessayez.",
    "cover.label":"Couverture (image d'aperçu dans le catalogue)","cover.uploading":"Envoi de la couverture…",
    "cover.change":"Changer la couverture","cover.addExisting":"Ajouter une couverture",
    "synopsis.translating":"Traduction du synopsis…","synopsis.translateExisting":"Traduire le synopsis",
    "synopsis.retranslate":"Retraduire le synopsis","synopsis.translateError":"Échec de la traduction. Réessayez.",
    "rewatermark.button":"Filigraner les pages","rewatermark.progress":"Filigrane page {n} sur {total}…","rewatermark.error":"Échec du filigrane. Réessayez.","rewatermark.done":"Filigrané",
    "catalog.permanent":"Permanent","catalog.temporary":"Temporaire","catalog.makeTemporary":"Rendre temporaire","catalog.makePermanent":"Rendre permanent",
    "collab.name":"Collaborateur (facultatif)","collab.url":"Lien du profil (ex. Instagram)",
    "collab.verified":"Collaborateur vérifié (affiche le badge bleu)",
    "verified.label":"Vérifié","verified.commenter":"Email vérifié","verified.founder":"Compte officiel","verified.collaborator":"Collaborateur vérifié",
    "collab.credit":"En collaboration avec","collab.categoryLabel":"Collaborateurs","collab.categoryOption":"Collaborateurs (hors des 4 personnages)",
    "collab.viewAll":"voir toutes les œuvres ensemble","collab.collectionBanner":"Œuvres réalisées avec","collab.showAll":"Tout afficher","titleModal.publishedBy":"Publié par",
    "share.button":"Partager","share.tagline":"sur LUX COMICS & MEDUSA COMICS",
    "share.copied":"Lien copié — collez-le où vous voulez le partager.",
    "share.manual":"Copiez ce texte pour le partager :",
    "pdf.label":"Ou téléversez la BD en PDF (A4) au lieu de pages individuelles",
    "pdf.uploading":"Envoi du PDF…","pdf.download":"Télécharger le PDF","pdf.preparing":"Préparation…","pdf.loginToDownload":"Connectez-vous pour télécharger le PDF",
    "maintenance.lockTitle":"Site en maintenance","maintenance.lockText":"Nous mettons à jour les archives. Revenez bientôt.",
    "charimg.title":"Images de profil des personnages",
    "social.title":"Liens sociaux (affichés en pied de page)","social.save":"Enregistrer les liens sociaux",
    "comments.moderationTitle":"Commentaires en attente d'approbation",
    "comments.title":"Commentaires","comments.submit":"Envoyer le commentaire",
    "comments.loginToComment":"Connectez-vous pour laisser un commentaire.",
    "comments.empty":"Pas encore de commentaires.","comments.pending":"en attente","comments.noPending":"Aucun commentaire en attente.",
    "comments.submittedPending":"Envoyé — en attente d'approbation.","comments.submittedPublished":"Publié.","comments.reply":"Répondre",
    "fav.add":"♡ Enregistrer","fav.remove":"♥ Enregistré",
    "card.readMore":"Lire la suite ↓","card.readLess":"Réduire ↑",
    "like.add":"👍 J'aime","like.remove":"👍 Aimé",
    "stats.title":"Statistiques par titre","stats.empty":"Aucun titre publié pour l'instant.",
    "stats.purchaseNote":"Les « achats » ne sont pas encore réels — aucun processeur de paiement n'est connecté. « Panier » compte l'intérêt (le nombre d'ajouts), pas les ventes confirmées.",
    "stats.views":"vues","stats.comments":"commentaires","stats.likes":"j'aime","stats.saves":"enregistrements","stats.shares":"partages","stats.cartAdds":"ajouts au panier",
    "cart.open":"Panier","cart.title":"Votre panier","cart.pending":"Paiement en cours de configuration",
    "cart.notice":"Le panier est prêt, mais aucun processeur de paiement n'est encore connecté. Une fois que l'admin en choisira un, vous pourrez finaliser l'achat ici.",
    "cart.clear":"Vider le panier","cart.empty":"Votre panier est vide.","cart.add":"Ajouter au panier",
    "auth.confirmEmailSent":"Vérifiez votre email pour confirmer le compte, puis connectez-vous."
  },
  de:{
    "gate.sub":"Inhalt für Erwachsene",
    "gate.body":"Dieses Archiv enthält Werke für ein erwachsenes Publikum. Mit dem Fortfahren bestätigen Sie, mindestens 18 Jahre alt zu sein und bewusst expliziten Inhalten zuzustimmen.",
    "gate.enter":"Ich bin 18 Jahre oder älter — Freischalten","gate.leave":"Abbrechen",
    "gate.legal":"Mit dem Fortfahren bestätigen Sie außerdem, die Gesetze Ihrer Rechtsordnung zum Zugang zu Erwachseneninhalten einzuhalten.",
    "nav.library":"Index","nav.characters":"Dossiers","nav.founder":"Gründer","nav.admin":"Admin","nav.login":"Anmelden","nav.logout":"Abmelden",
    "hero.title1":"DAS ARCHIV DER","hero.title2":"VERBOTENEN LUST",
    "hero.tagline":"Autoren-Comics — exklusive Ausgabe",
    "hero.lede":"Vier Siegel, vier Stimmen: Lucifer, Lilith, Lucifera und Lucio hüten je eine Reihe dieses Hauses. Der Index steht allen offen — 18+-Titel liegen hinter einem eigenen Schalter, den Sie jederzeit freischalten können. Jede Seite entsteht auf Englisch und kommt so in den Index — nur Ihre Zugangssprache liegt bei Ihnen.",
    "hero.cta1":"Index durchsuchen","hero.cta2":"Dossiers entdecken",
    "characters.eyebrow":"Dossiers","characters.title":"Die Vier Siegel","characters.desc":"Jede Figur leitet eine eigene Reihe mit eigenem Ton und eigener Mythologie.",
    "library.eyebrow":"Index","library.title":"Werkkatalog",
    "founder.eyebrow":"Verlagshaus","founder.title":"Der Gründer","founder.role":"Gründer & Verlagsleiter",
    "founder.body":"Nox Morningstar gründete LUX COMICS & MEDUSA COMICS als Zuflucht für Geschichten, die anderswo keinen Platz fänden: Werke für ein erwachsenes, einwilligendes Publikum, in denen das Verbotene erzählerisches Material ist, keine Provokation um ihrer selbst willen. Jede Reihe — Lucifer, Lilith, Lucifera, Lucio — trägt seine Signatur in Form eines Siegels, Garant einer einzigen redaktionellen Vision hinter unterschiedlichen Stimmen.",
    "admin.eyebrow":"Privater Bereich","admin.title":"Index-Verwaltung",
    "admin.noticeLabel":"Status —",
    "admin.tab.catalog":"Katalog","admin.tab.stats":"Statistiken","admin.tab.social":"Figuren & Social",
    "admin.tab.comments":"Kommentare","admin.tab.requests":"Anfragen","admin.tab.announcements":"Neuigkeiten","admin.tab.users":"Nutzer","admin.tab.maintenance":"Wartung",
    "users.title":"Registrierte Nutzer","users.hint":"Das blaue Häkchen kann erst 90 Tage nach der Anmeldung vergeben werden. Du entscheidest, einzeln.",
    "users.empty":"Noch keine registrierten Nutzer.","users.noName":"Nutzer","users.joined":"Angemeldet am","users.daysHere":"{n} Tage dabei",
    "users.eligible":"Berechtigt","users.waitingDays":"noch {n} Tage","users.grant":"Häkchen vergeben","users.revoke":"Häkchen entfernen","users.earlyGrantConfirm":"{name} hat die 90 Tage noch nicht erreicht (noch {n} Tage). Häkchen trotzdem als Ausnahme vergeben?",
    "notif.title":"Benachrichtigungen","notif.markAll":"Alle als gelesen markieren","notif.empty":"Keine Benachrichtigungen.","notif.someone":"Jemand","notif.justNow":"Gerade eben","notif.minsAgo":"vor {n} Min","notif.hoursAgo":"vor {n} Std","notif.daysAgo":"vor {n} T",
    "nav.community":"Community","community.eyebrow":"Jenseits des Archivs","community.title":"Community","community.rule":"Keine pornografischen Inhalte: höchstens sinnlich. Wer gegen die Regel verstößt, wird gesperrt und von der Seite entfernt.","community.tabChannels":"Kanäle","community.tabDms":"Private Nachrichten","community.tabCollab":"Mitwirkende","community.collabHint":"Die zusammen mit eingeladenen Mitwirkenden veröffentlichten Werke, alle an einem Ort.","diary.tab":"Tagebuch","diary.hint":"Teile ein Foto, eine Stimmung oder eine Notiz zu deinem Tag — alle sehen es hier.","diary.kindPhoto":"📷 Foto","diary.kindMood":"🙂 Stimmung","diary.kindNote":"📝 Tagesnotiz","diary.captionPh":"Bildunterschrift (optional)…","diary.moodPh":"Möchtest du ein paar Worte hinzufügen? (optional)…","diary.notePh":"Wie war dein Tag?","diary.publish":"Veröffentlichen","diary.filterAll":"Alle","diary.filterBy":"Von {name} ×","diary.needPhoto":"Wähle zuerst ein Foto.","diary.needMood":"Wähle zuerst eine Stimmung.","diary.publishError":"Veröffentlichung fehlgeschlagen. Erneut versuchen.","diary.empty":"Noch keine Beiträge — sei der Erste.","pubProfile.notFound":"Profil nicht gefunden.","pubProfile.titlesHeading":"Veröffentlichte Titel","pubProfile.diaryHeading":"Tagebuch","pubProfile.memberSince":"Mitglied seit {date}","userDir.title":"Nutzer","userDir.online":"Online","userDir.offline":"Offline","userDir.empty":"Noch keine Nutzer.","userDir.verifiedFriends":"Verifizierte Freunde","userDir.others":"Weitere Nutzer","userDir.loadError":"Nutzer können gerade nicht geladen werden. Später erneut versuchen.","chat.notFound":"Öffne diese Seite über ein Profil oder das Nutzer-Panel.","chat.messagePlaceholder":"Nachricht schreiben…","chat.file":"Datei","chat.photo":"Foto","chat.sendError":"Nachricht nicht gesendet. Erneut versuchen.","chat.delete":"Löschen","chat.deleteConfirm":"Diese Unterhaltung löschen? Kann nicht rückgängig gemacht werden.","chat.deleteError":"Unterhaltung konnte nicht gelöscht werden. Später erneut versuchen.","chat.translate":"Übersetzen","chat.translateUndo":"Original anzeigen","community.archive":"Archivieren","community.unarchive":"Wiederherstellen","community.newChannelPh":"Name des neuen Kanals (z. B. Kino)","community.createChannel":"Kanal erstellen","community.back":"← Zurück","community.messagePh":"Nachricht schreiben…","community.send":"Senden","community.dmHint":"Um jemandem privat zu schreiben, öffne eine seiner Nachrichten in einem Kanal und nutze \"Private Nachricht\".","community.noChannels":"Noch keine Kanäle. Erstelle einen.","community.noMessages":"Noch keine Nachrichten.","community.noDms":"Noch keine privaten Gespräche.","community.privateMessage":"Private Nachricht","community.report":"Melden","community.reportPrompt":"Warum meldest du diese Nachricht? (optional)","community.reportSent":"Meldung gesendet, danke.","community.you":"Du","community.tabFriends":"Freunde","community.addFriend":"Freund hinzufügen","community.requestSent":"Anfrage gesendet","community.acceptFriend":"Freundschaft annehmen","community.declineFriend":"Ablehnen","community.pendingReceived":"Erhaltene Anfragen","community.pendingSent":"Gesendete Anfragen","community.friendsList":"Deine Freunde","community.searchFriends":"Person suchen","community.searchFriendsPh":"Benutzername…","community.noResults":"Keine Ergebnisse.",
    "collabSession.title":"Aktive Erstellungssitzungen","collabSession.hint":"Ein zum Erstellen eingeladener Freund kann Titel nur veröffentlichen, solange seine Sitzung aktiv ist.","collabSession.active":"Aktive Erstellungssitzung","collabSession.hintCollab":"Du kannst Titel zum Katalog hinzufügen, solange die Sitzung aktiv ist. Wenn du nicht rechtzeitig fertig wirst, bitte um eine Verlängerung.","collabSession.requestExtension":"Ich schaffe es nicht, Verlängerung anfragen","collabSession.countdown":"Läuft ab in {h}Std {m}Min","collabSession.expired":"Sitzung abgelaufen.","collabSession.extensionPending":"Verlängerung angefragt, wartet auf Admin","collabSession.invite":"Zum Erstellen einladen","collabSession.inviteConfirm":"{name} für 24 Stunden zum Erstellen und Veröffentlichen einladen?","collabSession.inviteSent":"Einladung gesendet.","collabSession.inviteNotif":"Du wurdest eingeladen, einen Titel zu erstellen und zu veröffentlichen — du hast 24 Stunden.","collabSession.extend48":"Um 48Std verlängern","myTitles.heading":"Deine veröffentlichten Titel","myTitles.cancel":"Bearbeitung abbrechen",
    "smallnox.title":"Dein Assistent","smallnox.blurb":"SmallNox genehmigt unbedenkliche Kommentare und Anmeldungen von selbst und meldet sich -wütend- nur, wenn etwas verdächtig wirkt.","smallnox.communityBlurb":"SmallNox wacht über diese Kanäle -wenn du etwas Regelwidriges schreibst, bemerkt er es.","smallnox.modalTitle":"Hallo, ich bin SmallNox","smallnox.modalBody":"Ich prüfe neue Kommentare und neue Anmeldungen ganz allein: sind sie unbedenklich, lasse ich sie sofort durch, sonst melde ich sie Nox Morningstar. In den Community-Kanälen mache ich dasselbe -schreib respektvoll und du wirst mich nie wütend erleben.","smallnox.tipsTitle":"Ein schneller Tipp","smallnox.tip1":"Schreibe @benutzername in einem Kommentar oder einer Nachricht, um jemanden zu markieren — er wird benachrichtigt.","smallnox.tip2":"In privaten Nachrichten findest du Emojis und GIFs direkt unter dem Textfeld.","smallnox.tip3":"Tippe im Katalog auf den Filter \"Mitwirkende\", um die Arbeiten einer Person zu sehen.","smallnox.tip4":"In deinen privaten Community-Nachrichten gibt es Lesebestätigungen und einen grünen Punkt, wenn die andere Person online ist.","smallnox.tip5":"Hast du selbst einen Titel veröffentlicht? Du kannst ihn jederzeit im Admin-Bereich bearbeiten, auch nach Ablauf deiner Sitzung.","smallnox.tip6":"Tippe von jeder Seite aus oben links auf das Wappen, um sofort zur Startseite zurückzukehren.","smallnoxUpdates.title":"Neuigkeiten aus dem Archiv","smallnoxUpdates.sub":"Was sich zuletzt auf der Seite geändert hat — ich fasse es zusammen.","smallnoxUpdates.close":"Verstanden",
    "community.loadError":"Laden fehlgeschlagen (Verbindung prüfen).","community.retry":"Erneut versuchen",
    "admin.tab.moderation":"Community-Moderation","mod.reportsTitle":"Offene Meldungen","mod.flaggedTitle":"Automatisch markierte Nachrichten","mod.bannedTitle":"Gesperrte Nutzer (blockierte E-Mails)","mod.empty":"Aktuell nichts.","mod.typeChannel":"Kanal-Nachricht","mod.typeDm":"Private Nachricht","mod.hide":"Ausblenden","mod.ban":"Sperren und löschen","mod.noUser":"Nutzer nicht gefunden.","mod.banConfirm":"Bestätigen? Der Nutzer wird gesperrt, sein Konto gelöscht, und er kann sich nicht erneut mit derselben E-Mail registrieren.","mod.banFailed":"Vorgang fehlgeschlagen.",
    "users.onlineNow":"{n} Nutzer gerade online","users.onlineTag":"Gerade online",
    "announcements.eyebrow":"Von der Redaktion","announcements.title":"Neuigkeiten","announcements.readMore":"Lesen","announcements.share":"Teilen","announcements.downloadPdf":"PDF herunterladen",
    "announcements.archived":"Archiviert","announcements.expiresIn":"läuft in {h}Std ab","announcements.extend":"24Std verlängern",
    "announcements.newTitle":"Neue Ankündigung","announcements.f.title":"Titel","announcements.f.body":"Text","announcements.f.link":"Link (optional)","announcements.f.image":"Bild (optional — jedes Seitenverhältnis)","announcements.f.pdf":"PDF-Datei (optional)",
    "announcements.publish":"Ankündigung veröffentlichen","announcements.publishError":"Veröffentlichung fehlgeschlagen. Erneut versuchen.",
    "announcements.existingTitle":"Veröffentlichte Ankündigungen","announcements.empty":"Noch keine Ankündigungen.",
    "announcements.statusPublished":"Veröffentlicht","announcements.statusHidden":"Verborgen","announcements.hide":"Verbergen","announcements.show":"Anzeigen",
    "latest.eyebrow":"Gerade Erschienen","latest.title":"Neueste Kapitel","latest.newTag":"Neu",
    "profile.title":"Mein Profil","profile.sub":"Für andere sichtbar, wenn du kommentierst",
    "profile.displayName":"Anzeigename","profile.bio":"Bio (optional)","profile.favChars":"Lieblingscharaktere",
    "profile.avatarHd":"HD-Profilbild (optional)","profile.avatarHdHint":"Wird in voller Auflösung angezeigt, wenn jemand auf dein Avatar tippt. Wenn du keins hochlädst, wird das normale Foto angezeigt.",
    "profile.banner":"Profil-Banner (optional)","profile.socials":"Deine Social-Media-Profile (optional)","profile.website":"Webseite","pubProfile.favoritesHeading":"Favoriten",
    "push.enable":"Benachrichtigungen aktivieren","push.enabled":"Benachrichtigungen an","push.unsupported":"Dein Browser unterstützt keine Push-Benachrichtigungen.","push.denied":"Erlaubnis verweigert — du kannst sie in den Browsereinstellungen wieder aktivieren.","push.error":"Benachrichtigungen konnten nicht aktiviert werden, versuch es erneut.","push.installFirst":"Installieren für Benachrichtigungen","push.installFirstLong":"Auf iPhone/iPad funktionieren Benachrichtigungen erst nach der Installation der Seite: Tippe auf Teilen → Zum Home-Bildschirm, öffne die App von dort und versuch es erneut.",
    "profile.birthDate":"Geburtsdatum","profile.gender":"Geschlecht","profile.genderUnset":"— Möchte ich nicht angeben —","profile.genderM":"Männlich","profile.genderF":"Weiblich","profile.genderX":"Andere","profile.avatarInfoEmpty":"Keine zusätzlichen Informationen geteilt",
    "profile.save":"Profil speichern","profile.saveError":"Speichern fehlgeschlagen. Erneut versuchen.",
    "requests.title":"Meine Anfragen","requests.hint":"Ein Titel, den du dir wünschst, eine Übersetzung, eine Idee — schreib es hier, ich lese alles.",
    "requests.placeholder":"Deine Anfrage schreiben…","requests.submit":"Anfrage senden","requests.submitError":"Senden fehlgeschlagen. Erneut versuchen.",
    "requests.statusNew":"Ausstehend","requests.statusRead":"Gelesen","requests.adminTitle":"Erhaltene Anfragen",
    "requests.empty":"Noch keine Anfragen erhalten.","requests.markRead":"Als gelesen markieren","requests.sent":"Anfrage gesendet! Ich melde mich bald bei dir.",
    "sync.notConfigured":"Supabase-Backend noch nicht verbunden — die Seite läuft lokal, bis die Einrichtung erfolgt.",
    "sync.configuredNoToken":"Mit Supabase zum Lesen verbunden. Melden Sie sich mit den Admin-Zugangsdaten an, um Änderungen zu veröffentlichen.",
    "sync.ready":"Mit Supabase verbunden — Sie sind als Administrator angemeldet, Änderungen sind für alle öffentlich.",
    "sync.syncing":"Synchronisierung läuft…",
    "sync.error":"Sync-Fehler — Änderungen sind vorerst nur hier gespeichert, später erneut versuchen.",
    "sync.resync":"Jetzt synchronisieren",
    "admin.signin.email":"Admin-E-Mail","admin.signin.password":"Passwort",
    "admin.signin.btn":"Als Admin anmelden","admin.signin.error":"Ungültige Anmeldedaten oder Backend nicht erreichbar.",
    "admin.signOut":"Admin abmelden",
    "admin.f.title":"Titel","admin.f.character":"Figur","admin.f.issue":"Nummer / Band","admin.f.date":"Veröffentlichungsdatum","admin.f.synopsis":"Zusammenfassung (Englisch — Text der Werke)",
    "admin.add":"Zum Index hinzufügen","admin.edit":"Bearbeiten","admin.saveChanges":"Änderungen speichern","admin.export":"JSON exportieren","admin.import":"JSON importieren",
    "footer.line":"OFFENES ARCHIV · 18+ BEREICH AUF ANFRAGE · TRAD.CLAB WORKS",
    "newsletter.eyebrow":"Bleib Informiert","newsletter.title":"Newsletter Abonnieren",
    "newsletter.sub":"Neue Titel, Kollaborationen und Veröffentlichungen — direkt ins Postfach, kein Spam.",
    "newsletter.placeholder":"deine@email.de","newsletter.submit":"Abonnieren",
    "newsletter.success":"Erledigt — bitte E-Mail zur Bestätigung prüfen.","newsletter.error":"Anmeldung fehlgeschlagen. Erneut versuchen.",
    "auth.loginTitle":"Im Archiv anmelden","auth.registerTitle":"Konto erstellen","auth.sub":"Persönliches Konto",
    "auth.username":"Email","auth.password":"Passwort","auth.loginBtn":"Anmelden","auth.registerBtn":"Registrieren","auth.cancel":"Abbrechen",
    "auth.switchToRegister":"Noch kein Konto?","auth.switchToRegisterBtn":"Registrieren",
    "auth.switchToLogin":"Schon ein Konto?","auth.switchToLoginBtn":"Anmelden",
    "quiz.intro":"Bevor du dich registrierst, beweise, dass du das Archiv kennst.","quiz.lockedOut":"Zu viele falsche Antworten. Versuche es in {min} Minuten erneut.",
    "auth.note":"Hinweis: Das Konto speichert nur Ihre Sprachpräferenz für diese Seite, lokal in diesem Browser.",
    "err.userExists":"Benutzername bereits vergeben.","err.badLogin":"Ungültige Anmeldedaten.","err.required":"Bitte alle Felder ausfüllen.",
    "admin.deleted":"entfernt","admin.confirmDelete":"Diesen Titel aus dem Index entfernen?",
    "filter.all":"Alle",
    "maintenance.text":"Seite in Wartung — wir aktualisieren gerade das Archiv, schau bald wieder vorbei.",
    "maintenance.toggle":"Wartungsmodus (für alle Besucher sichtbar)","maintenance.scheduleTitle":"Was Besucher sehen","maintenance.scheduleHint":"Erkläre, warum die Seite pausiert und für wie lange — bleibt gespeichert, auch wenn der Schalter aus ist, damit du im Voraus vorbereiten kannst.","maintenance.reasonLabel":"Grund (woran du arbeitest)","maintenance.reasonPh":"Z. B. Neue Kapitel hochladen und den Seitenleser reparieren.","maintenance.startLabel":"Voraussichtlicher Start","maintenance.endLabel":"Voraussichtliches Ende","maintenance.saveSchedule":"Details speichern","maintenance.scheduleSaved":"Gespeichert.","maintenance.fromLabel":"Von","maintenance.toLabel":"bis",
    "night.toggle":"Automatische Nachtschließung","night.hint":"Die Seite sperrt sich jede Nacht in diesem Zeitfenster automatisch, damit sie nicht unnötig offen bleibt, und öffnet sich morgens von selbst wieder.","night.startLabel":"Schließt um","night.endLabel":"Öffnet wieder um","night.lockTitle":"Gute Nacht","night.lockText":"Das Archiv schließt nachts und öffnet morgens wieder.","night.reopensAt":"Öffnet wieder um {time}",
    "offline.title":"Offline-Kopie (nur für dich)","offline.hint":"Lade alle Titel, Seiten und Cover als eine komprimierte Datei auf deinen Computer herunter — nur hier sichtbar, nie für Besucher.",
    "offline.export":"Alles für Offline-Nutzung herunterladen","offline.preparing":"Vorbereitung…","offline.progress":"{done}/{total} — {label}","offline.zipping":"Datei wird komprimiert…","offline.done":"Fertig — prüfe die Downloads deines Browsers.","offline.error":"Export fehlgeschlagen.",
    "gate.title":"18+ Inhalte freischalten",
    "toggle.mature":"18+ Inhalte",
    "admin.f.mature":"Inhalt für Erwachsene (18+)",
    "badge.allages":"Alle",
    "state.allages":"Sie sehen: Inhalte für alle Altersgruppen.",
    "state.mature":"Sie sehen: Inhalte für alle + 18+ freigeschaltet.",
    "admin.gate.notSignedIn":"Melden Sie sich oben über \"Anmelden\" an, um den Index zu verwalten.",
    "admin.gate.notAdmin":"Das Konto {email} hat keine Admin-Rechte.",
    "admin.f.price":"Preis (EUR, optional)",
    "pages.label":"Comicseiten (1:1-Bilder, Karussell-Stil) — zum Sortieren ziehen",
    "pages.uploading":"Lade Seite {n} von {total} hoch…","pages.uploadError":"Hochladen der Seiten fehlgeschlagen. Erneut versuchen.",
    "cover.label":"Cover (Vorschaubild im Katalog)","cover.uploading":"Cover wird hochgeladen…",
    "cover.change":"Cover ändern","cover.addExisting":"Cover hinzufügen",
    "synopsis.translating":"Synopsis wird übersetzt…","synopsis.translateExisting":"Synopsis übersetzen",
    "synopsis.retranslate":"Erneut übersetzen","synopsis.translateError":"Übersetzung fehlgeschlagen. Erneut versuchen.",
    "rewatermark.button":"Seiten neu wasserzeichen","rewatermark.progress":"Wasserzeichen Seite {n} von {total}…","rewatermark.error":"Wasserzeichen fehlgeschlagen. Erneut versuchen.","rewatermark.done":"Wasserzeichen gesetzt",
    "catalog.permanent":"Permanent","catalog.temporary":"Zeitlich begrenzt","catalog.makeTemporary":"Zeitlich begrenzen","catalog.makePermanent":"Permanent machen",
    "collab.name":"Mitarbeiter*in (optional)","collab.url":"Profillink (z. B. Instagram)",
    "collab.verified":"Verifizierte*r Mitarbeiter*in (zeigt das blaue Häkchen)",
    "verified.label":"Verifiziert","verified.commenter":"E-Mail verifiziert","verified.founder":"Offizieller Account","verified.collaborator":"Verifizierte*r Mitarbeiter*in",
    "collab.credit":"In Zusammenarbeit mit","collab.categoryLabel":"Mitwirkende","collab.categoryOption":"Mitwirkende (außerhalb der 4 Charaktere)",
    "collab.viewAll":"alle gemeinsamen Werke ansehen","collab.collectionBanner":"Werke entstanden mit","collab.showAll":"Alle anzeigen","titleModal.publishedBy":"Veröffentlicht von",
    "share.button":"Teilen","share.tagline":"auf LUX COMICS & MEDUSA COMICS",
    "share.copied":"Link kopiert — fügen Sie ihn ein, wo Sie ihn teilen möchten.",
    "share.manual":"Diesen Text zum Teilen kopieren:",
    "pdf.label":"Oder Comic als PDF (A4) statt Einzelseiten hochladen",
    "pdf.uploading":"PDF wird hochgeladen…","pdf.download":"PDF herunterladen","pdf.preparing":"Wird vorbereitet…","pdf.loginToDownload":"Anmelden, um das PDF herunterzuladen",
    "maintenance.lockTitle":"Website in Wartung","maintenance.lockText":"Wir aktualisieren das Archiv. Schau bald wieder vorbei.",
    "charimg.title":"Profilbilder der Charaktere",
    "social.title":"Social-Links (im Footer angezeigt)","social.save":"Social-Links speichern",
    "comments.moderationTitle":"Kommentare zur Freigabe",
    "comments.title":"Kommentare","comments.submit":"Kommentar senden",
    "comments.loginToComment":"Melden Sie sich an, um einen Kommentar zu hinterlassen.",
    "comments.empty":"Noch keine Kommentare.","comments.pending":"ausstehend","comments.noPending":"Keine ausstehenden Kommentare.",
    "comments.submittedPending":"Gesendet — wartet auf Freigabe.","comments.submittedPublished":"Veröffentlicht.","comments.reply":"Antworten",
    "fav.add":"♡ Speichern","fav.remove":"♥ Gespeichert",
    "card.readMore":"Mehr lesen ↓","card.readLess":"Weniger anzeigen ↑",
    "like.add":"👍 Gefällt mir","like.remove":"👍 Gefällt dir",
    "stats.title":"Statistiken pro Titel","stats.empty":"Noch keine Titel veröffentlicht.",
    "stats.purchaseNote":"\u201eKäufe\u201c sind noch nicht real — es ist kein Zahlungsanbieter verbunden. \u201eWarenkorb\u201c zählt Interesse (wie oft hinzugefügt), keine bestätigten Verkäufe.",
    "stats.views":"Aufrufe","stats.comments":"Kommentare","stats.likes":"Gefällt mir","stats.saves":"Gespeichert","stats.shares":"Geteilt","stats.cartAdds":"In den Warenkorb",
    "cart.open":"Warenkorb","cart.title":"Ihr Warenkorb","cart.pending":"Zahlung wird eingerichtet",
    "cart.notice":"Der Warenkorb ist bereit, aber es ist noch kein Zahlungsanbieter verbunden. Sobald der Admin einen auswählt, können Sie hier bezahlen.",
    "cart.clear":"Warenkorb leeren","cart.empty":"Ihr Warenkorb ist leer.","cart.add":"In den Warenkorb",
    "auth.confirmEmailSent":"Bestätigen Sie Ihr Konto per E-Mail und melden Sie sich dann an."
  }
};

var CHAR_META = {
  Lucifer:{role:{it:"Il Portatore di Luce",en:"The Light-Bearer",es:"El Portador de Luz",fr:"Le Porteur de Lumière",de:"Der Lichtträger"},
    bio:{it:"Sovrano della collana ammiraglia: potere, caduta e desiderio raccontati su grande scala.",
         en:"Sovereign of the flagship line: power, downfall and desire told on a grand scale.",
         es:"Soberano de la colección insignia: poder, caída y deseo narrados a gran escala.",
         fr:"Souverain de la collection phare : pouvoir, chute et désir racontés à grande échelle.",
         de:"Herrscher der Flaggschiff-Reihe: Macht, Fall und Begierde im großen Stil erzählt."}},
  Lilith:{role:{it:"La Prima Ribelle",en:"The First Rebel",es:"La Primera Rebelde",fr:"La Première Rebelle",de:"Die Erste Rebellin"},
    bio:{it:"Voce femminile della casa: autonomia, seduzione e mito riscritti da lei stessa.",
         en:"The house's feminine voice: autonomy, seduction and myth rewritten on her own terms.",
         es:"Voz femenina de la casa: autonomía, seducción y mito reescritos por ella misma.",
         fr:"Voix féminine de la maison : autonomie, séduction et mythe réécrits à sa manière.",
         de:"Die weibliche Stimme des Hauses: Autonomie, Verführung und neu geschriebener Mythos."}},
  Lucifera:{role:{it:"La Sorella Oscura",en:"The Dark Sister",es:"La Hermana Oscura",fr:"La Sœur Sombre",de:"Die Dunkle Schwester"},
    bio:{it:"Sorella di Lucifer: la sua stessa fiamma, portata con uno sguardo tutto suo — più intima, più terrena.",
         en:"Lucifer's sister: the same flame, carried in her own way — more intimate, more earthbound.",
         es:"Hermana de Lucifer: la misma llama, llevada a su manera — más íntima, más terrenal.",
         fr:"Sœur de Lucifer : la même flamme, portée à sa façon — plus intime, plus terrestre.",
         de:"Lucifers Schwester: dieselbe Flamme, auf ihre eigene Art getragen — intimer, geerdeter."}},
  Lucio:{role:{it:"Il Volto Umano",en:"The Human Face",es:"El Rostro Humano",fr:"Le Visage Humain",de:"Das Menschliche Gesicht"},
    bio:{it:"Il quarto sigillo, il più vicino al lettore: tentazioni piccole, quotidiane, riconoscibili.",
         en:"The fourth seal, closest to the reader: small, everyday, recognizable temptations.",
         es:"El cuarto sello, el más cercano al lector: tentaciones pequeñas y cotidianas, reconocibles.",
         fr:"Le quatrième sceau, le plus proche du lecteur : de petites tentations quotidiennes et reconnaissables.",
         de:"Das vierte Siegel, dem Leser am nächsten: kleine, alltägliche, wiedererkennbare Versuchungen."}}
};

var currentLang = localStorage.getItem('lux_lang') || 'it';

function t(key){
  var lang = STR[currentLang] ? currentLang : 'it';
  return (STR[lang] && STR[lang][key]) || (STR.it[key]) || key;
}
function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
    var key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
    var key = el.getAttribute('data-i18n-aria');
    el.setAttribute('aria-label', t(key));
  });
  document.documentElement.lang = currentLang;
  document.getElementById('langSelect').value = currentLang;
}
function setLang(lang){
  currentLang = lang;
  localStorage.setItem('lux_lang', lang);
  applyI18n();
  renderDossiers();
  renderCatalog();
  renderAdminList();
  updateSyncStatus();
}

/* ============ UNIFIED SUPABASE AUTH (regular visitors + admin, same accounts) ============ */
// SUPABASE_URL and SUPABASE_ANON_KEY are meant to be public (Supabase's anon
// key is safe to embed client-side by design; access control is enforced
// server-side by Row Level Security policies, not by hiding this key).
var SUPABASE_URL = 'https://ukafvwyxdjsfzzoewujq.supabase.co';
var SUPABASE_ANON_KEY = 'sb_publishable_-jO_WGzMVo-3Xp5J75RwiA__u49YnPr';
var ADMIN_EMAIL = 'sergio.tradori@outlook.it'; // UI-gating only; real enforcement is server-side RLS

/* Le copertine caricate sono spesso file a piena risoluzione (pensati per
   la lettura), ma nelle griglie servono solo come miniatura — scaricare
   l'originale intero lì è lo spreco più grande di banda del sito. Supabase
   (piano Pro) sa ridimensionare/comprimere l'immagine al volo: basta
   chiedere l'endpoint "render/image" invece di "object" con una larghezza
   target. Se l'URL non è uno Storage Supabase riconoscibile (es. servizio
   esterno), lo lasciamo intatto invece di romperlo. */
function coverThumbUrl(url, width){
  if(!url) return url;
  var marker = '/storage/v1/object/public/';
  var idx = url.indexOf(marker);
  if(idx === -1) return url;
  return url.slice(0, idx) + '/storage/v1/render/image/public/' + url.slice(idx + marker.length) + '?width=' + width + '&quality=70';
}

/* Se la trasformazione immagini non è disponibile sul progetto Supabase,
   la versione ridotta risponde con errore invece che con l'immagine.
   Questo intercetta l'errore e mette al suo posto l'originale, in
   automatico e per sempre — nessun controllo manuale da fare: o funziona
   la miniatura leggera, o il sito torna da solo all'immagine intera. */
document.addEventListener('error', function(e){
  var img = e.target;
  if(img && img.tagName === 'IMG' && img.dataset && img.dataset.fallback && img.src !== img.dataset.fallback){
    img.src = img.dataset.fallback;
  }
}, true);

function getSession(){
  try{ return JSON.parse(localStorage.getItem('lux_session') || 'null'); }catch(e){ return null; }
}
function setSession(session){
  if(session){
    session.expires_at = Date.now() + (session.expires_in || 3600) * 1000;
    localStorage.setItem('lux_session', JSON.stringify(session));
  } else { localStorage.removeItem('lux_session'); }
}
function isSignedIn(){ var s = getSession(); return !!(s && s.access_token); }
function isAdmin(){ var s = getSession(); return isSignedIn() && s.user && s.user.email === ADMIN_EMAIL; }
function currentUserId(){ var s = getSession(); return s && s.user ? s.user.id : null; }
function currentUserEmail(){ var s = getSession(); return s && s.user ? s.user.email : null; }

// Nome da mostrare ad ALTRI utenti (commenti, canali, messaggi privati) — non deve
// mai contenere l'email, che è un dato privato. Se l'utente non ha ancora scelto
// un nome visualizzato, si usa un nome anonimo ma stabile basato sul suo id.
function publicDisplayName(profile){
  if(profile && profile.display_name) return profile.display_name;
  var uid = currentUserId();
  return uid ? (t('notif.someone') + ' ' + uid.slice(0,6)) : t('notif.someone');
}

// Access tokens expire after ~1 hour. Refresh a bit before that so the
// person never silently "falls out" of their session while the tab is open.
/* ============ PRESENCE (chi è online — solo per chi ha un account collegato) ============ */
var HEARTBEAT_INTERVAL_MS = 60000; // manda un segnale ogni 60 secondi
var ONLINE_WINDOW_MS = 120000; // considerato "online ora" se visto negli ultimi 2 minuti

function sendHeartbeat(){
  if(!isSignedIn()) return;
  var session = getSession();
  fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + encodeURIComponent(currentUserId()), {
    method:'PATCH',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({last_seen: new Date().toISOString()})
  }).catch(function(){ /* un battito perso non è un problema, il prossimo lo corregge */ });
}

function startHeartbeat(){
  sendHeartbeat();
  setInterval(function(){
    if(document.visibilityState === 'visible' && isSignedIn()) sendHeartbeat();
  }, HEARTBEAT_INTERVAL_MS);
}

function refreshSessionIfNeeded(){
  var s = getSession();
  if(!s || !s.refresh_token) return Promise.resolve(false);
  var msLeft = (s.expires_at || 0) - Date.now();
  if(msLeft > 5 * 60 * 1000) return Promise.resolve(true); // still fresh, nothing to do
  return fetch(SUPABASE_URL + '/auth/v1/token?grant_type=refresh_token', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Content-Type':'application/json' },
    body: JSON.stringify({refresh_token: s.refresh_token})
  }).then(function(r){ return r.json().then(function(data){
    if(!r.ok || !data.access_token){ setSession(null); return false; }
    setSession(data);
    return true;
  }); }).catch(function(){ setSession(null); return false; });
}

function authSignIn(email, password){
  return fetch(SUPABASE_URL + '/auth/v1/token?grant_type=password', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Content-Type':'application/json' },
    body: JSON.stringify({email:email, password:password})
  }).then(function(r){
    return r.json().then(function(data){
      if(!r.ok) throw new Error(data.error_description || data.msg || ('sign-in failed: ' + r.status));
      return data;
    });
  });
}
function authSignUp(email, password){
  return fetch(SUPABASE_URL + '/auth/v1/signup', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Content-Type':'application/json' },
    body: JSON.stringify({email:email, password:password})
  }).then(function(r){
    return r.json().then(function(data){
      if(!r.ok) throw new Error(data.error_description || data.msg || ('sign-up failed: ' + r.status));
      return data; // data.session is null if email confirmation is required
    });
  });
}
function authSignOut(){ setSession(null); currentProfile = null; }

/* ============ MATURE CONTENT TOGGLE ============ */
// Site defaults to all-ages. The 18+ switch reveals mature titles too, and
// only asks for age confirmation the first time it's turned on (per browser).
var matureVisible = false;

function openMatureModal(){ document.getElementById('matureModal').classList.remove('hidden'); }
function closeMatureModal(){ document.getElementById('matureModal').classList.add('hidden'); }

function setMatureVisible(on){
  matureVisible = on;
  localStorage.setItem('lux_mature_visible', on ? '1' : '0');
  document.getElementById('matureSwitch').checked = on;
  updateMatureStateLabel();
  renderCatalog();
}

function updateMatureStateLabel(){
  var el = document.getElementById('matureStateLabel');
  if(el) el.textContent = t(matureVisible ? 'state.mature' : 'state.allages');
}

/* ============ DAY / NIGHT THEME ============ */
function applyTheme(theme){
  document.body.classList.toggle('theme-light', theme === 'light');
  var moonIcon = document.getElementById('themeIconMoon');
  var sunIcon = document.getElementById('themeIconSun');
  if(moonIcon) moonIcon.classList.toggle('hidden', theme === 'light');
  if(sunIcon) sunIcon.classList.toggle('hidden', theme !== 'light');
  var themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if(themeColorMeta) themeColorMeta.setAttribute('content', theme === 'light' ? '#f4efe2' : '#6e1423');
  localStorage.setItem('lux_theme', theme);
}
function initTheme(){
  var saved = localStorage.getItem('lux_theme');
  if(!saved){
    saved = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
  }
  applyTheme(saved);
  document.getElementById('btnTheme') && document.getElementById('btnTheme').addEventListener('click', function(){
    applyTheme(document.body.classList.contains('theme-light') ? 'dark' : 'light');
  });
}

function initMatureToggle(){
  var sw = document.getElementById('matureSwitch');  matureVisible = false; // always starts off on load/refresh, regardless of prior age verification
  sw.checked = false;
  updateMatureStateLabel();

  sw.addEventListener('change', function(){
    if(sw.checked){
      var verified = localStorage.getItem('lux_age_ok') === '1';
      if(verified){
        setMatureVisible(true);
      } else {
        sw.checked = false; // revert until confirmed
        openMatureModal();
      }
    } else {
      setMatureVisible(false);
    }
  });

  document.getElementById('gateEnter') && document.getElementById('gateEnter').addEventListener('click', function(){
    localStorage.setItem('lux_age_ok','1');
    closeMatureModal();
    setMatureVisible(true);
    if(pendingDeepLinkItem){
      var toOpen = pendingDeepLinkItem;
      pendingDeepLinkItem = null;
      openTitleModal(toOpen);
    }
  });
  document.getElementById('gateLeave') && document.getElementById('gateLeave').addEventListener('click', function(){
    closeMatureModal();
    pendingDeepLinkItem = null;
  });
  document.getElementById('matureModal') && document.getElementById('matureModal').addEventListener('click', function(e){
    if(e.target.id === 'matureModal') closeMatureModal();
  });
}

/* ============ REGISTRATION QUIZ (rallenta le registrazioni casuali — non
   è sicurezza vera, è un ostacolo: chi vuole aggirarlo cancellando i dati
   del browser può sempre farlo, ma scoraggia i tentativi automatici/pigri) ============ */
var QUIZ_QUESTIONS = [
  { q:"Chi è il fondatore di LUX COMICS & MEDUSA COMICS?", options:["Lucifer Morningstar","Nox Morningstar","Lucio Emerald","Nox Lucifera"], correct:1 },
  { q:"Quante collane principali compongono l'Archivio?", options:["Due","Tre","Quattro","Cinque"], correct:2 },
  { q:"Chi è la sorella di Lucifer in questo universo?", options:["Lilith","Medusa","Lucifera","Nox"], correct:2 },
  { q:"In quale città è ambientata la collana LUX?", options:["Londra","Los Angeles","Edimburgo","New York"], correct:1 },
  { q:"Come si chiama la dimora di Lucio?", options:["The Black Manor","LUX Noir","Emerald Palace","Silver City"], correct:2 },
  { q:"In quale città è ambientata The Black Manor?", options:["Edimburgo","Los Angeles","Londra","Parigi"], correct:0 }
];
var QUIZ_MAX_FAILS = 4;
var QUIZ_LOCKOUT_MS = 10 * 60 * 1000;
var quizPassed = false;
var currentQuizQuestion = null;

function getQuizState(){
  try {
    var raw = localStorage.getItem('lux_quiz_state');
    return raw ? JSON.parse(raw) : {fails:0, lockoutUntil:0};
  } catch(e){ return {fails:0, lockoutUntil:0}; }
}
function saveQuizState(state){
  try { localStorage.setItem('lux_quiz_state', JSON.stringify(state)); } catch(e){}
}

function renderQuizGate(){
  var gate = document.getElementById('registerQuizGate');
  var fieldsWrap = document.getElementById('authFieldsWrap');
  if(quizPassed){
    gate.classList.add('hidden');
    fieldsWrap.classList.remove('hidden');
    return;
  }
  fieldsWrap.classList.add('hidden');
  gate.classList.remove('hidden');

  var qError = document.getElementById('quizError');
  var qText = document.getElementById('quizQuestionText');
  var qOptions = document.getElementById('quizOptions');
  var state = getQuizState();
  var now = Date.now();

  if(state.lockoutUntil > now){
    qText.textContent = '';
    qOptions.innerHTML = '';
    var minsLeft = Math.ceil((state.lockoutUntil - now) / 60000);
    qError.textContent = t('quiz.lockedOut').replace('{min}', minsLeft);
    return;
  }

  qError.textContent = '';
  currentQuizQuestion = QUIZ_QUESTIONS[Math.floor(Math.random() * QUIZ_QUESTIONS.length)];
  qText.textContent = currentQuizQuestion.q;
  qOptions.innerHTML = '';
  currentQuizQuestion.options.forEach(function(opt, idx){
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-ghost btn-sm quiz-option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', function(){ answerQuiz(idx); });
    qOptions.appendChild(btn);
  });
}

function answerQuiz(selectedIdx){
  var state = getQuizState();
  if(selectedIdx === currentQuizQuestion.correct){
    quizPassed = true;
    state.fails = 0;
    saveQuizState(state);
    renderQuizGate();
  } else {
    state.fails = (state.fails || 0) + 1;
    if(state.fails >= QUIZ_MAX_FAILS){
      state.lockoutUntil = Date.now() + QUIZ_LOCKOUT_MS;
      state.fails = 0;
    }
    saveQuizState(state);
    renderQuizGate();
  }
}

var authMode = 'login';
function openAuth(mode){
  authMode = mode || 'login';
  document.getElementById('authError').textContent = '';
  document.getElementById('authUser').value = '';
  document.getElementById('authPass').value = '';
  var titleKey = authMode === 'login' ? 'auth.loginTitle' : 'auth.registerTitle';
  document.getElementById('authTitle').textContent = t(titleKey);
  document.getElementById('authSubmit').textContent = t(authMode === 'login' ? 'auth.loginBtn' : 'auth.registerBtn');
  var switchLabel = document.getElementById('authSwitch');
  var switchText = document.getElementById('authSwitchText');
  if(authMode === 'login'){
    switchText.textContent = t('auth.switchToRegister');
    switchLabel.textContent = t('auth.switchToRegisterBtn');
  } else {
    switchText.textContent = t('auth.switchToLogin');
    switchLabel.textContent = t('auth.switchToLoginBtn');
  }
  if(authMode === 'register'){
    quizPassed = false;
    renderQuizGate();
  } else {
    document.getElementById('registerQuizGate').classList.add('hidden');
    document.getElementById('authFieldsWrap').classList.remove('hidden');
  }
  document.getElementById('authModal').classList.remove('hidden');
}
function closeAuth(){ document.getElementById('authModal').classList.add('hidden'); }

function handleAuthSubmit(){
  if(authMode === 'register' && !quizPassed) return; // difesa in più, i campi restano comunque nascosti finché non superi il quiz
  var email = document.getElementById('authUser').value.trim();
  var pass = document.getElementById('authPass').value;
  var err = document.getElementById('authError');
  err.textContent = '';
  if(!email || !pass){ err.textContent = t('err.required'); return; }
  if(!SUPABASE_URL){ err.textContent = t('sync.notConfigured'); return; }


  if(authMode === 'register'){
    authSignUp(email, pass).then(function(data){
      if(data.session){
        setSession(data.session);
        closeAuth();
        afterAuthChange();
      } else {
        closeAuth();
        alert(t('auth.confirmEmailSent'));
      }
    }).catch(function(e){
      err.textContent = e.message || t('err.badLogin');
    });
  } else {
    authSignIn(email, pass).then(function(data){
      setSession(data);
      closeAuth();
      afterAuthChange();
    }).catch(function(e){
      err.textContent = t('err.badLogin');
    });
  }
}

function afterAuthChange(){
  refreshAuthUI();
  refreshAdminUI();
  renderCatalog();
  loadFavorites();
  loadLikes();
  loadNotifications();
  loadMyCreationSession().then(refreshAdminUI);
  sendHeartbeat();
  renderMaintenanceBanner(); // se chi si è appena autenticato è l'admin, il blocco manutenzione deve sparire subito
  renderNightClosureLock(); // idem per la chiusura notturna
  var reader = document.getElementById('pageReader');
  if(reader && !reader.classList.contains('hidden')){ showReaderPage(readerIndex); } // aggiorna subito alla versione pulita se stava già leggendo
}

function refreshAuthUI(){
  var chip = document.getElementById('acctChip');
  var btnLogin = document.getElementById('btnLoginTop');
  var btnLogout = document.getElementById('btnLogoutTop');
  var navCommunity = document.getElementById('navCommunity');
  var communitySection = document.getElementById('communitySection');
  var smallnoxFloat = document.getElementById('smallnoxFloat');
  if(isSignedIn()){
    // Never show the raw email in the UI — for the admin account it would
    // expose a real name via the address. Show the public persona instead;
    // for any other signed-in visitor, show just the part before "@".
    if(isAdmin()){
      chip.innerHTML = 'Nox Morningstar ' + verifiedBadge('verified.founder');
    } else {
      var uid = currentUserId();
      var fallback = '@' + (currentUserEmail() || '').split('@')[0];
      chip.textContent = fallback; // placeholder finché arriva il nickname vero
      if(uid){
        getDisplayName(uid).then(function(name){
          chip.textContent = (name && name !== t('notif.someone')) ? name : fallback;
        });
      }
    }
    chip.classList.remove('hidden');
    btnLogin.classList.add('hidden');
    btnLogout.classList.remove('hidden');
    if(navCommunity) navCommunity.classList.remove('hidden');
    if(communitySection) communitySection.classList.remove('hidden');
    if(smallnoxFloat) smallnoxFloat.classList.remove('hidden');
    refreshSmallNoxBadge();
    refreshPushButtonUI();
    loadChannels();
    var pendingCommunityTab = sessionStorage.getItem('lux_pending_community_tab');
    if(pendingCommunityTab && document.getElementById('communitySection')){
      sessionStorage.removeItem('lux_pending_community_tab');
      switchCommunityTab(pendingCommunityTab);
    }
  } else {
    chip.classList.add('hidden');
    btnLogin.classList.remove('hidden');
    btnLogout.classList.add('hidden');
    if(navCommunity) navCommunity.classList.add('hidden');
    if(communitySection) communitySection.classList.add('hidden');
    if(smallnoxFloat) smallnoxFloat.classList.add('hidden');
  }
}

function refreshAdminUI(){
  var gateBox = document.getElementById('adminGateBox');
  var manageBox = document.getElementById('adminManageBox');
  var gateMsg = document.getElementById('adminGateMessage');
  var gateSignIn = document.getElementById('btnGateSignIn');
  var navAdmin = document.getElementById('navAdmin');
  var adminSection = document.getElementById('adminSection');
  var adminTabs = document.getElementById('adminTabs');
  var collabBanner = document.getElementById('collabSessionBanner');
  var smallnoxCard = document.getElementById('smallnoxCard');
  var admin = isAdmin();
  var collab = !admin && hasActiveCreationSession();
  var ownsPastTitles = !admin && isSignedIn() && getCatalog().some(function(x){ return x.created_by && x.created_by === currentUserId(); });
  // La voce "Amministra" nel menu va aggiornata su OGNI pagina (vive nell'header
  // condiviso) — non solo su admin.html, dove invece vivono gateBox/manageBox.
  if(navAdmin) navAdmin.classList.toggle('hidden', !(admin || collab || ownsPastTitles));
  if(!gateBox || !manageBox) return;
  if(admin){
    if(adminSection) adminSection.classList.remove('hidden'); // arrivando direttamente su admin.html (non da un click sul link) va rivelata qui, non solo dal click handler
    gateBox.classList.add('hidden');
    manageBox.classList.remove('hidden');
    if(adminTabs) adminTabs.classList.remove('hidden');
    if(collabBanner) collabBanner.classList.add('hidden');
    if(smallnoxCard) smallnoxCard.classList.remove('hidden');
    injectDraftModeToggle();
    renderAdminList();
    renderModerationQueue();
    loadSocialLinksIntoForm();
    renderCharImageAdmin();
    renderStatsPanel();
    renderAdminRequests();
    renderAdminAnnouncements();
    renderAdminUsers();
    renderAdminSessions();
    var pendingAdminTab = sessionStorage.getItem('lux_pending_admin_tab');
    if(pendingAdminTab){
      sessionStorage.removeItem('lux_pending_admin_tab');
      switchAdminTab(pendingAdminTab);
    }
  } else if(collab || ownsPastTitles){
    // Un collaboratore invitato vede SOLO il modulo "Aggiungi allo schedario"
    // (se la sessione è attiva) e/o i propri titoli già pubblicati, da poter
    // modificare in qualsiasi momento — niente altre tab, niente dati altrui.
    if(adminSection) adminSection.classList.remove('hidden');
    gateBox.classList.add('hidden');
    manageBox.classList.remove('hidden');
    if(adminTabs) adminTabs.classList.add('hidden');
    if(smallnoxCard) smallnoxCard.classList.add('hidden');
    document.querySelectorAll('.admin-tab-panel').forEach(function(panel){
      panel.classList.toggle('hidden', panel.dataset.tabPanel !== 'catalog');
    });
    var addEntryBtn = document.getElementById('btnAddEntry');
    if(collabBanner){
      collabBanner.classList.toggle('hidden', !collab);
      if(collab) renderCollabSessionBanner();
    }
    // Senza sessione attiva non si può pubblicare un titolo NUOVO — solo
    // modificare quelli già propri — quindi il pulsante "Aggiungi" si nasconde
    // finché non si è in modalità modifica (editingItemId valorizzato da openEditTitle).
    if(addEntryBtn) addEntryBtn.classList.toggle('hidden', !collab && !editingItemId);
    renderMyTitles();
  } else if(isSignedIn()){
    var gateUid = currentUserId();
    var gateFallback = '@' + (currentUserEmail() || '').split('@')[0];
    gateMsg.textContent = t('admin.gate.notAdmin').replace('{email}', gateFallback);
    if(gateUid){
      getDisplayName(gateUid).then(function(name){
        gateMsg.textContent = t('admin.gate.notAdmin').replace('{email}', (name && name !== t('notif.someone')) ? name : gateFallback);
      });
    }
    gateSignIn.classList.add('hidden');
    if(adminSection) adminSection.classList.add('hidden'); // no dangling section for non-admins
  } else {
    gateMsg.textContent = t('admin.gate.notSignedIn');
    gateSignIn.classList.remove('hidden');
    if(adminSection) adminSection.classList.add('hidden');
  }
  updateSyncStatus();
}

/* ============ CATALOG (local cache + Supabase sync) ============ */
var syncState = 'idle'; // idle | syncing | error

function getCatalog(){
  try{
    var raw = localStorage.getItem('lux_catalog');
    if(raw) return JSON.parse(raw);
  }catch(e){}
  var seed = [
    {id:'c1', character:'Lucifer', title:'Midnight Cathedral', issue:'Vol. 1 — Ch. 1', date:'2026-02-14', mature:true,
     synopsis:'A fallen sovereign returns to a city that both fears and worships him, and finds an old temptation waiting at the altar.'},
    {id:'c2', character:'Lucifer', title:'The Long Descent', issue:'Vol. 1 — Ch. 2', date:'2026-03-21', mature:true,
     synopsis:'Power has a price paid in memory. Lucifer bargains with a rival house to keep what he has already lost once.'},
    {id:'c3', character:'Lilith', title:'First Garden', issue:'Vol. 1 — Ch. 1', date:'2026-01-30', mature:true,
     synopsis:'Before the myths rewrote her, there was a garden and a choice. Lilith tells it her way, on her terms.'},
    {id:'c4', character:'Lilith', title:"Serpent's Ledger", issue:'Vol. 1 — Ch. 2', date:'2026-04-11', mature:true,
     synopsis:'Every debt Lilith has ever collected comes due at once, in a court that was never built to judge her.'},
    {id:'c5', character:'Lucifera', title:'Cattedrale di Vetro', issue:'Vol. 1 — Cap. 1', date:'2026-02-28', mature:true,
     synopsis:'An intimate counterpart to the flagship line: the same fall, seen from ground level, one street at a time.'},
    {id:'c6', character:'Lucio', title:'Ordinary Hours', issue:'Vol. 1 — Ch. 1', date:'2026-03-07', mature:true,
     synopsis:"Temptation doesn't always wear a crown. Sometimes it clocks in at nine and waits by the coffee machine."},
    {id:'c7', character:'Lucio', title:'Small Hours', issue:'Vol. 1 — Ch. 2', date:'2026-05-02', mature:true,
     synopsis:'A quiet story about the choices nobody sees — the ones made alone, after midnight, that change everything.'},
    {id:'c8', character:'Lilith', title:'Thorn and Throne', issue:'Vol. 2 — Ch. 1', date:'2026-06-19', mature:true,
     synopsis:'Lilith builds a court of her own from what the old one discarded — and dares anyone to call it lesser.'},
    {id:'c9', character:'Lucifer', title:'Origins: The Fall', issue:'Prequel — One-shot', date:'2026-01-05', mature:false,
     synopsis:'The all-ages origin story: how the brightest of them fell, told as legend rather than confession.'},
    {id:'c10', character:'Lucio', title:'The Coffee Shop Chronicles', issue:'Sampler — Ch. 1', date:'2026-01-12', mature:false,
     synopsis:'A lighter, all-ages spin-off following Lucio before the small hours catch up with him.'}
  ];
  localStorage.setItem('lux_catalog', JSON.stringify(seed));
  return seed;
}
function saveCatalogLocal(items){ localStorage.setItem('lux_catalog', JSON.stringify(items)); }

function updateSyncStatus(){
  var els = [document.getElementById('syncStatus2')];
  var text;
  if(!SUPABASE_URL){ text = t('sync.notConfigured'); }
  else if(syncState === 'syncing'){ text = t('sync.syncing'); }
  else if(syncState === 'error'){ text = t('sync.error'); }
  else if(!isAdmin()){ text = t('sync.configuredNoToken'); }
  else { text = t('sync.ready'); }
  els.forEach(function(el){ if(el) el.textContent = text; });
}

function fetchCatalogFromSupabase(){
  if(!SUPABASE_URL) return Promise.resolve(null);
  syncState = 'syncing'; updateSyncStatus();
  return fetch(SUPABASE_URL + '/rest/v1/catalog?select=*&order=date.desc', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + SUPABASE_ANON_KEY }
  })
    .then(function(r){ if(!r.ok) throw new Error('read failed: ' + r.status); return r.json(); })
    .then(function(items){
      return fetch(SUPABASE_URL + '/rest/v1/comment_counts?select=*', {
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + SUPABASE_ANON_KEY }
      })
        .then(function(r2){ return r2.ok ? r2.json() : []; })
        .catch(function(){ return []; })
        .then(function(counts){
          var countMap = {};
          counts.forEach(function(c){ countMap[c.catalog_id] = c.comment_count; });
          items.forEach(function(item){ item.comment_count = countMap[item.id] || 0; });
          return items;
        });
    })
    .then(function(items){
      saveCatalogLocal(items);
      syncState = 'idle'; updateSyncStatus();
      return items;
    })
    .catch(function(err){
      syncState = 'error'; updateSyncStatus();
      console.warn('Supabase sync (read) failed:', err);
      return null;
    });
}

function supabaseInsert(item){
  var session = getSession();
  if(!SUPABASE_URL || !session) return Promise.resolve(false);
  syncState = 'syncing'; updateSyncStatus();
  return fetch(SUPABASE_URL + '/rest/v1/catalog', {
    method:'POST',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer ' + session.access_token,
      'Content-Type':'application/json',
      'Prefer':'return=representation'
    },
    body: JSON.stringify(item)
  })
    .then(function(r){
      if(!r.ok) return r.json().then(function(e){ throw new Error(e.message || ('insert failed: ' + r.status)); });
      return r.json();
    })
    .then(function(){ syncState = 'idle'; updateSyncStatus(); return true; })
    .catch(function(err){
      syncState = 'error'; updateSyncStatus();
      console.warn('Supabase sync (insert) failed:', err);
      return false;
    });
}

function supabaseUpdate(id, patch){
  var session = getSession();
  if(!SUPABASE_URL || !session) return Promise.resolve(false);
  syncState = 'syncing'; updateSyncStatus();
  return fetch(SUPABASE_URL + '/rest/v1/catalog?id=eq.' + encodeURIComponent(id), {
    method:'PATCH',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer ' + session.access_token,
      'Content-Type':'application/json',
      'Prefer':'return=representation'
    },
    body: JSON.stringify(patch)
  })
    .then(function(r){
      if(!r.ok) return r.json().then(function(e){ throw new Error(e.message || ('update failed: ' + r.status)); });
      return r.json();
    })
    .then(function(){ syncState = 'idle'; updateSyncStatus(); return true; })
    .catch(function(err){
      syncState = 'error'; updateSyncStatus();
      console.warn('Supabase sync (update) failed:', err);
      return false;
    });
}

function supabaseDelete(id){
  var session = getSession();
  if(!SUPABASE_URL || !session) return Promise.resolve(false);
  syncState = 'syncing'; updateSyncStatus();
  return fetch(SUPABASE_URL + '/rest/v1/catalog?id=eq.' + encodeURIComponent(id), {
    method:'DELETE',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('delete failed: ' + r.status); syncState = 'idle'; updateSyncStatus(); return true; })
    .catch(function(err){
      syncState = 'error'; updateSyncStatus();
      console.warn('Supabase sync (delete) failed:', err);
      return false;
    });
}

function supabaseBulkUpsert(items){
  var session = getSession();
  if(!SUPABASE_URL || !session) return Promise.resolve(false);
  syncState = 'syncing'; updateSyncStatus();
  return fetch(SUPABASE_URL + '/rest/v1/catalog?on_conflict=id', {
    method:'POST',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer ' + session.access_token,
      'Content-Type':'application/json',
      'Prefer':'resolution=merge-duplicates,return=representation'
    },
    body: JSON.stringify(items)
  })
    .then(function(r){ if(!r.ok) throw new Error('bulk upsert failed: ' + r.status); return r.json(); })
    .then(function(){ syncState = 'idle'; updateSyncStatus(); return true; })
    .catch(function(err){
      syncState = 'error'; updateSyncStatus();
      console.warn('Supabase sync (bulk upsert) failed:', err);
      return false;
    });
}

/* ============ MAINTENANCE MODE (shared via Supabase, localized banner) ============ */
var maintenanceOn = false;
var maintenanceReason = '';
var maintenanceStart = null;
var maintenanceEnd = null;

function formatMaintenanceDate(iso){
  if(!iso) return '';
  var d = new Date(iso);
  if(isNaN(d.getTime())) return '';
  var datePart = d.toLocaleDateString(currentLang, {day:'2-digit', month:'2-digit'});
  var timePart = d.toLocaleTimeString(currentLang, {hour:'2-digit', minute:'2-digit'});
  return datePart + ' ' + timePart;
}

function renderMaintenanceBanner(){
  var el = document.getElementById('maintenanceBanner');
  if(!el) return;
  el.classList.toggle('show', maintenanceOn);
  var lock = document.getElementById('maintenanceLock');
  if(lock) lock.classList.toggle('hidden', !(maintenanceOn && !isAdmin()));

  var reasonEl = document.getElementById('maintenanceReasonText');
  var scheduleEl = document.getElementById('maintenanceScheduleText');
  if(reasonEl){
    if(maintenanceReason){ reasonEl.textContent = maintenanceReason; reasonEl.classList.remove('hidden'); }
    else { reasonEl.classList.add('hidden'); }
  }
  if(scheduleEl){
    var startStr = formatMaintenanceDate(maintenanceStart);
    var endStr = formatMaintenanceDate(maintenanceEnd);
    if(startStr || endStr){
      var parts = [];
      if(startStr) parts.push(t('maintenance.fromLabel') + ' ' + startStr);
      if(endStr) parts.push(t('maintenance.toLabel') + ' ' + endStr);
      scheduleEl.textContent = parts.join(' · ');
      scheduleEl.classList.remove('hidden');
    } else {
      scheduleEl.classList.add('hidden');
    }
  }
}

function fetchMaintenanceStatus(){
  if(!SUPABASE_URL) return Promise.resolve(null);
  return fetch(SUPABASE_URL + '/rest/v1/site_status?select=maintenance,maintenance_reason,maintenance_start,maintenance_end,night_closure_enabled,night_start_time,night_end_time&id=eq.1', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + SUPABASE_ANON_KEY }
  })
    .then(function(r){ if(!r.ok) throw new Error('maintenance read failed: ' + r.status); return r.json(); })
    .then(function(rows){
      var row = rows && rows[0] ? rows[0] : {};
      maintenanceOn = !!row.maintenance;
      maintenanceReason = row.maintenance_reason || '';
      maintenanceStart = row.maintenance_start || null;
      maintenanceEnd = row.maintenance_end || null;
      nightClosureEnabled = !!row.night_closure_enabled;
      nightStartTime = row.night_start_time ? row.night_start_time.slice(0,5) : '';
      nightEndTime = row.night_end_time ? row.night_end_time.slice(0,5) : '';
      renderMaintenanceBanner();
      renderNightClosureLock();
      var sw = document.getElementById('maintenanceSwitch');
      if(sw) sw.checked = maintenanceOn;
      var reasonBox = document.getElementById('fMaintenanceReason');
      if(reasonBox && document.activeElement !== reasonBox) reasonBox.value = maintenanceReason;
      var startBox = document.getElementById('fMaintenanceStart');
      if(startBox && document.activeElement !== startBox) startBox.value = maintenanceStart ? maintenanceStart.slice(0,16) : '';
      var endBox = document.getElementById('fMaintenanceEnd');
      if(endBox && document.activeElement !== endBox) endBox.value = maintenanceEnd ? maintenanceEnd.slice(0,16) : '';
      var nightSw = document.getElementById('fNightEnabled');
      if(nightSw) nightSw.checked = nightClosureEnabled;
      var nightStartBox = document.getElementById('fNightStart');
      if(nightStartBox && document.activeElement !== nightStartBox) nightStartBox.value = nightStartTime;
      var nightEndBox = document.getElementById('fNightEnd');
      if(nightEndBox && document.activeElement !== nightEndBox) nightEndBox.value = nightEndTime;
      return maintenanceOn;
    })
    .catch(function(err){ console.warn('Maintenance status read failed:', err); return null; });
}

function saveMaintenanceSchedule(){
  var session = getSession();
  var status = document.getElementById('maintenanceScheduleStatus');
  if(!SUPABASE_URL || !session) return;
  var reason = document.getElementById('fMaintenanceReason').value.trim();
  var startVal = document.getElementById('fMaintenanceStart').value;
  var endVal = document.getElementById('fMaintenanceEnd').value;
  status.textContent = '…';
  fetch(SUPABASE_URL + '/rest/v1/site_status?id=eq.1', {
    method:'PATCH',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
    body: JSON.stringify({
      maintenance_reason: reason || null,
      maintenance_start: startVal ? new Date(startVal).toISOString() : null,
      maintenance_end: endVal ? new Date(endVal).toISOString() : null
    })
  }).then(function(r){
    if(!r.ok) throw new Error('maintenance schedule write failed');
    maintenanceReason = reason;
    maintenanceStart = startVal ? new Date(startVal).toISOString() : null;
    maintenanceEnd = endVal ? new Date(endVal).toISOString() : null;
    renderMaintenanceBanner();
    status.textContent = t('maintenance.scheduleSaved');
  }).catch(function(e){
    status.textContent = t('mod.banFailed');
    console.warn('Maintenance schedule save failed:', e);
  });
}

/* ---- Chiusura notturna automatica (fascia oraria ricorrente, fuso Europe/Rome) ---- */
var nightClosureEnabled = false;
var nightStartTime = ''; // 'HH:MM'
var nightEndTime = '';   // 'HH:MM'

function timeStringToMinutes(hhmm){
  if(!hhmm) return null;
  var p = hhmm.split(':');
  return (parseInt(p[0],10) * 60) + parseInt(p[1],10);
}

function currentRomeMinutes(){
  var now = new Date();
  var romeStr = now.toLocaleString('en-GB', { timeZone:'Europe/Rome', hour:'2-digit', minute:'2-digit', hour12:false });
  var p = romeStr.split(':');
  return (parseInt(p[0],10) * 60) + parseInt(p[1],10);
}

function isWithinNightWindow(){
  if(!nightClosureEnabled || !nightStartTime || !nightEndTime) return false;
  var s = timeStringToMinutes(nightStartTime), e = timeStringToMinutes(nightEndTime), now = currentRomeMinutes();
  if(s === null || e === null || s === e) return false;
  if(s < e) return now >= s && now < e;       // fascia nello stesso giorno
  return now >= s || now < e;                  // fascia che attraversa la mezzanotte
}

function renderNightClosureLock(){
  var lock = document.getElementById('nightClosureLock');
  if(!lock) return;
  var scheduleEl = document.getElementById('nightScheduleText');
  if(scheduleEl && nightStartTime && nightEndTime){
    scheduleEl.textContent = t('night.reopensAt').replace('{time}', nightEndTime);
  }
  // la manutenzione manuale ha la precedenza se attiva insieme alla chiusura notturna
  var active = isWithinNightWindow() && !maintenanceOn;
  lock.classList.toggle('hidden', !(active && !isAdmin()));
}

function saveNightSchedule(){
  var session = getSession();
  var status = document.getElementById('nightScheduleStatus');
  if(!SUPABASE_URL || !session) return;
  var enabled = document.getElementById('fNightEnabled').checked;
  var startVal = document.getElementById('fNightStart').value;
  var endVal = document.getElementById('fNightEnd').value;
  status.textContent = '…';
  fetch(SUPABASE_URL + '/rest/v1/site_status?id=eq.1', {
    method:'PATCH',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
    body: JSON.stringify({
      night_closure_enabled: enabled,
      night_start_time: startVal || null,
      night_end_time: endVal || null
    })
  }).then(function(r){
    if(!r.ok) throw new Error('night schedule write failed');
    nightClosureEnabled = enabled;
    nightStartTime = startVal;
    nightEndTime = endVal;
    renderNightClosureLock();
    status.textContent = t('maintenance.scheduleSaved');
  }).catch(function(e){
    status.textContent = t('mod.banFailed');
    console.warn('Night schedule save failed:', e);
  });
}

function setMaintenanceStatus(on){
  var session = getSession();
  if(!SUPABASE_URL || !session) return Promise.resolve(false);
  return fetch(SUPABASE_URL + '/rest/v1/site_status?id=eq.1', {
    method:'PATCH',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer ' + session.access_token,
      'Content-Type':'application/json',
      'Prefer':'return=representation'
    },
    body: JSON.stringify({maintenance: on})
  })
    .then(function(r){ if(!r.ok) throw new Error('maintenance write failed: ' + r.status); return r.json(); })
    .then(function(){ maintenanceOn = on; renderMaintenanceBanner(); return true; })
    .catch(function(err){ console.warn('Maintenance status write failed:', err); return false; });
}

var activeFilter = 'all';
var activeCollabFilter = null; // {name, url} | null — takes precedence over activeFilter when set

/* ============ ANNOUNCEMENTS (homepage, public) ============ */
function fetchAnnouncements(){
  var section = document.getElementById('announcementsSection');
  var grid = document.getElementById('announcementsGrid');
  if(!section || !grid) return Promise.resolve();
  if(!SUPABASE_URL) return Promise.resolve();
  var nowIso = new Date().toISOString();
  return fetch(SUPABASE_URL + '/rest/v1/announcements?select=*&published=eq.true&expires_at=gt.' + encodeURIComponent(nowIso) + '&order=created_at.desc&limit=6', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + SUPABASE_ANON_KEY }
  })
    .then(function(r){ if(!r.ok) throw new Error('announcements read failed'); return r.json(); })
    .then(function(rows){
      grid.innerHTML = '';
      if(rows.length === 0){ section.classList.add('hidden'); return; }
      section.classList.remove('hidden');
      rows.forEach(function(a){
        var card = document.createElement('div');
        card.className = 'announcement-card';
        card.setAttribute('data-ann-id', a.id);
        var dateStr = a.created_at ? a.created_at.slice(0,10) : '';
        var linkHtml = a.link_url ? '<a class="link" href="' + escapeHtml(a.link_url) + '" target="_blank" rel="noopener">' + t('announcements.readMore') + ' →</a>' : '';
        var pdfHtml = a.pdf_url ? '<a class="link" href="' + escapeHtml(a.pdf_url) + '" target="_blank" rel="noopener" download>' + t('announcements.downloadPdf') + '</a>' : '';
        var imageHtml = a.image_url ? '<div class="announcement-card-img"><img src="' + escapeHtml(a.image_url) + '" alt="" loading="lazy"></div>' : '';
        card.innerHTML =
          imageHtml +
          '<div class="announcement-card-body">' +
          '<div class="date">' + dateStr + '</div>' +
          '<h4>' + escapeHtml(a.title) + '</h4>' +
          '<p>' + renderBodyHtml(a.body) + '</p>' +
          '<div class="announcement-card-actions">' + linkHtml + pdfHtml +
          '<button type="button" class="ann-share-btn" data-share-ann="' + a.id + '">' + t('announcements.share') + '</button></div>' +
          '</div>';
        card.querySelector('[data-share-ann]').addEventListener('click', function(){
          shareAnnouncement(a.id, a.title, a.body, a.image_url);
        });
        grid.appendChild(card);
      });
      checkAnnouncementDeepLink();
    })
    .catch(function(err){ console.warn('Announcements load failed:', err); section.classList.add('hidden'); });
}

function shareAnnouncement(id, title, body, imageUrl){
  var excerpt = body.length > 120 ? body.slice(0, 117) + '…' : body;
  var shareText = title + ' — ' + excerpt + '\n';
  var shareUrl = previewPagePath('a', id);

  function shareWithoutImage(){
    if(navigator.share){
      navigator.share({ title: title, text: shareText, url: shareUrl }).catch(function(){ /* utente ha annullato — va bene così */ });
    } else {
      var full = shareText + '\n' + shareUrl;
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(full).then(function(){
          alert(t('share.copied'));
        }).catch(function(){
          alert(t('share.manual') + '\n\n' + full);
        });
      } else {
        alert(t('share.manual') + '\n\n' + full);
      }
    }
  }

  if(imageUrl && navigator.share && navigator.canShare){
    fetchAsBlob(imageUrl).then(function(blob){
      var ext = (blob.type && blob.type.split('/')[1]) || 'jpg';
      var file = new File([blob], 'annuncio.' + ext, { type: blob.type || 'image/jpeg' });
      if(navigator.canShare({ files: [file] })){
        navigator.share({ title: title, text: shareText, url: shareUrl, files: [file] })
          .catch(function(){ /* utente ha annullato — va bene così */ });
      } else {
        shareWithoutImage();
      }
    }).catch(function(){ shareWithoutImage(); });
  } else {
    shareWithoutImage();
  }
}

function checkCharacterDeepLink(){
  var libSection = document.getElementById('library');
  if(!libSection) return; // non siamo sulla pagina schedario
  var params = new URLSearchParams(window.location.search);
  var character = params.get('character');
  if(!character) return;
  activeFilter = character;
  renderCatalog();
  libSection.scrollIntoView({behavior:'smooth'});
}

function checkAnnouncementDeepLink(){
  var params = new URLSearchParams(window.location.search);
  var annId = params.get('announcement');
  if(!annId) return;
  var card = document.querySelector('.announcement-card[data-ann-id="' + CSS.escape(annId) + '"]');
  if(!card) return; // annuncio non trovato (nascosto, cancellato, o link vecchio) — nessun errore, semplicemente non scorre a nulla
  card.scrollIntoView({behavior:'smooth', block:'center'});
  card.classList.add('deep-link-highlight');
  setTimeout(function(){ card.classList.remove('deep-link-highlight'); }, 2600);
}

/* ============ OFFLINE EXPORT (admin-only — never reachable by regular visitors,
   this button lives inside the already-gated admin panel) ============ */
function loadJSZip(){
  if(typeof JSZip !== 'undefined') return Promise.resolve();
  return new Promise(function(resolve, reject){
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    script.onload = function(){ resolve(); };
    script.onerror = function(){ reject(new Error('Impossibile caricare lo strumento di compressione.')); };
    document.head.appendChild(script);
  });
}

function sanitizeFilename(name){
  return String(name).replace(/[\/\\:*?"<>|]/g, '_').trim().slice(0, 80) || 'senza-titolo';
}

function fetchAsBlob(url){
  return fetch(url).then(function(r){ if(!r.ok) throw new Error('fetch fallito: ' + url); return r.blob(); });
}

function exportEverythingOffline(){
  var btn = document.getElementById('btnExportOffline');
  var status = document.getElementById('offlineExportStatus');
  btn.disabled = true;
  status.textContent = t('offline.preparing');

  loadJSZip().then(function(){
    return fetchCatalogFromSupabase();
  }).then(function(items){
    items = items || getCatalog();
    var zip = new JSZip();
    var totalSteps = items.reduce(function(sum, it){ return sum + 1 + (it.cover_url ? 1 : 0) + (it.pages ? it.pages.length : 0); }, 0);
    var done = 0;

    function step(label){
      done++;
      status.textContent = t('offline.progress').replace('{done}', done).replace('{total}', totalSteps).replace('{label}', label);
    }

    var chain = Promise.resolve();
    items.forEach(function(item){
      var folderName = sanitizeFilename((item.character || '') + ' - ' + (item.title || item.id));
      var folder = zip.folder(folderName);

      chain = chain.then(function(){
        var info = 'Titolo: ' + (item.title || '') + '\n' +
          'Personaggio: ' + (item.character || '') + '\n' +
          'Numero/Volume: ' + (item.issue || '') + '\n' +
          'Data: ' + (item.date || '') + '\n' +
          'Permanente: ' + (item.permanent !== false ? 'sì' : 'no') + '\n' +
          '18+: ' + (item.mature ? 'sì' : 'no') + '\n\n' +
          'Sinossi:\n' + (item.synopsis || '');
        folder.file('info.txt', info);
        step(item.title || item.id);
      });

      if(item.cover_url){
        chain = chain.then(function(){ return fetchAsBlob(item.cover_url); })
          .then(function(blob){ folder.file('copertina.jpg', blob); step(item.title || item.id); })
          .catch(function(){ step(item.title || item.id); }); // una copertina mancante non deve fermare tutto il resto
      }

      (item.pages || []).forEach(function(pageUrl, idx){
        chain = chain.then(function(){ return fetchAsBlob(pageUrl); })
          .then(function(blob){
            var pageNum = String(idx + 1); while(pageNum.length < 3) pageNum = '0' + pageNum;
            folder.file('pagina_' + pageNum + '.jpg', blob);
            step(item.title || item.id);
          })
          .catch(function(){ step(item.title || item.id); }); // una pagina mancante non deve fermare tutto il resto
      });
    });

    return chain.then(function(){
      status.textContent = t('offline.zipping');
      return zip.generateAsync({type:'blob'});
    });
  }).then(function(zipBlob){
    var a = document.createElement('a');
    a.href = URL.createObjectURL(zipBlob);
    a.download = 'lux-comics-offline-' + new Date().toISOString().slice(0,10) + '.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    status.textContent = t('offline.done');
    btn.disabled = false;
  }).catch(function(err){
    console.warn('Offline export failed:', err);
    status.textContent = t('offline.error') + (err && err.message ? ' — ' + err.message : '');
    btn.disabled = false;
  });
}

/* ============ LATEST CHAPTERS (homepage, public — auto from catalog) ============ */
function renderLatestChapters(){
  var section = document.getElementById('latestSection');
  var grid = document.getElementById('latestGrid');
  if(!section || !grid) return;
  var items = getCatalog();
  if(!matureVisible){
    items = items.filter(function(i){ return !i.mature; });
  }
  items = items.slice().sort(function(a,b){ return (b.date||'').localeCompare(a.date||''); }).slice(0, 6);
  grid.innerHTML = '';
  if(items.length === 0){ section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  var newestDate = items[0].date;
  items.forEach(function(item){
    var card = document.createElement('div');
    card.className = 'latest-card';
    var coverInner = item.cover_url
      ? '<img src="' + coverThumbUrl(item.cover_url, 400) + '" data-fallback="' + escapeHtml(item.cover_url) + '" alt="" loading="lazy" decoding="async">'
      : '<span class="init">' + item.character.charAt(0) + '</span>';
    var newTag = item.date === newestDate ? '<span class="new-tag">' + t('latest.newTag') + '</span>' : '';
    card.innerHTML =
      '<div class="latest-card-cover">' + coverInner + newTag + '</div>' +
      '<div class="latest-card-body"><h5>' + escapeHtml(item.title) + '</h5><div class="character">' + item.character + '</div></div>';
    card.addEventListener('click', function(){ openTitleModal(item); });
    grid.appendChild(card);
    attachCoverSignature(card.querySelector('.latest-card-cover'), item);
  });
}

function renderDossiers(){
  var wrap = document.getElementById('dossierGrid');
  if(!wrap) return;
  var names = ['Lucifer','Lilith','Lucifera','Lucio'];
  var lang = STR[currentLang] ? currentLang : 'it';

  function goToLibrary(name){
    var libSection = document.getElementById('library');
    if(libSection){
      // siamo già sulla pagina schedario (o su una versione a pagina singola)
      activeFilter = name;
      libSection.scrollIntoView({behavior:'smooth'});
      renderCatalog();
    } else {
      // pagina separata (es. dossier.html): naviga verso schedario.html col filtro
      window.location.href = 'schedario.html?character=' + encodeURIComponent(name) + '#library';
    }
  }

  function renderManuscript(idx){
    var name = names[idx];
    var meta = CHAR_META[name];
    var ms = wrap.querySelector('.dossier-manuscript');
    if(!ms) return;
    ms.innerHTML =
      '<h2>'+name+'</h2>'+
      '<div class="dossier-role">'+meta.role[lang]+'</div>'+
      '<p>'+meta.bio[lang]+'</p>'+
      '<span class="dossier-goto" data-char="'+name+'">'+t('nav.library')+' →</span>';
    ms.querySelector('.dossier-goto').addEventListener('click', function(){ goToLibrary(name); });
  }

  function renderSeals(activeIdx){
    var seals = wrap.querySelector('.dossier-seals');
    if(!seals) return;
    seals.innerHTML = '';
    names.forEach(function(name, i){
      var imgUrl = characterImages[name];
      var sealInner = imgUrl
        ? '<img class="dossier-seal-photo" src="'+imgUrl+'" alt="'+name+'">'
        : '<span class="dossier-seal-init">'+name.charAt(0)+'</span>';
      var sealWrap = document.createElement('div');
      sealWrap.className = 'dossier-seal-wrap';
      sealWrap.innerHTML =
        '<div class="dossier-seal'+(i===activeIdx?' active':'')+'">'+sealInner+'</div>'+
        '<div class="dossier-seal-label">'+name+'</div>';
      sealWrap.querySelector('.dossier-seal').addEventListener('click', function(){
        renderSeals(i);
        renderManuscript(i);
      });
      seals.appendChild(sealWrap);
    });
  }

  wrap.innerHTML =
    '<div class="dossier-seals"></div>'+
    '<div class="dossier-manuscript"></div>';
  renderSeals(0);
  renderManuscript(0);
}

function showCollaboratorCollection(collab){
  if(!collab || !collab.name) return;
  activeCollabFilter = { name: collab.name, url: collab.url || null };
  activeFilter = 'all';
  closeTitleModal();
  document.getElementById('library').scrollIntoView({behavior:'smooth'});
  renderCatalog();
}
function clearCollabFilter(){
  activeCollabFilter = null;
  renderCatalog();
}
function renderCollabBanner(){
  var el = document.getElementById('collabBanner');
  if(!el) return;
  if(!activeCollabFilter){
    el.classList.add('hidden');
    el.innerHTML = '';
    return;
  }
  el.classList.remove('hidden');
  el.innerHTML =
    '<span>' + t('collab.collectionBanner') + ' <strong>' + escapeHtml(activeCollabFilter.name) + '</strong></span>' +
    '<button class="btn btn-ghost btn-sm" id="btnClearCollabFilter">' + t('collab.showAll') + '</button>';
  document.getElementById('btnClearCollabFilter') && document.getElementById('btnClearCollabFilter').addEventListener('click', clearCollabFilter);
}

function renderFilters(){
  var wrap = document.getElementById('catalogFilters');
  if(!wrap) return;
  wrap.innerHTML = '';
  var opts = ['all','Lucifer','Lilith','Lucifera','Lucio','Collaboratori'];
  opts.forEach(function(opt){
    var btn = document.createElement('button');
    btn.className = 'filter-chip' + (activeFilter === opt ? ' active' : '');
    btn.textContent = opt === 'all' ? t('filter.all') : (opt === 'Collaboratori' ? t('collab.categoryLabel') : opt);
    btn.addEventListener('click', function(){
      activeFilter = opt;
      renderFilters();
      renderCatalog();
    });
    wrap.appendChild(btn);
  });
}

function renderCatalog(){
  renderFilters();
  updateMatureStateLabel();
  renderCollabBanner();
  renderLatestChapters();
  var grid = document.getElementById('catalogGrid');
  if(!grid) return;
  var items = getCatalog();
  if(!matureVisible){
    items = items.filter(function(i){return !i.mature;});
  }
  if(activeCollabFilter){
    items = items.filter(function(i){
      var arr = (i.collaborators && i.collaborators.length)
        ? i.collaborators
        : (i.collaborator_name ? [{ name: i.collaborator_name, url: i.collaborator_url }] : []);
      return arr.some(function(c){
        if(activeCollabFilter.url) return c.url === activeCollabFilter.url;
        return c.name === activeCollabFilter.name;
      });
    });
  } else if(activeFilter !== 'all'){
    items = items.filter(function(i){return i.character === activeFilter;});
  }
  grid.innerHTML = '';
  if(items.length === 0){
    var empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.style.gridColumn = '1/-1';
    empty.textContent = '— ' + t('filter.all') + ' —';
    grid.appendChild(empty);
    return;
  }
  items.sort(function(a,b){ return (b.date||'').localeCompare(a.date||''); });
  items.forEach(function(item){
    var card = document.createElement('div');
    card.className = 'card-idx';
    card.setAttribute('data-character', item.character || '');
    var badge = item.mature ? '<span class="mature">18+</span>' : '<span class="allages">'+t('badge.allages')+'</span>';
    var isFav = favoriteIds.has(item.id);
    var priceTxt = item.price ? '<span class="card-idx-price">€'+Number(item.price).toFixed(2)+'</span>' : '';
    var coverInner = item.cover_url
      ? '<img class="cover-img" src="'+coverThumbUrl(item.cover_url, 500)+'" data-fallback="'+escapeHtml(item.cover_url)+'" alt="" loading="lazy" decoding="async">'
      : '<span class="init">'+item.character.charAt(0)+'</span>';
    card.innerHTML =
      '<div class="card-idx-cover">'+coverInner+badge+
        '<span class="card-idx-fav'+(isFav?' active':'')+'" data-fav="'+item.id+'">'+(isFav?'♥':'♡')+'</span>'+
      '</div>'+
      '<div class="card-idx-body" style="cursor:pointer;" data-open="'+item.id+'">'+
        '<div class="num mono">'+(item.issue||'')+'</div>'+
        '<h4>'+escapeHtml(item.title)+'</h4>'+
        '<div class="character">'+item.character+'</div>'+
        '<div class="synopsis">'+escapeHtml(synopsisForCurrentLang(item))+'</div>'+
        '<button type="button" class="synopsis-toggle hidden" data-toggle-synopsis>'+t('card.readMore')+'</button>'+
        '<div class="meta-row"><span>'+(item.date||'')+'</span>'+priceTxt+'</div>'+
        '<div class="card-idx-engagement">'+(item.view_count||0)+' '+t('stats.views')+' · '+(item.comment_count||0)+' '+t('stats.comments')+'</div>'+
      '</div>';
    card.querySelector('[data-fav]').addEventListener('click', function(e){
      e.stopPropagation();
      toggleFavorite(item.id);
    });
    card.querySelector('[data-open]').addEventListener('click', function(){
      openTitleModal(item);
    });
    var synEl = card.querySelector('.synopsis');
    var toggleBtn = card.querySelector('[data-toggle-synopsis]');
    toggleBtn.addEventListener('click', function(e){
      e.stopPropagation();
      var expanded = synEl.classList.toggle('expanded');
      toggleBtn.textContent = expanded ? t('card.readLess') : t('card.readMore');
    });
    grid.appendChild(card);
    attachCoverSignature(card.querySelector('.card-idx-cover'), item);
    // only show the toggle when the text actually overflows the 3-line clamp
    if(synEl.scrollHeight > synEl.clientHeight + 1){
      toggleBtn.classList.remove('hidden');
    }
  });
}

/* ============ VERIFIED BADGE (shared blue checkmark — comments, founder, collaborators) ============ */
function verifiedBadge(titleKey){
  return '<svg class="verified-badge" viewBox="0 0 24 24" width="15" height="15" role="img" aria-label="' + t(titleKey || 'verified.label') + '">' +
    '<polygon points="12.00,1.00 13.92,5.48 17.95,2.75 17.14,7.55 22.01,7.43 18.73,11.03 22.89,13.57 18.19,14.82 20.31,19.20 15.68,17.72 15.10,22.55 12.00,18.80 8.90,22.55 8.32,17.72 3.69,19.20 5.81,14.82 1.11,13.57 5.27,11.03 1.99,7.43 6.86,7.55 6.05,2.75 10.08,5.48" fill="#1d9bf0"/>' +
    '<path d="M8 12.3l2.6 2.6 5.4-5.6" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';
}

/* ============ FIRMA + QR SULLE COPERTINE ============
   Su ogni copertina d'opera, sovrimpressa in basso a destra: firma
   "NoxMorningstar" in stile fumetto + un QR che porta dritti a quella
   pagina — utile se qualcuno fa uno screenshot o salva l'immagine per
   condividerla altrove, il link al sito resta comunque leggibile.
   Il QR viene generato interamente nel telefono (libreria qrcode-lib.js),
   nessuna chiamata a servizi esterni per ogni copertina mostrata.

   Per non bloccare il disegno della pagina — generare tanti QR tutti
   insieme, in un colpo solo, si sente come un piccolo scatto proprio
   all'avvio — la firma non viene scritta subito dentro alla copertina:
   la copertina appare subito senza, e la firma viene aggiunta un istante
   dopo, quando il browser è libero. Ogni QR viene calcolato una sola
   volta per opera e poi riusato (cache), anche cambiando filtro. */
var _coverSignatureCache = {};
function buildCoverSignatureNode(item){
  if(typeof qrcode === 'undefined' || !item || !item.id) return null;
  if(_coverSignatureCache[item.id]) return _coverSignatureCache[item.id].cloneNode(true);
  try{
    var url = previewPagePath('t', item.id);
    var qr = qrcode(0, 'L'); // correzione errori bassa: QR più semplice, resta leggibile anche piccolo
    qr.addData(url);
    qr.make();
    var wrap = document.createElement('div');
    wrap.className = 'cover-signature';
    wrap.setAttribute('style', 'position:absolute;left:0;right:0;bottom:0;z-index:6;display:flex;align-items:center;justify-content:space-between;padding:8px 10px;gap:8px;background:linear-gradient(0deg, rgba(11,6,7,0.92) 0%, rgba(11,6,7,0.62) 60%, transparent 100%);pointer-events:none;');
    wrap.innerHTML = '<span class="cover-signature-text" style="font-family:\'Cinzel Decorative\',\'Cinzel\',serif;font-weight:900;font-size:13px;line-height:1;color:#f3c96a;letter-spacing:0.02em;white-space:nowrap;overflow:hidden;text-shadow:0 1px 4px rgba(0,0,0,0.9);transform:rotate(-2deg);">NoxMorningstar</span>' +
      '<span class="cover-signature-qr" style="display:block;width:34px;height:34px;min-width:34px;min-height:34px;max-width:34px;max-height:34px;flex-shrink:0;background:#fff;border:2px solid #c9a24d;border-radius:4px;padding:3px;box-shadow:0 2px 8px rgba(0,0,0,0.55);overflow:hidden;box-sizing:border-box;">' + qr.createImgTag(2, 0).replace('<img', '<img style="width:100%;height:100%;display:block;image-rendering:pixelated;"') + '</span>';
    _coverSignatureCache[item.id] = wrap;
    return wrap.cloneNode(true);
  } catch(e){
    return null; // un errore nella generazione del QR non deve mai rompere la copertina
  }
}
function attachCoverSignature(coverEl, item){
  if(!coverEl || !item) return;
  var runLater = window.requestIdleCallback || function(fn){ return setTimeout(fn, 0); };
  runLater(function(){
    var node = buildCoverSignatureNode(item);
    if(node) coverEl.appendChild(node);
  });
}

/* ============ FIRMA + QR ANCHE SULLA COPERTINA DEL PDF ============
   Quando un'opera ha un PDF caricato al posto delle pagine singole, il
   pulsante "Scarica PDF" non scarica più il file così com'è: lo apre,
   disegna firma+QR sulla prima pagina (la copertina) e scarica quella
   versione — il file originale salvato resta intatto, la firma si
   aggiunge solo alla copia che viene scaricata.
   pdf-lib (la libreria che sa aprire/modificare un PDF esistente) pesa
   parecchio (500KB+): per questo non viene mai caricata all'apertura
   del sito, solo nel momento in cui qualcuno preme davvero "Scarica PDF". */
var _pdfLibLoadPromise = null;
function ensurePdfLibLoaded(){
  if(window.PDFLib) return Promise.resolve();
  if(_pdfLibLoadPromise) return _pdfLibLoadPromise;
  _pdfLibLoadPromise = new Promise(function(resolve, reject){
    var s = document.createElement('script');
    s.src = 'pdf-lib.min.js';
    s.onload = function(){ resolve(); };
    s.onerror = function(){ _pdfLibLoadPromise = null; reject(new Error('pdf-lib load failed')); };
    document.head.appendChild(s);
  });
  return _pdfLibLoadPromise;
}

// Il QR generato da qrcode-lib.js è in formato GIF (createDataURL), ma
// pdf-lib sa incorporare solo PNG o JPEG — lo facciamo passare per un
// <canvas> per convertirlo, un passaggio che i browser sanno già fare da soli.
function qrPngBase64(url, sizePx){
  return new Promise(function(resolve, reject){
    try{
      var qr = qrcode(0, 'L');
      qr.addData(url);
      qr.make();
      var img = new Image();
      img.onload = function(){
        var canvas = document.createElement('canvas');
        canvas.width = sizePx; canvas.height = sizePx;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, sizePx, sizePx);
        ctx.drawImage(img, 0, 0, sizePx, sizePx);
        resolve(canvas.toDataURL('image/png').split(',')[1]);
      };
      img.onerror = function(){ reject(new Error('QR image load failed')); };
      img.src = qr.createDataURL(6, 8);
    } catch(e){ reject(e); }
  });
}

function base64ToBytes(base64){
  var raw = atob(base64);
  var bytes = new Uint8Array(raw.length);
  for(var i = 0; i < raw.length; i++){ bytes[i] = raw.charCodeAt(i); }
  return bytes;
}

function downloadSignedPdf(item){
  return ensurePdfLibLoaded()
    .then(function(){
      return Promise.all([
        fetch(item.pdf_url).then(function(r){
          if(!r.ok) throw new Error('pdf fetch failed');
          return r.arrayBuffer();
        }),
        qrPngBase64(previewPagePath('t', item.id), 300)
      ]);
    })
    .then(function(results){
      var pdfBytes = results[0];
      var qrBase64 = results[1];
      return PDFLib.PDFDocument.load(pdfBytes).then(function(pdfDoc){
        return Promise.all([
          pdfDoc.embedPng(base64ToBytes(qrBase64)),
          pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold)
        ]).then(function(embeds){
          var qrImage = embeds[0], font = embeds[1];
          var page = pdfDoc.getPages()[0]; // la copertina è sempre la prima pagina
          var pw = page.getWidth(), ph = page.getHeight();
          var shortSide = Math.min(pw, ph);
          var qrSize = shortSide * 0.11;
          var margin = shortSide * 0.035;
          var textSize = Math.max(9, qrSize * 0.3);
          var text = 'NoxMorningstar';
          var textWidth = font.widthOfTextAtSize(text, textSize);
          var plateWidth = qrSize + margin * 1.5 + textWidth + 10;
          var plateHeight = qrSize + margin;

          page.drawRectangle({
            x: pw - plateWidth - margin/2, y: margin/2,
            width: plateWidth, height: plateHeight,
            color: PDFLib.rgb(1, 1, 1), opacity: 0.8,
          });
          page.drawText(text, {
            x: pw - plateWidth - margin/2 + margin/2, y: margin/2 + plateHeight/2 - textSize/2.6,
            size: textSize, font: font, color: PDFLib.rgb(0.08, 0.05, 0.06),
          });
          page.drawImage(qrImage, {
            x: pw - qrSize - margin, y: margin/2 + (plateHeight - qrSize)/2,
            width: qrSize, height: qrSize,
          });
          return pdfDoc.save();
        });
      });
    })
    .then(function(newPdfBytes){
      var blob = new Blob([newPdfBytes], { type:'application/pdf' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = (item.title || 'fumetto').replace(/[^a-zA-Z0-9_\-]+/g, '_') + '.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
    })
    .catch(function(e){
      // se qualcosa va storto (rete, CORS, PDF non valido...) scarichiamo
      // comunque il file originale invece di lasciare l'utente a mani vuote
      console.warn('PDF signature failed, falling back to raw file:', e);
      window.open(item.pdf_url, '_blank');
    });
}

function escapeHtml(str){
  var d = document.createElement('div');
  d.textContent = str || '';
  return d.innerHTML;
}

/* A message/comment body that is ONLY a direct .gif link renders as an image
   instead of plain text. Strict pattern (https, no spaces, .gif ending) to
   avoid any injection risk — escapeHtml is still applied to the URL itself. */
function isGifUrl(str){
  if(!str) return false;
  var s = str.trim();
  return /^https:\/\/\S+\.gif(\?\S*)?$/i.test(s) && s.indexOf(' ') === -1;
}
function renderBodyHtml(body){
  if(isGifUrl(body)){
    return '<img class="chat-gif" src="' + escapeHtml(body.trim()) + '" alt="GIF" loading="lazy">';
  }
  return escapeHtml(body);
}

/* ============ PWA: SERVICE WORKER + CONDIVIDI L'APP ============ */
if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/sw.js').then(function(){
      // il primo tentativo di mostrare il pulsante può capitare prima che
      // il service worker sia pronto — ora che lo è davvero, riproviamo
      if(typeof refreshPushButtonUI === 'function') refreshPushButtonUI();
    }).catch(function(err){
      console.warn('Service worker registration failed:', err);
    });
  });
}

/* ============ NOTIFICHE PUSH ============ */
var VAPID_PUBLIC_KEY = 'BMGy8PVyauBnEGAuH2j2XdWtDKKy9YlU6WyyxE-YxJA4nGTtfZzwMeJZy4006wlH3nN7FfaeGb8Nv9cDMiY3PJA';

function urlBase64ToUint8Array(base64String){
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);
  for(var i = 0; i < rawData.length; ++i){ outputArray[i] = rawData.charCodeAt(i); }
  return outputArray;
}

function isIOSDevice(){
  // iPad moderni si presentano come "Macintosh" col touch attivo: li includiamo
  return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isStandaloneApp(){
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

// Distingue i motivi per cui le notifiche potrebbero non essere disponibili,
// così ogni telefono/browser riceve un messaggio utile invece di uno generico:
// - 'ios-not-installed': iPhone/iPad su Safari ma il sito non è ancora
//   installato sulla schermata Home — Apple non permette le notifiche push
//   altrimenti, qualunque cosa faccia il sito.
// - 'unsupported': il browser non ha proprio le API necessarie (capita in
//   alcuni browser integrati in altre app, o versioni molto vecchie).
// - null: tutto disponibile, si può procedere.
function pushUnavailableReason(){
  if(!('Notification' in window)) return 'unsupported';
  if(isIOSDevice() && !isStandaloneApp()) return 'ios-not-installed';
  if(!('serviceWorker' in navigator) || !('PushManager' in window)) return 'unsupported';
  return null;
}

function pushSupported(){
  return pushUnavailableReason() === null;
}

function refreshPushButtonUI(){
  var btn = document.getElementById('btnEnablePush');
  if(!btn || !isSignedIn()){
    if(btn) btn.classList.add('hidden');
    return;
  }
  var reason = pushUnavailableReason();
  if(reason === 'unsupported'){
    // niente da offrire su questo browser: meglio non mostrare un pulsante
    // che non potrà mai funzionare, piuttosto che confondere chi lo tocca
    btn.classList.add('hidden');
    return;
  }
  if(reason === 'ios-not-installed'){
    // il pulsante resta visibile apposta: spiega cosa manca invece di
    // sparire e far pensare che la funzione non esista proprio
    btn.classList.remove('hidden');
    btn.textContent = t('push.installFirst');
    btn.disabled = false;
    return;
  }
  var settled = false;
  var safetyTimer = setTimeout(function(){
    // il service worker a volte non risponde in tempo utile (capita su iOS
    // subito dopo l'installazione dell'app): meglio mostrare comunque il
    // pulsante, in stato "da attivare", piuttosto che lasciarlo nascosto
    // per sempre in attesa di una promise che potrebbe non arrivare mai
    if(settled) return;
    settled = true;
    btn.classList.remove('hidden');
    btn.textContent = t('push.enable');
    btn.disabled = false;
  }, 3000);
  navigator.serviceWorker.ready.then(function(reg){
    return reg.pushManager.getSubscription();
  }).then(function(sub){
    if(settled) return;
    settled = true;
    clearTimeout(safetyTimer);
    btn.classList.remove('hidden');
    btn.textContent = sub ? t('push.enabled') : t('push.enable');
    btn.disabled = !!sub;
  }).catch(function(){
    if(settled) return;
    settled = true;
    clearTimeout(safetyTimer);
    btn.classList.add('hidden');
  });
}

function enablePushNotifications(){
  var reason = pushUnavailableReason();
  if(reason === 'ios-not-installed'){ window.alert(t('push.installFirstLong')); return; }
  if(reason === 'unsupported'){ window.alert(t('push.unsupported')); return; }
  var session = getSession();
  if(!session) return;
  if(typeof Notification !== 'undefined' && Notification.permission === 'denied'){
    // niente da chiedere di nuovo: il browser non farà ricomparire il
    // popup di sistema finché l'utente non lo riattiva a mano dalle
    // impostazioni — meglio dirlo subito che far sembrare il pulsante rotto
    window.alert(t('push.denied'));
    return;
  }
  Notification.requestPermission().then(function(perm){
    if(perm !== 'granted'){ window.alert(t('push.denied')); return; }
    return navigator.serviceWorker.ready.then(function(reg){
      return reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
      });
    }).then(function(sub){
      var json = sub.toJSON();
      return fetch(SUPABASE_URL + '/rest/v1/push_subscriptions', {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + session.access_token,
          'Content-Type': 'application/json', 'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({ user_id: currentUserId(), endpoint: json.endpoint, p256dh: json.keys.p256dh, auth: json.keys.auth })
      });
    }).then(function(r){
      if(!r.ok) throw new Error('push subscription save failed');
      refreshPushButtonUI();
    });
  }).catch(function(e){
    console.warn('Push subscribe failed:', e);
    window.alert(t('push.error'));
  });
}

function shareApp(){
  var shareData = {
    title: 'LUX COMICS & MEDUSA COMICS',
    text: "Fumetti d'autore — edizione riservata.",
    url: window.location.origin + '/'
  };
  if(navigator.share){
    navigator.share(shareData).catch(function(){ /* annullato dall'utente, va bene così */ });
  } else if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(shareData.url).then(function(){
      alert('Link copiato.');
    });
  }
}

(function injectShareButton(){
  function addBtn(){
    if(document.getElementById('btnShareApp')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'btnShareApp';
    btn.className = 'share-app-fab';
    btn.setAttribute('aria-label', "Condividi l'app");
    btn.innerHTML = '⇪';
    btn.addEventListener('click', shareApp);
    document.body.appendChild(btn);
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', addBtn);
  } else {
    addBtn();
  }
  var style = document.createElement('style');
  style.textContent =
    '.share-app-fab{position:fixed;left:16px;bottom:16px;z-index:500;width:48px;height:48px;' +
    'border-radius:50%;background:#6e1423;color:#fdfaf5;border:none;font-size:20px;cursor:pointer;' +
    'box-shadow:0 4px 12px rgba(0,0,0,.3);}';
  document.head.appendChild(style);
})();

function makeHeaderLogoClickable(){
  var target = document.querySelector('header.topbar .brand');
  if(!target || target.dataset.logoClickable) return;
  target.dataset.logoClickable = '1';
  target.style.cursor = 'pointer';
  target.addEventListener('click', function(){
    if(!/index\.html$/.test(window.location.pathname) && window.location.pathname !== '/' && !window.location.pathname.endsWith('/')){
      window.location.href = 'index.html';
    }
  });
}

/* ============ ADMIN ============ */
function renderMyTitles(){
  var wrap = document.getElementById('myTitlesListWrap');
  var list = document.getElementById('myTitlesList');
  if(!wrap || !list) return;
  if(isAdmin() || !isSignedIn()){ wrap.classList.add('hidden'); return; }
  var uid = currentUserId();
  var mine = getCatalog().filter(function(x){ return x.created_by === uid; });
  if(mine.length === 0){ wrap.classList.add('hidden'); return; }
  wrap.classList.remove('hidden');
  list.innerHTML = '';
  mine.sort(function(a,b){ return (b.date||'').localeCompare(a.date||''); });
  mine.forEach(function(item){
    var row = document.createElement('div');
    row.className = 'admin-row';
    row.innerHTML =
      '<div class="info"><div class="t">'+escapeHtml(item.title)+'</div>'+
      '<div class="m">'+item.character+' · '+(item.issue||'')+' · '+(item.date||'')+'</div></div>'+
      '<div class="admin-actions"><button class="btn btn-sm btn-ghost" data-edit-mine="'+item.id+'">'+t('admin.edit')+'</button></div>';
    row.querySelector('[data-edit-mine]').addEventListener('click', function(){
      openEditTitle(item.id);
    });
    list.appendChild(row);
  });
}

function renderAdminList(){
  if(!isAdmin()) return;
  var list = document.getElementById('adminList');
  if(!list) return;
  var items = getCatalog();
  items.sort(function(a,b){ return (b.date||'').localeCompare(a.date||''); });
  list.innerHTML = '';

  if(isDraftModeOn()){
    getDraft().newItems.forEach(function(draftItem, idx){
      var draftRow = document.createElement('div');
      draftRow.className = 'admin-row admin-row-draft';
      var coverImg = draftItem.coverDataUrl ? '<img src="'+draftItem.coverDataUrl+'" alt="">' : '';
      draftRow.innerHTML =
        '<div class="admin-draft-preview">'+coverImg+'<span class="admin-draft-tag">BOZZA — titolo nuovo, non ancora online</span></div>'+
        '<div class="info"><div class="t">'+escapeHtml(draftItem.title)+'</div>'+
        '<div class="m">'+draftItem.character+' · '+(draftItem.issue||'')+' · '+(draftItem.date||'')+'</div></div>'+
        '<div class="admin-actions"><button type="button" class="btn btn-sm btn-ghost" data-remove-draft-newitem="'+idx+'">Rimuovi bozza</button></div>';
      draftRow.querySelector('[data-remove-draft-newitem]').addEventListener('click', function(){
        var d = getDraft();
        d.newItems.splice(idx, 1);
        saveDraft(d);
        renderAdminList(); renderDraftBar();
      });
      list.appendChild(draftRow);
    });
  }

  items.forEach(function(item){
    var row = document.createElement('div');
    row.className = 'admin-row';
    var ratingLabel = item.mature ? '18+' : t('badge.allages');
    var coverLabel = item.cover_url ? t('cover.change') : t('cover.addExisting');
    var hasAllTranslations = item.synopsis_it && item.synopsis_es && item.synopsis_fr && item.synopsis_de;
    var translateLabel = hasAllTranslations ? t('synopsis.retranslate') : t('synopsis.translateExisting');
    var hasPages = item.pages && item.pages.length > 0;
    var isPermanent = item.permanent !== false; // di default permanente, finché non lo segni esplicitamente "a tempo determinato"
    var permanentTag = '<span class="' + (isPermanent ? 'permanent-tag' : 'temporary-tag') + '">' + (isPermanent ? t('catalog.permanent') : t('catalog.temporary')) + '</span>';
    var draftCoverUrl = isDraftModeOn() ? getDraft().coverEdits[item.id] : null;
    var draftPreview = draftCoverUrl
      ? '<div class="admin-draft-preview"><img src="'+draftCoverUrl+'" alt=""><span class="admin-draft-tag">BOZZA — non ancora online</span></div>'
      : '';
    row.innerHTML =
      draftPreview +
      '<div class="info"><div class="t">'+escapeHtml(item.title)+'</div>'+
      '<div class="m">'+item.character+' · '+(item.issue||'')+' · '+(item.date||'')+' · '+ratingLabel+' · '+permanentTag+'</div></div>'+
      '<div class="admin-actions">'+
        '<label class="btn btn-sm btn-ghost cover-upload-btn">'+coverLabel+
          '<input type="file" accept="image/*" class="hidden" data-cover-for="'+item.id+'">'+
        '</label>'+
        '<span class="cover-upload-status mono" data-cover-status-for="'+item.id+'"></span>'+
        '<button class="btn btn-sm btn-ghost" data-translate-for="'+item.id+'">'+translateLabel+'</button>'+
        (hasPages ? '<button class="btn btn-sm btn-ghost" data-rewatermark-for="'+item.id+'">'+t('rewatermark.button')+'</button>' : '') +
        (hasPages && item.pages_watermarked ? '<span class="watermark-done-tag">✓ '+t('rewatermark.done')+'</span>' : '') +
        '<button class="btn btn-sm btn-ghost" data-toggle-permanent="'+item.id+'">'+(isPermanent ? t('catalog.makeTemporary') : t('catalog.makePermanent'))+'</button>'+
        '<button class="btn btn-sm btn-ghost" data-edit="'+item.id+'">'+t('admin.edit')+'</button>'+
        '<button class="btn btn-sm btn-ghost" data-del="'+item.id+'">×</button>'+
      '</div>';
    row.querySelector('[data-edit]').addEventListener('click', function(){
      openEditTitle(item.id);
    });
    row.querySelector('[data-toggle-permanent]').addEventListener('click', function(){
      var session = getSession();
      var newValue = !isPermanent;
      fetch(SUPABASE_URL + '/rest/v1/catalog?id=eq.' + encodeURIComponent(item.id), {
        method:'PATCH',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
        body: JSON.stringify({permanent: newValue})
      }).then(function(r){
        if(!r.ok) return;
        var all = getCatalog();
        var target = all.find(function(x){ return x.id === item.id; });
        if(target) target.permanent = newValue;
        saveCatalogLocal(all);
        renderAdminList();
      });
    });
    row.querySelector('[data-del]').addEventListener('click', function(){
      if(!confirm(t('admin.confirmDelete'))) return;
      var all = getCatalog().filter(function(x){return x.id !== item.id;});
      saveCatalogLocal(all);
      renderCatalog();
      renderAdminList();
      supabaseDelete(item.id);
    });
    row.querySelector('[data-cover-for]').addEventListener('change', function(e){
      if(!e.target.files[0]) return;
      uploadCoverForExistingItem(item.id, e.target.files[0]);
    });
    row.querySelector('[data-translate-for]').addEventListener('click', function(){
      translateSynopsisForExistingItem(item.id, item.synopsis);
    });
    var rewatermarkBtn = row.querySelector('[data-rewatermark-for]');
    if(rewatermarkBtn){
      rewatermarkBtn.addEventListener('click', function(){
        rewatermarkExistingItem(item.id, item.pages, rewatermarkBtn);
      });
    }
    list.appendChild(row);
  });
}

function translateSynopsisForExistingItem(itemId, englishSynopsis){
  var status = document.getElementById('pagesUploadStatus');
  if(status) status.textContent = t('synopsis.translating');
  translateSynopsis(englishSynopsis).then(function(result){
    var session = getSession();
    return fetch(SUPABASE_URL + '/rest/v1/catalog?id=eq.' + encodeURIComponent(itemId), {
      method:'PATCH',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
      body: JSON.stringify({
        synopsis_it: result.it || null,
        synopsis_es: result.es || null,
        synopsis_fr: result.fr || null,
        synopsis_de: result.de || null
      })
    }).then(function(r){
      if(!r.ok) throw new Error('synopsis translation save failed');
      var items = getCatalog();
      var item = items.find(function(i){ return i.id === itemId; });
      if(item){
        item.synopsis_it = result.it || null;
        item.synopsis_es = result.es || null;
        item.synopsis_fr = result.fr || null;
        item.synopsis_de = result.de || null;
        saveCatalogLocal(items);
      }
      if(status) status.textContent = '';
      renderCatalog();
      renderAdminList();
    });
  }).catch(function(err){
    console.warn('Synopsis translation for existing item failed:', err);
    if(status) status.textContent = '';
    alert(t('synopsis.translateError'));
  });
}

/* Ritaglia un'immagine al rapporto scelto (centrato) prima di caricarla —
   così la copertina esce già nel formato giusto, qualunque sia la forma
   dell'originale, senza bisogno di un tool esterno. */
function cropFileToRatio(file, ratioW, ratioH){
  return new Promise(function(resolve, reject){
    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function(){
      URL.revokeObjectURL(url);
      var iw = img.naturalWidth, ih = img.naturalHeight;
      var targetRatio = ratioW / ratioH;
      var srcRatio = iw / ih;
      var sx, sy, sw, sh;
      if(srcRatio > targetRatio){
        sh = ih; sw = ih * targetRatio; sx = (iw - sw) / 2; sy = 0;
      } else {
        sw = iw; sh = iw / targetRatio; sx = 0; sy = (ih - sh) / 2;
      }
      var maxOut = 2600;
      var outW, outH;
      if(sw >= sh){ outW = Math.min(maxOut, sw); outH = outW / targetRatio; }
      else { outH = Math.min(maxOut, sh); outW = outH * targetRatio; }
      var canvas = document.createElement('canvas');
      canvas.width = Math.round(outW);
      canvas.height = Math.round(outH);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(function(blob){
        if(!blob){ reject(new Error('ritaglio fallito')); return; }
        resolve(blob);
      }, 'image/jpeg', 0.92);
    };
    img.onerror = function(){ URL.revokeObjectURL(url); reject(new Error('immagine non valida')); };
    img.src = url;
  });
}
function uploadCoverForExistingItem(itemId, file, ratioW, ratioH, forceReal){
  // Modalità bozza: se attiva (e non stiamo pubblicando per davvero),
  // il file resta solo in questo browser — anteprima istantanea, niente
  // Supabase, niente cache, niente sorprese. "Pubblica bozze" richiama
  // questa stessa funzione con forceReal=true per il caricamento vero.
  if(isDraftModeOn() && !forceReal){
    var statusD = document.querySelector('[data-cover-status-for="'+itemId+'"]');
    if(statusD) statusD.textContent = t('cover.uploading');
    // La miniatura bozza è 70x70: 500px di lato bastano e avanzano.
    // Un dataURL a piena risoluzione (spesso diversi MB) può sforare la
    // quota di localStorage — il salvataggio falliva allora in silenzio,
    // senza errore e senza anteprima.
    return compressImageFile(file, 500, 0.8).then(function(compressed){
      return fileToDataUrl(compressed);
    }).then(function(dataUrl){
      var d = getDraft();
      d.coverEdits[itemId] = dataUrl;
      saveDraft(d);
      if(statusD) statusD.textContent = 'salvato in bozza';
      renderAdminList(); renderDraftBar();
    }).catch(function(err){
      console.warn('Draft cover preview failed:', err);
      if(statusD) statusD.textContent = '✕ ' + (err && err.message ? err.message : 'errore anteprima');
    });
  }
  // Niente più ritaglio forzato all'upload: il file salvato è sempre
  // l'originale intero, invariato. A mostrarlo per intero (senza tagli
  // né margini superflui) ci pensa solo il CSS a video (object-fit:contain
  // sulla card quadrata) — così l'immagine reale non perde mai pezzi per
  // sempre, qualunque formato scelga chi carica.
  var status = document.querySelector('[data-cover-status-for="'+itemId+'"]');
  if(status) status.textContent = t('cover.uploading');
  return compressImageFile(file, 2600, 0.92).then(function(compressed){
    return uploadCatalogAsset(compressed, itemId + '/cover-' + Date.now() + '.jpg');
  }).then(function(url){
    var session = getSession();
    return fetch(SUPABASE_URL + '/rest/v1/catalog?id=eq.' + encodeURIComponent(itemId), {
      method:'PATCH',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
      body: JSON.stringify({cover_url: url})
    }).then(function(r){
      if(!r.ok) throw new Error('cover update failed: ' + r.status);
      return r.json().then(function(rows){
        // Supabase/PostgREST risponde "ok" anche quando lo WHERE non trova
        // nessuna riga (0 righe toccate) — senza "Prefer: return=representation"
        // questo passa inosservato e l'app crede erroneamente di aver salvato.
        // Qui controlliamo davvero: se non torna indietro la riga aggiornata,
        // il salvataggio non è avvenuto per davvero.
        if(!rows || rows.length === 0){
          throw new Error('nessuna riga aggiornata nel database (id non trovato: ' + itemId + ')');
        }
        var items = getCatalog();
        var item = items.find(function(i){ return i.id === itemId; });
        if(item) item.cover_url = url;
        saveCatalogLocal(items);
        if(status){
          status.textContent = '✓';
          setTimeout(function(){ if(status) status.textContent = ''; }, 4000);
        }
        renderCatalog();
        renderAdminList();
      });
    });
  }).catch(function(err){
    console.warn('Cover update for existing item failed:', err);
    if(status) status.textContent = '✕ ' + (err && err.message ? err.message : 'errore');
  });
}

/* ============ COMIC PAGES CAROUSEL (admin, new-title upload) ============ */
var pendingPages = []; // [{file, previewUrl}] — order here is upload order, drag-reorderable
var pendingCover = null; // {file, previewUrl} | null
var pendingPdf = null; // File | null

function handleCoverSelected(file){
  if(pendingCover) URL.revokeObjectURL(pendingCover.previewUrl);
  pendingCover = {file: file, previewUrl: URL.createObjectURL(file)};
  document.getElementById('coverPreviewImg').src = pendingCover.previewUrl;
  document.getElementById('coverPreview').classList.remove('hidden');
}
function clearPendingCover(){
  if(pendingCover) URL.revokeObjectURL(pendingCover.previewUrl);
  pendingCover = null;
  document.getElementById('coverPreview').classList.add('hidden');
  document.getElementById('fCover').value = '';
}
function handlePdfSelected(file){
  pendingPdf = file;
  var note = document.getElementById('pdfSelectedNote');
  note.textContent = file.name;
  note.classList.remove('hidden');
}
function clearPendingPdf(){
  pendingPdf = null;
  document.getElementById('fPdf').value = '';
  document.getElementById('pdfSelectedNote').classList.add('hidden');
}
/* ============ SYNOPSIS AUTO-TRANSLATION (English source → IT/ES/FR/DE via DeepL,
   routed through an Edge Function so the paid API key never reaches the browser) ============ */
function synopsisForCurrentLang(item){
  var field = 'synopsis_' + currentLang;
  if(currentLang !== 'en' && item[field]) return item[field];
  return item.synopsis || ''; // English source, or fallback if that language isn't translated yet
}

/* ============ NEWSLETTER ============ */
function handleNewsletterSubmit(e){
  e.preventDefault();
  var input = document.getElementById('newsletterEmail');
  var btn = document.getElementById('newsletterSubmit');
  var feedback = document.getElementById('newsletterFeedback');
  var email = input.value.trim();
  feedback.className = 'newsletter-feedback hidden';

  btn.disabled = true;
  fetch(SUPABASE_URL + '/functions/v1/subscribe-newsletter', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Content-Type':'application/json' },
    body: JSON.stringify({email: email})
  }).then(function(r){
    if(!r.ok) throw new Error('subscribe failed: ' + r.status);
    feedback.textContent = t('newsletter.success');
    feedback.className = 'newsletter-feedback success';
    input.value = '';
  }).catch(function(err){
    console.warn('Newsletter subscribe failed:', err);
    feedback.textContent = t('newsletter.error');
    feedback.className = 'newsletter-feedback error';
  }).then(function(){
    btn.disabled = false;
  });
}

function translateSynopsis(englishText){
  var session = getSession();
  if(!session) return Promise.reject(new Error('not signed in'));
  return fetch(SUPABASE_URL + '/functions/v1/translate-synopsis', {
    method:'POST',
    headers:{ 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({text: englishText})
  }).then(function(r){
    if(!r.ok) throw new Error('translation failed: ' + r.status);
    return r.json(); // {it, es, fr, de}
  });
}

/* Traduzione libera di un singolo messaggio di chat, verso la lingua che
   l'utente ha impostato per l'interfaccia — a differenza di translateSynopsis
   (che traduce SEMPRE dall'inglese verso le altre 4), qui il messaggio può
   partire da una qualsiasi delle 5 lingue del sito: il rilevamento della
   lingua di partenza lo fa DeepL stesso lato server. */
function translateChatMessage(text){
  var session = getSession();
  if(!session) return Promise.reject(new Error('not signed in'));
  return fetch(SUPABASE_URL + '/functions/v1/translate-message', {
    method:'POST',
    headers:{ 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({ text: text, target: currentLang })
  }).then(function(r){
    if(!r.ok) throw new Error('translation failed: ' + r.status);
    return r.json(); // {translated}
  });
}

function uploadCatalogAsset(file, path){
  var session = getSession();
  return fetch(SUPABASE_URL + '/storage/v1/object/comic-pages/' + path, {
    method:'POST',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer ' + session.access_token,
      'Content-Type': file.type || 'application/octet-stream',
      'x-upsert': 'true'
    },
    body: file
  }).then(function(r){
    if(!r.ok) throw new Error('asset upload failed: ' + r.status);
    return SUPABASE_URL + '/storage/v1/object/public/comic-pages/' + path;
  });
}

/* Comprime un'immagine PRIMA di caricarla, ridimensionandola a un massimo
   di maxDim px sul lato lungo — così il file pesante non esiste mai sui
   nostri server, invece di sperare che una trasformazione lato Supabase
   lo alleggerisca dopo. Funziona identica su sito web e app PWA (è solo
   JavaScript nel browser, nessuna dipendenza da servizi esterni). Usata
   SOLO per copertine e avatar: le pagine dei fumetti restano intatte,
   perché lì la qualità di lettura conta più della velocità. */
function compressImageFile(file, maxDim, quality){
  return new Promise(function(resolve){
    if(!file.type || file.type.indexOf('image/') !== 0){ resolve(file); return; }
    var img = new Image();
    var objectUrl = URL.createObjectURL(file);
    img.onload = function(){
      URL.revokeObjectURL(objectUrl);
      var w = img.naturalWidth, h = img.naturalHeight;
      if(w <= maxDim && h <= maxDim){ resolve(file); return; } // già leggera, non tocchiamo nulla
      var scale = maxDim / Math.max(w, h);
      var canvas = document.createElement('canvas');
      canvas.width = Math.round(w * scale);
      canvas.height = Math.round(h * scale);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(function(blob){
        if(!blob){ resolve(file); return; } // se la compressione fallisce, meglio l'originale che niente
        var compressed = new File([blob], file.name, { type:'image/jpeg' });
        resolve(compressed);
      }, 'image/jpeg', quality);
    };
    img.onerror = function(){ URL.revokeObjectURL(objectUrl); resolve(file); };
    img.src = objectUrl;
  });
}

function renderPagesPreview(){
  var box = document.getElementById('pagesPreview');
  box.innerHTML = '';
  pendingPages.forEach(function(p, idx){
    var thumb = document.createElement('div');
    thumb.className = 'page-thumb';
    thumb.draggable = true;
    thumb.innerHTML =
      '<img src="' + p.previewUrl + '" alt="">' +
      '<span class="num">' + (idx + 1) + '</span>' +
      '<button type="button" class="rm" data-rm="' + idx + '">×</button>';
    thumb.querySelector('[data-rm]').addEventListener('click', function(e){
      e.stopPropagation();
      URL.revokeObjectURL(pendingPages[idx].previewUrl);
      pendingPages.splice(idx, 1);
      renderPagesPreview();
    });
    thumb.addEventListener('dragstart', function(e){
      thumb.classList.add('dragging');
      e.dataTransfer.setData('text/plain', String(idx));
      e.dataTransfer.effectAllowed = 'move';
    });
    thumb.addEventListener('dragend', function(){ thumb.classList.remove('dragging'); });
    thumb.addEventListener('dragover', function(e){ e.preventDefault(); thumb.classList.add('drag-over'); });
    thumb.addEventListener('dragleave', function(){ thumb.classList.remove('drag-over'); });
    thumb.addEventListener('drop', function(e){
      e.preventDefault();
      thumb.classList.remove('drag-over');
      var fromIdx = Number(e.dataTransfer.getData('text/plain'));
      if(fromIdx === idx || isNaN(fromIdx)) return;
      var moved = pendingPages.splice(fromIdx, 1)[0];
      pendingPages.splice(idx, 0, moved);
      renderPagesPreview();
    });
    box.appendChild(thumb);
  });
}

/* ============ WATERMARK (baked into the actual image pixels, not a removable CSS
   overlay — this is what makes it real: it survives screenshots, saved files,
   and disabling any page styling, because it's part of the file itself) ============ */
function rewatermarkExistingItem(itemId, pages, btnEl){
  if(!pages || pages.length === 0) return;
  var status = document.getElementById('pagesUploadStatus');
  if(btnEl) btnEl.disabled = true;
  var i = 0;
  var session;
  function next(){
    if(i >= pages.length) return Promise.resolve();
    if(status) status.textContent = t('rewatermark.progress').replace('{n}', i + 1).replace('{total}', pages.length);
    var url = pages[i];
    var marker = '/comic-pages/';
    var markerIdx = url.indexOf(marker);
    var path = markerIdx !== -1 ? url.slice(markerIdx + marker.length).split('?')[0] : null;
    if(!path) { i++; return next(); } // unexpected URL shape — skip rather than fail the whole batch
    return fetch(url).then(function(r){
      if(!r.ok) throw new Error('Pagina ' + (i+1) + ': lettura fallita (HTTP ' + r.status + ')');
      return r.blob();
    }).then(function(rawBlob){
      return watermarkImageFile(rawBlob).catch(function(){
        throw new Error('Pagina ' + (i+1) + ': elaborazione immagine fallita — il file potrebbe essere danneggiato o in un formato non supportato');
      });
    }).then(function(watermarkedBlob){
      return fetch(SUPABASE_URL + '/storage/v1/object/comic-pages/' + path, {
        method:'POST',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'x-upsert':'true', 'Content-Type':'image/jpeg' },
        body: watermarkedBlob
      }).then(function(r){
        if(!r.ok){
          return r.text().then(function(bodyText){
            throw new Error('Pagina ' + (i+1) + ': caricamento fallito (HTTP ' + r.status + ') — ' + bodyText.slice(0,200));
          });
        }
        i++;
        return next();
      });
    });
  }
  refreshSessionIfNeeded().then(function(){
    session = getSession();
    if(!session){ throw new Error('Sessione scaduta — esci e accedi di nuovo, poi riprova.'); }
    return next();
  }).then(function(){
    if(status) status.textContent = '';
    if(btnEl) btnEl.disabled = false;
    // mark as done — both on Supabase and in the local cached copy, so the
    // "Filigranato" tag shows immediately without needing a page reload
    var items = getCatalog();
    var target = items.find(function(x){ return x.id === itemId; });
    if(target) target.pages_watermarked = true;
    saveCatalogLocal(items);
    renderAdminList();
    fetch(SUPABASE_URL + '/rest/v1/catalog?id=eq.' + encodeURIComponent(itemId), {
      method:'PATCH',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
      body: JSON.stringify({pages_watermarked: true})
    }).catch(function(err){ console.warn('Marking pages_watermarked failed (non-blocking):', err); });
  }).catch(function(err){
    console.warn('Rewatermark failed:', err);
    if(status) status.textContent = '';
    if(btnEl) btnEl.disabled = false;
    alert(t('rewatermark.error') + '\n\n' + (err && err.message ? err.message : err));
  });
}

function watermarkImageFile(file){
  return new Promise(function(resolve, reject){
    var img = new Image();
    var objectUrl = URL.createObjectURL(file);
    img.onload = function(){
      URL.revokeObjectURL(objectUrl);
      var canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // repeating diagonal watermark text, tiled across the whole page
      var text = 'LUX COMICS & MEDUSA COMICS';
      var fontSize = Math.max(16, Math.round(canvas.width / 22));
      ctx.font = fontSize + 'px "Space Mono", monospace';
      ctx.fillStyle = 'rgba(255,255,255,0.16)';
      ctx.strokeStyle = 'rgba(0,0,0,0.10)';
      ctx.lineWidth = 1;
      ctx.textBaseline = 'middle';
      var textWidth = ctx.measureText(text).width;
      var stepX = textWidth + fontSize * 3;
      var stepY = fontSize * 5;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(-Math.PI / 8);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
      var diag = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);
      for(var y = -diag; y < diag; y += stepY){
        for(var x = -diag; x < diag; x += stepX){
          ctx.fillText(text, x, y);
          ctx.strokeText(text, x, y);
        }
      }
      ctx.restore();

      canvas.toBlob(function(blob){
        if(!blob){ reject(new Error('watermark canvas export failed')); return; }
        resolve(blob);
      }, 'image/jpeg', 0.92);
    };
    img.onerror = function(){ URL.revokeObjectURL(objectUrl); reject(new Error('image load failed for watermarking')); };
    img.src = objectUrl;
  });
}

function uploadComicPage(file, path){
  var session = getSession();
  return fetch(SUPABASE_URL + '/storage/v1/object/comic-pages/' + path, {
    method:'POST',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer ' + session.access_token,
      'Content-Type': file.type || 'image/jpeg'
    },
    body: file
  }).then(function(r){
    if(!r.ok) throw new Error('page upload failed: ' + r.status);
    return SUPABASE_URL + '/storage/v1/object/public/comic-pages/' + path;
  });
}

function uploadCleanPage(file, path){
  var session = getSession();
  return fetch(SUPABASE_URL + '/storage/v1/object/comic-pages-clean/' + path, {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type': file.type || 'image/jpeg' },
    body: file
  }).then(function(r){
    if(!r.ok) throw new Error('clean page upload failed: ' + r.status);
    return path; // bucket privato — restituiamo solo il percorso, non un url pubblico
  });
}

function uploadAllPendingPages(comicId){
  var status = document.getElementById('pagesUploadStatus');
  if(pendingPages.length === 0) return Promise.resolve({urls:[], cleanPaths:[]});
  var urls = [];
  var cleanPaths = [];
  var i = 0;
  function next(){
    if(i >= pendingPages.length) return Promise.resolve({urls:urls, cleanPaths:cleanPaths});
    status.textContent = t('pages.uploading').replace('{n}', i + 1).replace('{total}', pendingPages.length);
    var file = pendingPages[i].file;
    var pageNum = String(i + 1);
    while(pageNum.length < 3) pageNum = '0' + pageNum;
    var path = comicId + '/' + pageNum + '.jpg'; // watermarking always re-encodes to JPEG
    return watermarkImageFile(file).then(function(watermarkedBlob){
      return uploadComicPage(watermarkedBlob, path);
    }).then(function(url){
      urls.push(url);
      return uploadCleanPage(file, path); // stesso nome file, bucket diverso (privato)
    }).then(function(cleanPath){
      cleanPaths.push(cleanPath);
      i++;
      return next();
    });
  }
  return next();
}

function clearPendingPages(){
  pendingPages.forEach(function(p){ URL.revokeObjectURL(p.previewUrl); });
  pendingPages = [];
  renderPagesPreview();
  document.getElementById('fPages').value = '';
}

/* ============ COLLABORATORI (fino a 6, blocchi 2-6 nascosti finché non richiesti) ============ */
function resetCollabBlocks(){
  for(var i = 1; i <= 6; i++){
    var nameEl = document.getElementById('fCollabName' + i);
    var urlEl = document.getElementById('fCollabUrl' + i);
    var verEl = document.getElementById('fCollabVerified' + i);
    if(nameEl) nameEl.value = '';
    if(urlEl) urlEl.value = '';
    if(verEl) verEl.checked = false;
    if(i > 1){
      var block = document.getElementById('collabBlock' + i);
      if(block) block.classList.add('hidden');
    }
  }
  updateAddCollabBtn();
}
function nextHiddenCollabBlock(){
  for(var i = 2; i <= 6; i++){
    var block = document.getElementById('collabBlock' + i);
    if(block && block.classList.contains('hidden')) return block;
  }
  return null;
}
function updateAddCollabBtn(){
  var btn = document.getElementById('btnAddCollab');
  if(!btn) return;
  btn.style.display = nextHiddenCollabBlock() ? '' : 'none';
}
function addCollabBlock(){
  var block = nextHiddenCollabBlock();
  if(!block) return;
  block.classList.remove('hidden');
  updateAddCollabBtn();
}
function removeCollabBlock(idx){
  var nameEl = document.getElementById('fCollabName' + idx);
  var urlEl = document.getElementById('fCollabUrl' + idx);
  var verEl = document.getElementById('fCollabVerified' + idx);
  if(nameEl) nameEl.value = '';
  if(urlEl) urlEl.value = '';
  if(verEl) verEl.checked = false;
  var block = document.getElementById('collabBlock' + idx);
  if(block) block.classList.add('hidden');
  updateAddCollabBtn();
}
(function injectCollabStyles(){
  var style = document.createElement('style');
  style.textContent =
    '.collab-block{display:grid;grid-template-columns:1fr 1fr auto;gap:10px;align-items:center;margin-bottom:18px;}' +
    '.collab-block.hidden{display:none;}' +
    '.collab-block .mature-toggle{margin:6px 0;}' +
    '#btnAddCollab{margin-top:6px;}' +
    '@media (max-width:640px){' +
      '.collab-block{grid-template-columns:1fr;gap:8px;margin-bottom:24px;}' +
      '.collab-block .mature-toggle{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:8px 0;}' +
      '.collab-block .rm{justify-self:end;}' +
    '}';
  document.head.appendChild(style);
})();
(function initCollabBlocks(){
  function attach(){
    var addBtn = document.getElementById('btnAddCollab');
    if(addBtn) addBtn.addEventListener('click', addCollabBlock);
    for(var i = 2; i <= 6; i++){
      (function(idx){
        var rmBtn = document.getElementById('btnRemoveCollab' + idx);
        if(rmBtn) rmBtn.addEventListener('click', function(){ removeCollabBlock(idx); });
      })(i);
    }
    updateAddCollabBtn();
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }
})();

var editingItemId = null; // se valorizzato, handleAddEntry() salva una MODIFICA invece di una nuova voce

function openEditTitle(id){
  var item = getCatalog().find(function(x){ return x.id === id; });
  if(!item) return;
  editingItemId = id;
  document.getElementById('fTitle').value = item.title || '';
  document.getElementById('fCharacter').value = item.character || '';
  document.getElementById('fIssue').value = item.issue || '';
  document.getElementById('fDate').value = item.date || '';
  document.getElementById('fPrice').value = item.price != null ? item.price : '';
  document.getElementById('fSynopsis').value = item.synopsis || '';
  document.getElementById('fMature').checked = !!item.mature;
  resetCollabBlocks();
  var collabArr = (item.collaborators && item.collaborators.length)
    ? item.collaborators
    : (item.collaborator_name ? [{ name:item.collaborator_name, url:item.collaborator_url, verified:item.collaborator_verified }] : []);
  collabArr.slice(0,6).forEach(function(c, idx){
    var i = idx + 1;
    if(i > 1){ // il blocco 1 è sempre visibile, dal 2 in su vanno rivelati esplicitamente
      var blockEl = document.getElementById('collabBlock' + i);
      if(blockEl) blockEl.classList.remove('hidden');
    }
    var nEl = document.getElementById('fCollabName' + i);
    var uEl = document.getElementById('fCollabUrl' + i);
    var vEl = document.getElementById('fCollabVerified' + i);
    if(nEl) nEl.value = c.name || '';
    if(uEl) uEl.value = c.url || '';
    if(vEl) vEl.checked = !!c.verified;
  });
  updateAddCollabBtn();
  var btn = document.getElementById('btnAddEntry');
  if(btn){ btn.textContent = t('admin.saveChanges'); btn.classList.remove('hidden'); }
  var cancelBtn = document.getElementById('btnCancelEditTitle');
  if(cancelBtn) cancelBtn.classList.remove('hidden');
  switchAdminTab('catalog');
  document.getElementById('fTitle').scrollIntoView({behavior:'smooth', block:'center'});
}

function cancelEditTitle(){
  editingItemId = null;
  document.getElementById('fTitle').value = '';
  document.getElementById('fIssue').value = '';
  document.getElementById('fDate').value = '';
  document.getElementById('fPrice').value = '';
  resetCollabBlocks();
  document.getElementById('fSynopsis').value = '';
  document.getElementById('fMature').checked = false;
  var btn = document.getElementById('btnAddEntry');
  if(btn){
    btn.textContent = t('admin.add');
    if(!isAdmin() && !hasActiveCreationSession()) btn.classList.add('hidden');
  }
  var cancelBtn = document.getElementById('btnCancelEditTitle');
  if(cancelBtn) cancelBtn.classList.add('hidden');
}

/* ============ MODALITÀ BOZZA (anteprima locale prima di pubblicare) ============
   Quando attiva: aggiungere un titolo o cambiare una copertina NON scrive
   su Supabase — resta salvato solo in questo browser (localStorage), con
   un'anteprima che usa lo stesso identico HTML/CSS delle card vere, ma
   con l'immagine mostrata direttamente dal file locale (nessuna rete,
   nessuna cache CDN di mezzo — quello che vedi è sempre esatto).
   "Pubblica bozze" manda tutto online, una voce alla volta. */
function isDraftModeOn(){ return localStorage.getItem('lux_draft_mode') === '1'; }
function injectDraftModeToggle(){
  if(document.getElementById('draftModeToggleWrap')) return; // già inserito, non duplicare
  var list = document.getElementById('adminList');
  if(!list || !list.parentNode) return;
  var wrap = document.createElement('div');
  wrap.id = 'draftModeToggleWrap';
  wrap.className = 'draft-mode-toggle-wrap';
  wrap.innerHTML =
    '<label class="draft-mode-toggle">'+
      '<input type="checkbox" id="chkDraftMode"'+(isDraftModeOn()?' checked':'')+'>'+
      '<span>Modalità bozza — nuovi titoli e copertine restano solo qui finché non pubblichi</span>'+
    '</label>'+
    '<div id="draftBar" class="draft-bar hidden"></div>';
  list.parentNode.insertBefore(wrap, list);
  document.getElementById('chkDraftMode').addEventListener('change', function(e){
    setDraftMode(e.target.checked);
  });
  renderDraftBar();
}
function setDraftMode(on){ localStorage.setItem('lux_draft_mode', on ? '1' : '0'); renderAdminList(); renderDraftBar(); }
function getDraft(){
  try{ return JSON.parse(localStorage.getItem('lux_admin_draft') || '{"newItems":[],"coverEdits":{}}'); }
  catch(e){ return {newItems:[], coverEdits:{}}; }
}
function saveDraft(d){ localStorage.setItem('lux_admin_draft', JSON.stringify(d)); }
function draftPendingCount(){
  var d = getDraft();
  return d.newItems.length + Object.keys(d.coverEdits).length;
}
function fileToDataUrl(file){
  return new Promise(function(resolve, reject){
    var reader = new FileReader();
    reader.onload = function(){ resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function renderDraftBar(){
  var bar = document.getElementById('draftBar');
  if(!bar) return;
  var n = draftPendingCount();
  if(!isDraftModeOn() || n === 0){ bar.classList.add('hidden'); bar.innerHTML=''; return; }
  bar.classList.remove('hidden');
  bar.innerHTML =
    '<span>' + n + ' modifiche in bozza, non ancora online</span>' +
    '<button type="button" class="btn btn-primary btn-sm" id="btnPublishDraft">Pubblica bozze</button>' +
    '<button type="button" class="btn btn-ghost btn-sm" id="btnDiscardDraft">Scarta bozze</button>';
  document.getElementById('btnPublishDraft').addEventListener('click', publishDraft);
  document.getElementById('btnDiscardDraft').addEventListener('click', function(){
    if(!confirm('Scartare tutte le modifiche in bozza non ancora pubblicate?')) return;
    saveDraft({newItems:[], coverEdits:{}});
    renderAdminList(); renderDraftBar();
  });
}
function publishDraft(){
  var d = getDraft();
  var bar = document.getElementById('draftBar');
  if(bar) bar.innerHTML = '<span>Pubblicazione in corso…</span>';

  var chain = Promise.resolve();

  // 1) copertine cambiate su titoli esistenti
  Object.keys(d.coverEdits).forEach(function(itemId){
    chain = chain.then(function(){
      return dataUrlToBlob(d.coverEdits[itemId]).then(function(blob){
        return uploadCoverForExistingItem(itemId, blob, undefined, undefined, true);
      });
    });
  });

  // 2) titoli nuovi (stessa logica di handleAddEntry, ma senza passare da qui di nuovo)
  d.newItems.forEach(function(draftItem){
    chain = chain.then(function(){
      return publishSingleDraftNewItem(draftItem);
    });
  });

  chain.then(function(){
    saveDraft({newItems:[], coverEdits:{}});
    return fetchCatalogFromSupabase();
  }).then(function(){
    renderCatalog(); renderAdminList(); renderDraftBar();
  }).catch(function(err){
    console.warn('Publish draft failed:', err);
    if(bar) bar.innerHTML = '<span style="color:#d9756b;">Pubblicazione fallita: ' + (err && err.message ? err.message : 'errore') + '</span>';
  });
}
function dataUrlToBlob(dataUrl){
  return fetch(dataUrl).then(function(r){ return r.blob(); });
}
function publishSingleDraftNewItem(draftItem){
  var newItem = {
    id: 'c' + Date.now() + Math.floor(Math.random()*1000),
    character: draftItem.character, title: draftItem.title, issue: draftItem.issue,
    date: draftItem.date || new Date().toISOString().slice(0,10),
    price: draftItem.price ? Number(draftItem.price) : null,
    collaborator_name: null, collaborator_url: null, collaborator_verified: false, collaborators: [],
    synopsis: draftItem.synopsis, mature: draftItem.mature, pages: [], cover_url: null, pdf_url: null,
    created_by: !isAdmin() ? currentUserId() : null,
    synopsis_it: null, synopsis_es: null, synopsis_fr: null, synopsis_de: null
  };
  var steps = Promise.resolve();
  steps = steps.then(function(){
    return translateSynopsis(draftItem.synopsis).then(function(result){
      newItem.synopsis_it = result.it || null; newItem.synopsis_es = result.es || null;
      newItem.synopsis_fr = result.fr || null; newItem.synopsis_de = result.de || null;
    }).catch(function(){});
  });
  if(draftItem.coverDataUrl){
    steps = steps.then(function(){
      return dataUrlToBlob(draftItem.coverDataUrl).then(function(blob){
        return compressImageFile(blob, 2600, 0.92);
      }).then(function(compressed){
        return uploadCatalogAsset(compressed, newItem.id + '/cover-' + Date.now() + '.jpg');
      });
    }).then(function(url){ newItem.cover_url = url; });
  }
  return steps.then(function(){ return supabaseInsert(newItem); });
}

function handleAddEntry(){
  var title = document.getElementById('fTitle').value.trim();
  var character = document.getElementById('fCharacter').value;
  var issue = document.getElementById('fIssue').value.trim();
  var date = document.getElementById('fDate').value;
  var price = document.getElementById('fPrice').value;
  var collabList = [];
  for(var ci = 1; ci <= 6; ci++){
    var cnEl = document.getElementById('fCollabName' + ci);
    var cuEl = document.getElementById('fCollabUrl' + ci);
    var cvEl = document.getElementById('fCollabVerified' + ci);
    if(!cnEl) continue;
    var cn = cnEl.value.trim();
    if(!cn) continue;
    collabList.push({
      name: cn,
      url: cuEl ? cuEl.value.trim() || null : null,
      verified: cvEl ? cvEl.checked : false
    });
  }
  var synopsis = document.getElementById('fSynopsis').value.trim();
  var mature = document.getElementById('fMature').checked;
  var err = document.getElementById('adminError');
  var status = document.getElementById('pagesUploadStatus');
  err.textContent = '';
  status.textContent = '';
  if(!title || !synopsis){
    err.textContent = t('err.required');
    return;
  }
  var isEdit = !!editingItemId;
  // Solo admin, o un collaboratore con sessione attiva, può pubblicare un
  // titolo NUOVO — modificare i propri titoli già pubblicati resta invece
  // sempre permesso, sessione attiva o no.
  if(!isEdit && !isAdmin() && !hasActiveCreationSession()){
    err.textContent = t('collabSession.expired');
    return;
  }

  // Modalità bozza (solo per titoli NUOVI, non per modifiche a uno già
  // esistente): salva tutto in locale, non tocca Supabase, mostra
  // un'anteprima con la copertina vera. "Pubblica bozze" fa il resto dopo.
  if(!isEdit && isDraftModeOn()){
    var draftItem = {
      character: character, title: title, issue: issue, date: date,
      price: price, synopsis: synopsis, mature: mature, coverDataUrl: null
    };
    var afterSave = function(){
      var d = getDraft();
      d.newItems.push(draftItem);
      saveDraft(d);
      document.getElementById('fTitle').value = '';
      document.getElementById('fIssue').value = '';
      document.getElementById('fDate').value = '';
      document.getElementById('fPrice').value = '';
      document.getElementById('fSynopsis').value = '';
      document.getElementById('fMature').checked = false;
      status.textContent = 'Titolo salvato in bozza — non ancora online.';
      renderDraftBar();
    };
    if(pendingCover){
      compressImageFile(pendingCover.file, 500, 0.8).then(function(compressed){
        return fileToDataUrl(compressed);
      }).then(function(dataUrl){
        draftItem.coverDataUrl = dataUrl;
        afterSave();
      }).catch(function(err){
        console.warn('Draft new-item cover preview failed:', err);
        status.textContent = '✕ ' + (err && err.message ? err.message : 'errore anteprima copertina');
      });
    } else {
      afterSave();
    }
    return;
  }

  var existing = isEdit ? getCatalog().find(function(x){ return x.id === editingItemId; }) : null;
  if(isEdit && !existing){ isEdit = false; editingItemId = null; } // la voce originale non c'è più — meglio ripartire da zero che salvare nel vuoto

  var newItem = isEdit ? {
    id: existing.id,
    character: character, title: title, issue: issue,
    date: date || existing.date || new Date().toISOString().slice(0,10),
    price: price ? Number(price) : null,
    collaborator_name: collabList[0] ? collabList[0].name : null,
    collaborator_url: collabList[0] ? collabList[0].url : null,
    collaborator_verified: collabList[0] ? collabList[0].verified : false,
    collaborators: collabList,
    synopsis: synopsis, mature: mature,
    pages: existing.pages || [], pages_clean: existing.pages_clean || [],
    pages_watermarked: existing.pages_watermarked, cover_url: existing.cover_url || null,
    pdf_url: existing.pdf_url || null, created_by: existing.created_by || null,
    permanent: existing.permanent,
    synopsis_it: existing.synopsis_it || null, synopsis_es: existing.synopsis_es || null,
    synopsis_fr: existing.synopsis_fr || null, synopsis_de: existing.synopsis_de || null
  } : {
    id: 'c' + Date.now(),
    character: character, title: title, issue: issue,
    date: date || new Date().toISOString().slice(0,10),
    price: price ? Number(price) : null,
    collaborator_name: collabList[0] ? collabList[0].name : null,
    collaborator_url: collabList[0] ? collabList[0].url : null,
    collaborator_verified: collabList[0] ? collabList[0].verified : false,
    collaborators: collabList,
    synopsis: synopsis, mature: mature, pages: [], cover_url: null, pdf_url: null,
    created_by: !isAdmin() ? currentUserId() : null,
    synopsis_it: null, synopsis_es: null, synopsis_fr: null, synopsis_de: null
  };

  var btn = document.getElementById('btnAddEntry');
  btn.disabled = true;

  var uploadSteps = Promise.resolve();

  // translate the synopsis into IT/ES/FR/DE up front — best-effort: if DeepL
  // isn't configured yet or the call fails, the title still saves fine and
  // just falls back to the English synopsis until it's translated later
  uploadSteps = uploadSteps.then(function(){
    status.textContent = t('synopsis.translating');
    return translateSynopsis(synopsis).then(function(result){
      newItem.synopsis_it = result.it || null;
      newItem.synopsis_es = result.es || null;
      newItem.synopsis_fr = result.fr || null;
      newItem.synopsis_de = result.de || null;
    }).catch(function(err){
      console.warn('Synopsis translation failed, continuing without it:', err);
    });
  });

  if(pendingCover){
    var coverExtMatch = /\.([a-zA-Z0-9]+)$/.exec(pendingCover.file.name || '');
    var coverExt = coverExtMatch ? coverExtMatch[1].toLowerCase() : 'jpg';
    uploadSteps = uploadSteps.then(function(){
      status.textContent = t('cover.uploading');
      return compressImageFile(pendingCover.file, 2600, 0.92).then(function(compressed){
        return uploadCatalogAsset(compressed, newItem.id + '/cover-' + Date.now() + '.' + coverExt);
      });
    }).then(function(url){ newItem.cover_url = url; });
  }

  if(pendingPdf){
    uploadSteps = uploadSteps.then(function(){
      status.textContent = t('pdf.uploading');
      return uploadCatalogAsset(pendingPdf, newItem.id + '/comic.pdf');
    }).then(function(url){ newItem.pdf_url = url; });
  }

  uploadSteps = uploadSteps.then(function(){
    return uploadAllPendingPages(newItem.id);
  });

  uploadSteps.then(function(result){
    if(result.urls.length > 0){
      newItem.pages = result.urls;
      newItem.pages_clean = result.cleanPaths;
      newItem.pages_watermarked = true; // new uploads always go through the watermark step
    }
    status.textContent = '';
    var items = getCatalog();
    if(isEdit){
      var idx = items.findIndex(function(x){ return x.id === newItem.id; });
      if(idx >= 0) items[idx] = newItem;
    } else {
      items.push(newItem);
    }
    saveCatalogLocal(items);
    document.getElementById('fTitle').value = '';
    document.getElementById('fIssue').value = '';
    document.getElementById('fDate').value = '';
    document.getElementById('fPrice').value = '';
    resetCollabBlocks();
    document.getElementById('fSynopsis').value = '';
    document.getElementById('fMature').checked = false;
    clearPendingPages();
    clearPendingCover();
    clearPendingPdf();
    renderCatalog();
    renderAdminList();
    renderMyTitles();
    if(isEdit){
      var savedId = newItem.id;
      var patch = {}; for(var k in newItem){ if(k !== 'id') patch[k] = newItem[k]; }
      supabaseUpdate(savedId, patch);
      cancelEditTitle();
    } else {
      supabaseInsert(newItem);
    }
  }).catch(function(e){
    status.textContent = '';
    err.textContent = t('pages.uploadError');
    console.warn('Asset upload failed:', e);
  }).then(function(){
    btn.disabled = false;
  });
}

function handleExport(){
  var data = JSON.stringify(getCatalog(), null, 2);
  var blob = new Blob([data], {type:'application/json'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'lux-comics-catalog.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function handleImport(file){
  var reader = new FileReader();
  reader.onload = function(e){
    try{
      var data = JSON.parse(e.target.result);
      if(Array.isArray(data)){
        // merge into local cache (existing ids updated, new ids added)
        var current = getCatalog();
        var byId = {};
        current.forEach(function(i){ byId[i.id] = i; });
        data.forEach(function(i){ byId[i.id] = i; });
        var merged = Object.keys(byId).map(function(k){ return byId[k]; });
        saveCatalogLocal(merged);
        renderCatalog();
        renderAdminList();
        supabaseBulkUpsert(data); // note: import adds/updates but doesn't delete titles missing from the file
      }
    }catch(err){
      alert('JSON non valido / Invalid JSON');
    }
  };
  reader.readAsText(file);
}

/* ============ FAVORITES ============ */
var favoriteIds = new Set();

/* ============ USER PROFILE (display name, bio, avatar, favorite characters) ============ */
var currentProfile = null;

function openProfileModal(){
  if(!isSignedIn()){ openAuth('login'); return; }
  document.getElementById('profileError').textContent = '';
  document.getElementById('requestError').textContent = '';
  document.getElementById('fRequestBody').value = '';
  loadOwnProfile().then(function(){
    populateProfileForm();
    document.getElementById('profileModal').classList.remove('hidden');
    loadMyRequests();
  });
}
function closeProfileModal(){ document.getElementById('profileModal').classList.add('hidden'); }

function loadOwnProfile(){
  var session = getSession();
  if(!session) return Promise.resolve();
  return fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + encodeURIComponent(currentUserId()) + '&select=*', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('profile read failed'); return r.json(); })
    .then(function(rows){ currentProfile = rows[0] || null; })
    .catch(function(err){ console.warn('Profile load failed:', err); currentProfile = null; });
}
function populateProfileForm(){
  var p = currentProfile || {};
  document.getElementById('fDisplayName').value = p.display_name || '';
  document.getElementById('fBio').value = p.bio || '';
  document.getElementById('profileAvatarImg').src = p.avatar_url || '';
  document.getElementById('profileAvatarImg').style.opacity = p.avatar_url ? '1' : '0.2';
  document.getElementById('fBirthDate').value = p.birth_date || '';
  document.getElementById('fGender').value = p.gender || '';
  document.getElementById('profileBannerImg').src = p.banner_url || '';
  document.getElementById('fSocialInstagram').value = p.social_instagram || '';
  document.getElementById('fSocialTwitter').value = p.social_twitter || '';
  document.getElementById('fSocialTiktok').value = p.social_tiktok || '';
  document.getElementById('fSocialWebsite').value = p.social_website || '';
  var favs = p.favorite_characters || [];
  document.querySelectorAll('.fav-char-cb').forEach(function(cb){
    cb.checked = favs.indexOf(cb.value) !== -1;
  });
}
function pickAvatarPublicUrl(userId, ext){
  return SUPABASE_URL + '/storage/v1/object/public/avatars/' + userId + '/avatar.' + ext + '?t=' + Date.now();
}
function pickAvatarHdPublicUrl(userId, ext){
  return SUPABASE_URL + '/storage/v1/object/public/avatars/' + userId + '/avatar-hd.' + ext + '?t=' + Date.now();
}
function pickBannerPublicUrl(userId, ext){
  return SUPABASE_URL + '/storage/v1/object/public/avatars/' + userId + '/banner.' + ext + '?t=' + Date.now();
}
function saveProfile(){
  var session = getSession();
  if(!session) return;
  var err = document.getElementById('profileError');
  err.textContent = '';
  var displayName = document.getElementById('fDisplayName').value.trim();
  var bio = document.getElementById('fBio').value.trim();
  var birthDate = document.getElementById('fBirthDate').value;
  var gender = document.getElementById('fGender').value;
  var socialInstagram = document.getElementById('fSocialInstagram').value.trim();
  var socialTwitter = document.getElementById('fSocialTwitter').value.trim();
  var socialTiktok = document.getElementById('fSocialTiktok').value.trim();
  var socialWebsite = document.getElementById('fSocialWebsite').value.trim();
  var favs = Array.from(document.querySelectorAll('.fav-char-cb:checked')).map(function(cb){ return cb.value; });
  var btn = document.getElementById('btnSaveProfile');
  btn.disabled = true;

  var avatarStep = Promise.resolve(currentProfile ? currentProfile.avatar_url : null);
  var avatarFile = document.getElementById('fProfileAvatar').files[0];
  if(avatarFile){
    var extMatch = /\.([a-zA-Z0-9]+)$/.exec(avatarFile.name || '');
    var ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
    var path = currentUserId() + '/avatar.' + ext;
    avatarStep = fetch(SUPABASE_URL + '/storage/v1/object/avatars/' + path, {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'x-upsert':'true', 'Content-Type': avatarFile.type || 'image/jpeg' },
      body: avatarFile
    }).then(function(r){
      if(!r.ok) throw new Error('avatar upload failed');
      return pickAvatarPublicUrl(currentUserId(), ext);
    });
  }

  var avatarHdStep = Promise.resolve(currentProfile ? currentProfile.avatar_hd_url : null);
  var avatarHdFile = document.getElementById('fProfileAvatarHd').files[0];
  if(avatarHdFile){
    var extMatchHd = /\.([a-zA-Z0-9]+)$/.exec(avatarHdFile.name || '');
    var extHd = extMatchHd ? extMatchHd[1].toLowerCase() : 'jpg';
    var pathHd = currentUserId() + '/avatar-hd.' + extHd;
    avatarHdStep = fetch(SUPABASE_URL + '/storage/v1/object/avatars/' + pathHd, {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'x-upsert':'true', 'Content-Type': avatarHdFile.type || 'image/jpeg' },
      body: avatarHdFile
    }).then(function(r){
      if(!r.ok) throw new Error('avatar hd upload failed');
      return pickAvatarHdPublicUrl(currentUserId(), extHd);
    });
  }

  var bannerStep = Promise.resolve(currentProfile ? currentProfile.banner_url : null);
  var bannerFile = document.getElementById('fProfileBanner').files[0];
  if(bannerFile){
    var extMatchBn = /\.([a-zA-Z0-9]+)$/.exec(bannerFile.name || '');
    var extBn = extMatchBn ? extMatchBn[1].toLowerCase() : 'jpg';
    var pathBn = currentUserId() + '/banner.' + extBn;
    bannerStep = fetch(SUPABASE_URL + '/storage/v1/object/avatars/' + pathBn, {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'x-upsert':'true', 'Content-Type': bannerFile.type || 'image/jpeg' },
      body: bannerFile
    }).then(function(r){
      if(!r.ok) throw new Error('banner upload failed');
      return pickBannerPublicUrl(currentUserId(), extBn);
    });
  }

  Promise.all([avatarStep, avatarHdStep, bannerStep]).then(function(results){
    var avatarUrl = results[0];
    var avatarHdUrl = results[1];
    var bannerUrl = results[2];
    return fetch(SUPABASE_URL + '/rest/v1/profiles', {
      method:'POST',
      headers:{
        'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token,
        'Content-Type':'application/json', 'Prefer':'resolution=merge-duplicates,return=representation'
      },
      body: JSON.stringify({
        id: currentUserId(), display_name: displayName || null, bio: bio || null,
        avatar_url: avatarUrl || null, avatar_hd_url: avatarHdUrl || null, banner_url: bannerUrl || null,
        birth_date: birthDate || null, gender: gender || null,
        social_instagram: socialInstagram || null, social_twitter: socialTwitter || null,
        social_tiktok: socialTiktok || null, social_website: socialWebsite || null,
        favorite_characters: favs
      })
    });
  }).then(function(r){
    if(!r.ok) throw new Error('profile save failed');
    return r.json();
  }).then(function(rows){
    currentProfile = rows[0];
    populateProfileForm();
    document.getElementById('fProfileAvatar').value = '';
    document.getElementById('fProfileAvatarHd').value = '';
    document.getElementById('fProfileBanner').value = '';
  }).catch(function(e){
    console.warn('Profile save failed:', e);
    err.textContent = t('profile.saveError');
  }).then(function(){
    btn.disabled = false;
  });
}

/* ============ POPUP INFO AVATAR (click su un avatar ovunque nel sito) ============ */
function genderLabel(g){
  if(g === 'M') return t('profile.genderM');
  if(g === 'F') return t('profile.genderF');
  if(g === 'X') return t('profile.genderX');
  return null;
}
function openAvatarInfo(userId){
  if(!userId) return;
  fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + encodeURIComponent(userId) + '&select=display_name,avatar_url,avatar_hd_url,birth_date,gender,verified', { headers: communityHeaders() })
    .then(function(r){ if(!r.ok) throw new Error('avatar info read failed'); return r.json(); })
    .then(function(rows){
      var p = rows[0];
      if(!p) return;
      var bigUrl = p.avatar_hd_url || p.avatar_url || '';
      document.getElementById('avatarInfoImg').src = bigUrl;
      document.getElementById('avatarInfoImg').style.opacity = bigUrl ? '1' : '0.15';
      document.getElementById('avatarInfoImg').onclick = function(){ openImageLightbox(bigUrl); };
      var verifiedTag = p.verified ? ' ' + verifiedBadge('verified.commenter') : '';
      document.getElementById('avatarInfoName').innerHTML = escapeHtml(p.display_name || t('notif.someone')) + verifiedTag;
      var rows2 = '';
      if(p.birth_date){
        var d = new Date(p.birth_date);
        if(!isNaN(d)) rows2 += '<div class="avatar-info-row"><span class="k">' + t('profile.birthDate') + '</span><span class="v">' + d.toLocaleDateString() + '</span></div>';
      }
      var gLabel = genderLabel(p.gender);
      if(gLabel) rows2 += '<div class="avatar-info-row"><span class="k">' + t('profile.gender') + '</span><span class="v">' + escapeHtml(gLabel) + '</span></div>';
      document.getElementById('avatarInfoRows').innerHTML = rows2 || '<p class="avatar-info-empty">' + t('profile.avatarInfoEmpty') + '</p>';
      document.getElementById('avatarInfoModal').classList.remove('hidden');
    })
    .catch(function(e){ console.warn('Avatar info load failed:', e); });
}
function closeAvatarInfo(){ document.getElementById('avatarInfoModal').classList.add('hidden'); }

/* ============ LIGHTBOX IMMAGINE (ingrandimento a piena risoluzione) ============ */
function openImageLightbox(url){
  if(!url) return;
  document.getElementById('imageLightboxImg').src = url;
  document.getElementById('imageLightboxModal').classList.remove('hidden');
}
function closeImageLightbox(){ document.getElementById('imageLightboxModal').classList.add('hidden'); }

(function injectDmChatStyles(){
  var style = document.createElement('style');
  style.textContent =
    '#dmMessages{display:flex;flex-direction:column;gap:16px;padding:12px 6px;}' +
    '#dmMessages .dm-bubble{max-width:75%;padding:10px 16px;position:relative;' +
    'background:#fdfaf5;color:#2a1a1d;border:2px solid #6e1423;border-radius:18px;' +
    'font-family:"Crimson Pro",Georgia,serif;box-shadow:2px 3px 0 rgba(110,20,35,.15);}' +
    '#dmMessages .dm-bubble .author{display:none;}' +
    '#dmMessages .dm-bubble.mine{align-self:flex-end;border-color:#c9a24d;box-shadow:-2px 3px 0 rgba(201,162,77,.25);}' +
    '#dmMessages .dm-bubble.theirs{align-self:flex-start;}' +
    /* codetta a triangolo stile fumetto */
    '#dmMessages .dm-bubble::after{content:"";position:absolute;bottom:-9px;width:16px;height:16px;' +
    'background:#fdfaf5;border-right:2px solid;border-bottom:2px solid;}' +
    '#dmMessages .dm-bubble.mine::after{right:18px;border-color:#c9a24d;transform:rotate(45deg);}' +
    '#dmMessages .dm-bubble.theirs::after{left:18px;border-color:#6e1423;transform:rotate(135deg);}' +
    '#dmMessages .dm-bubble .body{white-space:pre-wrap;word-break:break-word;line-height:1.4;}' +
    '#dmMessages .dm-bubble .msg-actions{opacity:.5;font-size:11px;margin-top:6px;font-family:"Space Mono",monospace;}' +
    '#dmMessages .dm-bubble.mine .msg-actions{text-align:right;}';
  document.head.appendChild(style);
})();

/* ============ USER REQUESTS (private suggestion box to the admin) ============ */
function submitRequest(){
  var session = getSession();
  if(!session) return;
  var body = document.getElementById('fRequestBody').value.trim();
  var err = document.getElementById('requestError');
  err.textContent = '';
  if(!body){ err.textContent = t('err.required'); return; }
  fetch(SUPABASE_URL + '/rest/v1/requests', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
    body: JSON.stringify({ user_id: currentUserId(), author_email: currentUserEmail(), body: body })
  }).then(function(r){
    if(!r.ok) throw new Error('request insert failed');
    document.getElementById('fRequestBody').value = '';
    loadMyRequests();
  }).catch(function(e){
    console.warn('Request submit failed:', e);
    err.textContent = t('requests.submitError');
  });
}
function submitSmallNoxRequest(){
  var session = getSession();
  var field = document.getElementById('fSmallNoxRequest');
  var err = document.getElementById('smallnoxRequestError');
  var sent = document.getElementById('smallnoxRequestSent');
  if(!field || !err) return;
  err.textContent = '';
  if(sent) sent.textContent = '';
  if(!session){ err.textContent = t('admin.gate.notSignedIn'); return; }
  var body = field.value.trim();
  if(!body){ err.textContent = t('err.required'); return; }
  fetch(SUPABASE_URL + '/rest/v1/requests', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
    body: JSON.stringify({ user_id: currentUserId(), author_email: currentUserEmail(), body: body })
  }).then(function(r){
    if(!r.ok) throw new Error('request insert failed');
    field.value = '';
    if(sent) sent.textContent = t('requests.sent');
    if(document.getElementById('myRequestsList')) loadMyRequests(); // se siamo anche sulla pagina profilo, aggiorna la lista lì
  }).catch(function(e){
    console.warn('SmallNox request submit failed:', e);
    err.textContent = t('requests.submitError');
  });
}

function loadMyRequests(){
  var session = getSession();
  var list = document.getElementById('myRequestsList');
  if(!session){ list.innerHTML = ''; return; }
  fetch(SUPABASE_URL + '/rest/v1/requests?user_id=eq.' + encodeURIComponent(currentUserId()) + '&select=*&order=created_at.desc', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('requests read failed'); return r.json(); })
    .then(function(rows){
      list.innerHTML = '';
      rows.forEach(function(req){
        var div = document.createElement('div');
        div.className = 'my-request-item';
        var statusLabel = req.status === 'new' ? t('requests.statusNew') : t('requests.statusRead');
        div.innerHTML = escapeHtml(req.body) + '<span class="status">' + statusLabel + '</span>';
        list.appendChild(div);
      });
    })
    .catch(function(err){ console.warn('My requests load failed:', err); });
}

/* ============ NOTIFICATIONS (bell icon — comments on threads you're in, likes/comments for admin) ============ */
var notifPollTimer = null;
var notifCache = [];

function notifTimeAgo(iso){
  var diffMin = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if(diffMin < 1) return t('notif.justNow');
  if(diffMin < 60) return t('notif.minsAgo').replace('{n}', diffMin);
  var diffH = Math.floor(diffMin / 60);
  if(diffH < 24) return t('notif.hoursAgo').replace('{n}', diffH);
  var diffD = Math.floor(diffH / 24);
  return t('notif.daysAgo').replace('{n}', diffD);
}

function loadNotifications(){
  var session = getSession();
  var badge = document.getElementById('notifBadge');
  var bellBtn = document.getElementById('btnNotifications');
  var userDirBtn = document.getElementById('btnUserDirectory');
  if(!isSignedIn()){
    if(bellBtn) bellBtn.classList.add('hidden');
    if(userDirBtn) userDirBtn.classList.add('hidden');
    if(notifPollTimer){ clearInterval(notifPollTimer); notifPollTimer = null; }
    return Promise.resolve();
  }
  if(bellBtn) bellBtn.classList.remove('hidden');
  if(userDirBtn) userDirBtn.classList.remove('hidden');
  return fetch(SUPABASE_URL + '/rest/v1/notifications?user_id=eq.' + encodeURIComponent(currentUserId()) + '&select=*&order=created_at.desc&limit=30', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('notifications read failed'); return r.json(); })
    .then(function(rows){
      notifCache = rows;
      var unread = rows.filter(function(n){ return !n.read; }).length;
      if(badge){
        if(unread > 0){ badge.textContent = unread > 99 ? '99+' : String(unread); badge.classList.remove('hidden'); }
        else { badge.classList.add('hidden'); }
      }
      renderNotifPanel();
      if(!notifPollTimer){ notifPollTimer = setInterval(loadNotifications, 45000); } // polling leggero, non realtime
    })
    .catch(function(err){ console.warn('Notifications load failed:', err); });
}

function smallNoxState(n){
  var msg = n.message || '';
  if(n.type === 'signup_auto') return 'calm';
  if(n.type === 'friend_request' && msg.indexOf('sospetto') !== -1) return 'angry';
  if(n.type === 'admin_comment' && msg.indexOf('segnalato') !== -1) return 'angry';
  return null;
}

function renderNotifPanel(){
  var list = document.getElementById('notifList');
  if(!list) return;
  list.innerHTML = '';
  if(notifCache.length === 0){
    list.innerHTML = '<div class="notif-empty">' + t('notif.empty') + '</div>';
    return;
  }
  notifCache.forEach(function(n){
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'notif-item' + (n.read ? '' : ' unread');
    var noxState = smallNoxState(n);
    var noxImg = noxState ? '<img src="smallnox-' + noxState + '.png" alt="SmallNox" class="notif-nox-avatar">' : '';
    var refHtml = '';
    if(n.catalog_id){
      var refItem = getCatalog().find(function(i){ return i.id === n.catalog_id; });
      if(refItem) refHtml = ' <span class="notif-ref" style="color:var(--gold, #c9a24d);font-style:italic;">«' + escapeHtml(refItem.title) + '»</span>';
    }
    btn.innerHTML = noxImg + '<span class="actor">' + escapeHtml(n.actor_name || t('notif.someone')) + '</span> ' + escapeHtml(n.message || '') + refHtml +
      '<span class="when">' + notifTimeAgo(n.created_at) + '</span>';
    btn.addEventListener('click', function(){ openNotification(n); });
    list.appendChild(btn);
  });
}

function openNotification(n){
  markNotificationRead(n.id);
  document.getElementById('notifPanel').classList.add('hidden');
  if(n.type === 'dm_message' && n.source_id){
    if(document.getElementById('chatSection')){
      openChatWithUser(n.source_id, true);
    } else {
      window.location.href = 'chat.html?user=' + encodeURIComponent(n.source_id);
    }
    return;
  }
  if(n.type === 'friend_request' || n.type === 'friend_accepted'){
    var communitySection = document.getElementById('communitySection');
    if(communitySection){
      communitySection.scrollIntoView({behavior:'smooth'});
      switchCommunityTab('friends');
    } else {
      // Non siamo sulla pagina Community: ci navighiamo, ricordando quale tab aprire all'arrivo.
      sessionStorage.setItem('lux_pending_community_tab', 'friends');
      window.location.href = 'community.html#communitySection';
    }
    return;
  }
  if(n.type === 'creation_invite'){
    var adminSection1 = document.getElementById('adminSection');
    if(adminSection1){ adminSection1.classList.remove('hidden'); adminSection1.scrollIntoView({behavior:'smooth'}); }
    else { window.location.href = 'admin.html'; }
    return;
  }
  if(n.type === 'extension_request'){
    var adminSection2 = document.getElementById('adminSection');
    if(adminSection2){
      adminSection2.classList.remove('hidden');
      switchAdminTab('users');
      adminSection2.scrollIntoView({behavior:'smooth'});
    } else {
      sessionStorage.setItem('lux_pending_admin_tab', 'users');
      window.location.href = 'admin.html';
    }
    return;
  }
  if(n.catalog_id){
    var items = getCatalog();
    var item = items.find(function(i){ return i.id === n.catalog_id; });
    if(item) openTitleModal(item);
  }
}

function markNotificationRead(id){
  var session = getSession();
  if(!session) return;
  var n = notifCache.find(function(x){ return x.id === id; });
  if(n && n.read) return; // già letta, evita chiamata inutile
  fetch(SUPABASE_URL + '/rest/v1/notifications?id=eq.' + encodeURIComponent(id), {
    method:'PATCH',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({read:true})
  }).then(function(){ if(n) n.read = true; updateNotifBadgeFromCache(); });
}

function markAllNotificationsRead(){
  var session = getSession();
  if(!session) return;
  var unreadIds = notifCache.filter(function(n){ return !n.read; }).map(function(n){ return n.id; });
  if(unreadIds.length === 0) return;
  fetch(SUPABASE_URL + '/rest/v1/notifications?user_id=eq.' + encodeURIComponent(currentUserId()) + '&read=eq.false', {
    method:'PATCH',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({read:true})
  }).then(function(){
    notifCache.forEach(function(n){ n.read = true; });
    updateNotifBadgeFromCache();
    renderNotifPanel();
  });
}

function updateNotifBadgeFromCache(){
  var badge = document.getElementById('notifBadge');
  if(!badge) return;
  var unread = notifCache.filter(function(n){ return !n.read; }).length;
  if(unread > 0){ badge.textContent = unread > 99 ? '99+' : String(unread); badge.classList.remove('hidden'); }
  else { badge.classList.add('hidden'); }
}

/* ============ COMMUNITY (canali a tema creati dagli utenti + messaggi privati) ============ */
var currentChannelId = null;
var currentChannelName = null;
var currentDmThreadId = null;
var currentDmOtherName = null;
var displayNameCache = {}; // id -> display_name, per non richiederlo ad ogni messaggio

function communityHeaders(){
  var session = getSession();
  return { 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + (session ? session.access_token : SUPABASE_ANON_KEY) };
}

function switchCommunityTab(tab){
  document.querySelectorAll('.community-tab').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.ctab === tab);
  });
  document.querySelectorAll('.community-panel').forEach(function(panel){
    panel.classList.toggle('hidden', panel.dataset.cpanel !== tab);
  });
  if(tab === 'dms') loadDmThreads();
  if(tab === 'friends') loadFriendsPanel();
  if(tab === 'collab') renderCollabWorksTab();
  if(tab === 'diary') loadDiaryFeed();
}

function renderCollabWorksTab(){
  var grid = document.getElementById('collabWorksGrid');
  if(!grid) return;
  var items = getCatalog().filter(function(i){
    return (i.collaborators && i.collaborators.length > 0) || i.collaborator_name;
  });
  if(!matureVisible) items = items.filter(function(i){ return !i.mature; });
  items.sort(function(a,b){ return (b.date||'').localeCompare(a.date||''); });
  grid.innerHTML = '';
  if(items.length === 0){
    var empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.style.gridColumn = '1/-1';
    empty.textContent = '— ' + t('filter.all') + ' —';
    grid.appendChild(empty);
    return;
  }
  items.forEach(function(item){
    var card = document.createElement('div');
    card.className = 'card-idx';
    card.setAttribute('data-character', item.character || '');
    var badge = item.mature ? '<span class="mature">18+</span>' : '<span class="allages">'+t('badge.allages')+'</span>';
    var coverInner = item.cover_url
      ? '<img class="cover-img" src="'+coverThumbUrl(item.cover_url, 500)+'" data-fallback="'+escapeHtml(item.cover_url)+'" alt="" loading="lazy" decoding="async">'
      : '<span class="init">'+item.character.charAt(0)+'</span>';
    var collabArr = (item.collaborators && item.collaborators.length)
      ? item.collaborators
      : (item.collaborator_name ? [{ name:item.collaborator_name }] : []);
    var collabNames = collabArr.map(function(c){ return c.name; }).join(', ');
    card.innerHTML =
      '<div class="card-idx-cover">'+coverInner+badge+'</div>'+
      '<div class="card-idx-body" style="cursor:pointer;" data-open="'+item.id+'">'+
        '<div class="num mono">'+(item.issue||'')+'</div>'+
        '<h4>'+escapeHtml(item.title)+'</h4>'+
        '<div class="character">'+t('collab.credit')+' '+escapeHtml(collabNames)+'</div>'+
        '<div class="meta-row"><span>'+(item.date||'')+'</span></div>'+
      '</div>';
    card.querySelector('[data-open]').addEventListener('click', function(){ openTitleModal(item); });
    grid.appendChild(card);
    attachCoverSignature(card.querySelector('.card-idx-cover'), item);
  });
}

/* ============ DIARIO (post utente: foto / stato d'animo / nota) ============ */
var diaryActiveKind = 'photo';
var diaryActiveFilter = 'all';
var diaryAuthorFilter = null; // {id, name} — impostato toccando il nome di un autore su un post

function switchDiaryKind(kind){
  diaryActiveKind = kind;
  document.querySelectorAll('.diary-kind-tab').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.dkind === kind);
  });
  document.querySelectorAll('.diary-form').forEach(function(f){
    f.classList.toggle('hidden', f.dataset.dform !== kind);
  });
}

function switchDiaryFilter(kind){
  diaryActiveFilter = kind;
  diaryAuthorFilter = null; // cambiare categoria a mano annulla il filtro per persona
  document.querySelectorAll('.diary-filter-btn').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.dfilter === kind);
  });
  var authorBtn = document.getElementById('diaryFilterAuthorBtn');
  if(authorBtn) authorBtn.classList.add('hidden');
  loadDiaryFeed();
}

function filterDiaryByAuthor(userId, name){
  diaryAuthorFilter = { id: userId, name: name };
  document.querySelectorAll('.diary-filter-btn').forEach(function(btn){ btn.classList.remove('active'); });
  var authorBtn = document.getElementById('diaryFilterAuthorBtn');
  if(authorBtn){
    authorBtn.textContent = t('diary.filterBy').replace('{name}', name);
    authorBtn.classList.remove('hidden');
    authorBtn.classList.add('active');
  }
  loadDiaryFeed();
}

function uploadDiaryPhoto(file){
  var session = getSession();
  var extMatch = /\.([a-zA-Z0-9]+)$/.exec(file.name || '');
  var ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
  var path = 'posts/' + currentUserId() + '/' + Date.now() + '_' + Math.random().toString(36).slice(2,8) + '.' + ext;
  return fetch(SUPABASE_URL + '/storage/v1/object/comic-pages/' + path, {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type': file.type || 'image/jpeg' },
    body: file
  }).then(function(r){
    if(!r.ok) throw new Error('diary photo upload failed: ' + r.status);
    return SUPABASE_URL + '/storage/v1/object/public/comic-pages/' + path;
  });
}

function submitDiaryPost(){
  if(!isSignedIn()){ openAuth('login'); return; }
  var err = document.getElementById('diaryComposerError');
  err.textContent = '';
  var session = getSession();
  var kind = diaryActiveKind;
  var btn = document.getElementById('btnDiaryPublish');

  var payloadStep;
  if(kind === 'photo'){
    var file = document.getElementById('fDiaryPhoto').files[0];
    var caption = document.getElementById('fDiaryPhotoCaption').value.trim();
    if(!file){ err.textContent = t('diary.needPhoto'); return; }
    btn.disabled = true;
    payloadStep = uploadDiaryPhoto(file).then(function(url){
      return { kind:'photo', body: caption || null, image_url: url };
    });
  } else if(kind === 'mood'){
    var moodBtn = document.querySelector('.diary-mood-btn.active');
    var moodText = document.getElementById('fDiaryMoodText').value.trim();
    if(!moodBtn){ err.textContent = t('diary.needMood'); return; }
    btn.disabled = true;
    var body = moodBtn.dataset.mood + (moodText ? ' ' + moodText : '');
    payloadStep = Promise.resolve({ kind:'mood', body: body, image_url: null });
  } else {
    var noteText = document.getElementById('fDiaryNote').value.trim();
    if(!noteText){ err.textContent = t('err.required'); return; }
    btn.disabled = true;
    payloadStep = Promise.resolve({ kind:'note', body: noteText, image_url: null });
  }

  payloadStep.then(function(payload){
    payload.user_id = currentUserId();
    return fetch(SUPABASE_URL + '/rest/v1/user_posts', {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
      body: JSON.stringify(payload)
    });
  }).then(function(r){
    if(!r.ok) throw new Error('post insert failed: ' + r.status);
    document.getElementById('fDiaryPhoto').value = '';
    document.getElementById('fDiaryPhotoCaption').value = '';
    document.getElementById('fDiaryMoodText').value = '';
    document.getElementById('fDiaryNote').value = '';
    document.querySelectorAll('.diary-mood-btn').forEach(function(b){ b.classList.remove('active'); });
    loadDiaryFeed();
  }).catch(function(e){
    console.warn('Diary post failed:', e);
    err.textContent = t('diary.publishError');
  }).then(function(){ btn.disabled = false; });
}

function loadDiaryFeed(containerId, forcedUserId){
  containerId = containerId || 'diaryFeed';
  var feed = document.getElementById(containerId);
  if(!feed) return;
  feed.innerHTML = '<p class="form-note">…</p>';
  var url = SUPABASE_URL + '/rest/v1/user_posts?select=*&order=created_at.desc&limit=60';
  if(forcedUserId){
    url += '&user_id=eq.' + encodeURIComponent(forcedUserId);
  } else {
    if(diaryActiveFilter !== 'all') url += '&kind=eq.' + encodeURIComponent(diaryActiveFilter);
    if(diaryAuthorFilter) url += '&user_id=eq.' + encodeURIComponent(diaryAuthorFilter.id);
  }
  fetch(url, { headers: communityHeaders() })
    .then(function(r){ if(!r.ok) throw new Error('diary feed read failed'); return r.json(); })
    .then(function(rows){ renderDiaryFeed(rows, containerId); })
    .catch(function(e){ feed.innerHTML = ''; console.warn('Diary feed load failed:', e); });
}

function renderDiaryFeed(posts, containerId){
  containerId = containerId || 'diaryFeed';
  var feed = document.getElementById(containerId);
  if(!feed) return;
  feed.innerHTML = '';
  if(posts.length === 0){
    feed.innerHTML = '<p class="form-note">' + t('diary.empty') + '</p>';
    return;
  }
  if(!feed.dataset.authorClickWired){
    feed.dataset.authorClickWired = '1';
    feed.addEventListener('click', function(e){
      var authorBtn = e.target.closest('[data-author]');
      if(authorBtn) window.location.href = 'profile.html?user=' + encodeURIComponent(authorBtn.dataset.author);
    });
  }
  posts.forEach(function(p){
    var card = document.createElement('div');
    card.className = 'diary-post';
    card.dataset.postId = p.id;
    var kindIcon = p.kind === 'photo' ? '📷' : (p.kind === 'mood' ? '🙂' : '📝');
    var mediaHtml = p.image_url ? '<img class="diary-post-img" src="'+escapeHtml(p.image_url)+'" alt="">' : '';
    var bodyHtml = p.body ? '<div class="diary-post-body">'+renderBodyHtml(p.body)+'</div>' : '';
    card.innerHTML =
      '<div class="diary-post-head">'+
        '<button type="button" class="diary-post-author" data-author="'+p.user_id+'">'+t('notif.someone')+'</button>'+
        '<span class="diary-post-kind">'+kindIcon+'</span>'+
        '<span class="diary-post-when">'+notifTimeAgo(p.created_at)+'</span>'+
      '</div>'+
      mediaHtml + bodyHtml +
      '<div class="diary-post-actions">'+
        '<button type="button" class="diary-like-btn" data-like="'+p.id+'">♡ <span class="cnt">'+(p.like_count||0)+'</span></button>'+
        '<button type="button" class="diary-comment-toggle" data-comments="'+p.id+'">💬 <span class="cnt">'+(p.comment_count||0)+'</span></button>'+
      '</div>'+
      '<div class="diary-comments hidden" id="diaryComments_'+p.id+'"></div>';

    getDisplayName(p.user_id).then(function(name){
      var authorBtn = card.querySelector('[data-author]');
      if(authorBtn) authorBtn.textContent = name;
    });

    card.querySelector('[data-like]').addEventListener('click', function(){ toggleDiaryLike(p.id, this); });
    card.querySelector('[data-comments]').addEventListener('click', function(){ toggleDiaryComments(p.id); });

    feed.appendChild(card);
  });

  if(isSignedIn() && posts.length){
    var ids = posts.map(function(p){ return p.id; }).join(',');
    fetch(SUPABASE_URL + '/rest/v1/post_likes?select=post_id&user_id=eq.'+encodeURIComponent(currentUserId())+'&post_id=in.('+ids+')', { headers: communityHeaders() })
      .then(function(r){ return r.ok ? r.json() : []; })
      .then(function(rows){
        rows.forEach(function(row){
          var btn = feed.querySelector('[data-like="'+row.post_id+'"]');
          if(btn){
            var cnt = btn.querySelector('.cnt').textContent;
            btn.classList.add('active');
            btn.innerHTML = '♥ <span class="cnt">'+cnt+'</span>';
          }
        });
      }).catch(function(){});
  }
}

function toggleDiaryLike(postId, btnEl){
  if(!isSignedIn()){ openAuth('login'); return; }
  var session = getSession();
  var isLiked = btnEl.classList.contains('active');
  var req = isLiked
    ? fetch(SUPABASE_URL + '/rest/v1/post_likes?user_id=eq.'+encodeURIComponent(currentUserId())+'&post_id=eq.'+encodeURIComponent(postId), {
        method:'DELETE', headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
      })
    : fetch(SUPABASE_URL + '/rest/v1/post_likes', {
        method:'POST',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
        body: JSON.stringify({ user_id: currentUserId(), post_id: postId })
      });
  req.then(function(r){
    if(!r.ok) throw new Error('post like toggle failed');
    var cntEl = btnEl.querySelector('.cnt');
    var cnt = parseInt(cntEl.textContent, 10) || 0;
    cnt = isLiked ? Math.max(cnt - 1, 0) : cnt + 1;
    btnEl.classList.toggle('active', !isLiked);
    btnEl.innerHTML = (isLiked ? '♡ ' : '♥ ') + '<span class="cnt">'+cnt+'</span>';
  }).catch(function(e){ console.warn('Post like toggle failed:', e); });
}

function toggleDiaryComments(postId){
  var box = document.getElementById('diaryComments_' + postId);
  if(!box) return;
  var willShow = box.classList.contains('hidden');
  box.classList.toggle('hidden');
  if(willShow && !box.dataset.loaded){
    box.dataset.loaded = '1';
    loadDiaryComments(postId, box);
  }
}

function loadDiaryComments(postId, box){
  box.innerHTML = '<p class="form-note">…</p>';
  fetch(SUPABASE_URL + '/rest/v1/post_comments?post_id=eq.'+encodeURIComponent(postId)+'&select=*&order=created_at.asc', { headers: communityHeaders() })
    .then(function(r){ if(!r.ok) throw new Error('post comments read failed'); return r.json(); })
    .then(function(rows){
      var list = document.createElement('div');
      list.className = 'diary-comments-list';
      if(rows.length === 0){
        list.innerHTML = '<p class="form-note">' + t('comments.empty') + '</p>';
      } else {
        rows.forEach(function(c){
          var div = document.createElement('div');
          div.className = 'comment-item';
          div.innerHTML = '<span class="author">'+escapeHtml(c.author_name || t('notif.someone'))+'</span><div class="body">'+renderBodyHtml(c.body)+'</div>';
          list.appendChild(div);
        });
      }
      box.innerHTML = '';
      box.appendChild(list);
      if(isSignedIn()){
        box.insertAdjacentHTML('beforeend',
          '<div class="diary-comment-form"><input type="text" class="diary-comment-input" maxlength="300" placeholder="'+t('requests.placeholder')+'"><button type="button" class="btn btn-sm btn-ghost diary-comment-send">'+t('community.send')+'</button></div>');
        var input = box.querySelector('.diary-comment-input');
        var sendBtn = box.querySelector('.diary-comment-send');
        sendBtn.addEventListener('click', function(){ submitDiaryComment(postId, input, box); });
        input.addEventListener('keydown', function(e){ if(e.key === 'Enter') submitDiaryComment(postId, input, box); });
      }
    })
    .catch(function(e){ box.innerHTML = ''; console.warn('Post comments load failed:', e); });
}

function submitDiaryComment(postId, input, box){
  var body = input.value.trim();
  if(!body) return;
  if(!isSignedIn()){ openAuth('login'); return; }
  var session = getSession();
  var nameStep = currentProfile !== null ? Promise.resolve(currentProfile) : loadOwnProfile().then(function(){ return currentProfile; });
  nameStep.then(function(profile){
    var authorName = publicDisplayName(profile);
    return fetch(SUPABASE_URL + '/rest/v1/post_comments', {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
      body: JSON.stringify({ post_id: postId, user_id: currentUserId(), author_name: authorName, body: body })
    });
  }).then(function(r){
    if(!r.ok) throw new Error('post comment insert failed');
    input.value = '';
    box.dataset.loaded = '';
    loadDiaryComments(postId, box);
    var card = document.querySelector('.diary-post[data-post-id="'+postId+'"]');
    if(card){
      var cntEl = card.querySelector('[data-comments] .cnt');
      if(cntEl) cntEl.textContent = (parseInt(cntEl.textContent,10)||0) + 1;
    }
  }).catch(function(e){ console.warn('Post comment submit failed:', e); });
}

/* ============ PROFILO PUBBLICO (profile.html?user=<id>) ============ */
function renderPublicProfilePage(){
  var section = document.getElementById('profileSection');
  if(!section) return; // non siamo su profile.html
  var params = new URLSearchParams(window.location.search);
  var userId = params.get('user');
  var notFoundBox = document.getElementById('profileNotFound');
  var layoutBox = document.getElementById('profileLayout');
  var titlesBox = document.getElementById('profileTitlesBox');
  if(!userId){ notFoundBox.classList.remove('hidden'); return; }

  fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + encodeURIComponent(userId) + '&select=*', { headers: communityHeaders() })
    .then(function(r){ if(!r.ok) throw new Error('profile read failed'); return r.json(); })
    .then(function(rows){
      var p = rows[0];
      if(!p){ notFoundBox.classList.remove('hidden'); return; }
      layoutBox.classList.remove('hidden');

      document.getElementById('pubProfileName').textContent = p.display_name || t('notif.someone');
      var bannerImg = document.getElementById('pubProfileBanner');
      bannerImg.src = p.banner_url || '';
      bannerImg.style.opacity = p.banner_url ? '1' : '0';
      var avatarImg = document.getElementById('pubProfileAvatar');
      avatarImg.src = p.avatar_url || '';
      avatarImg.style.opacity = p.avatar_url ? '1' : '0.15';
      avatarImg.classList.add('avatar-clickable');
      avatarImg.addEventListener('click', function(){ openAvatarInfo(userId); });
      if(p.bio) document.getElementById('pubProfileBio').textContent = p.bio;

      var socialDefs = [
        { key:'social_instagram', label:'Instagram' },
        { key:'social_twitter', label:'Twitter/X' },
        { key:'social_tiktok', label:'TikTok' },
        { key:'social_website', label: t('profile.website') }
      ];
      var socialsHtml = socialDefs.filter(function(s){ return p[s.key]; }).map(function(s){
        var raw = p[s.key];
        var href = /^https?:\/\//i.test(raw) ? raw : ('https://' + raw.replace(/^@/, ''));
        return '<a class="pub-profile-social-pill" href="' + escapeHtml(href) + '" target="_blank" rel="noopener">' + escapeHtml(s.label) + '</a>';
      }).join('');
      document.getElementById('pubProfileSocials').innerHTML = socialsHtml;

      var metaParts = [];
      if(p.verified) metaParts.push(verifiedBadge('verified.commenter'));
      if(p.created_at){
        var joined = new Date(p.created_at);
        if(!isNaN(joined)) metaParts.push('<span class="pub-profile-joined">' + t('pubProfile.memberSince').replace('{date}', joined.toLocaleDateString()) + '</span>');
      }
      document.getElementById('pubProfileMeta').innerHTML = metaParts.join(' ');

      var favs = p.favorite_characters || [];
      var favsBox = document.getElementById('pubProfileFavs');
      favsBox.innerHTML = favs.map(function(f){ return '<span class="pub-profile-fav-tag">' + escapeHtml(f) + '</span>'; }).join('');

      renderProfileTitles(userId);
      renderProfileFavorites(userId);
      loadDiaryFeed('profileDiaryFeed', userId);
    })
    .catch(function(e){
      console.warn('Public profile load failed:', e);
      notFoundBox.classList.remove('hidden');
    });
}

function renderProfileTitles(userId){
  var grid = document.getElementById('profileTitlesGrid');
  var box = document.getElementById('profileTitlesBox');
  if(!grid) return;
  var items = getCatalog().filter(function(i){ return i.created_by === userId; });
  if(!matureVisible) items = items.filter(function(i){ return !i.mature; });
  if(items.length === 0){ box.classList.add('hidden'); return; }
  box.classList.remove('hidden');
  items.sort(function(a,b){ return (b.date||'').localeCompare(a.date||''); });
  grid.innerHTML = '';
  items.forEach(function(item){
    var row = document.createElement('button');
    row.type = 'button';
    row.className = 'profile-sidebar-title-row';
    var thumbInner = item.cover_url
      ? '<img src="'+coverThumbUrl(item.cover_url, 120)+'" data-fallback="'+escapeHtml(item.cover_url)+'" alt="" loading="lazy" decoding="async">'
      : '<span class="init">'+item.character.charAt(0)+'</span>';
    var collabArr = (item.collaborators && item.collaborators.length)
      ? item.collaborators
      : (item.collaborator_name ? [{name:item.collaborator_name}] : []);
    var collabHtml = collabArr.length
      ? '<span class="collab">' + t('collab.credit') + ' ' + collabArr.map(function(c){ return escapeHtml(c.name || ''); }).join(', ') + '</span>'
      : '';
    row.innerHTML =
      '<span class="profile-sidebar-title-thumb">'+thumbInner+'</span>'+
      '<span class="profile-sidebar-title-text"><span class="ttl">'+escapeHtml(item.title)+'</span><span class="sub">'+(item.date||'')+'</span>'+collabHtml+'</span>';
    row.addEventListener('click', function(){ openTitleModal(item); });
    grid.appendChild(row);
  });
}

function renderProfileFavorites(userId){
  var grid = document.getElementById('profileFavoritesGrid');
  var box = document.getElementById('profileFavoritesBox');
  if(!grid) return;
  fetch(SUPABASE_URL + '/rest/v1/favorites?user_id=eq.' + encodeURIComponent(userId) + '&select=catalog_id', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      var ids = rows.map(function(r){ return r.catalog_id; });
      var items = getCatalog().filter(function(i){ return ids.indexOf(i.id) !== -1; });
      if(!matureVisible) items = items.filter(function(i){ return !i.mature; });
      if(items.length === 0){ box.classList.add('hidden'); return; }
      box.classList.remove('hidden');
      grid.innerHTML = '';
      items.forEach(function(item){
        var row = document.createElement('button');
        row.type = 'button';
        row.className = 'profile-sidebar-title-row';
        var thumbInner = item.cover_url
          ? '<img src="'+coverThumbUrl(item.cover_url, 120)+'" data-fallback="'+escapeHtml(item.cover_url)+'" alt="" loading="lazy" decoding="async">'
          : '<span class="init">'+item.character.charAt(0)+'</span>';
        row.innerHTML =
          '<span class="profile-sidebar-title-thumb">'+thumbInner+'</span>'+
          '<span class="profile-sidebar-title-text"><span class="ttl">'+escapeHtml(item.title)+'</span></span>';
        row.addEventListener('click', function(){ openTitleModal(item); });
        grid.appendChild(row);
      });
    })
    .catch(function(e){ console.warn('Profile favorites load failed:', e); box.classList.add('hidden'); });
}

/* ============ CHAT DEDICATA (chat.html?user=<id>) — fuori da Community ============ */
var currentChatThreadId = null;
var currentChatOtherId = null;
var currentChatLastMessageAt = null;
var chatPollTimer = null;

/* Suoni generati al volo (nessun file audio da caricare/ospitare) — due toni brevi e distinti */
function playChatSound(kind){
  try{
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if(!Ctx) return;
    var ctx = new Ctx();
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = 'sine';
    if(kind === 'sent'){
      o.frequency.setValueAtTime(660, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.09);
    } else {
      o.frequency.setValueAtTime(520, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.12);
    }
    g.gain.setValueAtTime(0.001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
    o.start();
    o.stop(ctx.currentTime + 0.2);
  }catch(e){ /* audio non disponibile: nessun problema, la chat funziona lo stesso */ }
}

function uploadChatAttachment(file){
  var session = getSession();
  var extMatch = /\.([a-zA-Z0-9]+)$/.exec(file.name || '');
  var ext = extMatch ? extMatch[1].toLowerCase() : 'bin';
  var path = 'dm-attachments/' + currentChatThreadId + '/' + Date.now() + '_' + Math.random().toString(36).slice(2,8) + '.' + ext;
  return fetch(SUPABASE_URL + '/storage/v1/object/comic-pages/' + path, {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type': file.type || 'application/octet-stream' },
    body: file
  }).then(function(r){
    if(!r.ok) throw new Error('chat attachment upload failed: ' + r.status);
    return SUPABASE_URL + '/storage/v1/object/public/comic-pages/' + path;
  });
}

/* ============ SFONDO CHAT PERSONALIZZABILE ============
   Scelta salvata localmente sul dispositivo (per account), come il tema
   chiaro/scuro — non richiede modifiche al database. Un domani, se serve
   sincronizzarlo tra dispositivi, si può spostare su una colonna profiles. */
var CHAT_BG_PRESETS = [
  { id:'default', label:'Predefinito', css:'radial-gradient(ellipse at 20% 0%, rgba(201,162,77,0.05), transparent 60%), #0b0607' },
  { id:'wine',    label:'Vino',        css:'linear-gradient(160deg, #2a0d13, #0b0607)' },
  { id:'verdigris', label:'Verderame', css:'linear-gradient(160deg, #16241d, #0b0607)' },
  { id:'ember',   label:'Ambra',       css:'linear-gradient(160deg, #2e160a, #0b0607)' },
  { id:'parchment', label:'Pergamena', css:'linear-gradient(160deg, #2a2317, #0b0607)' },
  { id:'void',    label:'Notte piena', css:'#0b0607' }
];

function chatBgStorageKey(){
  var uid = currentUserId();
  return uid ? ('lux_chat_bg_' + uid) : null;
}

function getChatBgChoice(){
  var key = chatBgStorageKey();
  if(!key) return null;
  try{
    var raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}

function saveChatBgChoice(choice){
  var key = chatBgStorageKey();
  if(!key) return;
  try{
    if(choice) localStorage.setItem(key, JSON.stringify(choice));
    else localStorage.removeItem(key);
  }catch(e){ /* storage piena o non disponibile: la chat resta comunque usabile */ }
}

function applyChatBackground(){
  var wrap = document.getElementById('chatMessages');
  if(!wrap) return;
  var choice = getChatBgChoice();
  if(!choice){ wrap.style.background = ''; wrap.style.backgroundSize = ''; return; }
  if(choice.type === 'custom' && (choice.url || choice.dataUrl)){
    wrap.style.background = 'center / cover no-repeat url(' + JSON.stringify(choice.url || choice.dataUrl) + '), var(--void)';
  } else {
    var preset = CHAT_BG_PRESETS.find(function(p){ return p.id === choice.id; }) || CHAT_BG_PRESETS[0];
    wrap.style.background = preset.css;
  }
}

function renderChatBgSwatches(){
  var box = document.getElementById('chatBgSwatches');
  if(!box) return;
  var current = getChatBgChoice();
  box.innerHTML = '';
  CHAT_BG_PRESETS.forEach(function(p){
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chat-bg-swatch' + ((!current && p.id === 'default') || (current && current.type === 'preset' && current.id === p.id) ? ' active' : '');
    btn.style.background = p.css;
    btn.title = p.label;
    btn.setAttribute('aria-label', p.label);
    btn.addEventListener('click', function(){
      saveChatBgChoice(p.id === 'default' ? null : { type:'preset', id:p.id });
      applyChatBackground();
      renderChatBgSwatches();
    });
    box.appendChild(btn);
  });
}

function toggleChatBgPanel(){
  var panel = document.getElementById('chatBgPanel');
  if(!panel) return;
  var opening = panel.classList.contains('hidden');
  panel.classList.toggle('hidden');
  if(opening) renderChatBgSwatches();
}

function uploadChatBgImage(file){
  var session = getSession();
  var uid = currentUserId();
  var extMatch = /\.([a-zA-Z0-9]+)$/.exec(file.name || '');
  var ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
  var path = 'chat-backgrounds/' + uid + '/' + Date.now() + '_' + Math.random().toString(36).slice(2,8) + '.' + ext;
  return fetch(SUPABASE_URL + '/storage/v1/object/comic-pages/' + path, {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type': file.type || 'application/octet-stream' },
    body: file
  }).then(function(r){
    if(!r.ok) throw new Error('chat background upload failed: ' + r.status);
    return SUPABASE_URL + '/storage/v1/object/public/comic-pages/' + path;
  });
}

function handleChatBgUpload(file){
  if(!file) return;
  if(!file.type || file.type.indexOf('image/') !== 0){
    window.alert('Scegli un file immagine.');
    return;
  }
  var bgBtn = document.getElementById('btnChatBg');
  if(bgBtn) bgBtn.textContent = '…';
  uploadChatBgImage(file).then(function(url){
    saveChatBgChoice({ type:'custom', url: url });
    applyChatBackground();
    renderChatBgSwatches();
  }).catch(function(err){
    console.warn('Chat background upload failed:', err);
    window.alert('Caricamento non riuscito. Riprova.');
  }).then(function(){
    if(bgBtn) bgBtn.textContent = '🖼️';
  });
}

function initChatPage(){
  var section = document.getElementById('chatSection');
  if(!section){ return; } // non siamo su chat.html
  if(!isSignedIn()){ openAuth('login'); return; }
  loadChatSidebar();
  var params = new URLSearchParams(window.location.search);
  var otherUserId = params.get('user');
  if(!otherUserId){
    setChatMobileView('list');
    return;
  }
  openChatWithUser(otherUserId, false);
}

function setChatMobileView(mode){
  // su schermi stretti mostriamo un pannello alla volta (lista o conversazione),
  // su schermi larghi restano sempre affiancati — questa funzione controlla solo
  // quale dei due è visibile quando lo spazio non basta per entrambi
  var box = document.getElementById('chatBox');
  if(!box) return;
  box.classList.toggle('showing-list', mode === 'list');
  box.classList.toggle('showing-conversation', mode === 'conversation');
}

function openChatWithUser(otherUserId, updateHistory){
  var uid = currentUserId();
  if(otherUserId === uid){ document.getElementById('chatNotFound').classList.remove('hidden'); return; }
  currentChatOtherId = otherUserId;
  var userA = uid < otherUserId ? uid : otherUserId;
  var userB = uid < otherUserId ? otherUserId : uid;
  var session = getSession();

  if(updateHistory !== false){
    var url = new URL(window.location.href);
    url.searchParams.set('user', otherUserId);
    window.history.pushState({}, '', url);
  }
  setChatMobileView('conversation');
  document.querySelectorAll('.chat-sidebar-row').forEach(function(row){
    row.classList.toggle('active', row.dataset.otherId === otherUserId);
  });

  fetch(SUPABASE_URL + '/rest/v1/dm_threads?user_a=eq.' + encodeURIComponent(userA) + '&user_b=eq.' + encodeURIComponent(userB) + '&select=id', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      if(rows.length > 0) return rows[0].id;
      return fetch(SUPABASE_URL + '/rest/v1/dm_threads', {
        method:'POST',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
        body: JSON.stringify({ user_a: userA, user_b: userB })
      }).then(function(r2){ if(!r2.ok) throw new Error('dm thread create failed'); return r2.json(); })
        .then(function(rows2){ return rows2[0].id; });
    })
    .then(function(threadId){
      currentChatThreadId = threadId;
      document.getElementById('chatBox').classList.remove('hidden');
      document.body.classList.add('chat-fullscreen'); // nasconde l'intestazione del sito: la chat occupa tutto lo schermo, come un'app di messaggistica

      getDisplayName(otherUserId).then(function(name){
        document.getElementById('chatOtherName').textContent = name;
      });
      var avatarEl = document.getElementById('chatOtherAvatar');
      avatarEl.classList.add('avatar-clickable');
      avatarEl.onclick = function(){ openAvatarInfo(otherUserId); };
      fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + encodeURIComponent(otherUserId) + '&select=avatar_url,last_seen', { headers: communityHeaders() })
        .then(function(r){ return r.ok ? r.json() : []; })
        .then(function(rows){
          var p = rows[0];
          if(!p) return;
          if(p.avatar_url) avatarEl.src = p.avatar_url;
          var online = isOnlineSince(p.last_seen);
          document.getElementById('chatOtherDot').className = 'chat-header-dot ' + (online ? 'online' : 'offline');
          document.getElementById('chatOtherStatus').textContent = online ? t('userDir.online') : (p.last_seen ? notifTimeAgo(p.last_seen) : t('userDir.offline'));
        });

      loadChatMessages();
      startChatPolling();
      applyChatBackground();

      var mine = userA === uid;
      var field = mine ? 'last_read_at_a' : 'last_read_at_b';
      var patch = {}; patch[field] = new Date().toISOString();
      fetch(SUPABASE_URL + '/rest/v1/dm_threads?id=eq.' + encodeURIComponent(threadId), {
        method:'PATCH',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
        body: JSON.stringify(patch)
      }).then(function(){
        // niente reload completo della sidebar: basta togliere il puntino
        // "non letto" dalla riga già a schermo, senza rifare 3 chiamate di rete
        var row = document.querySelector('.chat-sidebar-row[data-other-id="' + CSS.escape(otherUserId) + '"]');
        if(row){
          row.classList.remove('unread');
          var dot = row.querySelector('.chat-sidebar-unread-dot');
          if(dot) dot.remove();
        }
      }).catch(function(){});
    })
    .catch(function(e){ console.warn('Chat init failed:', e); document.getElementById('chatNotFound').classList.remove('hidden'); });
}

/* ============ LISTA CONVERSAZIONI FISSA (chat.html, stile WhatsApp) ============
   Su schermi larghi resta sempre visibile a fianco della conversazione aperta;
   su schermi stretti è l'unica cosa mostrata finché non tocchi un contatto. */
function loadChatSidebar(){
  var list = document.getElementById('chatSidebarList');
  if(!list || !isSignedIn()) return;
  var uid = currentUserId();

  var threadsStep = fetch(SUPABASE_URL + '/rest/v1/dm_threads?select=*&or=(user_a.eq.' + encodeURIComponent(uid) + ',user_b.eq.' + encodeURIComponent(uid) + ')', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; });

  fetch(SUPABASE_URL + '/rest/v1/friendships?select=requester_id,addressee_id&status=eq.accepted&or=(requester_id.eq.' + encodeURIComponent(uid) + ',addressee_id.eq.' + encodeURIComponent(uid) + ')', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(friendships){
      var otherIds = friendships.map(function(f){ return f.requester_id === uid ? f.addressee_id : f.requester_id; });
      // la richiesta profili parte SUBITO, appena sappiamo chi sono gli amici —
      // non aspetta che arrivino anche le conversazioni: le due chiamate corrono
      // in parallelo invece che una dopo l'altra, dimezzando l'attesa percepita
      var profilesStep = otherIds.length === 0
        ? Promise.resolve([])
        : fetch(SUPABASE_URL + '/rest/v1/profiles?id=in.(' + otherIds.map(encodeURIComponent).join(',') + ')&select=id,display_name,avatar_url,last_seen', { headers: communityHeaders() })
            .then(function(r){ return r.ok ? r.json() : []; });

      return Promise.all([profilesStep, threadsStep]).then(function(results){
        var profiles = results[0], threads = results[1];
        var threadByOtherId = {};
        threads.forEach(function(th){
          var st = dmThreadState(th, uid);
          if(!st.archived) threadByOtherId[st.otherId] = th;
        });
        profiles.sort(function(a,b){
          return (a.display_name || '').localeCompare(b.display_name || '', 'it', { sensitivity:'base' });
        });
        renderChatSidebar(profiles, threadByOtherId);
      });
    })
    .catch(function(err){ console.warn('Chat sidebar load failed:', err); });
}

/* Rubrica amici in stile WhatsApp: TUTTI gli amici accettati, in ordine
   alfabetico, con pallino online/offline — non più solo le conversazioni
   già iniziate. Se un amico ha già una conversazione, mostriamo comunque
   l'anteprima dell'ultimo messaggio e i pulsanti Archivia/Elimina. */
function renderChatSidebar(profiles, threadByOtherId){
  var list = document.getElementById('chatSidebarList');
  if(!list) return;
  var uid = currentUserId();
  list.innerHTML = '';
  if(profiles.length === 0){
    list.innerHTML = '<p class="form-note">' + t('community.noDms') + '</p>';
    return;
  }

  var rowsByThreadId = {}; // per aggiornare l'anteprima dell'ultimo messaggio

  profiles.forEach(function(p){
    var th = threadByOtherId[p.id];
    var st = th ? dmThreadState(th, uid) : null;
    var unread = st ? !st.read : false;
    var online = isOnlineSince(p.last_seen);
    var name = p.display_name || t('userDir.title');

    var row = document.createElement('div');
    row.className = 'chat-sidebar-row' + (unread ? ' unread' : '') + (th && th.id === currentChatThreadId ? ' active' : '');
    row.dataset.otherId = p.id;

    var main = document.createElement('div');
    main.className = 'chat-sidebar-row-main';
    main.innerHTML =
      '<span class="chat-sidebar-avatar-wrap">' +
        '<img class="chat-sidebar-avatar" src="' + (p.avatar_url ? escapeHtml(p.avatar_url) : '') + '" alt="">' +
        '<span class="chat-sidebar-dot ' + (online ? 'online' : 'offline') + '"></span>' +
      '</span>' +
      '<span class="chat-sidebar-info">' +
        '<span class="chat-sidebar-name">' + escapeHtml(name) + '</span>' +
        '<span class="chat-sidebar-preview">' + (th ? '…' : '') + '</span>' +
      '</span>' +
      '<span class="chat-sidebar-meta">' +
        (th && th.last_message_at ? '<span class="chat-sidebar-time">' + notifTimeAgo(th.last_message_at) + '</span>' : '') +
        (unread ? '<span class="chat-sidebar-unread-dot"></span>' : '') +
      '</span>';
    main.addEventListener('click', function(){ openChatWithUser(p.id, true); });
    row.appendChild(main);

    if(th){
      var actions = document.createElement('div');
      actions.className = 'chat-sidebar-actions';

      var archBtn = document.createElement('button');
      archBtn.type = 'button';
      archBtn.className = 'chat-sidebar-action';
      var archLabel = t('community.archive') || 'Archivia';
      archBtn.textContent = archLabel;
      archBtn.setAttribute('aria-label', archLabel);
      archBtn.addEventListener('click', function(e){
        e.stopPropagation();
        var mine = th.user_a === uid;
        var field = mine ? 'archived_a' : 'archived_b';
        setDmFlag(th.id, field, true).then(function(){ loadChatSidebar(); });
      });
      actions.appendChild(archBtn);

      var delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.className = 'chat-sidebar-action danger';
      var delLabel = t('chat.delete') || 'Elimina';
      delBtn.textContent = delLabel;
      delBtn.setAttribute('aria-label', delLabel);
      delBtn.addEventListener('click', function(e){
        e.stopPropagation();
        if(!window.confirm(t('chat.deleteConfirm'))) return;
        deleteDmThread(th.id);
      });
      actions.appendChild(delBtn);

      row.appendChild(actions);
      rowsByThreadId[th.id] = row;
    }

    list.appendChild(row);
  });

  // un'unica richiesta per tutte le anteprime, invece di una per contatto:
  // prendiamo più messaggi recenti del necessario (ordinati dal più nuovo)
  // e teniamo solo il primo che troviamo per ciascuna conversazione
  var threadIds = Object.keys(rowsByThreadId);
  if(threadIds.length > 0){
    fetch(SUPABASE_URL + '/rest/v1/dm_messages?thread_id=in.(' + threadIds.map(encodeURIComponent).join(',') + ')&select=thread_id,body,attachment_type&order=created_at.desc&limit=' + (threadIds.length * 6), { headers: communityHeaders() })
      .then(function(r){ return r.ok ? r.json() : []; })
      .then(function(rows){
        var seen = {};
        rows.forEach(function(last){
          if(seen[last.thread_id]) return;
          seen[last.thread_id] = true;
          var row = rowsByThreadId[last.thread_id];
          if(!row) return;
          var preview = '…';
          if(last.attachment_type === 'image') preview = '📷 ' + t('chat.photo');
          else if(last.attachment_type) preview = '📎 ' + t('chat.file');
          else if(last.body && isGifUrl(last.body)) preview = 'GIF';
          else preview = last.body || '';
          row.querySelector('.chat-sidebar-preview').textContent = preview;
        });
      })
      .catch(function(){});
  }
}

/* Elimina definitivamente una conversazione: prima tutti i suoi messaggi,
   poi il thread stesso. Richiede che il database permetta la cancellazione
   ai due partecipanti (vedi migrazione-elimina-chat.sql) — se quel permesso
   non è stato ancora concesso, il tentativo fallisce e lo segnaliamo. */
function deleteDmThread(threadId){
  var session = getSession();
  if(!session) return;
  var headers = { 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token };
  fetch(SUPABASE_URL + '/rest/v1/dm_messages?thread_id=eq.' + encodeURIComponent(threadId), { method:'DELETE', headers: headers })
    .then(function(){
      return fetch(SUPABASE_URL + '/rest/v1/dm_threads?id=eq.' + encodeURIComponent(threadId), { method:'DELETE', headers: headers });
    })
    .then(function(r){
      if(!r.ok) throw new Error('delete thread failed: ' + r.status);
      if(currentChatThreadId === threadId){
        currentChatThreadId = null;
        var wrap = document.getElementById('chatMessages');
        if(wrap) wrap.innerHTML = '';
        setChatMobileView('list');
        var url = new URL(window.location.href);
        url.searchParams.delete('user');
        window.history.pushState({}, '', url);
      }
      loadChatSidebar();
    })
    .catch(function(e){
      console.warn('Delete thread failed:', e);
      window.alert(t('chat.deleteError'));
    });
}

function loadChatMessages(){
  var wrap = document.getElementById('chatMessages');
  if(!wrap || !currentChatThreadId) return;
  wrap.innerHTML = '<p class="form-note">…</p>';
  var threadId = currentChatThreadId;
  var messagesStep = fetch(SUPABASE_URL + '/rest/v1/dm_messages?thread_id=eq.' + encodeURIComponent(threadId) + '&select=*&order=created_at.asc', { headers: communityHeaders() })
    .then(function(r){ if(!r.ok) throw new Error('chat messages read failed'); return r.json(); });
  // parte subito insieme ai messaggi, invece di aspettare che i messaggi
  // siano arrivati prima di chiedere anche lo stato di lettura
  var threadStep = fetch(SUPABASE_URL + '/rest/v1/dm_threads?id=eq.' + encodeURIComponent(threadId) + '&select=user_a,last_read_at_a,last_read_at_b', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; });

  Promise.all([messagesStep, threadStep])
    .then(function(results){
      var rows = results[0], thRows = results[1];
      wrap.innerHTML = '';
      if(rows.length > 0) currentChatLastMessageAt = rows[rows.length - 1].created_at;
      if(rows.length === 0){ wrap.innerHTML = '<p class="form-note">' + t('community.noMessages') + '</p>'; return; }
      var uid = currentUserId();
      var th = thRows[0];
      var otherLastRead = null;
      if(th){
        var mineSide = th.user_a === uid;
        otherLastRead = mineSide ? th.last_read_at_b : th.last_read_at_a;
      }
      rows.forEach(function(m){
            var div = document.createElement('div');
            div.className = 'chat-bubble ' + (m.sender_id === uid ? 'mine' : 'theirs');
            var readByOther = otherLastRead && new Date(m.created_at) <= new Date(otherLastRead);
            var tickHtml = (m.sender_id === uid)
              ? '<span class="chat-tick ' + (readByOther ? 'read">✓✓' : 'sent">✓') + '</span>'
              : '';
            var attachHtml = '';
            if(m.attachment_url){
              if(m.attachment_type === 'image'){
                attachHtml = '<img class="chat-attachment-img" src="' + escapeHtml(m.attachment_url) + '" alt="">';
              } else {
                attachHtml = '<a class="chat-attachment-file" href="' + escapeHtml(m.attachment_url) + '" target="_blank" rel="noopener">📎 ' + escapeHtml(m.attachment_name || t('chat.file')) + '</a>';
              }
            }
            var bodyHtml = m.body ? '<div class="body">' + renderBodyHtml(m.body) + '</div>' : '';
            var showTranslate = (m.sender_id !== uid) && m.body && !isGifUrl(m.body);
            div.innerHTML = attachHtml + bodyHtml + '<div class="chat-bubble-meta">' + notifTimeAgo(m.created_at) + tickHtml + '</div>';
            if(showTranslate){
              var translateBtn = document.createElement('button');
              translateBtn.type = 'button';
              translateBtn.className = 'chat-translate-btn';
              translateBtn.textContent = t('chat.translate') || 'Traduci';
              translateBtn.addEventListener('click', function(){
                if(translateBtn.dataset.done === '1'){
                  var existing = div.querySelector('.chat-translated-body');
                  if(existing) existing.remove();
                  translateBtn.dataset.done = '0';
                  translateBtn.textContent = t('chat.translate') || 'Traduci';
                  return;
                }
                translateBtn.disabled = true;
                translateBtn.textContent = '…';
                translateChatMessage(m.body).then(function(res){
                  var tDiv = document.createElement('div');
                  tDiv.className = 'chat-translated-body';
                  tDiv.textContent = res.translated;
                  translateBtn.insertAdjacentElement('afterend', tDiv);
                  translateBtn.dataset.done = '1';
                  translateBtn.textContent = t('chat.translateUndo') || 'Mostra originale';
                }).catch(function(err){
                  console.warn('Chat translate failed:', err);
                  translateBtn.textContent = t('chat.translate') || 'Traduci';
                }).then(function(){ translateBtn.disabled = false; });
              });
              div.appendChild(translateBtn);
            }
            wrap.appendChild(div);
          });
          wrap.scrollTop = wrap.scrollHeight;
    })
    .catch(function(e){ wrap.innerHTML = ''; console.warn('Chat messages load failed:', e); });
}

function startChatPolling(){
  if(chatPollTimer) clearInterval(chatPollTimer);
  chatPollTimer = setInterval(function(){
    if(!currentChatThreadId) return;
    var query = SUPABASE_URL + '/rest/v1/dm_messages?thread_id=eq.' + encodeURIComponent(currentChatThreadId) + '&select=sender_id,created_at&order=created_at.asc';
    if(currentChatLastMessageAt) query += '&created_at=gt.' + encodeURIComponent(currentChatLastMessageAt);
    fetch(query, { headers: communityHeaders() })
      .then(function(r){ return r.ok ? r.json() : []; })
      .then(function(rows){
        if(rows.length === 0) return;
        var uid = currentUserId();
        var hasIncoming = rows.some(function(m){ return m.sender_id !== uid; });
        if(hasIncoming) playChatSound('received');
        loadChatMessages();
        // segna come letti anche i messaggi arrivati mentre la chat è aperta
        var session = getSession();
        var params = new URLSearchParams(window.location.search);
        var otherUserId = params.get('user');
        if(session && otherUserId){
          var userA = uid < otherUserId ? uid : otherUserId;
          var field = (userA === uid) ? 'last_read_at_a' : 'last_read_at_b';
          var patch = {}; patch[field] = new Date().toISOString();
          fetch(SUPABASE_URL + '/rest/v1/dm_threads?id=eq.' + encodeURIComponent(currentChatThreadId), {
            method:'PATCH',
            headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
            body: JSON.stringify(patch)
          }).catch(function(){});
        }
      })
      .catch(function(){});
  }, 6000);
}

function sendChatMessage(){
  var box = document.getElementById('fChatMessage');
  var fileInput = document.getElementById('fChatAttachment');
  var err = document.getElementById('chatMessageError');
  var body = box.value.trim();
  var file = fileInput.files[0];
  err.textContent = '';
  if(!body && !file){ err.textContent = t('err.required'); return; }
  if(!isSignedIn()){ openAuth('login'); return; }
  var session = getSession();
  var sendBtn = document.getElementById('btnSendChat');
  sendBtn.disabled = true;

  var attachStep = file
    ? uploadChatAttachment(file).then(function(url){
        return { attachment_url: url, attachment_type: (file.type && file.type.indexOf('image/') === 0) ? 'image' : 'file', attachment_name: file.name };
      })
    : Promise.resolve({});

  attachStep.then(function(attach){
    var payload = { thread_id: currentChatThreadId, sender_id: currentUserId(), body: body || null };
    for(var k in attach) payload[k] = attach[k];
    return fetch(SUPABASE_URL + '/rest/v1/dm_messages', {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
      body: JSON.stringify(payload)
    });
  }).then(function(r){
    if(!r.ok) throw new Error('chat message insert failed');
    box.value = '';
    fileInput.value = '';
    document.getElementById('chatAttachPreview').classList.add('hidden');
    playChatSound('sent');
    loadChatMessages();
  }).catch(function(e){
    err.textContent = t('chat.sendError');
    console.warn('Chat message send failed:', e);
  }).then(function(){ sendBtn.disabled = false; });
}

function loadChannels(){
  if(!isSignedIn()) return;
  fetch(SUPABASE_URL + '/rest/v1/channels?select=*&order=created_at.desc', { headers: communityHeaders() })
    .then(function(r){ if(!r.ok) throw new Error('channels read failed'); return r.json(); })
    .then(function(rows){
      var list = document.getElementById('channelsList');
      if(!list) return;
      list.innerHTML = '';
      if(rows.length === 0){ list.innerHTML = '<p class="form-note">' + t('community.noChannels') + '</p>'; return; }
      rows.forEach(function(ch){
        var card = document.createElement('button');
        card.type = 'button';
        card.className = 'channel-card';
        card.innerHTML = '<div class="name">#' + escapeHtml(ch.name) + '</div>' +
          (ch.description ? '<div class="meta">' + escapeHtml(ch.description) + '</div>' : '');
        card.addEventListener('click', function(){ openChannel(ch.id, ch.name); });
        list.appendChild(card);
      });
    })
    .catch(function(err){ console.warn('Channels load failed:', err); });
}

function createChannel(){
  var input = document.getElementById('fNewChannelName');
  var err = document.getElementById('channelCreateError');
  var name = input.value.trim();
  err.textContent = '';
  if(!name){ err.textContent = t('err.required'); return; }
  if(!isSignedIn()){ openAuth('login'); return; }
  var session = getSession();
  fetch(SUPABASE_URL + '/rest/v1/channels', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
    body: JSON.stringify({ name: name, created_by: currentUserId() })
  }).then(function(r){
    if(!r.ok) throw new Error('channel insert failed');
    input.value = '';
    loadChannels();
  }).catch(function(e){
    err.textContent = t('err.required');
    console.warn('Channel create failed:', e);
  });
}

function openChannel(id, name){
  currentChannelId = id;
  currentChannelName = name;
  document.getElementById('channelListView').classList.add('hidden');
  document.getElementById('channelDetailView').classList.remove('hidden');
  document.getElementById('channelDetailName').textContent = '#' + name;
  loadChannelMessages();
}

function backToChannels(){
  currentChannelId = null;
  document.getElementById('channelDetailView').classList.add('hidden');
  document.getElementById('channelListView').classList.remove('hidden');
  loadChannels();
}

function getDisplayName(userId){
  if(displayNameCache[userId]) return Promise.resolve(displayNameCache[userId]);
  return fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + encodeURIComponent(userId) + '&select=display_name', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      var name = (rows[0] && rows[0].display_name) ? rows[0].display_name : t('notif.someone');
      displayNameCache[userId] = name;
      return name;
    })
    .catch(function(){ return t('notif.someone'); });
}

function loadChannelMessages(){
  var wrap = document.getElementById('channelMessages');
  wrap.innerHTML = '<p class="form-note">…</p>';
  fetch(SUPABASE_URL + '/rest/v1/channel_messages?channel_id=eq.' + encodeURIComponent(currentChannelId) + '&select=*&order=created_at.asc', { headers: communityHeaders() })
    .then(function(r){ if(!r.ok) throw new Error('channel messages read failed'); return r.json(); })
    .then(function(rows){
      wrap.innerHTML = '';
      if(rows.length === 0){ wrap.innerHTML = '<p class="form-note">' + t('community.noMessages') + '</p>'; return; }
      rows.forEach(function(m){ wrap.appendChild(renderChannelMessage(m)); });
      wrap.scrollTop = wrap.scrollHeight;
    })
    .catch(function(err){ wrap.innerHTML = ''; console.warn('Channel messages load failed:', err); });
}

function renderChannelMessage(m){
  var div = document.createElement('div');
  div.className = 'channel-msg' + (m.flagged ? ' flagged' : '');
  var isOwn = m.user_id === currentUserId();
  div.innerHTML = '<span class="author">' + escapeHtml(m.author_name) + '</span>' +
    '<div class="body">' + renderBodyHtml(m.body) + '</div>' +
    '<div class="msg-actions"><span class="friend-action-slot"></span>' +
      '<button type="button" class="report-btn">' + t('community.report') + '</button>' +
    '</div>';
  div.querySelector('.report-btn').addEventListener('click', function(){ reportContent('channel_message', m.id); });
  if(!isOwn) renderFriendActionSlot(div.querySelector('.friend-action-slot'), m.user_id, m.author_name);
  return div;
}

/* ---- Amicizia (necessaria prima di poter scrivere in privato) ---- */
var friendshipCache = {}; // otherUserId -> {status, requesterId, id}

function loadFriendshipMap(){
  if(!isSignedIn()) return Promise.resolve({});
  var uid = currentUserId();
  return fetch(SUPABASE_URL + '/rest/v1/friendships?select=*&or=(requester_id.eq.' + encodeURIComponent(uid) + ',addressee_id.eq.' + encodeURIComponent(uid) + ')', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      friendshipCache = {};
      rows.forEach(function(f){
        var otherId = f.requester_id === uid ? f.addressee_id : f.requester_id;
        friendshipCache[otherId] = f;
      });
      return friendshipCache;
    })
    .catch(function(){ return {}; });
}

function buildFriendActionButton(otherUserId, otherName){
  var uid = currentUserId();
  var f = friendshipCache[otherUserId];
  var btn = document.createElement('button');
  btn.type = 'button';
  if(!f){
    btn.textContent = t('community.addFriend');
    btn.addEventListener('click', function(){ sendFriendRequest(otherUserId, btn); });
  } else if(f.status === 'accepted'){
    btn.textContent = t('community.privateMessage');
    btn.addEventListener('click', function(){ startDmWith(otherUserId, otherName); });
  } else if(f.status === 'pending' && f.requester_id === uid){
    btn.textContent = t('community.requestSent');
    btn.disabled = true;
  } else if(f.status === 'pending' && f.addressee_id === uid){
    btn.textContent = t('community.acceptFriend');
    btn.addEventListener('click', function(){ respondFriendRequest(f.id, true); });
  }
  return btn;
}

function renderFriendActionSlot(slot, otherUserId, otherName){
  loadFriendshipMap().then(function(){
    slot.innerHTML = '';
    slot.appendChild(buildFriendActionButton(otherUserId, otherName));
  });
}

var friendSearchDebounce = null;
function searchFriends(query){
  var box = document.getElementById('friendSearchResults');
  if(!query || query.trim().length < 2){ box.innerHTML = ''; return; }
  if(!isSignedIn()){ openAuth('login'); return; }
  box.innerHTML = '<p class="form-note">…</p>';
  var uid = currentUserId();
  Promise.all([
    loadFriendshipMap(),
    fetch(SUPABASE_URL + '/rest/v1/profiles?display_name=ilike.*' + encodeURIComponent(query.trim()) + '*&id=neq.' + encodeURIComponent(uid) + '&select=id,display_name&limit=10', { headers: communityHeaders() })
      .then(function(r){ return r.ok ? r.json() : []; })
  ]).then(function(results){
    var rows = results[1];
    box.innerHTML = '';
    if(rows.length === 0){ box.innerHTML = '<p class="form-note">' + t('community.noResults') + '</p>'; return; }
    rows.forEach(function(p){
      var row = document.createElement('div');
      row.className = 'admin-row';
      row.innerHTML = '<div class="info"><div class="t">' + escapeHtml(p.display_name) + '</div></div><div class="admin-actions"></div>';
      row.querySelector('.admin-actions').appendChild(buildFriendActionButton(p.id, p.display_name));
      box.appendChild(row);
    });
  }).catch(function(err){ box.innerHTML = ''; console.warn('Friend search failed:', err); });
}

function sendFriendRequest(otherUserId, btnEl){
  if(!isSignedIn()){ openAuth('login'); return; }
  var session = getSession();
  if(btnEl) btnEl.disabled = true;
  fetch(SUPABASE_URL + '/rest/v1/friendships', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({ requester_id: currentUserId(), addressee_id: otherUserId })
  }).then(function(r){
    if(!r.ok) throw new Error('friend request failed');
    if(btnEl){
      btnEl.textContent = '✓ ' + t('community.requestSent');
      btnEl.style.color = '#4ade80';
      btnEl.style.borderColor = '#4ade80';
      btnEl.disabled = true;
    }
    if(currentChannelId) loadChannelMessages();
    var sentBox = document.getElementById('friendRequestsSent');
    if(sentBox) loadFriendsPanel(); // aggiorna subito la lista "Richieste inviate" se il pannello Amici è aperto
  }).catch(function(e){
    if(btnEl) btnEl.disabled = false;
    console.warn('Friend request failed:', e);
  });
}

function respondFriendRequest(friendshipId, accept){
  var session = getSession();
  var action = accept
    ? fetch(SUPABASE_URL + '/rest/v1/friendships?id=eq.' + encodeURIComponent(friendshipId), {
        method:'PATCH',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
        body: JSON.stringify({status:'accepted'})
      })
    : fetch(SUPABASE_URL + '/rest/v1/friendships?id=eq.' + encodeURIComponent(friendshipId), {
        method:'DELETE',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
      });
  action.then(function(){
    loadFriendsPanel();
    if(currentChannelId) loadChannelMessages();
  }).catch(function(e){ console.warn('Friend response failed:', e); });
}

/* ---- Sessioni di creazione a tempo (amico/collaboratore invitato a pubblicare) ---- */
var myCreationSession = null;
var collabCountdownTimer = null;

function hasActiveCreationSession(){
  return !!(myCreationSession && new Date(myCreationSession.expires_at) > new Date());
}

function loadMyCreationSession(){
  if(!isSignedIn() || isAdmin()){ myCreationSession = null; return Promise.resolve(null); }
  var session = getSession();
  return fetch(SUPABASE_URL + '/rest/v1/creation_sessions?invited_user_id=eq.' + encodeURIComponent(currentUserId()) + '&status=eq.active&select=*&order=expires_at.desc&limit=1', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      var row = rows[0];
      myCreationSession = (row && new Date(row.expires_at) > new Date()) ? row : null;
      return myCreationSession;
    })
    .catch(function(err){ console.warn('Creation session load failed:', err); myCreationSession = null; return null; });
}

function renderCollabSessionBanner(){
  var countdownEl = document.getElementById('collabSessionCountdown');
  var extBtn = document.getElementById('btnRequestExtension');
  var extStatus = document.getElementById('collabSessionExtensionStatus');
  if(!countdownEl || !myCreationSession) return;

  function tick(){
    var msLeft = new Date(myCreationSession.expires_at).getTime() - Date.now();
    if(msLeft <= 0){
      countdownEl.textContent = t('collabSession.expired');
      if(collabCountdownTimer) clearInterval(collabCountdownTimer);
      loadMyCreationSession().then(refreshAdminUI);
      return;
    }
    var h = Math.floor(msLeft / 3600000);
    var m = Math.floor((msLeft % 3600000) / 60000);
    countdownEl.textContent = t('collabSession.countdown').replace('{h}', h).replace('{m}', m);
  }
  tick();
  if(collabCountdownTimer) clearInterval(collabCountdownTimer);
  collabCountdownTimer = setInterval(tick, 60000);

  if(myCreationSession.extension_requested){
    extBtn.classList.add('hidden');
    extStatus.textContent = t('collabSession.extensionPending');
  } else {
    extBtn.classList.remove('hidden');
    extStatus.textContent = '';
  }
}

function requestSessionExtension(){
  if(!myCreationSession) return;
  var session = getSession();
  var status = document.getElementById('collabSessionExtensionStatus');
  status.textContent = '…';
  fetch(SUPABASE_URL + '/rest/v1/rpc/request_creation_extension', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({ session_id: myCreationSession.id })
  }).then(function(r){
    if(!r.ok) throw new Error('extension request failed');
    myCreationSession.extension_requested = true;
    renderCollabSessionBanner();
  }).catch(function(e){
    status.textContent = t('mod.banFailed');
    console.warn('Extension request failed:', e);
  });
}

function inviteFriendToCreate(otherUserId, otherName){
  if(!isAdmin()) return;
  if(!window.confirm(t('collabSession.inviteConfirm').replace('{name}', otherName))) return;
  var session = getSession();
  var expires = new Date(Date.now() + 24*3600000).toISOString();
  fetch(SUPABASE_URL + '/rest/v1/creation_sessions', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({ invited_user_id: otherUserId, granted_by: currentUserId(), expires_at: expires, status: 'active', extension_requested: false })
  }).then(function(r){
    if(!r.ok) throw new Error('invite failed');
    return fetch(SUPABASE_URL + '/rest/v1/notifications', {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
      body: JSON.stringify({ user_id: otherUserId, type:'creation_invite', actor_name:'Nox Morningstar', message: t('collabSession.inviteNotif') })
    });
  }).then(function(){
    window.alert(t('collabSession.inviteSent'));
    renderAdminSessions();
  }).catch(function(e){
    window.alert(t('mod.banFailed'));
    console.warn('Invite failed:', e);
  });
}

function renderAdminSessions(){
  if(!isAdmin()) return;
  var box = document.getElementById('adminSessionsList');
  if(!box) return;
  var session = getSession();
  box.innerHTML = '<p class="form-note">…</p>';
  fetch(SUPABASE_URL + '/rest/v1/creation_sessions?status=eq.active&select=*&order=expires_at.asc', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      box.innerHTML = '';
      var active = rows.filter(function(s){ return new Date(s.expires_at) > new Date(); });
      if(active.length === 0){ box.innerHTML = '<p class="form-note">' + t('mod.empty') + '</p>'; return; }
      var chain = Promise.resolve();
      active.forEach(function(s){
        chain = chain.then(function(){
          return getDisplayName(s.invited_user_id).then(function(name){
            var row = document.createElement('div');
            row.className = 'admin-row';
            var msLeft = new Date(s.expires_at).getTime() - Date.now();
            var h = Math.floor(msLeft / 3600000), m = Math.floor((msLeft % 3600000) / 60000);
            var extFlag = s.extension_requested ? ' — ' + t('collabSession.extensionPending') : '';
            row.innerHTML = '<div class="info"><div class="t">' + escapeHtml(name) + '</div>' +
              '<div class="m">' + t('collabSession.countdown').replace('{h}', h).replace('{m}', m) + extFlag + '</div></div>' +
              '<div class="admin-actions"><button class="btn btn-sm btn-ghost" data-extend>' + t('collabSession.extend48') + '</button></div>';
            row.querySelector('[data-extend]').addEventListener('click', function(){
              fetch(SUPABASE_URL + '/rest/v1/rpc/admin_extend_creation_session', {
                method:'POST',
                headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
                body: JSON.stringify({ session_id: s.id, hours: 48 })
              }).then(function(r){ if(!r.ok) throw new Error('extend failed'); renderAdminSessions(); })
                .catch(function(e){ window.alert(t('mod.banFailed')); console.warn('Extend failed:', e); });
            });
            box.appendChild(row);
          });
        });
      });
    })
    .catch(function(err){ console.warn('Admin sessions load failed:', err); });
}

function loadFriendsPanel(){
  if(!isSignedIn()) return;
  var uid = currentUserId();
  var receivedBox = document.getElementById('friendRequestsReceived');
  var sentBox = document.getElementById('friendRequestsSent');
  var friendsBox = document.getElementById('friendsList');
  receivedBox.innerHTML = '<p class="form-note">…</p>';
  sentBox.innerHTML = '<p class="form-note">…</p>';
  friendsBox.innerHTML = '<p class="form-note">…</p>';

  fetch(SUPABASE_URL + '/rest/v1/friendships?select=*&or=(requester_id.eq.' + encodeURIComponent(uid) + ',addressee_id.eq.' + encodeURIComponent(uid) + ')', {
    headers: communityHeaders(),
    signal: (typeof AbortSignal !== 'undefined' && AbortSignal.timeout) ? AbortSignal.timeout(10000) : undefined
  })
    .then(function(r){
      if(!r.ok){
        return r.text().then(function(bodyText){ throw new Error('HTTP ' + r.status + ': ' + bodyText); });
      }
      return r.json();
    })
    .then(function(rows){
      var received = rows.filter(function(f){ return f.status === 'pending' && f.addressee_id === uid; });
      var sent = rows.filter(function(f){ return f.status === 'pending' && f.requester_id === uid; });
      var accepted = rows.filter(function(f){ return f.status === 'accepted'; });

      receivedBox.innerHTML = received.length === 0 ? '<p class="form-note">' + t('mod.empty') + '</p>' : '';
      received.forEach(function(f){
        getDisplayName(f.requester_id).then(function(name){
          var row = document.createElement('div');
          row.className = 'admin-row';
          row.innerHTML = '<div class="info"><div class="t">' + escapeHtml(name) + '</div></div>' +
            '<div class="admin-actions">' +
              '<button class="btn btn-sm btn-ghost" data-accept>' + t('community.acceptFriend') + '</button>' +
              '<button class="btn btn-sm btn-ghost" data-decline>' + t('community.declineFriend') + '</button>' +
            '</div>';
          row.querySelector('[data-accept]').addEventListener('click', function(){ respondFriendRequest(f.id, true); });
          row.querySelector('[data-decline]').addEventListener('click', function(){ respondFriendRequest(f.id, false); });
          receivedBox.appendChild(row);
        });
      });

      sentBox.innerHTML = sent.length === 0 ? '<p class="form-note">' + t('mod.empty') + '</p>' : '';
      sent.forEach(function(f){
        getDisplayName(f.addressee_id).then(function(name){
          var row = document.createElement('div');
          row.className = 'admin-row';
          row.innerHTML = '<div class="info"><div class="t">' + escapeHtml(name) + '</div><div class="m">' + t('community.requestSent') + '</div></div>';
          sentBox.appendChild(row);
        });
      });

      renderFriendContactList(friendsBox, accepted, uid);
    })
    .catch(function(err){
      var detail = (err && err.message) ? err.message : String(err);
      var errMsg = '<p class="form-note">' + t('community.loadError') + ' <button type="button" class="retry-link" id="btnRetryFriends">' + t('community.retry') + '</button>' +
        '<br><span style="font-family:\'Space Mono\',monospace;font-size:10px;opacity:0.6;word-break:break-all;">' + escapeHtml(detail) + '</span></p>';
      receivedBox.innerHTML = errMsg;
      sentBox.innerHTML = '';
      friendsBox.innerHTML = '';
      var retryBtn = document.getElementById('btnRetryFriends');
      if(retryBtn) retryBtn.addEventListener('click', loadFriendsPanel);
      console.warn('Friends panel load failed:', err);
    });
}

/* Lista "I tuoi amici" in stile WhatsApp: avatar, pallino online/offline,
   ordine alfabetico. Click su un contatto porta dritto a chat.html (prima
   puntava a una tab "Messaggi privati" ormai rimossa da Community). */
function renderFriendContactList(friendsBox, accepted, uid){
  if(accepted.length === 0){
    friendsBox.innerHTML = '<p class="form-note">' + t('mod.empty') + '</p>';
    return;
  }
  var otherIds = accepted.map(function(f){ return f.requester_id === uid ? f.addressee_id : f.requester_id; });
  friendsBox.innerHTML = '<p class="form-note">…</p>';
  fetch(SUPABASE_URL + '/rest/v1/profiles?id=in.(' + otherIds.map(encodeURIComponent).join(',') + ')&select=id,display_name,avatar_url,last_seen', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(profiles){
      profiles.sort(function(a,b){
        return (a.display_name || '').localeCompare(b.display_name || '', 'it', { sensitivity:'base' });
      });
      friendsBox.innerHTML = '';
      if(profiles.length === 0){ friendsBox.innerHTML = '<p class="form-note">' + t('mod.empty') + '</p>'; return; }
      profiles.forEach(function(p){
        var online = isOnlineSince(p.last_seen);
        var name = p.display_name || t('userDir.title');
        var row = document.createElement('div');
        row.className = 'friend-contact-row';
        row.innerHTML =
          '<span class="friend-contact-avatar-wrap">' +
            '<img class="friend-contact-avatar" src="' + (p.avatar_url ? escapeHtml(p.avatar_url) : '') + '" alt="">' +
            '<span class="friend-contact-dot ' + (online ? 'online' : 'offline') + '"></span>' +
          '</span>' +
          '<span class="friend-contact-info">' +
            '<span class="friend-contact-name">' + escapeHtml(name) + '</span>' +
            '<span class="friend-contact-status">' + (online ? t('userDir.online') : t('userDir.offline')) + '</span>' +
          '</span>' +
          (isAdmin() ? '<button type="button" class="btn btn-sm btn-ghost friend-contact-invite" data-invite>' + t('collabSession.invite') + '</button>' : '');
        row.addEventListener('click', function(e){
          if(e.target.closest('[data-invite]')) return;
          window.location.href = 'chat.html?user=' + encodeURIComponent(p.id);
        });
        var inviteBtn = row.querySelector('[data-invite]');
        if(inviteBtn) inviteBtn.addEventListener('click', function(e){
          e.stopPropagation();
          inviteFriendToCreate(p.id, name);
        });
        friendsBox.appendChild(row);
      });
    })
    .catch(function(err){
      friendsBox.innerHTML = '<p class="form-note">' + t('community.loadError') + '</p>';
      console.warn('Friend contact list load failed:', err);
    });
}

function sendChannelMessage(){
  var box = document.getElementById('fChannelMessage');
  var err = document.getElementById('channelMessageError');
  var body = box.value.trim();
  err.textContent = '';
  if(!body){ err.textContent = t('err.required'); return; }
  if(!isSignedIn()){ openAuth('login'); return; }
  var session = getSession();
  var nameStep = currentProfile !== null ? Promise.resolve(currentProfile) : loadOwnProfile().then(function(){ return currentProfile; });
  nameStep.then(function(profile){
    var authorName = publicDisplayName(profile);
    return fetch(SUPABASE_URL + '/rest/v1/channel_messages', {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
      body: JSON.stringify({ channel_id: currentChannelId, user_id: currentUserId(), author_name: authorName, body: body })
    });
  }).then(function(r){
    if(!r.ok) throw new Error('channel message insert failed');
    box.value = '';
    loadChannelMessages();
  }).catch(function(e){
    err.textContent = t('err.required');
    console.warn('Channel message send failed:', e);
  });
}

/* ---- Messaggi privati ---- */
var dmActiveTab = 'all'; // all | unread | important | archived
var dmThreadsCache = [];

function dmThreadState(th, uid){
  var mine = th.user_a === uid;
  var myLastRead = mine ? th.last_read_at_a : th.last_read_at_b;
  var unread = !!th.last_message_at && (!myLastRead || new Date(th.last_message_at) > new Date(myLastRead));
  return {
    read: !unread,
    important: mine ? th.important_a : th.important_b,
    archived: mine ? th.archived_a : th.archived_b,
    otherId: mine ? th.user_b : th.user_a,
    otherLastRead: mine ? th.last_read_at_b : th.last_read_at_a
  };
}

function switchDmTab(tab){
  dmActiveTab = tab;
  document.querySelectorAll('.dm-tab').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.dmTab === tab);
  });
  renderDmThreadsList();
}

function setDmFlag(threadId, field, value){
  var session = getSession();
  if(!session) return Promise.resolve();
  var body = {}; body[field] = value;
  return fetch(SUPABASE_URL + '/rest/v1/dm_threads?id=eq.' + encodeURIComponent(threadId), {
    method:'PATCH',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify(body)
  }).catch(function(e){ console.warn('DM flag update failed:', e); });
}

function toggleDmImportant(th, uid, btn){
  var mine = th.user_a === uid;
  var field = mine ? 'important_a' : 'important_b';
  var newVal = !(mine ? th.important_a : th.important_b);
  if(mine) th.important_a = newVal; else th.important_b = newVal;
  btn.classList.toggle('active', newVal);
  setDmFlag(th.id, field, newVal);
}

function archiveDmThread(th, uid){
  var mine = th.user_a === uid;
  var field = mine ? 'archived_a' : 'archived_b';
  if(mine) th.archived_a = true; else th.archived_b = true;
  setDmFlag(th.id, field, true).then(renderDmThreadsList);
}

function unarchiveDmThread(th, uid){
  var mine = th.user_a === uid;
  var field = mine ? 'archived_a' : 'archived_b';
  if(mine) th.archived_a = false; else th.archived_b = false;
  setDmFlag(th.id, field, false).then(renderDmThreadsList);
}

function loadDmThreads(){
  var list = document.getElementById('dmThreadsList');
  if(!list || !isSignedIn()) return;
  var uid = currentUserId();
  fetch(SUPABASE_URL + '/rest/v1/dm_threads?select=*&or=(user_a.eq.' + encodeURIComponent(uid) + ',user_b.eq.' + encodeURIComponent(uid) + ')&order=last_message_at.desc', { headers: communityHeaders() })
    .then(function(r){ if(!r.ok) throw new Error('dm threads read failed'); return r.json(); })
    .then(function(rows){
      dmThreadsCache = rows;
      renderDmThreadsList();
    })
    .catch(function(err){ console.warn('DM threads load failed:', err); });
}

/* ---- Presenza online (attivo negli ultimi 2 minuti) ---- */
var ONLINE_THRESHOLD_MS = 120000;
function isOnlineSince(lastActiveAt){
  if(!lastActiveAt) return false;
  return (Date.now() - new Date(lastActiveAt).getTime()) < ONLINE_THRESHOLD_MS;
}
/* ============ ELENCO UTENTI (pannello a scomparsa, online/offline) ============ */
function positionUserDirectoryPanel(){
  var panel = document.getElementById('userDirectoryPanel');
  var header = document.querySelector('header.topbar');
  if(!panel || !header) return;
  var bottom = header.getBoundingClientRect().bottom;
  panel.style.top = Math.max(bottom, 0) + 'px';
  panel.style.maxHeight = 'min(560px, calc(100vh - ' + Math.max(bottom, 0) + 'px - 16px))';
}

function toggleUserDirectory(){
  var panel = document.getElementById('userDirectoryPanel');
  if(!panel) return;
  var willOpen = panel.classList.contains('hidden');
  if(willOpen) positionUserDirectoryPanel();
  panel.classList.toggle('hidden');
  if(willOpen) loadUserDirectory();
}

window.addEventListener('resize', function(){
  var panel = document.getElementById('userDirectoryPanel');
  if(panel && !panel.classList.contains('hidden')) positionUserDirectoryPanel();
});

/* ============ NOVITÀ DEL SITO (popup automatico di SmallNox) ============ */
function formatVersion(dateStr){
  var d = new Date(dateStr);
  var mm = String(d.getMonth()+1).padStart(2,'0');
  var dd = String(d.getDate()).padStart(2,'0');
  return d.getFullYear() + '.' + mm + '.' + dd;
}

function checkForSiteUpdates(){
  if(!isSignedIn()) return;
  var lastShown = localStorage.getItem('lux_updates_last_shown');
  var dayMs = 24 * 60 * 60 * 1000;
  if(lastShown && (Date.now() - new Date(lastShown).getTime()) < dayMs) return; // già visto meno di 24h fa

  fetch(SUPABASE_URL + '/rest/v1/site_updates?select=title,created_at&order=created_at.desc&limit=50', { headers: communityHeaders() })
    .then(function(r){ if(!r.ok) throw new Error('site updates read failed'); return r.json(); })
    .then(function(rows){
      if(rows.length === 0) return;
      renderSiteUpdatesModal(rows);
      document.getElementById('smallnoxUpdatesModal').classList.remove('hidden');
    })
    .catch(function(e){ console.warn('Site updates check failed:', e); });
}

/* Badge sul pallino di SmallNox: acceso solo se esiste un aggiornamento più recente
   dell'ultima volta che l'utente ha visto il popup (automatico o manuale) — decade
   da solo perché smette di avere senso non appena non ci sono aggiornamenti nuovi. */
function refreshSmallNoxBadge(){
  var badge = document.getElementById('smallnoxBadge');
  if(!badge) return;
  fetch(SUPABASE_URL + '/rest/v1/site_updates?select=created_at&order=created_at.desc&limit=1', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      if(rows.length === 0){ badge.classList.add('hidden'); return; }
      var latest = new Date(rows[0].created_at).getTime();
      var lastShown = localStorage.getItem('lux_updates_last_shown');
      var unseen = !lastShown || latest > new Date(lastShown).getTime();
      badge.classList.toggle('hidden', !unseen);
    })
    .catch(function(){ badge.classList.add('hidden'); });
}

/* Cliccando l'icona di SmallNox: apre sempre l'assistente, e se ci sono
   aggiornamenti mai visti apre anche il popup delle novità, col numero di versione. */
function openSmallNoxAssistant(){
  document.getElementById('smallnoxModal').classList.remove('hidden');
  fetch(SUPABASE_URL + '/rest/v1/site_updates?select=title,created_at&order=created_at.desc&limit=50', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      if(rows.length === 0) return;
      var latest = new Date(rows[0].created_at).getTime();
      var lastShown = localStorage.getItem('lux_updates_last_shown');
      var unseen = !lastShown || latest > new Date(lastShown).getTime();
      if(!unseen) return;
      renderSiteUpdatesModal(rows);
      var vt = document.getElementById('smallnoxVersionTag');
      if(vt) vt.textContent = 'v' + formatVersion(rows[0].created_at);
      document.getElementById('smallnoxUpdatesModal').classList.remove('hidden');
    })
    .catch(function(e){ console.warn('SmallNox updates check failed:', e); });
}

function renderSiteUpdatesModal(rows){
  var list = document.getElementById('smallnoxUpdatesList');
  if(!list) return;
  var vt = document.getElementById('smallnoxVersionTag');
  if(vt && rows.length) vt.textContent = 'v' + formatVersion(rows[0].created_at);
  var groups = {}; // raggruppo per ora (arrotondata) così più modifiche vicine nel tempo finiscono nella stessa sotto-sezione
  var order = [];
  rows.forEach(function(row){
    var d = new Date(row.created_at);
    var key = d.toISOString().slice(0,13); // YYYY-MM-DDTHH
    if(!groups[key]){ groups[key] = { date: d, items: [] }; order.push(key); }
    groups[key].items.push(row.title);
  });
  list.innerHTML = '';
  order.forEach(function(key){
    var g = groups[key];
    var head = document.createElement('div');
    head.style.cssText = 'font-family:"Space Mono",monospace;font-size:10px;letter-spacing:0.06em;color:var(--gold);margin:14px 0 6px;';
    head.textContent = g.date.toLocaleDateString() + ' — ' + g.date.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    list.appendChild(head);
    var ul = document.createElement('ul');
    ul.style.cssText = 'margin:0;padding-left:18px;color:var(--parchment-dim);line-height:1.7;font-size:13px;';
    g.items.forEach(function(title){
      var li = document.createElement('li');
      li.textContent = title;
      ul.appendChild(li);
    });
    list.appendChild(ul);
  });
}

function dismissSiteUpdates(){
  localStorage.setItem('lux_updates_last_shown', new Date().toISOString());
  document.getElementById('smallnoxUpdatesModal').classList.add('hidden');
  var badge = document.getElementById('smallnoxBadge');
  if(badge) badge.classList.add('hidden');
}

function loadUserDirectory(){
  var list = document.getElementById('userDirectoryList');
  if(!list) return;
  list.innerHTML = '<p class="form-note">…</p>';
  var uid = currentUserId();

  var profilesStep = fetch(SUPABASE_URL + '/rest/v1/profiles?select=id,display_name,avatar_url,last_seen,verified&order=display_name.asc', { headers: communityHeaders() })
    .then(function(r){
      if(!r.ok) return r.text().then(function(bodyText){ throw new Error('profiles read failed (HTTP '+r.status+') — '+bodyText.slice(0,200)); });
      return r.json();
    });

  var friendsStep = fetch(SUPABASE_URL + '/rest/v1/friendships?select=requester_id,addressee_id,status&status=eq.accepted&or=(requester_id.eq.' + encodeURIComponent(uid) + ',addressee_id.eq.' + encodeURIComponent(uid) + ')', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .catch(function(){ return []; });

  Promise.all([profilesStep, friendsStep]).then(function(results){
    var rows = results[0], friendships = results[1];
    var friendIds = new Set();
    friendships.forEach(function(f){
      friendIds.add(f.requester_id === uid ? f.addressee_id : f.requester_id);
    });

    rows = rows.filter(function(p){ return p.id !== uid; }); // te stesso non serve elencarlo
    rows.forEach(function(p){
      p._online = isOnlineSince(p.last_seen);
      p._isVerifiedFriend = p.verified && friendIds.has(p.id);
    });

    var verifiedFriends = rows.filter(function(p){ return p._isVerifiedFriend; });
    var others = rows.filter(function(p){ return !p._isVerifiedFriend; });
    verifiedFriends.sort(function(a,b){ return (a.display_name||'').localeCompare(b.display_name||''); });
    others.sort(function(a,b){
      if(a._online !== b._online) return a._online ? -1 : 1;
      return (b.last_seen||'').localeCompare(a.last_seen||'');
    });

    list.innerHTML = '';
    if(rows.length === 0){ list.innerHTML = '<p class="form-note">' + t('userDir.empty') + '</p>'; return; }

    function renderRow(p, isVerifiedFriend){
      var row = document.createElement('button');
      row.type = 'button';
      row.className = 'user-directory-row';
      var dotClass = p._online ? 'user-directory-dot online' : 'user-directory-dot offline';
      var avatarHtml = p.avatar_url
        ? '<img class="user-directory-avatar" src="'+escapeHtml(p.avatar_url)+'" alt="">'
        : '<span class="user-directory-avatar user-directory-avatar-fallback">'+escapeHtml((p.display_name||'?').charAt(0).toUpperCase())+'</span>';
      var lastSeenHtml = '<span class="user-directory-status">'+(p._online ? t('userDir.online') : (p.last_seen ? notifTimeAgo(p.last_seen) : t('userDir.offline')))+'</span>';
      var verifiedHtml = isVerifiedFriend ? '<i class="user-directory-verified-check" aria-hidden="true">✓</i>' : '';
      row.innerHTML =
        '<span class="user-directory-avatar-wrap avatar-clickable">'+avatarHtml+'<span class="'+dotClass+'"></span></span>'+
        '<span class="user-directory-name">'+escapeHtml(p.display_name || t('notif.someone'))+verifiedHtml+'</span>'+
        lastSeenHtml;
      row.querySelector('.avatar-clickable').addEventListener('click', function(e){
        e.stopPropagation();
        openAvatarInfo(p.id);
      });
      row.addEventListener('click', function(){
        window.location.href = 'chat.html?user=' + encodeURIComponent(p.id);
      });
      return row;
    }

    if(verifiedFriends.length > 0){
      var head1 = document.createElement('div');
      head1.className = 'user-directory-section-head';
      head1.textContent = t('userDir.verifiedFriends');
      list.appendChild(head1);
      verifiedFriends.forEach(function(p){ list.appendChild(renderRow(p, true)); });
    }
    if(others.length > 0){
      var head2 = document.createElement('div');
      head2.className = 'user-directory-section-head';
      head2.textContent = t('userDir.others');
      list.appendChild(head2);
      others.forEach(function(p){ list.appendChild(renderRow(p, false)); });
    }
  }).catch(function(e){
    list.innerHTML = '<p class="form-note" style="color:var(--wine);">' + t('userDir.loadError') + '</p>';
    console.warn('User directory load failed:', e);
  });
}

function heartbeatPresence(){
  if(!isSignedIn()) return;
  var session = getSession();
  var uid = currentUserId();
  if(!uid) return;
  fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + encodeURIComponent(uid), {
    method:'PATCH',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({ last_seen: new Date().toISOString() })
  }).catch(function(){});
}
function getPresence(userId){
  return fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + encodeURIComponent(userId) + '&select=last_seen', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){ return rows[0] ? isOnlineSince(rows[0].last_seen) : false; })
    .catch(function(){ return false; });
}

function renderDmThreadsList(){
  var list = document.getElementById('dmThreadsList');
  if(!list) return;
  var uid = currentUserId();
  var rows = dmThreadsCache.filter(function(th){
    var st = dmThreadState(th, uid);
    if(dmActiveTab === 'archived') return st.archived;
    if(st.archived) return false; // le archiviate si vedono solo nella loro scheda
    if(dmActiveTab === 'unread') return !st.read;
    if(dmActiveTab === 'important') return st.important;
    return true; // 'all'
  });
  list.innerHTML = '';
  if(rows.length === 0){ list.innerHTML = '<p class="form-note">' + t('community.noDms') + '</p>'; return; }
  rows.forEach(function(th){
    var st = dmThreadState(th, uid);
    getDisplayName(st.otherId).then(function(name){
      var row = document.createElement('div');
      row.className = 'dm-thread-row' + (st.read ? '' : ' unread');

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dm-thread-item';
      var dot = document.createElement('span');
      dot.className = 'dm-presence-dot';
      var nameSpan = document.createElement('span');
      nameSpan.textContent = name + (st.read ? '' : ' •');
      btn.appendChild(dot);
      btn.appendChild(nameSpan);
      getPresence(st.otherId).then(function(online){ dot.classList.toggle('online', online); });
      btn.addEventListener('click', function(){ openDmThread(th.id, name); });
      row.appendChild(btn);

      var starBtn = document.createElement('button');
      starBtn.type = 'button';
      starBtn.className = 'dm-thread-star' + (st.important ? ' active' : '');
      starBtn.setAttribute('aria-label', t('community.important') || 'Importante');
      starBtn.textContent = '★';
      starBtn.addEventListener('click', function(e){ e.stopPropagation(); toggleDmImportant(th, uid, starBtn); });
      row.appendChild(starBtn);

      var archBtn = document.createElement('button');
      archBtn.type = 'button';
      archBtn.className = 'dm-thread-archive';
      archBtn.setAttribute('aria-label', t('community.archive') || 'Archivia');
      archBtn.textContent = st.archived ? '↩' : '🗄';
      archBtn.addEventListener('click', function(e){
        e.stopPropagation();
        if(st.archived) unarchiveDmThread(th, uid); else archiveDmThread(th, uid);
      });
      row.appendChild(archBtn);

      list.appendChild(row);
    });
  });
}

function ensureDmTabsBar(){
  var list = document.getElementById('dmThreadsList');
  if(!list || document.getElementById('dmTabsBar')) return;
  var bar = document.createElement('div');
  bar.id = 'dmTabsBar';
  bar.className = 'dm-tabs';
  bar.innerHTML =
    '<button type="button" class="dm-tab active" data-dm-tab="all">Tutti</button>' +
    '<button type="button" class="dm-tab" data-dm-tab="unread">Da leggere</button>' +
    '<button type="button" class="dm-tab" data-dm-tab="important">Importanti</button>' +
    '<button type="button" class="dm-tab" data-dm-tab="archived">Archiviate</button>';
  list.parentNode.insertBefore(bar, list);
  Array.prototype.forEach.call(bar.querySelectorAll('.dm-tab'), function(btn){
    btn.addEventListener('click', function(){ switchDmTab(btn.dataset.dmTab); });
  });
}
new MutationObserver(ensureDmTabsBar).observe(document.body, { childList: true, subtree: true });
ensureDmTabsBar();

(function injectDmTabsStyles(){
  var style = document.createElement('style');
  style.textContent =
    '.dm-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;font-family:"Cinzel",serif;}' +
    '.dm-tab{background:#fdfaf5;color:#6e1423;border:2px solid #6e1423;border-radius:10px;' +
    'padding:5px 14px;font-size:12px;letter-spacing:.03em;text-transform:uppercase;cursor:pointer;' +
    'box-shadow:2px 2px 0 rgba(110,20,35,.18);}' +
    '.dm-tab.active{background:#6e1423;color:#fdfaf5;box-shadow:2px 2px 0 rgba(201,162,77,.4);}' +
    '.dm-thread-row{display:flex;align-items:center;gap:8px;margin-bottom:8px;padding:8px 12px;' +
    'background:#fdfaf5;border:2px solid #6e1423;border-radius:12px;box-shadow:2px 3px 0 rgba(110,20,35,.12);}' +
    '.dm-thread-row.unread{border-color:#c9a24d;box-shadow:2px 3px 0 rgba(201,162,77,.3);}' +
    '.dm-thread-row.unread .dm-thread-item{font-weight:700;}' +
    '.dm-thread-item{flex:1;text-align:left;background:none;border:none;font-family:"Crimson Pro",serif;' +
    'font-size:16px;color:#2a1a1d;display:flex;align-items:center;gap:6px;}' +
    '.dm-presence-dot{width:8px;height:8px;border-radius:50%;background:#999;flex-shrink:0;}' +
    '.dm-presence-dot.online{background:#3fae54;box-shadow:0 0 4px rgba(63,174,84,.8);}' +
    '.dm-thread-star{background:none;border:none;font-size:17px;opacity:.35;cursor:pointer;}' +
    '.dm-thread-star.active{opacity:1;color:#c9a24d;}' +
    '.dm-thread-archive{background:none;border:none;font-size:16px;opacity:.55;cursor:pointer;}' +
    '.dm-detail-header{display:flex;align-items:center;gap:8px;margin-bottom:6px;}' +
    '.dm-detail-status{font-size:12px;font-family:"Space Mono",monospace;opacity:.65;}' +
    '.dm-tick{font-size:12px;font-family:"Space Mono",monospace;letter-spacing:-1px;}' +
    '.dm-tick.sent{color:#999;}' +
    '.dm-tick.read{color:#3fae54;}';
  document.head.appendChild(style);
})();

function startDmWith(otherUserId, otherName){
  if(!isSignedIn()){ openAuth('login'); return; }
  var uid = currentUserId();
  if(otherUserId === uid) return;
  var userA = uid < otherUserId ? uid : otherUserId;
  var userB = uid < otherUserId ? otherUserId : uid;
  var session = getSession();
  // cerca una thread già esistente tra i due, altrimenti la crea
  fetch(SUPABASE_URL + '/rest/v1/dm_threads?user_a=eq.' + encodeURIComponent(userA) + '&user_b=eq.' + encodeURIComponent(userB) + '&select=id', { headers: communityHeaders() })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      if(rows.length > 0) return rows[0].id;
      return fetch(SUPABASE_URL + '/rest/v1/dm_threads', {
        method:'POST',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
        body: JSON.stringify({ user_a: userA, user_b: userB })
      }).then(function(r2){ if(!r2.ok) throw new Error('dm thread create failed'); return r2.json(); })
        .then(function(rows2){ return rows2[0].id; });
    })
    .then(function(threadId){
      switchCommunityTab('dms');
      openDmThread(threadId, otherName);
      document.getElementById('communitySection').scrollIntoView({behavior:'smooth'});
    })
    .catch(function(err){ console.warn('Start DM failed:', err); });
}

function openDmThread(id, otherName){
  currentDmThreadId = id;
  currentDmOtherName = otherName;
  document.getElementById('dmListView').classList.add('hidden');
  document.getElementById('dmDetailView').classList.remove('hidden');
  var nameEl = document.getElementById('dmDetailName');
  nameEl.textContent = otherName;
  loadDmMessages();
  var uid = currentUserId();
  var th = dmThreadsCache.filter(function(t){ return t.id === id; })[0];
  if(th){
    var otherId = th.user_a === uid ? th.user_b : th.user_a;
    getPresence(otherId).then(function(online){
      var status = document.getElementById('dmDetailStatus');
      if(!status){
        status = document.createElement('span');
        status.id = 'dmDetailStatus';
        status.className = 'dm-detail-status';
        nameEl.parentNode.insertBefore(status, nameEl.nextSibling);
      }
      status.textContent = online ? 'online' : '';
    });
    var mine = th.user_a === uid;
    var field = mine ? 'last_read_at_a' : 'last_read_at_b';
    var nowIso = new Date().toISOString();
    if(mine) th.last_read_at_a = nowIso; else th.last_read_at_b = nowIso;
    setDmFlag(id, field, nowIso);
  }
}

function backToDms(){
  currentDmThreadId = null;
  document.getElementById('dmDetailView').classList.add('hidden');
  document.getElementById('dmListView').classList.remove('hidden');
  loadDmThreads();
}

function loadDmMessages(){
  var wrap = document.getElementById('dmMessages');
  wrap.innerHTML = '<p class="form-note">…</p>';
  fetch(SUPABASE_URL + '/rest/v1/dm_messages?thread_id=eq.' + encodeURIComponent(currentDmThreadId) + '&select=*&order=created_at.asc', { headers: communityHeaders() })
    .then(function(r){ if(!r.ok) throw new Error('dm messages read failed'); return r.json(); })
    .then(function(rows){
      wrap.innerHTML = '';
      if(rows.length === 0){ wrap.innerHTML = '<p class="form-note">' + t('community.noMessages') + '</p>'; return; }
      var uid = currentUserId();
      var thForTicks = dmThreadsCache.filter(function(t){ return t.id === currentDmThreadId; })[0];
      var otherLastRead = null;
      if(thForTicks){
        var mineSide = thForTicks.user_a === uid;
        otherLastRead = mineSide ? thForTicks.last_read_at_b : thForTicks.last_read_at_a;
      }
      var chain = Promise.resolve();
      rows.forEach(function(m){
        chain = chain.then(function(){
          return getDisplayName(m.sender_id).then(function(name){
            var div = document.createElement('div');
            div.className = 'channel-msg dm-bubble ' + (m.sender_id === uid ? 'mine' : 'theirs') + (m.flagged ? ' flagged' : '');
            var readByOther = otherLastRead && new Date(m.created_at) <= new Date(otherLastRead);
            var tickHtml = (m.sender_id === uid)
              ? '<span class="dm-tick ' + (readByOther ? 'read">✓✓' : 'sent">✓') + '</span>'
              : '';
            div.innerHTML = '<span class="author">' + escapeHtml(m.sender_id === uid ? t('community.you') : name) + '</span>' +
              '<div class="body">' + renderBodyHtml(m.body) + '</div>' +
              '<div class="msg-actions"><button type="button" class="report-btn">' + t('community.report') + '</button>' + tickHtml + '</div>';
            div.querySelector('.report-btn').addEventListener('click', function(){ reportContent('dm_message', m.id); });
            wrap.appendChild(div);
          });
        });
      });
      chain.then(function(){ wrap.scrollTop = wrap.scrollHeight; });
    })
    .catch(function(err){ wrap.innerHTML = ''; console.warn('DM messages load failed:', err); });
}

function sendDmMessage(){
  var box = document.getElementById('fDmMessage');
  var err = document.getElementById('dmMessageError');
  var body = box.value.trim();
  err.textContent = '';
  if(!body){ err.textContent = t('err.required'); return; }
  if(!isSignedIn()){ openAuth('login'); return; }
  var session = getSession();
  fetch(SUPABASE_URL + '/rest/v1/dm_messages', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({ thread_id: currentDmThreadId, sender_id: currentUserId(), body: body })
  }).then(function(r){
    if(!r.ok) throw new Error('dm message insert failed');
    box.value = '';
    loadDmMessages();
  }).catch(function(e){
    err.textContent = t('err.required');
    console.warn('DM message send failed:', e);
  });
}

/* ---- Segnalazioni ---- */
function reportContent(targetType, targetId){
  if(!isSignedIn()){ openAuth('login'); return; }
  var reason = window.prompt(t('community.reportPrompt'));
  if(reason === null) return; // annullato
  var session = getSession();
  fetch(SUPABASE_URL + '/rest/v1/content_reports', {
    method:'POST',
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
    body: JSON.stringify({ reporter_id: currentUserId(), target_type: targetType, target_id: targetId, reason: reason || '' })
  }).then(function(r){
    if(!r.ok) throw new Error('report insert failed');
    window.alert(t('community.reportSent'));
  }).catch(function(e){ console.warn('Report failed:', e); });
}

/* ---- Moderazione (solo admin) ---- */
function renderCommunityModeration(){
  if(!isAdmin()) return;
  var session = getSession();
  var headers = { 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token };

  // Segnalazioni aperte
  var reportsBox = document.getElementById('modReportsList');
  reportsBox.innerHTML = '<p class="form-note">…</p>';
  fetch(SUPABASE_URL + '/rest/v1/content_reports?status=eq.open&select=*&order=created_at.desc', { headers: headers })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      reportsBox.innerHTML = '';
      if(rows.length === 0){ reportsBox.innerHTML = '<p class="form-note">' + t('mod.empty') + '</p>'; return; }
      rows.forEach(function(rep){ renderModRow(reportsBox, rep.target_type, rep.target_id, rep.reason, rep.id); });
    })
    .catch(function(err){ console.warn('Reports load failed:', err); });

  // Messaggi segnalati automaticamente (canali + privati)
  var flaggedBox = document.getElementById('modFlaggedList');
  flaggedBox.innerHTML = '<p class="form-note">…</p>';
  Promise.all([
    fetch(SUPABASE_URL + '/rest/v1/channel_messages?flagged=eq.true&hidden=eq.false&select=*&order=created_at.desc', { headers: headers }).then(function(r){ return r.ok ? r.json() : []; }),
    fetch(SUPABASE_URL + '/rest/v1/dm_messages?flagged=eq.true&hidden=eq.false&select=*&order=created_at.desc', { headers: headers }).then(function(r){ return r.ok ? r.json() : []; })
  ]).then(function(results){
    flaggedBox.innerHTML = '';
    var chMsgs = results[0], dmMsgs = results[1];
    if(chMsgs.length === 0 && dmMsgs.length === 0){ flaggedBox.innerHTML = '<p class="form-note">' + t('mod.empty') + '</p>'; return; }
    chMsgs.forEach(function(m){ renderModRow(flaggedBox, 'channel_message', m.id, m.body, null, m.user_id); });
    dmMsgs.forEach(function(m){ renderModRow(flaggedBox, 'dm_message', m.id, m.body, null, m.sender_id); });
  }).catch(function(err){ console.warn('Flagged messages load failed:', err); });

  // Utenti bannati
  var bannedBox = document.getElementById('modBannedList');
  bannedBox.innerHTML = '<p class="form-note">…</p>';
  fetch(SUPABASE_URL + '/rest/v1/banned_users?select=*&order=banned_at.desc', { headers: headers })
    .then(function(r){ return r.ok ? r.json() : []; })
    .then(function(rows){
      bannedBox.innerHTML = '';
      if(rows.length === 0){ bannedBox.innerHTML = '<p class="form-note">' + t('mod.empty') + '</p>'; return; }
      rows.forEach(function(b){
        var row = document.createElement('div');
        row.className = 'admin-row';
        row.innerHTML = '<div class="info"><div class="t">' + escapeHtml(b.email) + '</div>' +
          '<div class="m">' + (b.reason ? escapeHtml(b.reason) : '') + '</div></div>';
        bannedBox.appendChild(row);
      });
    })
    .catch(function(err){ console.warn('Banned list load failed:', err); });
}

function renderModRow(box, targetType, targetId, text, reportId, knownUserId){
  var session = getSession();
  var row = document.createElement('div');
  row.className = 'admin-row';
  row.innerHTML = '<div class="info"><div class="t">' + escapeHtml(text || '') + '</div>' +
    '<div class="m">' + (targetType === 'channel_message' ? t('mod.typeChannel') : t('mod.typeDm')) + '</div></div>' +
    '<div class="admin-actions">' +
      '<button class="btn btn-sm btn-ghost" data-hide>' + t('mod.hide') + '</button>' +
      '<button class="btn btn-sm btn-ghost" data-ban>' + t('mod.ban') + '</button>' +
    '</div>';

  row.querySelector('[data-hide]').addEventListener('click', function(){
    var table = targetType === 'channel_message' ? 'channel_messages' : 'dm_messages';
    fetch(SUPABASE_URL + '/rest/v1/' + table + '?id=eq.' + encodeURIComponent(targetId), {
      method:'PATCH',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
      body: JSON.stringify({hidden:true})
    }).then(function(){
      if(reportId){
        return fetch(SUPABASE_URL + '/rest/v1/content_reports?id=eq.' + encodeURIComponent(reportId), {
          method:'PATCH',
          headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
          body: JSON.stringify({status:'reviewed'})
        });
      }
    }).then(function(){ renderCommunityModeration(); });
  });

  row.querySelector('[data-ban]').addEventListener('click', function(){
    var doBan = function(userId){
      if(!userId){ window.alert(t('mod.noUser')); return; }
      if(!window.confirm(t('mod.banConfirm'))) return;
      fetch(SUPABASE_URL + '/rest/v1/rpc/admin_ban_and_delete_user', {
        method:'POST',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
        body: JSON.stringify({ target_user_id: userId, target_reason: text || '' })
      }).then(function(r){ if(!r.ok) throw new Error('ban failed'); return r.json ? r.json().catch(function(){return null;}) : null; })
        .then(function(){
          if(reportId){
            fetch(SUPABASE_URL + '/rest/v1/content_reports?id=eq.' + encodeURIComponent(reportId), {
              method:'PATCH',
              headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
              body: JSON.stringify({status:'reviewed'})
            });
          }
          renderCommunityModeration();
        })
        .catch(function(e){ window.alert(t('mod.banFailed')); console.warn('Ban failed:', e); });
    };
    if(knownUserId){ doBan(knownUserId); return; }
    var table = targetType === 'channel_message' ? 'channel_messages' : 'dm_messages';
    var userField = targetType === 'channel_message' ? 'user_id' : 'sender_id';
    fetch(SUPABASE_URL + '/rest/v1/' + table + '?id=eq.' + encodeURIComponent(targetId) + '&select=' + userField, { headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token } })
      .then(function(r){ return r.ok ? r.json() : []; })
      .then(function(rows){ doBan(rows[0] ? rows[0][userField] : null); });
  });

  box.appendChild(row);
}

function loadFavorites(){
  favoriteIds = new Set();
  if(!isSignedIn() || !SUPABASE_URL) { renderCatalog(); return Promise.resolve(); }
  var session = getSession();
  return fetch(SUPABASE_URL + '/rest/v1/favorites?select=catalog_id&user_id=eq.' + encodeURIComponent(currentUserId()), {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('favorites read failed'); return r.json(); })
    .then(function(rows){
      favoriteIds = new Set(rows.map(function(r){ return r.catalog_id; }));
      renderCatalog();
    })
    .catch(function(err){ console.warn('Favorites load failed:', err); });
}

/* ============ ENGAGEMENT COUNTERS (views / likes / shares / saves / cart-adds) ============ */
var likedIds = new Set();

function loadLikes(){
  likedIds = new Set();
  if(!isSignedIn() || !SUPABASE_URL) return Promise.resolve();
  var session = getSession();
  return fetch(SUPABASE_URL + '/rest/v1/likes?select=catalog_id&user_id=eq.' + encodeURIComponent(currentUserId()), {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('likes read failed'); return r.json(); })
    .then(function(rows){ likedIds = new Set(rows.map(function(r){ return r.catalog_id; })); })
    .catch(function(err){ console.warn('Likes load failed:', err); });
}

function toggleLike(catalogId){
  if(!isSignedIn()){ openAuth('login'); return; }
  var session = getSession();
  var isLiked = likedIds.has(catalogId);
  var req = isLiked
    ? fetch(SUPABASE_URL + '/rest/v1/likes?user_id=eq.' + encodeURIComponent(currentUserId()) + '&catalog_id=eq.' + encodeURIComponent(catalogId), {
        method:'DELETE',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
      })
    : fetch(SUPABASE_URL + '/rest/v1/likes', {
        method:'POST',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
        body: JSON.stringify({user_id: currentUserId(), catalog_id: catalogId})
      });
  req.then(function(r){
    if(!r.ok) throw new Error('like toggle failed');
    if(isLiked){ likedIds.delete(catalogId); } else { likedIds.add(catalogId); }
    trackLikeDelta(catalogId, isLiked ? -1 : 1);
    var items = getCatalog();
    var item = items.find(function(i){ return i.id === catalogId; });
    if(item){
      item.like_count = Math.max((item.like_count || 0) + (isLiked ? -1 : 1), 0);
      saveCatalogLocal(items);
    }
    refreshTitleModalLike(catalogId);
  }).catch(function(err){ console.warn('Like toggle failed:', err); });
}

function callCounterRpc(fnName, body){
  if(!SUPABASE_URL) return Promise.resolve();
  var session = getSession();
  return fetch(SUPABASE_URL + '/rest/v1/rpc/' + fnName, {
    method:'POST',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer ' + (session ? session.access_token : SUPABASE_ANON_KEY),
      'Content-Type':'application/json'
    },
    body: JSON.stringify(body)
  }).catch(function(err){ console.warn(fnName + ' failed:', err); });
}
function trackView(catalogId){ callCounterRpc('increment_view_count', {cid: catalogId}); }
function trackShare(catalogId){ callCounterRpc('increment_share_count', {cid: catalogId}); }
function trackCartAdd(catalogId){ callCounterRpc('increment_cart_add_count', {cid: catalogId}); }
function trackLikeDelta(catalogId, delta){ callCounterRpc('adjust_like_count', {cid: catalogId, delta: delta}); }
function trackSaveDelta(catalogId, delta){ callCounterRpc('adjust_save_count', {cid: catalogId, delta: delta}); }

// Keeps the visible engagement numbers in sync with actions taken during this
// session, without waiting for the next resync from Supabase.
function bumpLocalCount(catalogId, field, delta){
  var items = getCatalog();
  var item = items.find(function(i){ return i.id === catalogId; });
  if(!item) return;
  item[field] = Math.max((item[field] || 0) + delta, 0);
  saveCatalogLocal(items);
  updateEngagementCountsLabel(catalogId);
}

function toggleFavorite(catalogId){
  if(!isSignedIn()){ openAuth('login'); return; }
  var session = getSession();
  var isFav = favoriteIds.has(catalogId);
  var req = isFav
    ? fetch(SUPABASE_URL + '/rest/v1/favorites?user_id=eq.' + encodeURIComponent(currentUserId()) + '&catalog_id=eq.' + encodeURIComponent(catalogId), {
        method:'DELETE',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
      })
    : fetch(SUPABASE_URL + '/rest/v1/favorites', {
        method:'POST',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
        body: JSON.stringify({user_id: currentUserId(), catalog_id: catalogId})
      });
  req.then(function(r){
    if(!r.ok) throw new Error('favorite toggle failed');
    if(isFav){ favoriteIds.delete(catalogId); } else { favoriteIds.add(catalogId); }
    trackSaveDelta(catalogId, isFav ? -1 : 1);
    bumpLocalCount(catalogId, 'save_count', isFav ? -1 : 1);
    renderCatalog();
    if(!document.getElementById('titleModal').classList.contains('hidden')) refreshTitleModalFav(catalogId);
  }).catch(function(err){ console.warn('Favorite toggle failed:', err); });
}

/* ============ CART (client-side only — no payment processor connected yet) ============ */
var cart = [];
try{ cart = JSON.parse(localStorage.getItem('lux_cart') || '[]'); }catch(e){ cart = []; }

function saveCart(){ localStorage.setItem('lux_cart', JSON.stringify(cart)); renderCartCount(); }
function openCartModal(){ renderCartModal(); document.getElementById('cartModal').classList.remove('hidden'); }
function closeCartModal(){ document.getElementById('cartModal').classList.add('hidden'); }
function renderCartCount(){
  var el = document.getElementById('cartCount');
  if(cart.length > 0){ el.textContent = cart.length; el.classList.remove('hidden'); }
  else { el.classList.add('hidden'); }
}
function addToCart(item){
  if(cart.some(function(i){ return i.id === item.id; })) return;
  cart.push({id:item.id, title:item.title, price:item.price});
  saveCart();
  renderCartModal();
  trackCartAdd(item.id); // interest signal only — not a real purchase until a payment processor is connected
  bumpLocalCount(item.id, 'cart_add_count', 1);
}
function removeFromCart(id){
  cart = cart.filter(function(i){ return i.id !== id; });
  saveCart();
  renderCartModal();
}
function renderCartModal(){
  var box = document.getElementById('cartItems');
  if(cart.length === 0){
    box.innerHTML = '<p class="form-note">' + t('cart.empty') + '</p>';
    return;
  }
  box.innerHTML = '';
  cart.forEach(function(item){
    var row = document.createElement('div');
    row.className = 'admin-row';
    var priceTxt = item.price ? '€' + Number(item.price).toFixed(2) : '—';
    row.innerHTML =
      '<div class="info"><div class="t">' + escapeHtml(item.title) + '</div><div class="m">' + priceTxt + '</div></div>' +
      '<div class="admin-actions"><button class="btn btn-sm btn-ghost" data-rm="' + item.id + '">×</button></div>';
    row.querySelector('[data-rm]').addEventListener('click', function(){ removeFromCart(item.id); });
    box.appendChild(row);
  });
}

/* ============ COMMENTS (with moderation) ============ */
var currentModalCatalogId = null;
var pendingDeepLinkItem = null; // set when a shared link points to a mature title still locked behind the age gate
var deepLinkChecked = false;

function checkDeepLinkOnLoad(){
  var params = new URLSearchParams(window.location.search);
  var titleId = params.get('title');
  if(!titleId) return;
  var items = getCatalog();
  var item = items.find(function(i){ return i.id === titleId; });
  if(!item) return; // not loaded yet — will retry once Supabase data arrives
  deepLinkChecked = true;
  if(item.mature && !matureVisible){
    pendingDeepLinkItem = item;
    openMatureModal();
  } else {
    openTitleModal(item);
  }
}


function openTitleModal(item){
  currentModalCatalogId = item.id;
  document.getElementById('titleModalTitle').textContent = item.title;
  document.getElementById('titleModalMeta').textContent = item.character + ' · ' + (item.issue || '') + ' · ' + (item.date || '');
  document.getElementById('titleModalSynopsis').innerHTML = renderBodyHtml(synopsisForCurrentLang(item));
  refreshTitleModalFav(item.id);
  refreshTitleModalLike(item.id);
  openPageReader(item);

  // count this as a view, once per open, and reflect it immediately in the local number
  var catItems = getCatalog();
  var freshItem = catItems.find(function(i){ return i.id === item.id; });
  if(freshItem){
    freshItem.view_count = (freshItem.view_count || 0) + 1;
    saveCatalogLocal(catItems);
    item.view_count = freshItem.view_count;
  }
  trackView(item.id);
  updateEngagementCountsLabel(item.id);

  var collabEl = document.getElementById('titleModalCollab');
  var collabArr = (item.collaborators && item.collaborators.length)
    ? item.collaborators
    : (item.collaborator_name ? [{ name: item.collaborator_name, url: item.collaborator_url, verified: item.collaborator_verified }] : []);
  if(collabArr.length){
    var creditHtml = collabArr.map(function(c, idx){
      var nameLink = c.url
        ? '<a href="' + escapeHtml(c.url) + '" target="_blank" rel="noopener">' + escapeHtml(c.name) + '</a>'
        : escapeHtml(c.name);
      var verifiedTag = c.verified ? verifiedBadge('verified.collaborator') : '';
      return '<span class="collab-credit-item" data-collab-idx="' + idx + '">' + nameLink + verifiedTag + '</span>';
    }).join(', ');
    collabEl.innerHTML = t('collab.credit') + ' ' + creditHtml +
      ' · <a href="#" id="titleModalCollabAll">' + t('collab.viewAll') + '</a>';
    var viewAllLink = document.getElementById('titleModalCollabAll');
    if(viewAllLink){
      viewAllLink.addEventListener('click', function(e){
        e.preventDefault();
        showCollaboratorCollection(collabArr[0]);
      });
    }
    Array.prototype.forEach.call(collabEl.querySelectorAll('.collab-credit-item'), function(el){
      var idx = Number(el.getAttribute('data-collab-idx'));
      el.addEventListener('click', function(e){
        if(e.target.tagName === 'A') return; // il link va al profilo, non al filtro
        showCollaboratorCollection(collabArr[idx]);
      });
    });
    collabEl.classList.remove('hidden');
  } else {
    collabEl.classList.add('hidden');
  }

  var publisherEl = document.getElementById('titleModalPublisher');
  if(item.created_by){
    fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + encodeURIComponent(item.created_by) + '&select=display_name,verified', { headers: communityHeaders() })
      .then(function(r){ return r.ok ? r.json() : []; })
      .then(function(rows){
        var p = rows[0];
        if(!p){ publisherEl.classList.add('hidden'); return; }
        var verifiedTag = p.verified ? verifiedBadge('verified.collaborator') : '';
        publisherEl.innerHTML = t('titleModal.publishedBy') + ' <a href="profile.html?user=' + encodeURIComponent(item.created_by) + '">' + escapeHtml(p.display_name || t('notif.someone')) + '</a>' + verifiedTag;
        publisherEl.classList.remove('hidden');
      })
      .catch(function(){ publisherEl.classList.add('hidden'); });
  } else {
    publisherEl.classList.add('hidden');
  }

  document.getElementById('titleModalShare').onclick = function(){ shareTitle(item); };

  var pdfLink = document.getElementById('titleModalPdf');
  if(item.pdf_url && isSignedIn()){
    pdfLink.href = item.pdf_url; // riserva, nel caso il JS sotto non parta per qualche motivo
    pdfLink.textContent = t('pdf.download');
    pdfLink.onclick = function(e){
      e.preventDefault();
      var original = pdfLink.textContent;
      pdfLink.textContent = t('pdf.preparing');
      downloadSignedPdf(item).then(function(){ pdfLink.textContent = original; });
    };
    pdfLink.classList.remove('hidden');
  } else if(item.pdf_url && !isSignedIn()){
    pdfLink.removeAttribute('href'); // l'indirizzo vero non deve mai comparire nel codice sorgente per chi non ha fatto l'accesso
    pdfLink.textContent = t('pdf.loginToDownload');
    pdfLink.onclick = function(e){ e.preventDefault(); openAuth('login'); };
    pdfLink.classList.remove('hidden');
  } else {
    pdfLink.classList.add('hidden');
  }

  var addCartBtn = document.getElementById('titleModalAddCart');
  if(item.price){
    addCartBtn.classList.remove('hidden');
    addCartBtn.onclick = function(){ addToCart(item); };
  } else {
    addCartBtn.classList.add('hidden');
  }

  var loginPrompt = document.getElementById('commentLoginPrompt');
  var formBox = document.getElementById('commentFormBox');
  loginPrompt.classList.toggle('hidden', isSignedIn());
  formBox.classList.toggle('hidden', !isSignedIn());
  document.getElementById('fCommentBody').value = '';
  document.getElementById('commentError').textContent = '';

  loadComments(item.id);
  document.getElementById('titleModal').classList.remove('hidden');
}
function closeTitleModal(){ document.getElementById('titleModal').classList.add('hidden'); currentModalCatalogId = null; }

/* ============ SHARE (native share sheet on mobile — Instagram appears there
   as one of the OS-level options, same as any app; no website can post to
   Instagram directly, that's Instagram's own restriction, not ours) ============ */
function previewPagePath(kind, id){
  var safe = String(id).replace(/[^a-zA-Z0-9_-]/g, '');
  return window.location.origin + '/' + kind + '/' + safe + '.html';
}

function shareTitle(item){
  var collabArr = (item.collaborators && item.collaborators.length)
    ? item.collaborators
    : (item.collaborator_name ? [{ name: item.collaborator_name }] : []);
  var collabNames = collabArr.map(function(c){ return c.name; }).join(', ');
  var shareText = item.title + ' — ' + t('share.tagline') +
    (collabNames ? ' ' + t('collab.credit') + ' ' + collabNames : '') + '\n';
  var shareUrl = previewPagePath('t', item.id);
  trackShare(item.id); // counts the share action being taken, not confirmed completion — noted to the user
  bumpLocalCount(item.id, 'share_count', 1);

  function shareWithoutImage(){
    if(navigator.share){
      navigator.share({ title: item.title, text: shareText, url: shareUrl }).catch(function(){ /* user cancelled — fine */ });
    } else {
      var full = shareText + '\n' + shareUrl;
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(full).then(function(){
          alert(t('share.copied'));
        }).catch(function(){
          alert(t('share.manual') + '\n\n' + full);
        });
      } else {
        alert(t('share.manual') + '\n\n' + full);
      }
    }
  }

  /* Con il file immagine allegato, app come Instagram (Storia) mostrano
     davvero la copertina invece del solo link — ma serve il supporto
     "files" della Web Share API, disponibile solo su alcuni browser/OS. */
  if(item.cover_url && navigator.share && navigator.canShare){
    fetchAsBlob(item.cover_url).then(function(blob){
      var ext = (blob.type && blob.type.split('/')[1]) || 'jpg';
      var file = new File([blob], 'copertina.' + ext, { type: blob.type || 'image/jpeg' });
      if(navigator.canShare({ files: [file] })){
        navigator.share({ title: item.title, text: shareText, url: shareUrl, files: [file] })
          .catch(function(){ /* utente ha annullato — va bene così */ });
      } else {
        shareWithoutImage();
      }
    }).catch(function(){ shareWithoutImage(); });
  } else {
    shareWithoutImage();
  }
}

/* ============ COMIC PAGE READER (viewer inside title detail modal) ============ */
var readerItem = null;
var readerPages = [];
var readerIndex = 0;
var readerBlobUrlCache = {};

function openPageReader(item){
  // pulizia della sessione di lettura precedente, per non accumulare oggetti in memoria
  Object.keys(readerBlobUrlCache).forEach(function(k){ URL.revokeObjectURL(readerBlobUrlCache[k]); });
  readerBlobUrlCache = {};
  readerItem = item;
  readerPages = item.pages || [];
  readerIndex = 0;
  var reader = document.getElementById('pageReader');
  if(readerPages.length === 0){ reader.classList.add('hidden'); return; }
  reader.classList.remove('hidden');
  var thumbs = document.getElementById('pageReaderThumbs');
  thumbs.innerHTML = '';
  readerPages.forEach(function(url, idx){
    var img = document.createElement('img');
    img.src = url; // le miniature restano sempre la versione pubblica filigranata — più leggere, non serve autenticarsi per vederle
    img.alt = 'Pagina ' + (idx + 1);
    img.addEventListener('click', function(){ showReaderPage(idx); });
    thumbs.appendChild(img);
  });
  showReaderPage(0);
}

function fetchAuthenticatedCleanPage(path){
  var session = getSession();
  if(!session) return Promise.reject(new Error('not signed in'));
  return fetch(SUPABASE_URL + '/storage/v1/object/comic-pages-clean/' + path, {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  }).then(function(r){
    if(!r.ok) throw new Error('clean page fetch failed: ' + r.status);
    return r.blob();
  }).then(function(blob){
    return URL.createObjectURL(blob);
  });
}

function showReaderPage(idx){
  if(idx < 0 || idx >= readerPages.length) return;
  readerIndex = idx;
  document.getElementById('pageReaderCount').textContent = (idx + 1) + ' / ' + readerPages.length;
  document.getElementById('pageReaderPrev').disabled = idx === 0;
  document.getElementById('pageReaderNext').disabled = idx === readerPages.length - 1;
  document.querySelectorAll('#pageReaderThumbs img').forEach(function(img, i){
    img.classList.toggle('active', i === idx);
  });

  var imgEl = document.getElementById('pageReaderImg');
  var cleanPath = (readerItem && readerItem.pages_clean) ? readerItem.pages_clean[idx] : null;

  if(isSignedIn() && cleanPath){
    if(readerBlobUrlCache[cleanPath]){
      imgEl.src = readerBlobUrlCache[cleanPath];
      return;
    }
    imgEl.src = readerPages[idx]; // versione filigranata come anteprima immediata mentre quella pulita si scarica
    fetchAuthenticatedCleanPage(cleanPath).then(function(blobUrl){
      readerBlobUrlCache[cleanPath] = blobUrl;
      if(readerIndex === idx){ imgEl.src = blobUrl; } // solo se siamo ancora su questa pagina quando arriva
    }).catch(function(err){
      console.warn('Clean page fetch failed, showing watermarked version instead:', err);
    });
  } else {
    imgEl.src = readerPages[idx];
  }
}
function refreshTitleModalFav(catalogId){
  var btn = document.getElementById('titleModalFav');
  var active = favoriteIds.has(catalogId);
  btn.textContent = active ? t('fav.remove') : t('fav.add');
  btn.classList.toggle('active', active);
}
function refreshTitleModalLike(catalogId){
  var btn = document.getElementById('titleModalLike');
  var active = likedIds.has(catalogId);
  btn.textContent = active ? t('like.remove') : t('like.add');
  btn.classList.toggle('active', active);
  updateEngagementCountsLabel(catalogId);
}
function updateEngagementCountsLabel(catalogId){
  var items = getCatalog();
  var item = items.find(function(i){ return i.id === catalogId; });
  var el = document.getElementById('titleModalCounts');
  if(!item || !el) return;
  el.textContent =
    (item.view_count || 0) + ' ' + t('stats.views') + ' · ' +
    (item.comment_count || 0) + ' ' + t('stats.comments') + ' · ' +
    (item.like_count || 0) + ' ' + t('stats.likes') + ' · ' +
    (item.save_count || 0) + ' ' + t('stats.saves') + ' · ' +
    (item.share_count || 0) + ' ' + t('stats.shares');
}

function loadComments(catalogId){
  var list = document.getElementById('commentsList');
  list.innerHTML = '<p class="form-note">…</p>';
  if(!SUPABASE_URL) { list.innerHTML = ''; return; }
  var headers = { 'apikey':SUPABASE_ANON_KEY };
  var session = getSession();
  headers['Authorization'] = 'Bearer ' + (session ? session.access_token : SUPABASE_ANON_KEY);
  fetch(SUPABASE_URL + '/rest/v1/comments?catalog_id=eq.' + encodeURIComponent(catalogId) + '&select=*&order=created_at.desc', { headers: headers })
    .then(function(r){ if(!r.ok) throw new Error('comments read failed'); return r.json(); })
    .then(function(rows){
      if(rows.length === 0) return { rows: rows, verifiedIds: {} };
      // la spunta riflette lo stato ATTUALE del profilo (che tu puoi cambiare in ogni momento),
      // non uno scatto fissato al momento in cui il commento fu scritto
      var userIds = Array.from(new Set(rows.map(function(c){ return c.user_id; }).filter(Boolean)));
      if(userIds.length === 0) return { rows: rows, verifiedIds: {} };
      var idFilter = userIds.map(encodeURIComponent).join(',');
      return fetch(SUPABASE_URL + '/rest/v1/profiles?id=in.(' + idFilter + ')&select=id,verified', { headers: headers })
        .then(function(r2){ return r2.ok ? r2.json() : []; })
        .then(function(profileRows){
          var verifiedIds = {};
          profileRows.forEach(function(p){ if(p.verified) verifiedIds[p.id] = true; });
          return { rows: rows, verifiedIds: verifiedIds };
        });
    })
    .then(function(data){
      var rows = data.rows, verifiedIds = data.verifiedIds;
      list.innerHTML = '';
      if(rows.length === 0){ list.innerHTML = '<p class="form-note">' + t('comments.empty') + '</p>'; return; }
      rows.forEach(function(c){
        var div = document.createElement('div');
        div.className = 'comment-item';
        var pendingTag = !c.approved ? '<span class="pending-tag">' + t('comments.pending') + '</span>' : '';
        var verifiedTag = verifiedIds[c.user_id] ? verifiedBadge('verified.commenter') : '';
        var replyBtnHtml = isSignedIn() ? '<button type="button" class="comment-reply-btn">' + t('comments.reply') + '</button>' : '';
        div.innerHTML = '<span class="author">' + escapeHtml(c.author_name) + '</span>' + verifiedTag + pendingTag +
          '<div class="body">' + renderBodyHtml(c.body) + '</div>' + replyBtnHtml;
        var replyBtn = div.querySelector('.comment-reply-btn');
        if(replyBtn){
          replyBtn.addEventListener('click', function(){ replyToComment(c.author_name); });
        }
        list.appendChild(div);
      });
    })
    .catch(function(err){ list.innerHTML = ''; console.warn('Comments load failed:', err); });
}

function replyToComment(authorName){
  var box = document.getElementById('fCommentBody');
  var mention = '@' + authorName + ' ';
  if(box.value.indexOf(mention) !== 0){
    box.value = mention + box.value;
  }
  box.focus();
  box.setSelectionRange(box.value.length, box.value.length);
  box.scrollIntoView({behavior:'smooth', block:'center'});
}

function submitComment(){
  var body = document.getElementById('fCommentBody').value.trim();
  var err = document.getElementById('commentError');
  err.textContent = '';
  if(!body){ err.textContent = t('err.required'); return; }
  if(!isSignedIn()){ openAuth('login'); return; }
  var session = getSession();
  var autoApproved = isAdmin(); // i tuoi commenti si pubblicano subito, non passano dalla tua stessa coda di moderazione

  var nameStep = currentProfile !== null
    ? Promise.resolve(currentProfile)
    : loadOwnProfile().then(function(){ return currentProfile; });

  nameStep.then(function(profile){
    var authorName = publicDisplayName(profile);
    return fetch(SUPABASE_URL + '/rest/v1/comments', {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
      body: JSON.stringify({ catalog_id: currentModalCatalogId, user_id: currentUserId(), author_name: authorName, body: body, approved: autoApproved })
    });
  }).then(function(r){
    if(!r.ok) throw new Error('comment insert failed');
    document.getElementById('fCommentBody').value = '';
    err.textContent = autoApproved ? t('comments.submittedPublished') : t('comments.submittedPending');
    if(autoApproved) bumpLocalCommentCount(currentModalCatalogId, 1);
    loadComments(currentModalCatalogId);
  }).catch(function(e){
    err.textContent = t('err.required');
    console.warn('Comment submit failed:', e);
  });
}

/* ============ MENTION AUTOCOMPLETE (@username suggestions while typing in
   comments, channel messages and DMs — closes itself on pick/blur/escape) ============ */
var MENTION_FIELDS = ['fCommentBody', 'fChannelMessage', 'fDmMessage', 'fChatMessage', 'fSynopsis', 'fAnnBody'];
var mentionBox = null;
var mentionActiveField = null;

(function injectMentionStyles(){
  var style = document.createElement('style');
  style.textContent =
    '.mention-suggest-box{position:absolute;z-index:9999;background:#fdfaf5;color:#2a1a1d;' +
    'border:1px solid #6e1423;border-radius:6px;max-width:280px;' +
    'box-shadow:0 6px 18px rgba(0,0,0,.35);overflow:hidden;font-size:14px;}' +
    '.mention-suggest-box.hidden{display:none;}' +
    '.mention-suggest-item{padding:6px 10px;cursor:pointer;white-space:nowrap;' +
    'overflow:hidden;text-overflow:ellipsis;color:#2a1a1d;}' +
    '.mention-suggest-item:hover{background:rgba(110,20,35,.12);}' +
    '.mention-suggest-name{opacity:.65;font-size:12px;margin-left:4px;}';
  document.head.appendChild(style);
})();

function ensureMentionBox(){
  if(mentionBox) return mentionBox;
  mentionBox = document.createElement('div');
  mentionBox.id = 'mentionSuggestBox';
  mentionBox.className = 'mention-suggest-box hidden';
  document.body.appendChild(mentionBox);
  return mentionBox;
}

function hideMentionBox(){
  if(mentionBox) mentionBox.classList.add('hidden');
  mentionActiveField = null;
}

function positionMentionBox(field){
  var rect = field.getBoundingClientRect();
  var box = ensureMentionBox();
  box.style.left = (rect.left + window.scrollX) + 'px';
  box.style.top = (rect.bottom + window.scrollY + 4) + 'px';
}

function currentMentionQuery(field){
  var pos = field.selectionStart;
  var before = field.value.slice(0, pos);
  var m = before.match(/(^|\s)@([a-zA-Z0-9_]{1,30})$/);
  return m ? m[2] : null;
}

function showMentionSuggestions(field, query){
  fetch(SUPABASE_URL + '/rest/v1/profiles?username=ilike.' + encodeURIComponent(query) + '*&select=username,display_name&limit=5', {
    headers: communityHeaders()
  }).then(function(r){ return r.ok ? r.json() : []; }).then(function(rows){
    if(mentionActiveField !== field) return;
    if(!rows || !rows.length){ hideMentionBox(); return; }
    var box = ensureMentionBox();
    box.innerHTML = rows.map(function(u){
      return '<div class="mention-suggest-item" data-username="' + u.username + '">@' + u.username +
        (u.display_name ? ' <span class="mention-suggest-name">' + u.display_name + '</span>' : '') + '</div>';
    }).join('');
    positionMentionBox(field);
    box.classList.remove('hidden');
  }).catch(function(){ hideMentionBox(); });
}

function insertMention(field, username){
  var pos = field.selectionStart;
  var before = field.value.slice(0, pos);
  var after = field.value.slice(pos);
  var replaced = before.replace(/(^|\s)@([a-zA-Z0-9_]{1,30})$/, function(full, lead){
    return lead + '@' + username + ' ';
  });
  field.value = replaced + after;
  var newPos = replaced.length;
  field.focus();
  field.setSelectionRange(newPos, newPos);
  hideMentionBox();
}

document.addEventListener('input', function(e){
  if(MENTION_FIELDS.indexOf(e.target.id) === -1) return;
  var field = e.target;
  var query = currentMentionQuery(field);
  if(query === null){ hideMentionBox(); return; }
  mentionActiveField = field;
  showMentionSuggestions(field, query);
});

document.addEventListener('click', function(e){
  var item = e.target.closest ? e.target.closest('.mention-suggest-item') : null;
  if(item && mentionActiveField){
    insertMention(mentionActiveField, item.getAttribute('data-username'));
  } else if(mentionBox && !mentionBox.contains(e.target) && MENTION_FIELDS.indexOf(e.target.id) === -1){
    hideMentionBox();
  }
});

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') hideMentionBox();
});

/* ============ EMOJI + GIF PICKER (comments, channel messages, DMs) ============ */
var TENOR_API_KEY = 'LIVDSRZULELA';
var EMOJI_LIST = ['😀','😁','😂','🤣','😊','🙂','😉','😍','😘','😜','🤔','😎','🥰','😏',
  '😢','😭','😡','😱','🙄','😴','😅','🤩','👍','👎','👏','🙏','💪','🔥','✨','💯',
  '❤️','🧡','💛','💚','💙','💜','🖤','💔','⛓️','😈','👑','🌙','⭐','🎉','💋','🌹'];

var pickerBox = null;
var gifSearchDebounce = null;

function ensurePickerBox(){
  if(pickerBox) return pickerBox;
  pickerBox = document.createElement('div');
  pickerBox.id = 'composerPickerBox';
  pickerBox.className = 'composer-picker-box hidden';
  document.body.appendChild(pickerBox);
  document.addEventListener('click', function(e){
    if(!pickerBox.classList.contains('hidden') && !pickerBox.contains(e.target) &&
       !e.target.classList.contains('emoji-btn') && !e.target.classList.contains('gif-btn')){
      pickerBox.classList.add('hidden');
    }
  });
  return pickerBox;
}
function hidePickerBox(){ if(pickerBox) pickerBox.classList.add('hidden'); }
function positionPickerBox(anchor){
  var rect = anchor.getBoundingClientRect();
  var box = ensurePickerBox();
  // position:fixed è relativo alla finestra (non al documento): resta
  // ancorato al pulsante così com'è sullo schermo, invece di scorrere via
  // insieme alla pagina e finire sovrapposto a sezioni che non c'entrano

  // per misurare l'altezza vera del popup (dipende dal contenuto: griglia
  // emoji o ricerca GIF) lo rendiamo visibile fuori dallo schermo un istante,
  // poi lo spostiamo nella posizione giusta — altrimenti, da nascosto,
  // risulterebbe alto 0px e penseremmo sempre che ci sia spazio a sufficienza
  box.style.left = '-9999px';
  box.style.top = '0px';
  box.classList.remove('hidden');
  var boxHeight = box.offsetHeight;
  var boxWidth = box.offsetWidth;

  var spaceBelow = window.innerHeight - rect.bottom;
  var top = (spaceBelow < boxHeight + 12 && rect.top > boxHeight + 12)
    ? rect.top - boxHeight - 4   // non c'è spazio sotto (es. composer in fondo allo schermo): apriamo sopra
    : rect.bottom + 4;
  top = Math.max(8, Math.min(top, window.innerHeight - boxHeight - 8));

  var left = Math.min(rect.left, window.innerWidth - boxWidth - 8);
  left = Math.max(8, left);

  box.style.top = top + 'px';
  box.style.left = left + 'px';
}
function insertAtCursor(field, text){
  var pos = field.selectionStart;
  var before = field.value.slice(0, pos);
  var after = field.value.slice(pos);
  field.value = before + text + after;
  var newPos = pos + text.length;
  field.focus();
  field.setSelectionRange(newPos, newPos);
}

function openEmojiPicker(field, anchor){
  var box = ensurePickerBox();
  box.innerHTML = '<div class="picker-grid">' + EMOJI_LIST.map(function(em){
    return '<span class="picker-emoji" data-emoji="' + em + '">' + em + '</span>';
  }).join('') + '</div>';
  Array.prototype.forEach.call(box.querySelectorAll('.picker-emoji'), function(el){
    el.addEventListener('click', function(){ insertAtCursor(field, el.getAttribute('data-emoji')); });
  });
  positionPickerBox(anchor);
  box.classList.remove('hidden');
}

/* Selecting a GIF replaces the whole field content with the direct .gif URL:
   renderBodyHtml() only shows the image when the message body IS the URL
   (nothing else), same convention most chat apps use for "send a GIF". */
function openGifPicker(field, anchor){
  var box = ensurePickerBox();
  box.innerHTML = '<input type="text" class="picker-gif-search" placeholder="Cerca GIF…">' +
    '<div class="picker-gif-results"></div>';
  positionPickerBox(anchor);
  box.classList.remove('hidden');
  var input = box.querySelector('.picker-gif-search');
  var results = box.querySelector('.picker-gif-results');
  function doSearch(q){
    if(!q){ results.innerHTML = ''; return; }
    results.innerHTML = '<div class="picker-gif-empty">…</div>';
    fetch('https://g.tenor.com/v1/search?q=' + encodeURIComponent(q) + '&key=' + TENOR_API_KEY + '&limit=8&media_filter=minimal')
      .then(function(r){ return r.ok ? r.json() : { results: [] }; })
      .then(function(data){
        var items = data.results || [];
        if(!items.length){ results.innerHTML = '<div class="picker-gif-empty">Nessun risultato</div>'; return; }
        results.innerHTML = items.map(function(g){
          var thumb = g.media && g.media[0] && g.media[0].tinygif ? g.media[0].tinygif.url : '';
          var full = g.media && g.media[0] && g.media[0].gif ? g.media[0].gif.url : thumb;
          return '<img class="picker-gif-thumb" src="' + escapeHtml(thumb) + '" data-full="' + escapeHtml(full) + '" alt="">';
        }).join('');
        Array.prototype.forEach.call(results.querySelectorAll('.picker-gif-thumb'), function(img){
          img.addEventListener('click', function(){
            field.value = img.getAttribute('data-full');
            field.focus();
            hidePickerBox();
          });
        });
      })
      .catch(function(){ results.innerHTML = '<div class="picker-gif-empty">Errore di ricerca</div>'; });
  }
  input.addEventListener('input', function(){
    clearTimeout(gifSearchDebounce);
    var q = input.value.trim();
    gifSearchDebounce = setTimeout(function(){ doSearch(q); }, 400);
  });
  input.focus();
}

function ensureComposerToolbar(field){
  if(field.dataset.toolbarAttached) return;
  field.dataset.toolbarAttached = '1';
  var toolbar = document.createElement('div');
  toolbar.className = 'composer-toolbar';
  toolbar.innerHTML =
    '<button type="button" class="composer-btn emoji-btn" title="Emoji">😊</button>' +
    '<button type="button" class="composer-btn gif-btn" title="GIF">GIF</button>';
  field.parentNode.insertBefore(toolbar, field.nextSibling);
  toolbar.querySelector('.emoji-btn').addEventListener('click', function(e){
    e.preventDefault();
    openEmojiPicker(field, toolbar.querySelector('.emoji-btn'));
  });
  toolbar.querySelector('.gif-btn').addEventListener('click', function(e){
    e.preventDefault();
    openGifPicker(field, toolbar.querySelector('.gif-btn'));
  });
}
function scanForComposerFields(){
  MENTION_FIELDS.forEach(function(id){
    var el = document.getElementById(id);
    if(el) ensureComposerToolbar(el);
  });
}
new MutationObserver(scanForComposerFields).observe(document.body, { childList: true, subtree: true });
scanForComposerFields();

(function injectPickerStyles(){
  var style = document.createElement('style');
  style.textContent =
    '.composer-toolbar{display:flex;gap:6px;margin:4px 0;}' +
    '.composer-btn{background:#fdfaf5;color:#2a1a1d;border:1px solid #6e1423;border-radius:4px;' +
    'padding:2px 8px;font-size:14px;cursor:pointer;}' +
    '.composer-btn:hover{background:rgba(110,20,35,.12);}' +
    '.composer-picker-box{position:fixed;z-index:9999;background:#fdfaf5;color:#2a1a1d;' +
    'border:1px solid #6e1423;border-radius:6px;padding:8px;box-shadow:0 6px 18px rgba(0,0,0,.35);' +
    'max-width:260px;max-height:70vh;overflow-y:auto;}' +
    '.composer-picker-box.hidden{display:none;}' +
    '.picker-grid{display:flex;flex-wrap:wrap;gap:4px;max-width:240px;}' +
    '.picker-emoji{font-size:20px;cursor:pointer;padding:2px;border-radius:4px;}' +
    '.picker-emoji:hover{background:rgba(110,20,35,.12);}' +
    '.picker-gif-search{width:100%;box-sizing:border-box;padding:4px 6px;margin-bottom:6px;' +
    'border:1px solid #6e1423;border-radius:4px;background:#fff;color:#2a1a1d;}' +
    '.picker-gif-results{display:grid;grid-template-columns:1fr 1fr;gap:4px;max-height:220px;overflow-y:auto;}' +
    '.picker-gif-thumb{width:100%;border-radius:4px;cursor:pointer;display:block;}' +
    '.picker-gif-empty{grid-column:1/-1;text-align:center;opacity:.6;font-size:13px;padding:8px;}' +
    '.chat-gif{max-width:200px;border-radius:6px;display:block;}';
  document.head.appendChild(style);
})();

/* ============ MODERATION QUEUE (admin) ============ */
function switchAdminTab(tabName){
  document.querySelectorAll('.admin-tab').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.admin-tab-panel').forEach(function(panel){
    panel.classList.toggle('hidden', panel.dataset.tabPanel !== tabName);
  });
  if(tabName === 'moderation') renderCommunityModeration();
}

function renderStatsPanel(){
  if(!isAdmin()) return;
  var box = document.getElementById('statsPanel');
  if(!box) return;
  var items = getCatalog().slice();
  if(items.length === 0){ box.innerHTML = '<p class="form-note">' + t('stats.empty') + '</p>'; return; }
  items.sort(function(a,b){ return (b.view_count||0) - (a.view_count||0); });
  var maxViews = Math.max.apply(null, items.map(function(i){ return i.view_count || 0; })) || 1;
  box.innerHTML = '';
  items.forEach(function(item){
    var row = document.createElement('div');
    row.className = 'stats-row';
    var pct = Math.round(((item.view_count || 0) / maxViews) * 100);
    row.innerHTML =
      '<div class="stats-title">' + escapeHtml(item.title) + '</div>' +
      '<div class="stats-numbers">' +
        (item.view_count||0) + ' ' + t('stats.views') + ' · ' +
        (item.like_count||0) + ' ' + t('stats.likes') + ' · ' +
        (item.save_count||0) + ' ' + t('stats.saves') + ' · ' +
        (item.share_count||0) + ' ' + t('stats.shares') + ' · ' +
        (item.cart_add_count||0) + ' ' + t('stats.cartAdds') +
      '</div>' +
      '<div class="stats-bar-track"><div class="stats-bar-fill" style="width:' + pct + '%"></div></div>';
    box.appendChild(row);
  });
}

function handleAddAnnouncement(){
  var title = document.getElementById('fAnnTitle').value.trim();
  var body = document.getElementById('fAnnBody').value.trim();
  var link = document.getElementById('fAnnLink').value.trim();
  var imageFile = document.getElementById('fAnnImage').files[0];
  var pdfFile = document.getElementById('fAnnPdf') ? document.getElementById('fAnnPdf').files[0] : null;
  var err = document.getElementById('announcementError');
  err.textContent = '';
  if(!title || !body){ err.textContent = t('err.required'); return; }
  var session = getSession();

  var imageStep = Promise.resolve(null);
  if(imageFile){
    var extMatch = /\.([a-zA-Z0-9]+)$/.exec(imageFile.name || '');
    var ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
    var path = 'announcements/' + Date.now() + '_' + Math.random().toString(36).slice(2, 8) + '.' + ext;
    imageStep = fetch(SUPABASE_URL + '/storage/v1/object/comic-pages/' + path, {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type': imageFile.type || 'image/jpeg' },
      body: imageFile
    }).then(function(r){
      if(!r.ok){
        return r.text().then(function(bodyText){
          throw new Error('Caricamento immagine fallito (HTTP ' + r.status + ') — ' + bodyText.slice(0,200));
        });
      }
      return SUPABASE_URL + '/storage/v1/object/public/comic-pages/' + path;
    });
  }

  var pdfStep = imageStep.then(function(imageUrl){
    if(!pdfFile) return { imageUrl: imageUrl, pdfUrl: null };
    var pdfPath = 'announcements/' + Date.now() + '_' + Math.random().toString(36).slice(2, 8) + '.pdf';
    return fetch(SUPABASE_URL + '/storage/v1/object/comic-pages/' + pdfPath, {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type': 'application/pdf' },
      body: pdfFile
    }).then(function(r){
      if(!r.ok){
        return r.text().then(function(bodyText){
          throw new Error('Caricamento PDF fallito (HTTP ' + r.status + ') — ' + bodyText.slice(0,200));
        });
      }
      return { imageUrl: imageUrl, pdfUrl: SUPABASE_URL + '/storage/v1/object/public/comic-pages/' + pdfPath };
    });
  });

  pdfStep.then(function(urls){
    return fetch(SUPABASE_URL + '/rest/v1/announcements', {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'return=representation' },
      body: JSON.stringify({ title: title, body: body, link_url: link || null, image_url: urls.imageUrl, pdf_url: urls.pdfUrl, published: true, expires_at: new Date(Date.now() + 24*60*60*1000).toISOString() })
    }).then(function(r){
      if(!r.ok){
        return r.text().then(function(bodyText){
          throw new Error('Salvataggio annuncio fallito (HTTP ' + r.status + ') — ' + bodyText.slice(0,200));
        });
      }
      return r;
    });
  }).then(function(r){
    document.getElementById('fAnnTitle').value = '';
    document.getElementById('fAnnBody').value = '';
    document.getElementById('fAnnLink').value = '';
    document.getElementById('fAnnImage').value = '';
    document.getElementById('fAnnImagePreview').classList.add('hidden');
    if(document.getElementById('fAnnPdf')) document.getElementById('fAnnPdf').value = '';
    renderAdminAnnouncements();
    fetchAnnouncements();
  }).catch(function(e){
    console.warn('Announcement publish failed:', e);
    err.textContent = t('announcements.publishError') + (e && e.message ? ' — ' + e.message : '');
  });
}

var VERIFICATION_MIN_DAYS = 90; // regola dei 90 giorni: la spunta blu non si può assegnare prima

function renderAdminUsers(){
  if(!isAdmin()) return;
  var list = document.getElementById('adminUsersList');
  if(!list) return;
  var session = getSession();
  fetch(SUPABASE_URL + '/rest/v1/profiles?select=id,display_name,created_at,verified,last_seen&order=created_at.desc', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('admin users read failed'); return r.json(); })
    .then(function(rows){
      list.innerHTML = '';
      if(rows.length === 0){ list.innerHTML = '<p class="form-note">' + t('users.empty') + '</p>'; return; }
      var onlineCount = rows.filter(function(u){
        return u.last_seen && (Date.now() - new Date(u.last_seen).getTime()) < ONLINE_WINDOW_MS;
      }).length;
      var summary = document.createElement('p');
      summary.className = 'form-note';
      summary.id = 'onlineCountSummary';
      summary.innerHTML = '<span class="online-dot"></span> ' + t('users.onlineNow').replace('{n}', onlineCount);
      list.appendChild(summary);

      rows.forEach(function(u){
        var joined = new Date(u.created_at);
        var daysHere = Math.floor((Date.now() - joined.getTime()) / 86400000);
        var eligible = daysHere >= VERIFICATION_MIN_DAYS;
        var displayLabel = u.display_name ? escapeHtml(u.display_name) : (t('users.noName') + ' ' + u.id.slice(0,8));
        var isOnline = u.last_seen && (Date.now() - new Date(u.last_seen).getTime()) < ONLINE_WINDOW_MS;

        var row = document.createElement('div');
        row.className = 'admin-row';
        var statusHtml = eligible
          ? '<span class="user-eligible-tag">' + t('users.eligible') + '</span>'
          : '<span class="user-waiting-tag">' + t('users.waitingDays').replace('{n}', VERIFICATION_MIN_DAYS - daysHere) + '</span>';
        var onlineHtml = isOnline ? '<span class="online-dot" title="' + t('users.onlineTag') + '"></span> ' : '';
        row.innerHTML =
          '<div class="info"><div class="t">' + onlineHtml + displayLabel + (u.verified ? ' ' + verifiedBadge('verified.commenter') : '') + '</div>' +
          '<div class="m">' + t('users.joined') + ' ' + joined.toISOString().slice(0,10) + ' · ' + t('users.daysHere').replace('{n}', daysHere) + ' · ' + statusHtml + '</div></div>' +
          '<div class="admin-actions">' +
            '<button class="btn btn-sm btn-ghost" data-toggle-verified="' + u.id + '">' +
              (u.verified ? t('users.revoke') : t('users.grant')) +
            '</button>' +
          '</div>';
        row.querySelector('[data-toggle-verified]').addEventListener('click', function(){
          if(!eligible && !u.verified){
            var msg = t('users.earlyGrantConfirm').replace('{n}', VERIFICATION_MIN_DAYS - daysHere).replace('{name}', displayLabel);
            if(!window.confirm(msg)) return;
          }
          fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + encodeURIComponent(u.id), {
            method:'PATCH',
            headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
            body: JSON.stringify({verified: !u.verified})
          }).then(function(r){ if(r.ok) renderAdminUsers(); else r.json().then(function(e){ window.alert((e && e.message) || 'Errore'); }).catch(function(){ window.alert('Errore'); }); });
        });
        list.appendChild(row);
      });
    })
    .catch(function(err){ console.warn('Admin users load failed:', err); });
}

function renderAdminAnnouncements(){
  if(!isAdmin()) return;
  var list = document.getElementById('adminAnnouncementsList');
  if(!list) return;
  var session = getSession();
  fetch(SUPABASE_URL + '/rest/v1/announcements?select=*&order=created_at.desc', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('admin announcements read failed'); return r.json(); })
    .then(function(rows){
      list.innerHTML = '';
      if(rows.length === 0){ list.innerHTML = '<p class="form-note">' + t('announcements.empty') + '</p>'; return; }
      rows.forEach(function(a){
        var row = document.createElement('div');
        row.className = 'admin-row';
        var dateStr = a.created_at ? a.created_at.slice(0,10) : '';
        var isExpired = a.expires_at ? (new Date(a.expires_at) <= new Date()) : false;
        var expiryLabel;
        if(isExpired){
          expiryLabel = '<span class="ann-expired-tag">' + t('announcements.archived') + '</span>';
        } else {
          var hoursLeft = Math.max(0, Math.round((new Date(a.expires_at) - new Date()) / 3600000));
          expiryLabel = '<span class="ann-active-tag">' + t('announcements.expiresIn').replace('{h}', hoursLeft) + '</span>';
        }
        var extendBtnHtml = !isExpired ? '<button class="btn btn-sm btn-ghost" data-extend-ann="' + a.id + '">' + t('announcements.extend') + '</button>' : '';
        row.innerHTML =
          '<div class="info"><div class="t">' + escapeHtml(a.title) + '</div>' +
          '<div class="m">' + dateStr + ' · ' + (a.published ? t('announcements.statusPublished') : t('announcements.statusHidden')) + ' · ' + expiryLabel + '</div></div>' +
          '<div class="admin-actions">' +
            extendBtnHtml +
            '<button class="btn btn-sm btn-ghost" data-toggle-ann="' + a.id + '">' + (a.published ? t('announcements.hide') : t('announcements.show')) + '</button>' +
            '<button class="btn btn-sm btn-ghost" data-del-ann="' + a.id + '">×</button>' +
          '</div>';
        if(extendBtnHtml){
          row.querySelector('[data-extend-ann]').addEventListener('click', function(){
            fetch(SUPABASE_URL + '/rest/v1/announcements?id=eq.' + encodeURIComponent(a.id), {
              method:'PATCH',
              headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
              body: JSON.stringify({expires_at: new Date(Date.now() + 24*60*60*1000).toISOString()})
            }).then(function(r){ if(r.ok){ renderAdminAnnouncements(); fetchAnnouncements(); } });
          });
        }
        row.querySelector('[data-toggle-ann]').addEventListener('click', function(){
          fetch(SUPABASE_URL + '/rest/v1/announcements?id=eq.' + encodeURIComponent(a.id), {
            method:'PATCH',
            headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
            body: JSON.stringify({published: !a.published})
          }).then(function(r){ if(r.ok){ renderAdminAnnouncements(); fetchAnnouncements(); } });
        });
        row.querySelector('[data-del-ann]').addEventListener('click', function(){
          if(!confirm(t('admin.confirmDelete'))) return;
          fetch(SUPABASE_URL + '/rest/v1/announcements?id=eq.' + encodeURIComponent(a.id), {
            method:'DELETE',
            headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
          }).then(function(r){ if(r.ok){ renderAdminAnnouncements(); fetchAnnouncements(); } });
        });
        list.appendChild(row);
      });
    })
    .catch(function(err){ console.warn('Admin announcements load failed:', err); });
}

function renderAdminRequests(){
  if(!isAdmin()) return;
  var list = document.getElementById('adminRequestsList');
  if(!list) return;
  var session = getSession();
  fetch(SUPABASE_URL + '/rest/v1/requests?select=*&order=created_at.desc', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('admin requests read failed'); return r.json(); })
    .then(function(rows){
      list.innerHTML = '';
      if(rows.length === 0){ list.innerHTML = '<p class="form-note">' + t('requests.empty') + '</p>'; return; }
      rows.forEach(function(req){
        var row = document.createElement('div');
        row.className = 'mod-row';
        row.innerHTML =
          '<div>' +
            '<div class="who">' + escapeHtml(req.author_email || '') + (req.status === 'new' ? ' · <b>' + t('requests.statusNew') + '</b>' : '') + '</div>' +
            '<div class="txt">' + escapeHtml(req.body) + '</div>' +
          '</div>' +
          '<div class="admin-actions">' +
          '<button class="btn btn-primary btn-sm" data-approve-collab="' + req.id + '">Approva collaborazione</button>' +
          '<button class="btn btn-ghost btn-sm" data-mark-read="' + req.id + '" ' + (req.status !== 'new' ? 'disabled' : '') + '>' + t('requests.markRead') + '</button>' +
          '</div>';
        row.querySelector('[data-mark-read]').addEventListener('click', function(){
          fetch(SUPABASE_URL + '/rest/v1/requests?id=eq.' + encodeURIComponent(req.id), {
            method:'PATCH',
            headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
            body: JSON.stringify({status:'read'})
          }).then(function(r){ if(r.ok) renderAdminRequests(); });
        });
        row.querySelector('[data-approve-collab]').addEventListener('click', function(){
          inviteFriendToCreate(req.user_id, req.author_email || 'questo utente');
        });
        list.appendChild(row);
      });
    })
    .catch(function(err){ console.warn('Admin requests load failed:', err); });
}

function renderModerationQueue(){
  var box = document.getElementById('modQueue');
  if(!box || !SUPABASE_URL || !isAdmin()) return;
  var session = getSession();
  fetch(SUPABASE_URL + '/rest/v1/comments?approved=eq.false&select=*&order=created_at.asc', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('moderation read failed'); return r.json(); })
    .then(function(rows){
      box.innerHTML = '';
      if(rows.length === 0){ box.innerHTML = '<p class="form-note">' + t('comments.noPending') + '</p>'; return; }
      var items = getCatalog();
      rows.forEach(function(c){
        var titleObj = items.find(function(i){ return i.id === c.catalog_id; });
        var row = document.createElement('div');
        row.className = 'mod-row';
        row.innerHTML =
          '<div><div class="who">' + escapeHtml(c.author_name) + ' · ' + (titleObj ? escapeHtml(titleObj.title) : c.catalog_id) + '</div>' +
          '<div class="txt">' + escapeHtml(c.body) + '</div></div>' +
          '<div class="admin-actions"><button class="btn btn-sm btn-ghost" data-approve="' + c.id + '">✓</button><button class="btn btn-sm btn-ghost" data-reject="' + c.id + '">×</button></div>';
        row.querySelector('[data-approve]').addEventListener('click', function(){ moderateComment(c.id, true, c.catalog_id); });
        row.querySelector('[data-reject]').addEventListener('click', function(){ moderateComment(c.id, false, c.catalog_id); });
        box.appendChild(row);
      });
    })
    .catch(function(err){ console.warn('Moderation queue load failed:', err); });
}
function moderateComment(id, approve, catalogId){
  var session = getSession();
  var req = approve
    ? fetch(SUPABASE_URL + '/rest/v1/comments?id=eq.' + encodeURIComponent(id), {
        method:'PATCH',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
        body: JSON.stringify({approved:true})
      })
    : fetch(SUPABASE_URL + '/rest/v1/comments?id=eq.' + encodeURIComponent(id), {
        method:'DELETE',
        headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
      });
  req.then(function(r){
    if(!r.ok) throw new Error('moderation action failed');
    if(approve && catalogId) bumpLocalCommentCount(catalogId, 1);
    renderModerationQueue();
  }).catch(function(err){ console.warn('Moderation action failed:', err); });
}
function bumpLocalCommentCount(catalogId, delta){
  var items = getCatalog();
  var item = items.find(function(i){ return i.id === catalogId; });
  if(!item) return;
  item.comment_count = Math.max(0, (item.comment_count || 0) + delta);
  saveCatalogLocal(items);
  renderCatalog();
  if(currentModalCatalogId === catalogId) updateEngagementCountsLabel(catalogId);
}

/* ============ SOCIAL LINKS (admin-managed, public footer) ============ */
/* ============ CHARACTER PROFILE IMAGES (Dossier photos, admin-managed) ============ */
var characterImages = {};
var CHAR_LIST = ['Lucifer','Lilith','Lucifera','Lucio'];

function fetchCharacterImages(){
  if(!SUPABASE_URL) return Promise.resolve();
  return fetch(SUPABASE_URL + '/rest/v1/character_images?select=*', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + SUPABASE_ANON_KEY }
  })
    .then(function(r){ if(!r.ok) throw new Error('character images read failed'); return r.json(); })
    .then(function(rows){
      characterImages = {};
      rows.forEach(function(row){ if(row.image_url) characterImages[row.character] = row.image_url; });
      renderDossiers();
      renderHeroBg();
    })
    .catch(function(err){ console.warn('Character images load failed:', err); });
}
function renderHeroBg(){
  var box = document.getElementById('heroBg');
  if(!box) return;
  box.innerHTML = '';
  CHAR_LIST.forEach(function(name){
    var url = characterImages[name];
    if(!url) return;
    var slice = document.createElement('div');
    slice.className = 'char-slice';
    slice.innerHTML = '<img src="' + url + '" alt="">';
    box.appendChild(slice);
  });
}

function renderCharImageAdmin(){
  if(!isAdmin()) return;
  var row = document.getElementById('charImageRow');
  if(!row) return;
  row.innerHTML = '';
  CHAR_LIST.forEach(function(name){
    var item = document.createElement('div');
    item.className = 'char-image-item';
    var thumbSrc = characterImages[name] || '';
    item.innerHTML =
      '<img class="thumb" src="'+thumbSrc+'" alt="'+name+'" style="'+(thumbSrc ? '' : 'opacity:0.25;')+'">'+
      '<div class="name">'+name+'</div>'+
      '<input type="file" accept="image/*" data-char="'+name+'">';
    item.querySelector('input').addEventListener('change', function(e){
      if(e.target.files[0]) uploadCharacterImage(name, e.target.files[0]);
    });
    row.appendChild(item);
  });
}

function uploadCharacterImage(name, file){
  var extMatch = /\.([a-zA-Z0-9]+)$/.exec(file.name || '');
  var ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
  compressImageFile(file, 800, 0.85).then(function(compressed){
    return uploadCatalogAsset(compressed, 'characters/' + name.toLowerCase() + '.' + ext);
  }).then(function(url){
    var session = getSession();
    return fetch(SUPABASE_URL + '/rest/v1/character_images?on_conflict=character', {
      method:'POST',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json', 'Prefer':'resolution=merge-duplicates' },
      body: JSON.stringify({character: name, image_url: url})
    }).then(function(r){
      if(!r.ok) throw new Error('character image save failed');
      characterImages[name] = url;
      renderDossiers();
      renderCharImageAdmin();
    });
  }).catch(function(err){ console.warn('Character image upload failed:', err); });
}

var SOCIAL_ICONS = {
  instagram: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 4.5 3 11.2c-.7.27-.7 1.27.02 1.5l4.3 1.38 1.65 5.1c.2.62 1 .77 1.4.26l2.1-2.65 4.4 3.3c.6.45 1.46.12 1.6-.62L21.98 5.4c.15-.75-.6-1.35-1.28-.9z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M8.3 14.1l9.6-7.4-8 8.4" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.35 1.37-1.35H17.4V5.35C17.1 5.3 16.1 5.2 14.9 5.2c-2.4 0-4.05 1.47-4.05 4.16V11H8.4v2.8h2.45V21h3.65z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.6"/><circle cx="7.3" cy="8" r="1.15" fill="currentColor"/><path d="M7.3 11v6.2M11.3 17.2v-3.7c0-1.4.85-2.3 2.05-2.3 1.15 0 1.95.85 1.95 2.3v3.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M11.3 11v6.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
};
function fetchSocialLinks(){
  var footer = document.getElementById('footerSocial');
  if(!SUPABASE_URL) return;
  fetch(SUPABASE_URL + '/rest/v1/social_links?select=*&enabled=eq.true', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + SUPABASE_ANON_KEY }
  })
    .then(function(r){ if(!r.ok) throw new Error('social read failed'); return r.json(); })
    .then(function(rows){
      footer.innerHTML = '';
      rows.forEach(function(row){
        if(!row.url) return;
        var a = document.createElement('a');
        a.href = row.url; a.target = '_blank'; a.rel = 'noopener';
        a.className = 'social-link-icon';
        var icon = SOCIAL_ICONS[row.id] || '';
        a.innerHTML = icon + '<span>' + row.id.charAt(0).toUpperCase() + row.id.slice(1) + '</span>';
        footer.appendChild(a);
      });
    })
    .catch(function(err){ console.warn('Social links load failed:', err); });
}
function loadSocialLinksIntoForm(){
  if(!SUPABASE_URL || !isAdmin()) return;
  var session = getSession();
  fetch(SUPABASE_URL + '/rest/v1/social_links?select=*', {
    headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token }
  })
    .then(function(r){ if(!r.ok) throw new Error('social admin read failed'); return r.json(); })
    .then(function(rows){
      rows.forEach(function(row){
        var input = document.getElementById('fSocial' + row.id.charAt(0).toUpperCase() + row.id.slice(1));
        if(input) input.value = row.url || '';
      });
    })
    .catch(function(err){ console.warn('Social admin load failed:', err); });
}
function saveSocialLinks(){
  var session = getSession();
  var platforms = ['instagram','facebook','linkedin','telegram'];
  var updates = platforms.map(function(p){
    var input = document.getElementById('fSocial' + p.charAt(0).toUpperCase() + p.slice(1));
    var url = input.value.trim();
    return fetch(SUPABASE_URL + '/rest/v1/social_links?id=eq.' + p, {
      method:'PATCH',
      headers:{ 'apikey':SUPABASE_ANON_KEY, 'Authorization':'Bearer ' + session.access_token, 'Content-Type':'application/json' },
      body: JSON.stringify({url: url, enabled: !!url})
    });
  });
  Promise.all(updates).then(function(){ fetchSocialLinks(); }).catch(function(err){ console.warn('Social save failed:', err); });
}

function __appInit(){
  document.querySelectorAll('.seal-img[data-size="sm"]').forEach(function(img){ img.src = LOGO_SM; });
  document.querySelectorAll('.seal-img[data-size="lg"]').forEach(function(img){ img.src = LOGO_LG; });
  makeHeaderLogoClickable();
  initMatureToggle();
  initTheme();
  applyI18n();
  renderDossiers();
  // NIENTE renderCatalog() qui: prima si aspettano sempre i dati veri da
  // Supabase (vedi fetchCatalogFromSupabase più sotto) — così non si vede
  // mai per sbaglio una copia locale vecchia del catalogo/copertine prima
  // che arrivi quella fresca.
  var grid = document.getElementById('catalogGrid');
  if(grid) grid.innerHTML = '<div class="mono" style="padding:20px;color:var(--parchment-dim);">…</div>';
  checkCharacterDeepLink();

  // Restore a still-valid session (refreshing the token first if it's close
  // to expiring) before deciding what the header/admin area should show —
  // this is what keeps a login feeling continuous across visits/reloads.
  refreshSessionIfNeeded().then(function(){
    refreshAuthUI();
    refreshAdminUI();
    loadFavorites();
    loadLikes();
    loadNotifications();
    loadMyCreationSession().then(refreshAdminUI); // altrimenti una sessione di collaborazione attiva non viene mai rilevata al semplice riapertura dell'app (solo subito dopo un login attivo)
    initChatPage(); // deve aspettare che la sessione sia confermata, non solo che il catalogo sia caricato
  });
  setInterval(refreshSessionIfNeeded, 4 * 60 * 1000); // keep the token fresh while the tab stays open

  renderCartCount();
  fetchSocialLinks();
  fetchCharacterImages();
  fetchAnnouncements();
  startHeartbeat();

  document.getElementById('langSelect') && document.getElementById('langSelect').addEventListener('change', function(e){
    setLang(e.target.value);
  });

  document.getElementById('btnLoginTop') && document.getElementById('btnLoginTop').addEventListener('click', function(){ openAuth('login'); });
  document.getElementById('btnLogoutTop') && document.getElementById('btnLogoutTop').addEventListener('click', function(){
    authSignOut();
    favoriteIds = new Set();
    afterAuthChange();
  });
  document.getElementById('authClose') && document.getElementById('authClose').addEventListener('click', closeAuth);
  document.getElementById('authCancel') && document.getElementById('authCancel').addEventListener('click', closeAuth);
  document.getElementById('authSubmit') && document.getElementById('authSubmit').addEventListener('click', handleAuthSubmit);
  document.getElementById('authSwitch') && document.getElementById('authSwitch').addEventListener('click', function(){
    openAuth(authMode === 'login' ? 'register' : 'login');
  });
  document.getElementById('authModal') && document.getElementById('authModal').addEventListener('click', function(e){
    if(e.target.id === 'authModal') closeAuth();
  });

  document.getElementById('navAdmin') && document.getElementById('navAdmin').addEventListener('click', function(e){
    var adminSectionEl = document.getElementById('adminSection');
    if(!adminSectionEl) return; // non siamo su admin.html: lascia navigare al link normale (href="admin.html")
    e.preventDefault();
    adminSectionEl.classList.remove('hidden');
    adminSectionEl.scrollIntoView({behavior:'smooth'});
    refreshAdminUI();
  });
  document.getElementById('btnGateSignIn') && document.getElementById('btnGateSignIn').addEventListener('click', function(){ openAuth('login'); });

  document.getElementById('btnAddEntry') && document.getElementById('btnAddEntry').addEventListener('click', handleAddEntry);
  document.getElementById('btnCancelEditTitle') && document.getElementById('btnCancelEditTitle').addEventListener('click', cancelEditTitle);
  document.getElementById('fPages') && document.getElementById('fPages').addEventListener('change', function(e){
    Array.from(e.target.files).forEach(function(file){
      pendingPages.push({file: file, previewUrl: URL.createObjectURL(file)});
    });
    renderPagesPreview();
    e.target.value = ''; // lets the same file be re-picked later if it was removed
  });
  document.getElementById('fCover') && document.getElementById('fCover').addEventListener('change', function(e){
    if(e.target.files[0]) handleCoverSelected(e.target.files[0]);
  });
  document.getElementById('btnRemoveCover') && document.getElementById('btnRemoveCover').addEventListener('click', clearPendingCover);
  document.getElementById('fPdf') && document.getElementById('fPdf').addEventListener('change', function(e){
    if(e.target.files[0]) handlePdfSelected(e.target.files[0]);
  });
  document.getElementById('btnExport') && document.getElementById('btnExport').addEventListener('click', handleExport);
  document.getElementById('btnImport') && document.getElementById('btnImport').addEventListener('click', function(){
    document.getElementById('importFile').click();
  });
  document.getElementById('importFile') && document.getElementById('importFile').addEventListener('change', function(e){
    if(e.target.files[0]) handleImport(e.target.files[0]);
  });

  document.querySelectorAll('.admin-tab').forEach(function(btn){
    btn.addEventListener('click', function(){ switchAdminTab(btn.dataset.tab); });
  });

  document.getElementById('newsletterForm') && document.getElementById('newsletterForm').addEventListener('submit', handleNewsletterSubmit);

  document.getElementById('acctChip') && document.getElementById('acctChip').addEventListener('click', openProfileModal);

  document.getElementById('btnNotifications') && document.getElementById('btnNotifications').addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('notifPanel').classList.toggle('hidden');
  });
  document.getElementById('btnMarkAllRead') && document.getElementById('btnMarkAllRead').addEventListener('click', markAllNotificationsRead);
  document.addEventListener('click', function(e){
    var panel = document.getElementById('notifPanel');
    var bell = document.getElementById('btnNotifications');
    if(!panel || panel.classList.contains('hidden')) return;
    if(!panel.contains(e.target) && e.target !== bell && !bell.contains(e.target)){
      panel.classList.add('hidden');
    }
  });

  document.getElementById('btnUserDirectory') && document.getElementById('btnUserDirectory').addEventListener('click', function(e){
    e.stopPropagation();
    toggleUserDirectory();
  });
  document.getElementById('btnCloseUserDirectory') && document.getElementById('btnCloseUserDirectory').addEventListener('click', function(){
    document.getElementById('userDirectoryPanel').classList.add('hidden');
  });
  document.addEventListener('click', function(e){
    var panel = document.getElementById('userDirectoryPanel');
    var toggleBtn = document.getElementById('btnUserDirectory');
    if(!panel || panel.classList.contains('hidden')) return;
    if(!panel.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)){
      panel.classList.add('hidden');
    }
  });

  document.querySelectorAll('.community-tab').forEach(function(btn){
    btn.addEventListener('click', function(){ switchCommunityTab(btn.dataset.ctab); });
  });
  document.querySelectorAll('.diary-kind-tab').forEach(function(btn){
    btn.addEventListener('click', function(){ switchDiaryKind(btn.dataset.dkind); });
  });
  document.querySelectorAll('.diary-filter-btn').forEach(function(btn){
    btn.addEventListener('click', function(){ switchDiaryFilter(btn.dataset.dfilter); });
  });
  document.querySelectorAll('.diary-mood-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.diary-mood-btn').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });
  document.getElementById('diaryFilterAuthorBtn') && document.getElementById('diaryFilterAuthorBtn').addEventListener('click', function(){
    switchDiaryFilter('all');
  });
  document.getElementById('btnDiaryPublish') && document.getElementById('btnDiaryPublish').addEventListener('click', submitDiaryPost);
  document.getElementById('btnCreateChannel') && document.getElementById('btnCreateChannel').addEventListener('click', createChannel);
  document.getElementById('btnBackToChannels') && document.getElementById('btnBackToChannels').addEventListener('click', backToChannels);
  document.getElementById('btnSendChannelMessage') && document.getElementById('btnSendChannelMessage').addEventListener('click', sendChannelMessage);
  document.getElementById('btnBackToDms') && document.getElementById('btnBackToDms').addEventListener('click', backToDms);
  document.getElementById('btnSendDmMessage') && document.getElementById('btnSendDmMessage').addEventListener('click', sendDmMessage);
  document.getElementById('btnSendChat') && document.getElementById('btnSendChat').addEventListener('click', sendChatMessage);
  document.getElementById('btnChatBack') && document.getElementById('btnChatBack').addEventListener('click', function(){
    var box = document.getElementById('chatBox');
    // su schermi larghi la lista è già affiancata (bottone nascosto via CSS);
    // su schermi stretti, se c'è una lista da mostrare torniamo lì invece di
    // uscire del tutto dalla pagina — proprio come in qualunque app di chat
    if(box && document.getElementById('chatSidebarList') && document.getElementById('chatSidebarList').children.length > 0){
      setChatMobileView('list');
    } else {
      history.back();
    }
  });
  document.getElementById('btnChatBg') && document.getElementById('btnChatBg').addEventListener('click', toggleChatBgPanel);
  document.getElementById('fChatBgUpload') && document.getElementById('fChatBgUpload').addEventListener('change', function(e){
    handleChatBgUpload(e.target.files[0]);
    e.target.value = '';
  });
  document.getElementById('btnChatBgReset') && document.getElementById('btnChatBgReset').addEventListener('click', function(){
    saveChatBgChoice(null);
    applyChatBackground();
    renderChatBgSwatches();
  });
  window.addEventListener('popstate', function(){
    if(document.getElementById('chatSection')) initChatPage();
  });
  document.getElementById('fChatMessage') && document.getElementById('fChatMessage').addEventListener('keydown', function(e){
    if(e.key === 'Enter') sendChatMessage();
  });
  document.getElementById('fChatAttachment') && document.getElementById('fChatAttachment').addEventListener('change', function(e){
    var file = e.target.files[0];
    var preview = document.getElementById('chatAttachPreview');
    if(file){
      document.getElementById('chatAttachName').textContent = file.name;
      preview.classList.remove('hidden');
    } else {
      preview.classList.add('hidden');
    }
  });
  document.getElementById('btnChatAttachRemove') && document.getElementById('btnChatAttachRemove').addEventListener('click', function(){
    document.getElementById('fChatAttachment').value = '';
    document.getElementById('chatAttachPreview').classList.add('hidden');
  });
  document.getElementById('fFriendSearch') && document.getElementById('fFriendSearch').addEventListener('input', function(e){
    var q = e.target.value;
    if(friendSearchDebounce) clearTimeout(friendSearchDebounce);
    friendSearchDebounce = setTimeout(function(){ searchFriends(q); }, 350);
  });

  document.getElementById('profileModalClose') && document.getElementById('profileModalClose').addEventListener('click', closeProfileModal);
  document.getElementById('btnEnablePush') && document.getElementById('btnEnablePush').addEventListener('click', enablePushNotifications);
  document.querySelectorAll('.smallnox-clickable').forEach(function(img){
    img.addEventListener('click', function(){
      img.classList.remove('wiggle');
      void img.offsetWidth; // forza il replay dell'animazione anche a click ravvicinati
      img.classList.add('wiggle');
      openSmallNoxAssistant();
    });
  });
  document.getElementById('smallnoxModalClose') && document.getElementById('smallnoxModalClose').addEventListener('click', function(){
    document.getElementById('smallnoxModal').classList.add('hidden');
  });
  document.getElementById('btnSmallNoxRequest') && document.getElementById('btnSmallNoxRequest').addEventListener('click', submitSmallNoxRequest);
  document.getElementById('smallnoxModal') && document.getElementById('smallnoxModal').addEventListener('click', function(e){
    if(e.target.id === 'smallnoxModal') e.currentTarget.classList.add('hidden');
  });
  document.getElementById('smallnoxUpdatesClose') && document.getElementById('smallnoxUpdatesClose').addEventListener('click', dismissSiteUpdates);
  document.getElementById('btnCloseSmallNoxUpdates') && document.getElementById('btnCloseSmallNoxUpdates').addEventListener('click', dismissSiteUpdates);
  document.getElementById('smallnoxUpdatesModal') && document.getElementById('smallnoxUpdatesModal').addEventListener('click', function(e){
    if(e.target.id === 'smallnoxUpdatesModal') dismissSiteUpdates();
  });
  document.getElementById('profileModal') && document.getElementById('profileModal').addEventListener('click', function(e){
    if(e.target.id === 'profileModal') closeProfileModal();
  });
  document.getElementById('fProfileAvatar') && document.getElementById('fProfileAvatar').addEventListener('change', function(e){
    var file = e.target.files[0];
    if(file) document.getElementById('profileAvatarImg').src = URL.createObjectURL(file);
    document.getElementById('profileAvatarImg').style.opacity = '1';
  });
  document.getElementById('btnSaveProfile') && document.getElementById('btnSaveProfile').addEventListener('click', saveProfile);
  document.getElementById('btnSubmitRequest') && document.getElementById('btnSubmitRequest').addEventListener('click', submitRequest);
  document.getElementById('btnAddAnnouncement') && document.getElementById('btnAddAnnouncement').addEventListener('click', handleAddAnnouncement);
  document.getElementById('fAnnImage') && document.getElementById('fAnnImage').addEventListener('change', function(e){
    var file = e.target.files[0];
    var preview = document.getElementById('fAnnImagePreview');
    if(file){ preview.src = URL.createObjectURL(file); preview.classList.remove('hidden'); }
    else { preview.classList.add('hidden'); }
  });

  document.getElementById('btnResync') && document.getElementById('btnResync').addEventListener('click', function(){
    fetchCatalogFromSupabase().then(function(){ renderCatalog(); renderAdminList(); });
    fetchMaintenanceStatus();
  });
  document.getElementById('maintenanceSwitch') && document.getElementById('maintenanceSwitch').addEventListener('change', function(e){
    var on = e.target.checked;
    setMaintenanceStatus(on).then(function(ok){
      if(!ok) e.target.checked = !on; // revert on failure
    });
  });
  document.getElementById('btnSaveMaintenanceSchedule') && document.getElementById('btnSaveMaintenanceSchedule').addEventListener('click', saveMaintenanceSchedule);
  document.getElementById('btnSaveNightSchedule') && document.getElementById('btnSaveNightSchedule').addEventListener('click', saveNightSchedule);
  document.getElementById('btnRequestExtension') && document.getElementById('btnRequestExtension').addEventListener('click', requestSessionExtension);
  document.getElementById('btnExportOffline') && document.getElementById('btnExportOffline').addEventListener('click', exportEverythingOffline);
  document.getElementById('maintenanceLockLogin') && document.getElementById('maintenanceLockLogin').addEventListener('click', function(){ openAuth('login'); });
  document.getElementById('nightLockLogin') && document.getElementById('nightLockLogin').addEventListener('click', function(){ openAuth('login'); });
  document.getElementById('btnSaveSocial') && document.getElementById('btnSaveSocial').addEventListener('click', saveSocialLinks);

  document.getElementById('titleModalClose') && document.getElementById('titleModalClose').addEventListener('click', closeTitleModal);
  document.getElementById('titleModal') && document.getElementById('titleModal').addEventListener('click', function(e){
    if(e.target.id === 'titleModal') closeTitleModal();
  });
  document.getElementById('titleModalFav') && document.getElementById('titleModalFav').addEventListener('click', function(){
    if(currentModalCatalogId) toggleFavorite(currentModalCatalogId);
  });
  document.getElementById('titleModalLike') && document.getElementById('titleModalLike').addEventListener('click', function(){
    if(currentModalCatalogId) toggleLike(currentModalCatalogId);
  });
  document.getElementById('pageReaderPrev') && document.getElementById('pageReaderPrev').addEventListener('click', function(){ showReaderPage(readerIndex - 1); });
  document.getElementById('pageReaderNext') && document.getElementById('pageReaderNext').addEventListener('click', function(){ showReaderPage(readerIndex + 1); });
  document.getElementById('btnSubmitComment') && document.getElementById('btnSubmitComment').addEventListener('click', submitComment);

  document.getElementById('btnCart') && document.getElementById('btnCart').addEventListener('click', openCartModal);
  document.getElementById('cartModalClose') && document.getElementById('cartModalClose').addEventListener('click', closeCartModal);
  document.getElementById('cartModal') && document.getElementById('cartModal').addEventListener('click', function(e){
    if(e.target.id === 'cartModal') closeCartModal();
  });

  document.getElementById('avatarInfoModalClose') && document.getElementById('avatarInfoModalClose').addEventListener('click', closeAvatarInfo);
  document.getElementById('avatarInfoModal') && document.getElementById('avatarInfoModal').addEventListener('click', function(e){
    if(e.target.id === 'avatarInfoModal') closeAvatarInfo();
  });
  document.getElementById('imageLightboxClose') && document.getElementById('imageLightboxClose').addEventListener('click', closeImageLightbox);
  document.getElementById('imageLightboxModal') && document.getElementById('imageLightboxModal').addEventListener('click', function(e){
    if(e.target.id === 'imageLightboxModal') closeImageLightbox();
  });
  document.getElementById('btnClearCart') && document.getElementById('btnClearCart').addEventListener('click', function(){
    cart = []; saveCart(); renderCartModal();
  });

  updateSyncStatus();
  checkDeepLinkOnLoad(); // try immediately in case the title is already in local cache
  fetchCatalogFromSupabase().then(function(items){
    if(items){ renderCatalog(); renderAdminList(); }
    if(!deepLinkChecked) checkDeepLinkOnLoad(); // retry once fresh data has arrived
    renderPublicProfilePage(); // no-op sulle pagine diverse da profile.html
    checkForSiteUpdates();
  });
  fetchMaintenanceStatus();
  setInterval(fetchMaintenanceStatus, 60000); // light polling so visitors already on the page see it too
  setInterval(renderNightClosureLock, 30000); // ricontrolla l'orario anche senza nuove risposte dal server
  setInterval(renderAdminUsers, 60000); // keeps "online now" fresh while you're on that tab; no-op if not admin
  heartbeatPresence();
  setInterval(heartbeatPresence, 60000); // aggiorna "ultimo attivo" per lo stato online nei DM
}
// Il loader.js inietta questo file DOPO che DOMContentLoaded è già passato
// (perché aspetta prima il fetch di header/footer/modali condivisi).
// Per questo non possiamo più aspettare quell'evento: se il documento ha
// già finito di caricare, avviamo subito; altrimenti ci mettiamo in ascolto
// come prima (utile se qualcuno include app.js in modo diverso in futuro).
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', __appInit);
} else {
  __appInit();
}
})();
