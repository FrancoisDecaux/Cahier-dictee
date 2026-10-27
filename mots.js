// ============================================================
//  LISTES DE MOTS — c'est le seul fichier à modifier chaque semaine
// ============================================================
//
//  Pour chaque fille :
//    prenom : son prénom (affiché dans le jeu)
//    classe : sa classe
//    niveau : 1 = plus facile (CE1), 2 = plus difficile (CM1)
//    titre  : le titre de la liste de la semaine
//    mots   : la liste des mots
//
//  Un mot peut s'écrire simplement :       "la cathédrale",
//  ou avec des pièges et une phrase :
//     { mot: "vers", pieges: ["ver", "vert"], phrase: "Nous marchons {} la cathédrale." }
//  Dans la phrase, {} indique la place du mot.
//  Les pièges servent au jeu « Le bon mot ». Sans pièges, le jeu les invente tout seul.

const LISTES = {
  grande: {
    prenom: "",
    classe: "CM1",
    niveau: 2,
    titre: "Révisions : Nîmes, Reims, Lascaux, Quatre Saisons",
    mots: [
      // ===== L'amphithéâtre de Nîmes (liste incomplète : noms et verbes) =====
      // noms
      { mot: "le siècle", pieges: ["sciècle", "siécle", "sièkle"], phrase: "Les arènes ont été construites au premier {}." },
      { mot: "une époque", pieges: ["époc", "épok", "èpoque"], phrase: "À cette {}, les Romains vivaient en Gaule." },
      { mot: "la Gaule", pieges: ["gaule", "Gôle", "Gaulle"], phrase: "Autrefois, la France s'appelait la {}." },
      { mot: "le mètre", pieges: ["métre", "mettre", "maître"], phrase: "Le mur mesure plus d'un {} d'épaisseur." },
      { mot: "l'étage", pieges: ["étaje", "ètage", "étages"], phrase: "Les spectateurs montent à l'{} du haut." },
      { mot: "la hauteur", pieges: ["auteur", "hauteure", "hotteur"], phrase: "La {} des arènes est de vingt et un mètres." },
      { mot: "le spectateur", pieges: ["spéctateur", "spectateure", "spectatteur"], phrase: "Le {} applaudit le gladiateur." },
      { mot: "le Gallo-Romain", pieges: ["gallo-romain", "Galo-Romain", "Gallo-Romin"], phrase: "Ce {} habitait à Nîmes." },
      { mot: "le combat", pieges: ["conbat", "combas", "comba"], phrase: "Le {} des gladiateurs commence." },
      { mot: "la bataille", pieges: ["bataye", "batail", "battaille"], phrase: "La {} a duré toute la journée." },
      { mot: "le gladiateur", pieges: ["gladiatteur", "gladiateure", "glagiateur"], phrase: "Le {} entre dans l'arène." },
      { mot: "l'eau", pieges: ["o", "au", "eaux"], phrase: "Les Romains apportaient l'{} par un aqueduc." },
      { mot: "l'arène", pieges: ["arêne", "arènne", "harène"], phrase: "Les gladiateurs combattent dans l'{}." },
      { mot: "les gradins", pieges: ["gradin", "gradains", "grradins"], phrase: "Les spectateurs s'assoient sur les {}." },
      { mot: "la galerie", pieges: ["gallerie", "galerrie", "galeri"], phrase: "Nous marchons dans la {} sous les gradins." },
      { mot: "l'intérieur", pieges: ["intérieure", "intèrieur", "interrieur"], phrase: "À l'{} des arènes, il fait frais." },
      { mot: "un riche", pieges: ["riches", "rich", "rishe"], phrase: "Un {} avait une place près de l'arène." },
      { mot: "un pauvre", pieges: ["povre", "pauvres", "paûvre"], phrase: "Un {} s'asseyait tout en haut." },
      // verbes
      { mot: "compter", pieges: ["conter", "conpter", "compté"], phrase: "Je vais {} les arcades." },
      { mot: "accueillir", pieges: ["acueillir", "accueuillir", "acceuillir"], phrase: "Les arènes peuvent {} vingt mille personnes." },
      { mot: "assister", pieges: ["asister", "assisté", "asisster"], phrase: "Nous allons {} à un spectacle." },
      { mot: "accéder", pieges: ["acéder", "accèder", "accédé"], phrase: "On peut {} aux gradins par un escalier." },
      { mot: "s'installer", pieges: ["s'instaler", "s'installé", "c'installer"], phrase: "Les spectateurs vont {} sur les gradins." },
      // ===== La cathédrale de Reims =====
      // noms
      { mot: "la cathédrale", pieges: ["catédrale", "cathédralle", "cathèdrale"], phrase: "Nous visitons la {} de Reims." },
      { mot: "le lieu", pieges: ["lieux", "lieue", "lieut"], phrase: "Ce {} est magnifique." },
      { mot: "la France", pieges: ["france", "Frence", "Franse"], phrase: "Reims est une ville de {}." },
      { mot: "la démonstration", pieges: ["démonstrasion", "démontration", "dèmonstration"], phrase: "La maîtresse fait une {} au tableau." },
      { mot: "un édifice", pieges: ["édifisse", "édiffice", "édifise"], phrase: "La cathédrale est un {} très ancien." },
      { mot: "le ciel", pieges: ["siel", "ciell", "cièl"], phrase: "Les tours montent vers le {}." },
      { mot: "la lumière", pieges: ["lumiaire", "lumièr", "lumiére"], phrase: "La {} traverse les vitraux." },
      { mot: "l'art", pieges: ["ar", "hart", "arr"], phrase: "La cathédrale est une œuvre d'{}." },
      { mot: "la Révolution", pieges: ["révolution", "Révolusion", "Rèvolution"], phrase: "La {} française a commencé en 1789." },
      { mot: "un vitrail", pieges: ["vitraille", "vitrial", "vitrai"], phrase: "Ce {} est bleu et rouge." },
      { mot: "des vitraux", pieges: ["vitrails", "vitreaux", "vitrau"], phrase: "Les {} brillent au soleil." },
      { mot: "le Moyen Âge", pieges: ["Moyen Age", "moyen âge", "Moyent Âge"], phrase: "Les chevaliers vivaient au {}." },
      { mot: "le soir", pieges: ["soire", "soirt", "soar"], phrase: "Le {}, la cathédrale s'illumine." },
      // verbes
      { mot: "être", pieges: ["etre", "ètre", "aitre"], phrase: "Je voudrais {} architecte plus tard." },
      { mot: "élever", pieges: ["éléver", "èlever", "ellever"], phrase: "Les ouvriers vont {} un grand mur." },
      { mot: "faire", pieges: ["fère", "fair", "fèr"], phrase: "Il faut beaucoup de temps pour {} une cathédrale." },
      { mot: "entrer", pieges: ["antrer", "enttrer", "entrè"], phrase: "Nous allons {} dans la cathédrale." },
      { mot: "voir", pieges: ["voire", "voar", "vouar"], phrase: "On peut {} la cathédrale de loin." },
      // adjectifs et participes passés
      { mot: "connu", pieges: ["conu", "connut", "conus"], phrase: "Ce monument est très {}." },
      { mot: "gothique", pieges: ["gotique", "gothik", "gottique"], phrase: "C'est une cathédrale {}." },
      { mot: "certain", pieges: ["sertain", "certin", "certein"], phrase: "Je suis {} de la réponse." },
      { mot: "français", pieges: ["francais", "fransais", "françai"], phrase: "Les rois {} étaient sacrés à Reims." },
      { mot: "bombardé", pieges: ["bonbardé", "bombardè", "bombbardé"], phrase: "Le toit a été {} pendant la guerre." },
      { mot: "restauré", pieges: ["restoré", "restaurè", "réstauré"], phrase: "Le vitrail a été {} avec soin." },
      { mot: "ancien", pieges: ["ansien", "encien", "anciain"], phrase: "C'est un bâtiment très {}." },
      { mot: "moderne", pieges: ["modèrne", "modderne", "modern"], phrase: "Cet immeuble est {}." },
      { mot: "illuminé", pieges: ["iluminé", "illuminè", "illumminé"], phrase: "Le soir, le monument est {}." },
      { mot: "peint", pieges: ["pein", "pint", "peind"], phrase: "Le mur est {} en blanc." },
      // mots invariables
      { mot: "aussi", pieges: ["ausi", "ossi", "aussie"], phrase: "Moi {}, j'aime les vitraux." },
      { mot: "comme", pieges: ["come", "comm", "comes"], phrase: "La tour est haute {} une montagne." },
      { mot: "vers", pieges: ["ver", "vert", "verre"], phrase: "Nous marchons {} la cathédrale." },
      { mot: "toujours", pieges: ["toujour", "toujourt", "toujoure"], phrase: "La cathédrale est {} debout." },
      { mot: "plus", pieges: ["plu", "pluss", "plut"], phrase: "Elle est {} haute que la maison." },
      { mot: "pendant", pieges: ["pandant", "pendent", "pendan"], phrase: "Il a plu {} la visite." },
      { mot: "lors", pieges: ["lor", "lord", "lorre"], phrase: "Nous avons pris des photos {} de la visite." },
      { mot: "mais", pieges: ["mai", "mes", "maix"], phrase: "Il pleut, {} nous sortons quand même." },
      { mot: "ensuite", pieges: ["ansuite", "ensuitte", "ensuit"], phrase: "Nous visitons la nef, {} nous montons dans la tour." },
      { mot: "aujourd'hui", pieges: ["aujourdhui", "aujourd'ui", "aujour'dhui"], phrase: "Nous allons à Reims {}." },
      { mot: "chaque", pieges: ["chac", "chake", "chaques"], phrase: "Il y a une statue à {} porte." },
      { mot: "afin", pieges: ["affin", "afain", "afint"], phrase: "Il se lève tôt {} de visiter la ville." },
      { mot: "chacun", pieges: ["chaqun", "chacum", "chacqun"], phrase: "Les élèves ont {} un cahier." },
      { mot: "entièrement", pieges: ["entièremant", "entiérement", "entièrment"], phrase: "La cathédrale a été {} restaurée." },
      // ===== La grotte de Lascaux =====
      // noms
      { mot: "un an", pieges: ["en", "ant", "anne"], phrase: "Mon frère a un {} de plus que moi." },
      { mot: "la peinture", pieges: ["pinture", "peintur", "painture"], phrase: "La {} représente un cheval." },
      { mot: "l'artiste", pieges: ["artist", "hartiste", "artisste"], phrase: "L'{} peint sur le mur de la grotte." },
      { mot: "la grotte", pieges: ["grote", "grautte", "grotes"], phrase: "Nous entrons dans la {} avec une lampe." },
      { mot: "un animal", pieges: ["animale", "animmal", "annimal"], phrase: "Le cheval est un {}." },
      { mot: "des animaux", pieges: ["animals", "animeaux", "animaus"], phrase: "Les {} courent sur le mur." },
      { mot: "le signe", pieges: ["sine", "signne", "cigne"], phrase: "Les hommes ont tracé un {} étrange." },
      { mot: "un être", pieges: ["ètre", "etre", "aitre"], phrase: "L'homme est un {} vivant." },
      { mot: "la Préhistoire", pieges: ["préhistoire", "Préistoire", "Préhistoir"], phrase: "Les hommes de la {} chassaient le bison." },
      { mot: "la main", pieges: ["min", "mein", "maint"], phrase: "L'artiste a laissé la trace de sa {}." },
      { mot: "le personnage", pieges: ["personage", "personnaje", "perssonnage"], phrase: "Ce {} tient une lance." },
      { mot: "la scène", pieges: ["sène", "scéne", "scènne"], phrase: "Cette {} montre un combat." },
      { mot: "le chasseur", pieges: ["chaseur", "chasseure", "chaceur"], phrase: "Le {} lance sa flèche." },
      { mot: "un bison", pieges: ["bisson", "bizon", "bisont"], phrase: "Le {} est un gros animal." },
      { mot: "le spécialiste", pieges: ["spésialiste", "spécialisste", "spéçialiste"], phrase: "Le {} étudie les peintures." },
      { mot: "l'homme", pieges: ["home", "omme", "hommes"], phrase: "L'{} de la Préhistoire vivait près des grottes." },
      // verbes
      { mot: "réaliser", pieges: ["réalizer", "réalisé", "réallisser"], phrase: "Il faut du temps pour {} une peinture." },
      { mot: "raconter", pieges: ["racontter", "raconté", "rakonter"], phrase: "Mon grand-père aime {} des histoires." },
      { mot: "étonner", pieges: ["étoner", "étonné", "ètonner"], phrase: "Ces peintures vont {} les visiteurs." },
      // adjectifs et participes passés
      { mot: "pariétal", pieges: ["pariétale", "pariètal", "parriétal"], phrase: "L'art {} est peint sur les murs des grottes." },
      { mot: "impressionnant", pieges: ["impressionant", "impréssionnant", "impressionnent"], phrase: "Ce grand taureau est {}." },
      { mot: "nombreux", pieges: ["nombreu", "nombreus", "nonbreux"], phrase: "Les animaux sont très {} sur les murs." },
      { mot: "mystérieux", pieges: ["mistérieux", "mystérieu", "mystèrieux"], phrase: "Ce signe est {}." },
      { mot: "humain", pieges: ["humin", "humein", "umain"], phrase: "On voit un corps {} sur le mur." },
      { mot: "entier", pieges: ["antier", "entié", "entiér"], phrase: "Le troupeau {} traverse la rivière." },
      { mot: "blessé", pieges: ["blésé", "blessè", "blaissé"], phrase: "Le bison {} s'est couché." },
      { mot: "dessiné", pieges: ["dessinée", "dessinné", "déssiné"], phrase: "Ce cheval a été {} il y a très longtemps." },
      // mots invariables
      { mot: "jadis", pieges: ["jadi", "jadiss", "jadys"], phrase: "Les hommes vivaient {} près des grottes." },
      { mot: "il y a", pieges: ["il i a", "il y à", "il ya"], phrase: "Dans la grotte, {} des peintures." },
      { mot: "souvent", pieges: ["souvant", "souvend", "souven"], phrase: "Les artistes peignaient {} des chevaux." },
      { mot: "très", pieges: ["trés", "trais", "trè"], phrase: "La grotte est {} sombre." },
      { mot: "peu", pieges: ["peut", "peux", "peue"], phrase: "Il y a {} de lumière dans la grotte." },
      { mot: "entre", pieges: ["antre", "entr", "entres"], phrase: "Le cheval est peint {} deux bisons." },
      { mot: "beaucoup", pieges: ["beaucou", "boucoup", "beaucoups"], phrase: "Il y a {} d'animaux sur les murs." },
      { mot: "au fond", pieges: ["au fonds", "o fond", "au font"], phrase: "Le bison est peint {} de la grotte." },
      { mot: "précisément", pieges: ["précisement", "précisémment", "préscisément"], phrase: "L'artiste a dessiné l'œil {}." },
      // ===== Les Quatre Saisons =====
      // noms
      { mot: "la musique", pieges: ["musik", "muzique", "musiqe"], phrase: "J'écoute la {} de Vivaldi." },
      { mot: "l'Europe", pieges: ["europe", "Eurôpe", "Erope"], phrase: "Venise est une ville d'{}." },
      { mot: "un instrument", pieges: ["instrumant", "instrumen", "instrumment"], phrase: "Le violon est un {} à cordes." },
      { mot: "la mélodie", pieges: ["mélodi", "mélaudie", "mèlodie"], phrase: "Je chante la {} du printemps." },
      { mot: "le violon", pieges: ["violont", "viollon", "vyolon"], phrase: "Le musicien joue du {}." },
      { mot: "l'arrivée", pieges: ["arrivé", "arivée", "arriver"], phrase: "Les oiseaux chantent l'{} du printemps." },
      { mot: "le printemps", pieges: ["printemp", "printamps", "printant"], phrase: "Au {}, les fleurs poussent." },
      { mot: "l'été", pieges: ["étée", "étè", "éter"], phrase: "Il fait chaud en {}." },
      { mot: "l'orage", pieges: ["horage", "orrage", "oraje"], phrase: "Le tonnerre gronde pendant l'{}." },
      { mot: "la pluie", pieges: ["pluit", "plui", "pluis"], phrase: "La {} tombe sur le toit." },
      { mot: "un oiseau", pieges: ["oizeau", "oisau", "oiseaux"], phrase: "Un {} chante dans l'arbre." },
      { mot: "des oiseaux", pieges: ["oiseaus", "oiseau", "oizeaux"], phrase: "Les {} chantent au printemps." },
      { mot: "un insecte", pieges: ["insect", "inssecte", "insècte"], phrase: "La coccinelle est un {}." },
      { mot: "l'automne", pieges: ["autone", "automme", "otomne"], phrase: "En {}, les feuilles tombent." },
      { mot: "le chien", pieges: ["chient", "chiein", "chein"], phrase: "Le {} court dans la forêt." },
      { mot: "le froid", pieges: ["froit", "froi", "frois"], phrase: "En hiver, le {} pique les doigts." },
      { mot: "la neige", pieges: ["nège", "neije", "naige"], phrase: "La {} recouvre les champs." },
      { mot: "l'hiver", pieges: ["iver", "hivers", "hivert"], phrase: "En {}, il fait très froid." },
      // verbes
      { mot: "jouer", pieges: ["joué", "jouez", "jouerr"], phrase: "J'aime {} du violon." },
      { mot: "composer", pieges: ["compozer", "composé", "conposer"], phrase: "Vivaldi aimait {} de la musique." },
      { mot: "décrire", pieges: ["décrir", "dècrire", "descrire"], phrase: "La musique peut {} les saisons." },
      { mot: "se coucher", pieges: ["se couché", "se couchez", "ce coucher"], phrase: "Le soleil va {} derrière la colline." },
      { mot: "partir", pieges: ["partire", "partirr", "parttir"], phrase: "Les oiseaux vont {} vers le sud." },
      // adjectifs et participes passés
      { mot: "classique", pieges: ["classik", "clasique", "classic"], phrase: "Vivaldi a écrit de la musique {}." },
      { mot: "différent", pieges: ["diférent", "différant", "diférant"], phrase: "Chaque saison a un air {}." },
      { mot: "premier", pieges: ["premié", "premmier", "prumier"], phrase: "Le {} concerto parle du printemps." },
      { mot: "première", pieges: ["premiére", "premièr", "premmière"], phrase: "La {} saison est le printemps." },
      { mot: "deuxième", pieges: ["deuxiéme", "deuzième", "deusième"], phrase: "L'été est la {} saison." },
      { mot: "chanteur", pieges: ["chanteure", "chenteur", "chantteur"], phrase: "L'oiseau {} se pose sur la branche." },
      { mot: "fleuri", pieges: ["fleurit", "fleurie", "fleuris"], phrase: "Le jardin {} sent bon." },
      { mot: "affolé", pieges: ["afolé", "affollé", "affolè"], phrase: "Le berger {} court sous l'orage." },
      { mot: "petit", pieges: ["petis", "peti", "petie"], phrase: "Un {} oiseau chante." },
      { mot: "fort", pieges: ["for", "fors", "fore"], phrase: "Le vent souffle très {}." },
      { mot: "troisième", pieges: ["troisiéme", "troizième", "troisiemme"], phrase: "L'automne est la {} saison." },
      { mot: "fidèle", pieges: ["fidéle", "fidelle", "fidèl"], phrase: "Le chien {} suit son maître." },
      { mot: "dernier", pieges: ["dernié", "dernnier", "derniér"], phrase: "L'hiver est le {} concerto." },
      { mot: "long", pieges: ["lon", "longt", "longue"], phrase: "L'hiver est {} et froid." },
      { mot: "longue", pieges: ["longe", "longues", "lonque"], phrase: "La nuit d'hiver est {}." },
      // mots invariables
      { mot: "d'abord", pieges: ["dabord", "d'abore", "d'habord"], phrase: "Nous écoutons {} le printemps." },
      { mot: "ensemble", pieges: ["ansemble", "ensamble", "enssemble"], phrase: "Les musiciens jouent {}." },
      { mot: "enfin", pieges: ["enfain", "anfin", "enfint"], phrase: "Après l'automne vient {} l'hiver." },
      { mot: "avec", pieges: ["avèc", "avek", "aveque"], phrase: "Je joue {} mon frère." },
      { mot: "sous", pieges: ["sou", "soue", "souts"], phrase: "Le chien dort {} l'arbre." },
      { mot: "dans", pieges: ["dant", "dens", "dan"], phrase: "Les oiseaux chantent {} la forêt." }
    ]
  },

  petite: {
    prenom: "",
    classe: "CE1",
    niveau: 1,
    titre: "La lettre t, les nombres et révisions",
    mots: [
      { mot: "une carte", pieges: ["carthe", "cartte", "quarte"], phrase: "J'envoie une {} à Mamie." },
      { mot: "montrer", pieges: ["montré", "monttrer", "mantrer"], phrase: "Je vais te {} mon dessin." },
      { mot: "un enfant", pieges: ["enfent", "anfant", "enfan"], phrase: "Un {} joue dans le parc." },
      { mot: "postal", pieges: ["postale", "posttal", "postalle"], phrase: "Le facteur apporte un colis {}." },
      { mot: "l'Italie", pieges: ["italie", "Itali", "Itallie"], phrase: "Nous partons en vacances en {}." },
      { mot: "une tradition", pieges: ["tradission", "tradision", "traddition"], phrase: "Manger des crêpes est une {}." },
      { mot: "la culture", pieges: ["culturre", "kulture", "cultur"], phrase: "La musique fait partie de la {}." },
      { mot: "devant", pieges: ["devent", "devan", "devand"], phrase: "Je m'assois {} la maison." },
      { mot: "différent", pieges: ["diférent", "différant", "diférant"], phrase: "Mon dessin est {} du tien." },
      { mot: "l'histoire", pieges: ["istoire", "histoir", "hystoire"], phrase: "J'aime l'{} des châteaux forts." },
      // les nombres jusqu'à cinquante
      { mot: "un", pieges: ["um", "ain", "hun"], phrase: "J'ai {} nez." },
      { mot: "deux", pieges: ["deu", "deus", "deut"], phrase: "J'ai {} yeux." },
      { mot: "trois", pieges: ["troi", "troa", "troit"], phrase: "Le triangle a {} côtés." },
      { mot: "quatre", pieges: ["catre", "quatr", "katre"], phrase: "Le chat a {} pattes." },
      { mot: "cinq", pieges: ["cinc", "sinq", "cink"], phrase: "J'ai {} doigts à une main." },
      { mot: "six", pieges: ["sis", "sixe", "cix"], phrase: "Un dé a {} faces." },
      { mot: "sept", pieges: ["set", "sète", "cept"], phrase: "Il y a {} jours dans une semaine." },
      { mot: "huit", pieges: ["uit", "huitt", "huite"], phrase: "L'araignée a {} pattes." },
      { mot: "neuf", pieges: ["neufe", "noeuf", "neuff"], phrase: "Après huit vient {}." },
      { mot: "dix", pieges: ["dis", "dixe", "diz"], phrase: "J'ai {} doigts en tout." },
      { mot: "onze", pieges: ["onse", "honze", "onz"], phrase: "Une équipe de foot a {} joueurs." },
      { mot: "douze", pieges: ["douse", "douz", "doze"], phrase: "Il y a {} mois dans une année." },
      { mot: "treize", pieges: ["trèze", "treise", "traize"], phrase: "Après douze vient {}." },
      { mot: "quatorze", pieges: ["catorze", "quatorse", "quatorz"], phrase: "Deux semaines, c'est {} jours." },
      { mot: "quinze", pieges: ["kinze", "quinse", "quainze"], phrase: "Dix plus cinq font {}." },
      { mot: "seize", pieges: ["sèze", "seise", "ceize"], phrase: "Après quinze vient {}." },
      { mot: "vingt", pieges: ["vint", "vin", "vain"], phrase: "Dix plus dix font {}." },
      { mot: "trente", pieges: ["trante", "trent", "tremte"], phrase: "Le mois de juin a {} jours." },
      { mot: "quarante", pieges: ["carante", "quarente", "quaranthe"], phrase: "Vingt plus vingt font {}." },
      { mot: "cinquante", pieges: ["cinquente", "sinquante", "cinkante"], phrase: "Maman a un billet de {} euros." },
      // révisions des semaines précédentes
      { mot: "visiter", pieges: ["viziter", "visitter", "visité"], phrase: "Nous allons {} le zoo." },
      { mot: "un grand-père", pieges: ["grand père", "gran-père", "grand-pére"], phrase: "Mon {} me lit une histoire." },
      { mot: "le métro", pieges: ["metro", "métreau", "métrot"], phrase: "Je prends le {} avec maman." },
      { mot: "le car", pieges: ["kar", "quar", "carre"], phrase: "Le {} nous emmène à la piscine." },
      { mot: "une rue", pieges: ["ru", "rut", "rus"], phrase: "J'habite dans cette {}." },
      { mot: "Paris", pieges: ["paris", "Pari", "Parie"], phrase: "La tour Eiffel est à {}." },
      { mot: "la France", pieges: ["france", "Frence", "Franse"], phrase: "Paris est en {}." },
      { mot: "habiter", pieges: ["abiter", "habitter", "habité"], phrase: "J'aimerais {} près de la mer." },
      { mot: "l'Europe", pieges: ["europe", "Eurôpe", "Erope"], phrase: "La France est en {}." }
    ]
  }
};
