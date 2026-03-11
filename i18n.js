// ── Ca'Cino — Traduzione IT / EN / DE / FR ───────────────────
const T = {
  'nav.mappe':      { it: 'Mappe',      en: 'Maps',          de: 'Karte',         fr: 'Carte'          },
  'nav.istruzioni': { it: 'Istruzioni', en: 'Instructions',  de: 'Anleitung',     fr: 'Instructions'   },
  'nav.spazzatura': { it: 'Spazzatura', en: 'Waste',         de: 'Müll',          fr: 'Déchets'        },
  'nav.wifi':       { it: 'Wi-Fi',      en: 'Wi-Fi',         de: 'Wi-Fi',         fr: 'Wi-Fi'          },
  'nav.contatti':   { it: 'Contatti',   en: 'Contacts',      de: 'Kontakte',      fr: 'Contacts'       },
  'footer.nav':     { it: 'Navigazione',en: 'Navigation',    de: 'Navigation',    fr: 'Navigation'     },
  'footer.copy':    { it: "Ca'Cino — Guida per gli ospiti",  en: "Ca'Cino — Guest guide", de: "Ca'Cino — Gästeguide", fr: "Ca'Cino — Guide des hôtes" },
  'page.title.istruzioni': { it: 'Istruzioni', en: 'Instructions', de: 'Anleitung', fr: 'Instructions' },
  'page.title.spazzatura': { it: 'Spazzatura', en: 'Waste',        de: 'Müll',      fr: 'Déchets'      },
  'page.title.wifi':       { it: 'Wi-Fi',      en: 'Wi-Fi',        de: 'Wi-Fi',     fr: 'Wi-Fi'        },
  'page.title.mappe':      { it: 'Mappe',      en: 'Maps',         de: 'Karte',     fr: 'Carte'        },
  'page.title.contatti':   { it: 'Contatti',   en: 'Contacts',     de: 'Kontakte',  fr: 'Contacts'     },
  'index.eyebrow':  { it: 'Venezia, Italia', en: 'Venice, Italy', de: 'Venedig, Italien', fr: 'Venise, Italie' },
  'index.title':    { it: "Benvenuti a<br><em>Ca'Cino</em>", en: "Welcome to<br><em>Ca'Cino</em>", de: "Willkommen bei<br><em>Ca'Cino</em>", fr: "Bienvenue à<br><em>Ca'Cino</em>" },
  'index.subtitle': { it: 'La vostra casa nel cuore di Venezia, zona Biennale', en: 'Your home in the heart of Venice, Biennale area', de: 'Ihr Zuhause im Herzen Venedigs, Biennale-Viertel', fr: 'Votre maison au cœur de Venise, quartier Biennale' },
  'index.desc':     { it: "Tutto ciò che vi serve per vivere Venezia al meglio — dalla raccolta differenziata alle mappe del quartiere, dalle istruzioni di casa ai contatti di emergenza.", en: "Everything you need to make the most of Venice — from waste sorting to neighbourhood maps, from house instructions to emergency contacts.", de: "Alles, was Sie brauchen, um Venedig optimal zu erleben — von der Mülltrennung bis zu Stadtkarten, Hausanleitungen und Notfallkontakten.", fr: "Tout ce dont vous avez besoin pour profiter au mieux de Venise — du tri des déchets aux cartes du quartier, des instructions de la maison aux contacts d'urgence." },
  'index.cta':      { it: 'Inizia qui', en: 'Start here', de: 'Hier starten', fr: 'Commencer ici' },
  'index.label':    { it: 'Guida rapida', en: 'Quick guide', de: 'Schnellübersicht', fr: 'Guide rapide' },
  'index.heading':  { it: 'Tutto quello che vi serve', en: 'Everything you need', de: 'Alles was Sie brauchen', fr: 'Tout ce dont vous avez besoin' },
  'card.istr.title': { it: 'Istruzioni Casa',  en: 'House Instructions', de: 'Hausanleitung',     fr: 'Instructions maison'  },
  'card.istr.desc':  { it: "Come funzionano i letti, la cucina, il bagno e l'entrata. Tutto spiegato semplicemente.", en: 'How the beds, kitchen, bathroom and entrance work. All explained simply.', de: 'Wie Betten, Küche, Bad und Eingang funktionieren. Alles einfach erklärt.', fr: "Comment fonctionnent les lits, la cuisine, la salle de bain et l'entrée. Tout expliqué simplement." },
  'card.spaz.title': { it: 'Raccolta Rifiuti', en: 'Waste Collection',   de: 'Müllentsorgung',    fr: 'Collecte des déchets' },
  'card.spaz.desc':  { it: 'La differenziata a Venezia. Bidoni etichettati, orari di raccolta e sacchetti giusti.', en: 'Waste sorting in Venice. Labelled bins, collection times and the right bags.', de: 'Mülltrennung in Venedig. Beschriftete Behälter, Abholzeiten und die richtigen Säcke.', fr: 'Le tri des déchets à Venise. Poubelles étiquetées, horaires de collecte et bons sacs.' },
  'card.wifi.title': { it: 'Wi-Fi', en: 'Wi-Fi', de: 'Wi-Fi', fr: 'Wi-Fi' },
  'card.wifi.desc':  { it: 'Scansionate il QR code per connettervi subito alla rete di casa.', en: 'Scan the QR code to connect instantly to the home network.', de: 'Scannen Sie den QR-Code, um sich sofort mit dem Heimnetzwerk zu verbinden.', fr: 'Scannez le code QR pour vous connecter instantanément au réseau de la maison.' },
  'card.map.title':  { it: 'Mappe', en: 'Maps', de: 'Karten', fr: 'Cartes' },
  'card.map.desc':   { it: 'Orientatevi nel labirinto veneziano. I posti imperdibili vicino a voi.', en: 'Find your way through the Venetian maze. Must-see spots near you.', de: 'Finden Sie sich im venezianischen Labyrinth zurecht. Sehenswürdigkeiten in der Nähe.', fr: "Trouvez votre chemin dans le labyrinthe vénitien. Les incontournables près de chez vous." },
  'card.cont.title': { it: 'Contatti', en: 'Contacts', de: 'Kontakte', fr: 'Contacts' },
  'card.cont.desc':  { it: 'Numeri utili, emergenze e come raggiungere i proprietari in qualsiasi momento.', en: 'Useful numbers, emergencies and how to reach the owners at any time.', de: 'Nützliche Nummern, Notfälle und wie Sie die Eigentümer jederzeit erreichen.', fr: 'Numéros utiles, urgences et comment joindre les propriétaires à tout moment.' },
  'card.buon.title': { it: 'Buon Soggiorno!', en: 'Enjoy your stay!', de: 'Guten Aufenthalt!', fr: 'Bon séjour!' },
  'card.buon.desc':  { it: 'Speriamo che il vostro soggiorno a Venezia sia indimenticabile.', en: 'We hope your stay in Venice will be unforgettable.', de: 'Wir hoffen, dass Ihr Aufenthalt in Venedig unvergesslich sein wird.', fr: 'Nous espérons que votre séjour à Venise sera inoubliable.' },
  'slide.1':  { it: 'Camera matrimoniale',         en: 'Double bedroom',            de: 'Doppelzimmer',              fr: 'Chambre double'              },
  'slide.2':  { it: 'Camera doppia',               en: 'Twin bedroom',              de: 'Zweibettzimmer',            fr: 'Chambre twin'                },
  'slide.3':  { it: 'Camera singola',              en: 'Single bedroom',            de: 'Einzelzimmer',              fr: 'Chambre simple'              },
  'slide.4':  { it: 'Cucina',                      en: 'Kitchen',                   de: 'Küche',                     fr: 'Cuisine'                     },
  'slide.5':  { it: 'Cucina attrezzata',           en: 'Fully equipped kitchen',    de: 'Voll ausgestattete Küche',  fr: 'Cuisine entièrement équipée' },
  'slide.6':  { it: 'Bagno',                       en: 'Bathroom',                  de: 'Badezimmer',                fr: 'Salle de bain'               },
  'slide.7':  { it: 'Cabina doccia idromassaggio', en: 'Hydromassage shower',       de: 'Hydromassage-Dusche',       fr: 'Douche hydromassante'        },
  'slide.8':  { it: 'Soggiorno',                   en: 'Living room',               de: 'Wohnzimmer',                fr: 'Salon'                       },
  'slide.9':  { it: 'Corridoio',                   en: 'Hallway',                   de: 'Flur',                      fr: 'Couloir'                     },
  'slide.10': { it: "Porta d'ingresso",            en: 'Front door',                de: 'Eingangstür',               fr: "Porte d'entrée"              },
  'slide.11': { it: 'Scale condominiali',          en: 'Building staircase',        de: 'Hausflur',                  fr: "Escalier de l'immeuble"      },
  'slide.12': { it: 'Portone di accesso',          en: 'Main entrance gate',        de: 'Haupteingangstor',          fr: "Portail d'entrée"            },
  'istr.01.title': { it: 'Letti &amp; Camera', en: 'Beds &amp; Bedroom', de: 'Betten &amp; Zimmer', fr: 'Lits &amp; Chambre' },
  'istr.01.body': { it: "La biancheria è fornita e già preparata al vostro arrivo. Ulteriori lenzuola pulite di ricambio si trovano nell'armadio bianco ma vanno richieste se necessario. Per cambiarle, contattate i proprietari con almeno 8 ore di anticipo.", en: "Bed linen is provided and already made up on arrival. Extra clean sheets are in the white wardrobe but must be requested if needed. To change them, contact the owners at least 8 hours in advance.", de: "Bettwäsche ist vorhanden und bei Ihrer Ankunft bereits bezogen. Weitere Laken befinden sich im weißen Schrank, müssen aber angefordert werden. Kontaktieren Sie die Eigentümer mindestens 8 Stunden vorher.", fr: "Le linge de lit est fourni et déjà préparé à l'arrivée. Des draps supplémentaires se trouvent dans l'armoire blanche mais doivent être demandés. Contactez les propriétaires au moins 8 heures à l'avance." },
  'istr.01.tip':   { it: '💡 Copriletti extra, coperte, cuscini diversi o aggiuntivi sono nell\'armadio bianco.', en: '💡 Extra blankets, pillows and bed covers are in the white wardrobe.', de: '💡 Zusätzliche Decken, Kissen und Bettüberwürfe befinden sich im weißen Schrank.', fr: '💡 Couvertures, oreillers et couvre-lits supplémentaires se trouvent dans l\'armoire blanche.' },
  'istr.02.title': { it: 'Entrata &amp; Chiavi', en: 'Entrance &amp; Keys', de: 'Eingang &amp; Schlüssel', fr: 'Entrée &amp; Clés' },
  'istr.02.body': { it: "Troverete le chiavi nella cassetta blindata sotto i campanelli — il codice vi sarà inviato il giorno prima. Una chiave è per il portone (chiave piccola) e una per l'appartamento (chiave blindata grande). Il portone si chiude automaticamente. Potete riporre le chiavi in cassetta durante il soggiorno.", en: "You will find the keys in the key safe under the doorbells — the code will be sent the day before. One key is for the gate (small key) and one for the apartment (large security key). The gate closes automatically. You can store the keys in the safe during your stay.", de: "Die Schlüssel befinden sich im Schlüsselsafe unter den Klingeln — der Code wird Ihnen am Vortag mitgeteilt. Ein Schlüssel für das Tor (klein), einer für die Wohnung (großer Sicherheitsschlüssel). Das Tor schließt automatisch. Sie können die Schlüssel auch während des Aufenthalts im Safe lassen.", fr: "Les clés se trouvent dans le coffre à clés sous les sonnettes — le code vous sera envoyé la veille. Une clé pour le portail (petite) et une pour l'appartement (grande clé blindée). Le portail se ferme automatiquement. Vous pouvez laisser les clés dans le coffre pendant votre séjour." },

  'istr.02.tip':   { it: '💡 In caso di chiavi perse o dimenticate: contattate il proprietario (vedi Contatti).', en: '💡 If you lock yourself out: contact the owner (see Contacts).', de: '💡 Falls Sie sich ausgesperrt haben: Kontaktieren Sie den Eigentümer (siehe Kontakte).', fr: '💡 Si vous vous retrouvez enfermé dehors : contactez le propriétaire (voir Contacts).' },
  'istr.03.title': { it: 'Bagno', en: 'Bathroom', de: 'Badezimmer', fr: 'Salle de bain' },
  'istr.03.body': { it: "Asciugamani e teli doccia sono già sui letti. L'acqua calda del lavello si attiva aspettando una decina di secondi con il rubinetto a sinistra. Quella della doccia girando la manopola verso sinistra — attendete 30 secondi. Nel water solo carta igienica: usate il cestino per il resto.", en: "Towels and bath towels are already on the beds. Hot water at the sink activates after about 10 seconds with the tap turned left. For the shower, turn the knob left and wait 30 seconds. Only toilet paper in the toilet: use the bin for everything else.", de: "Handtücher liegen bereits auf den Betten. Heißes Wasser am Waschbecken kommt nach ca. 10 Sekunden mit dem Hahn links. Dusche: Knopf links drehen, 30 Sekunden warten. Nur Toilettenpapier in die Toilette: für den Rest den Eimer benutzen.", fr: "Les serviettes sont déjà sur les lits. L'eau chaude du lavabo arrive après environ 10 secondes avec le robinet à gauche. Pour la douche, tourner à gauche et attendre 30 secondes. Uniquement du papier toilette dans les WC : utilisez la poubelle pour le reste." },

  'istr.03.tip':   { it: "💡 La pressione dell'acqua può variare: è normale a Venezia.", en: '💡 Water pressure may vary: this is normal in Venice.', de: '💡 Der Wasserdruck kann variieren: Das ist in Venedig normal.', fr: "💡 La pression de l'eau peut varier : c'est normal à Venise." },
  'istr.04.title': { it: 'Cucina', en: 'Kitchen', de: 'Küche', fr: 'Cuisine' },
  'istr.04.body': { it: "I fornelli sono a gas: premere e girare per accendere, mantenere premuto fino a che la fiamma si stabilizza. Pentole, padelle e utensili sono sotto il caminetto. Piatti, bicchieri e tazze negli stipetti alti a destra della porta cucina. Le posate sono in due cassetti sul tavolo, nascosti dalle sedie. C'è un rilevatore di fumo e un estintore vicino al portaombrelli in entrata.", en: "The hob is gas: press and turn to ignite, keep pressed until the flame stabilises. Pots and pans are under the fireplace. Plates, glasses and cups in the high cupboards right of the kitchen door. Cutlery is in two drawers on the table, partly hidden by the chairs. There is a smoke detector and a fire extinguisher near the umbrella stand at the entrance.", de: "Gasherd: drücken und drehen zum Zünden, gedrückt halten bis die Flamme stabil ist. Töpfe unter dem Kamin. Teller, Gläser und Tassen in den hohen Schränken rechts neben der Küchentür. Besteck in zwei Schubladen am Tisch, teils von den Stühlen verdeckt. Rauchmelder und Feuerlöscher beim Schirmständer am Eingang.", fr: "Cuisinière à gaz : appuyer et tourner pour allumer, maintenir jusqu'à stabilisation de la flamme. Casseroles sous la cheminée. Assiettes, verres et tasses dans les placards hauts à droite de la porte. Couverts dans deux tiroirs sur la table, cachés par les chaises. Extincteur près du porte-parapluies à l'entrée." },

  'istr.04.tip':   { it: '💡 Ricordate sempre di chiudere il gas quando finite di cucinare.', en: '💡 Always remember to turn off the gas when you finish cooking.', de: '💡 Denken Sie immer daran, das Gas auszuschalten, wenn Sie mit dem Kochen fertig sind.', fr: "💡 N'oubliez jamais d'éteindre le gaz quand vous avez fini de cuisiner." },
  'spaz.intro':       { it: '🗑️ I bidoni della spazzatura si trovano <strong>a lato del caminetto</strong> in cucina. La raccolta avviene <strong>porta a porta ogni giorno</strong>, tranne la domenica.', en: '🗑️ The waste bins are located <strong>next to the fireplace</strong> in the kitchen. Collection takes place <strong>door to door every day</strong>, except Sunday.', de: '🗑️ Die Mülltonnen befinden sich <strong>neben dem Kamin</strong> in der Küche. Die Abholung erfolgt <strong>täglich von Tür zu Tür</strong>, außer sonntags.', fr: "🗑️ Les poubelles se trouvent <strong>à côté de la cheminée</strong> dans la cuisine. La collecte a lieu <strong>porte à porte chaque jour</strong>, sauf le dimanche." },
  'spaz.label':       { it: 'Tipologie di rifiuto', en: 'Waste types',      de: 'Abfallarten',       fr: 'Types de déchets'     },
  'spaz.heading':     { it: 'Cosa va dove',          en: 'What goes where',  de: 'Was kommt wohin',   fr: 'Quoi va où'           },
  'spaz.ind.title':   { it: 'Indifferenziata',       en: 'General waste',    de: 'Restmüll',          fr: 'Ordures ménagères'    },
  'spaz.ind.day':     { it: 'Ogni giorno (tranne domenica)', en: 'Every day (except Sunday)', de: 'Täglich (außer Sonntag)', fr: 'Chaque jour (sauf dimanche)' },
  'spaz.ind.desc':    { it: 'Tutto ciò che non è riciclabile: plastica sporca, carta stagnola, pannolini, mozziconi.', en: 'Everything non-recyclable: dirty plastic, foil, nappies, cigarette butts.', de: 'Alles nicht Recycelbare: schmutziger Kunststoff, Alufolie, Windeln, Zigarettenstummel.', fr: "Tout ce qui n'est pas recyclable : plastique sale, papier aluminium, couches, mégots." },
  'spaz.carta.title': { it: 'Carta',    en: 'Paper',   de: 'Papier',   fr: 'Papier'   },
  'spaz.carta.day':   { it: 'Lunedì · Mercoledì · Venerdì', en: 'Mon · Wed · Fri', de: 'Mo · Mi · Fr', fr: 'Lun · Mer · Ven' },
  'spaz.carta.desc':  { it: 'Giornali, cartone, scatole. Usate un <strong>sacchetto di carta</strong> per raccoglierla — non buste di plastica!', en: 'Newspapers, cardboard, boxes. Use a <strong>paper bag</strong> to collect it — not plastic bags!', de: 'Zeitungen, Karton, Schachteln. Verwenden Sie einen <strong>Papierbeutel</strong> — keine Plastiktüten!', fr: 'Journaux, carton, boîtes. Utilisez un <strong>sac en papier</strong> — pas de sacs plastique!' },
  'spaz.org.title':   { it: 'Organico', en: 'Organic', de: 'Biomüll',   fr: 'Organique' },
  'spaz.org.day':     { it: 'Ogni giorno (tranne domenica)', en: 'Every day (except Sunday)', de: 'Täglich (außer Sonntag)', fr: 'Chaque jour (sauf dimanche)' },
  'spaz.org.desc':    { it: 'Scarti di cibo, fondi di caffè, bucce di frutta e verdura, fiori recisi.', en: 'Food scraps, coffee grounds, fruit and vegetable peel, cut flowers.', de: 'Speisereste, Kaffeesatz, Obst- und Gemüseschalen, Schnittblumen.', fr: 'Restes alimentaires, marc de café, épluchures de fruits et légumes, fleurs coupées.' },
  'spaz.vetro.title': { it: 'Vetro &amp; Metallo', en: 'Glass &amp; Metal', de: 'Glas &amp; Metall', fr: 'Verre &amp; Métal' },
  'spaz.vetro.day':   { it: 'Martedì · Giovedì · Sabato', en: 'Tue · Thu · Sat', de: 'Di · Do · Sa', fr: 'Mar · Jeu · Sam' },
  'spaz.vetro.desc':  { it: 'Bottiglie, barattoli, lattine. Sciacquate prima di buttare.', en: 'Bottles, jars, cans. Rinse before disposing.', de: 'Flaschen, Gläser, Dosen. Vor dem Entsorgen ausspülen.', fr: 'Bouteilles, bocaux, boîtes de conserve. Rincer avant de jeter.' },
  'spaz.plas.title':  { it: 'Plastica', en: 'Plastic',  de: 'Kunststoff', fr: 'Plastique' },
  'spaz.plas.day':    { it: 'Lunedì · Giovedì · Sabato', en: 'Mon · Thu · Sat', de: 'Mo · Do · Sa', fr: 'Lun · Jeu · Sam' },
  'spaz.plas.desc':   { it: 'Bottiglie di plastica, flaconi, imballaggi. Schiacciate per risparmiare spazio.', en: 'Plastic bottles, containers, packaging. Crush to save space.', de: 'Plastikflaschen, Behälter, Verpackungen. Zerdrücken um Platz zu sparen.', fr: 'Bouteilles plastique, flacons, emballages. Écraser pour gagner de la place.' },
  'spaz.spec.title':  { it: 'Speciali', en: 'Special waste', de: 'Sondermüll', fr: 'Déchets spéciaux' },
  'spaz.spec.day':    { it: 'Su richiesta / isola ecologica', en: 'On request / recycling centre', de: 'Auf Anfrage / Wertstoffhof', fr: 'Sur demande / déchetterie' },
  'spaz.spec.desc':   { it: 'Pile, farmaci, oli esausti. Non buttare con i rifiuti normali — chiedete al proprietario.', en: 'Batteries, medicines, used oil. Do not dispose with normal waste — ask the owner.', de: 'Batterien, Medikamente, Altöl. Nicht mit dem normalen Abfall entsorgen — fragen Sie den Eigentümer.', fr: "Piles, médicaments, huiles usagées. Ne pas jeter avec les déchets normaux — demandez au propriétaire." },
  'spaz.cal.heading': { it: 'Calendario settimanale', en: 'Weekly schedule', de: 'Wochenkalender', fr: 'Calendrier hebdomadaire' },
  'spaz.th.giorno':   { it: 'Giorno',   en: 'Day',        de: 'Tag',      fr: 'Jour'     },
  'spaz.th.raccolta': { it: 'Raccolta', en: 'Collection',  de: 'Abholung', fr: 'Collecte' },
  'spaz.lun':     { it: 'Lunedì',    en: 'Monday',    de: 'Montag',     fr: 'Lundi'    },
  'spaz.lun.val': { it: 'Indifferenziata · Carta · Plastica', en: 'General · Paper · Plastic', de: 'Restmüll · Papier · Kunststoff', fr: 'Ordures · Papier · Plastique' },
  'spaz.mar':     { it: 'Martedì',   en: 'Tuesday',   de: 'Dienstag',   fr: 'Mardi'   },
  'spaz.mar.val': { it: 'Indifferenziata · Organico · Vetro &amp; Metallo', en: 'General · Organic · Glass &amp; Metal', de: 'Restmüll · Biomüll · Glas &amp; Metall', fr: 'Ordures · Organique · Verre &amp; Métal' },
  'spaz.mer':     { it: 'Mercoledì', en: 'Wednesday', de: 'Mittwoch',   fr: 'Mercredi' },
  'spaz.mer.val': { it: 'Indifferenziata · Carta', en: 'General · Paper', de: 'Restmüll · Papier', fr: 'Ordures · Papier' },
  'spaz.gio':     { it: 'Giovedì',   en: 'Thursday',  de: 'Donnerstag', fr: 'Jeudi'   },
  'spaz.gio.val': { it: 'Indifferenziata · Organico · Vetro &amp; Metallo · Plastica', en: 'General · Organic · Glass &amp; Metal · Plastic', de: 'Restmüll · Biomüll · Glas &amp; Metall · Kunststoff', fr: 'Ordures · Organique · Verre &amp; Métal · Plastique' },
  'spaz.ven':     { it: 'Venerdì',   en: 'Friday',    de: 'Freitag',    fr: 'Vendredi' },
  'spaz.ven.val': { it: 'Indifferenziata · Carta', en: 'General · Paper', de: 'Restmüll · Papier', fr: 'Ordures · Papier' },
  'spaz.sab':     { it: 'Sabato',    en: 'Saturday',  de: 'Samstag',    fr: 'Samedi'  },
  'spaz.sab.val': { it: 'Indifferenziata · Organico · Vetro &amp; Metallo · Plastica', en: 'General · Organic · Glass &amp; Metal · Plastic', de: 'Restmüll · Biomüll · Glas &amp; Metall · Kunststoff', fr: 'Ordures · Organique · Verre &amp; Métal · Plastique' },
  'spaz.dom':     { it: 'Domenica',  en: 'Sunday',    de: 'Sonntag',    fr: 'Dimanche' },
  'spaz.dom.val': { it: 'Nessuna raccolta', en: 'No collection', de: 'Keine Abholung', fr: 'Pas de collecte' },
  'spaz.note.title': { it: 'Sacchetto di carta per la carta', en: 'Paper bag for paper waste', de: 'Papiertüte für Papierabfall', fr: 'Sac en papier pour les déchets papier' },
  'spaz.note.body':  { it: "Per smaltire la carta e il cartone è <em>obbligatorio</em> usare un sacchetto di carta — non sacchetti di plastica. Ne trovate alcuni sotto il lavandino.", en: 'To dispose of paper and cardboard it is <em>mandatory</em> to use a paper bag — not plastic bags. You will find some under the sink.', de: 'Zur Entsorgung von Papier und Karton ist es <em>Pflicht</em>, eine Papiertüte zu verwenden — keine Plastiktüten. Sie finden einige unter der Spüle.', fr: "Pour éliminer le papier et le carton il est <em>obligatoire</em> d'utiliser un sac en papier — pas de sacs plastique. Vous en trouverez quelques-uns sous l'évier." },
  'wifi.qr.label': { it: 'Scansionate per connettervi', en: 'Scan to connect', de: 'Scannen zum Verbinden', fr: 'Scannez pour vous connecter' },
  'wifi.heading':  { it: 'Connessione facile &amp; veloce', en: 'Easy &amp; fast connection', de: 'Einfache &amp; schnelle Verbindung', fr: 'Connexion facile &amp; rapide' },
  'wifi.desc':     { it: "Scansionate il codice QR con la fotocamera del vostro smartphone per connettervi automaticamente alla rete Wi-Fi di Ca'Cino. In alternativa, usate le credenziali qui sotto.", en: "Scan the QR code with your smartphone camera to automatically connect to Ca'Cino's Wi-Fi. Alternatively, use the credentials below.", de: "Scannen Sie den QR-Code mit der Kamera Ihres Smartphones, um sich automatisch mit dem Wi-Fi von Ca'Cino zu verbinden. Alternativ können Sie die unten stehenden Zugangsdaten verwenden.", fr: "Scannez le code QR avec l'appareil photo de votre smartphone pour vous connecter automatiquement au Wi-Fi de Ca'Cino. Sinon, utilisez les identifiants ci-dessous." },
  'wifi.rete':     { it: 'Rete',     en: 'Network',  de: 'Netzwerk',  fr: 'Réseau'        },
  'wifi.pass':     { it: 'Password', en: 'Password', de: 'Passwort',  fr: 'Mot de passe'  },
  'wifi.show':     { it: 'Mostra password',   en: 'Show password',   de: 'Passwort anzeigen',  fr: 'Afficher le mot de passe' },
  'wifi.hide':     { it: 'Nascondi password', en: 'Hide password',   de: 'Passwort verbergen', fr: 'Masquer le mot de passe'  },
  'wifi.tip':      { it: "🔧 <strong>Problemi di connessione?</strong> Il router è nel corridoio. Provate a spegnerlo e riaccenderlo tenendo premuto il tasto posteriore per 10 secondi. Se il problema persiste, <a href='Contatti.html' style='color:var(--canal);text-decoration:underline;'>contattateci</a>.", en: "🔧 <strong>Connection problems?</strong> The router is in the hallway. Try switching it off and back on by holding the rear button for 10 seconds. If the problem persists, <a href='Contatti.html' style='color:var(--canal);text-decoration:underline;'>contact us</a>.", de: "🔧 <strong>Verbindungsprobleme?</strong> Der Router befindet sich im Flur. Schalten Sie ihn aus und wieder ein, indem Sie die hintere Taste 10 Sekunden gedrückt halten. Falls das Problem weiterhin besteht, <a href='Contatti.html' style='color:var(--canal);text-decoration:underline;'>kontaktieren Sie uns</a>.", fr: "🔧 <strong>Problèmes de connexion?</strong> Le routeur est dans le couloir. Essayez de l'éteindre et de le rallumer en maintenant le bouton arrière pendant 10 secondes. Si le problème persiste, <a href='Contatti.html' style='color:var(--canal);text-decoration:underline;'>contactez-nous</a>." },
  'cont.owner.role':  { it: 'Proprietario',       en: 'Owner',            de: 'Eigentümer',                  fr: 'Propriétaire'          },
  'cont.owner.hours': { it: 'Disponibili ogni giorno h 24.', en: 'Available every day 24h.', de: 'Täglich verfügbar, 24h.', fr: 'Disponible tous les jours 24h.' },
  'cont.maint.title': { it: 'Assistenza Casa',    en: 'Home Assistance',  de: 'Hausservice',                 fr: 'Assistance maison'     },
  'cont.maint.role':  { it: 'Manutenzione &amp; Problemi', en: 'Maintenance &amp; Issues', de: 'Wartung &amp; Probleme', fr: 'Maintenance &amp; Problèmes' },
  'cont.maint.desc':  { it: 'Per problemi con impianti, elettricità, idraulica o qualsiasi guasto in appartamento.', en: 'For problems with utilities, electricity, plumbing or any apartment fault.', de: 'Bei Problemen mit Versorgungseinrichtungen, Elektrik, Sanitär oder anderen Störungen.', fr: "Pour les problèmes de plomberie, électricité, équipements ou toute panne dans l'appartement." },
  'cont.osp.title':   { it: 'Ospedale Civile SS. Giovanni e Paolo', en: 'Civil Hospital SS. Giovanni e Paolo', de: 'Krankenhaus SS. Giovanni e Paolo', fr: 'Hôpital SS. Giovanni e Paolo' },
  'cont.osp.role':    { it: 'Pronto Soccorso',    en: 'Emergency Room',   de: 'Notaufnahme',                 fr: 'Urgences'              },
  'cont.osp.desc':    { it: 'Campo SS. Giovanni e Paolo, Venezia — raggiungibile a piedi o via vaporetto (linea 5.1).', en: 'Campo SS. Giovanni e Paolo, Venice — reachable on foot or by vaporetto (line 5.1).', de: 'Campo SS. Giovanni e Paolo, Venedig — zu Fuß oder per Vaporetto (Linie 5.1) erreichbar.', fr: 'Campo SS. Giovanni e Paolo, Venise — accessible à pied ou en vaporetto (ligne 5.1).' },
  'cont.actv.role':   { it: 'Trasporto pubblico', en: 'Public transport', de: 'Öffentliche Verkehrsmittel',  fr: 'Transports en commun'  },
  'cont.actv.desc':   { it: 'Orari, linee e biglietti per i vaporetti di Venezia.', en: 'Timetables, lines and tickets for Venice vaporetti.', de: 'Fahrpläne, Linien und Tickets für die Vaporetti in Venedig.', fr: 'Horaires, lignes et billets pour les vaporettos de Venise.' },
  'cont.emerg.title': { it: 'Numeri di emergenza', en: 'Emergency numbers', de: 'Notrufnummern', fr: "Numéros d'urgence" },
  'cont.emerg.body':  { it: 'Carabinieri / Polizia: <strong>112</strong> &nbsp;·&nbsp; Vigili del Fuoco: <strong>115</strong> &nbsp;·&nbsp; Emergenza medica: <strong>118</strong> &nbsp;·&nbsp; Guardia costiera: <strong>1530</strong>', en: 'Police: <strong>112</strong> &nbsp;·&nbsp; Fire brigade: <strong>115</strong> &nbsp;·&nbsp; Medical emergency: <strong>118</strong> &nbsp;·&nbsp; Coast guard: <strong>1530</strong>', de: 'Polizei: <strong>112</strong> &nbsp;·&nbsp; Feuerwehr: <strong>115</strong> &nbsp;·&nbsp; Medizinischer Notfall: <strong>118</strong> &nbsp;·&nbsp; Küstenwache: <strong>1530</strong>', fr: 'Police: <strong>112</strong> &nbsp;·&nbsp; Pompiers: <strong>115</strong> &nbsp;·&nbsp; Urgence médicale: <strong>118</strong> &nbsp;·&nbsp; Garde côtière: <strong>1530</strong>' },
  'mappe.label':   { it: 'Dintorni',                  en: 'Surroundings',              de: 'Umgebung',                      fr: 'Environs'                     },
  'mappe.heading': { it: 'Punti di interesse vicini', en: 'Nearby points of interest', de: 'Sehenswürdigkeiten in der Nähe', fr: "Points d'intérêt à proximité" },
  'mappe.gmaps':   { it: 'Apri in Google Maps',       en: 'Open in Google Maps',       de: 'In Google Maps öffnen',         fr: 'Ouvrir dans Google Maps'      },
};

// ── Motore ────────────────────────────────────────────────────
const LANG_KEY = 'cacino_lang';
const FLAGS = { it: '🇮🇹', en: '🇬🇧', de: '🇩🇪', fr: '🇫🇷' };

function getLang() { return localStorage.getItem(LANG_KEY) || 'it'; }

function applyLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key] && T[key][lang] !== undefined) el.innerHTML = T[key][lang];
  });

  // Aggiorna icona attiva nel menu
  document.querySelectorAll('.lang-switcher__menu button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Chiudi menu dopo selezione
  closeLangMenu();
}

function toggleLangMenu() {
  const menu = document.getElementById('lang-menu');
  if (menu) menu.classList.toggle('open');
}

function closeLangMenu() {
  const menu = document.getElementById('lang-menu');
  if (menu) menu.classList.remove('open');
}

// Chiudi cliccando fuori
document.addEventListener('click', e => {
  if (!e.target.closest('.lang-switcher')) closeLangMenu();
});

document.addEventListener('DOMContentLoaded', () => applyLang(getLang()));
