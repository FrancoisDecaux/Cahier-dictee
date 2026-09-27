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
    titre: "La cathédrale de Reims",
    mots: [
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
      { mot: "entièrement", pieges: ["entièremant", "entiérement", "entièrment"], phrase: "La cathédrale a été {} restaurée." }
    ]
  },

  petite: {
    prenom: "",
    classe: "CE1",
    niveau: 1,
    titre: "Mots de la semaine",
    mots: [
      { mot: "visiter", pieges: ["viziter", "visitter", "visité"], phrase: "Nous allons {} le zoo." },
      { mot: "un grand-père", pieges: ["grand père", "gran-père", "grand-pére"], phrase: "Mon {} me lit une histoire." },
      { mot: "le métro", pieges: ["metro", "métreau", "métrot"], phrase: "Je prends le {} avec maman." },
      { mot: "le car", pieges: ["kar", "quar", "carre"], phrase: "Le {} nous emmène à la piscine." },
      { mot: "une rue", pieges: ["ru", "rut", "rus"], phrase: "J'habite dans cette {}." },
      { mot: "la carte", pieges: ["carthe", "cartte", "quarte"], phrase: "Papa regarde la {} pour trouver la route." },
      { mot: "Paris", pieges: ["paris", "Pari", "Parie"], phrase: "La tour Eiffel est à {}." },
      { mot: "la France", pieges: ["france", "Frence", "Franse"], phrase: "Paris est en {}." },
      { mot: "habiter", pieges: ["abiter", "habitter", "habité"], phrase: "J'aimerais {} près de la mer." },
      { mot: "l'Europe", pieges: ["europe", "Eurôpe", "Erope"], phrase: "La France est en {}." }
    ]
  }
};
