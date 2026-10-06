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
    titre: "Les Quatre Saisons",
    mots: [
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
      { mot: "le chasseur", pieges: ["chaseur", "chasseure", "chaceur"], phrase: "Le {} part avec son chien." },
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
      { mot: "raconter", pieges: ["racontter", "raconté", "rakonter"], phrase: "Cette musique veut {} une histoire." },
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
      { mot: "chaque", pieges: ["chac", "chake", "chaques"], phrase: "Il y a une musique pour {} saison." },
      { mot: "d'abord", pieges: ["dabord", "d'abore", "d'habord"], phrase: "Nous écoutons {} le printemps." },
      { mot: "ensemble", pieges: ["ansemble", "ensamble", "enssemble"], phrase: "Les musiciens jouent {}." },
      { mot: "ensuite", pieges: ["ansuite", "ensuitte", "ensuit"], phrase: "Nous écoutons l'été, {} l'automne." },
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
    titre: "La lettre t",
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
      { mot: "l'histoire", pieges: ["istoire", "histoir", "hystoire"], phrase: "J'aime l'{} des châteaux forts." }
    ]
  }
};
