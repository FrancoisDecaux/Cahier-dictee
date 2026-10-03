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
    titre: "La grotte de Lascaux",
    mots: [
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
      { mot: "le combat", pieges: ["conbat", "combas", "comba"], phrase: "Le {} entre les deux bisons est violent." },
      { mot: "le chasseur", pieges: ["chaseur", "chasseure", "chaceur"], phrase: "Le {} lance sa flèche." },
      { mot: "un bison", pieges: ["bisson", "bizon", "bisont"], phrase: "Le {} est un gros animal." },
      { mot: "le spécialiste", pieges: ["spésialiste", "spécialisste", "spéçialiste"], phrase: "Le {} étudie les peintures." },
      { mot: "l'homme", pieges: ["home", "omme", "hommes"], phrase: "L'{} de la Préhistoire vivait près des grottes." },
      // verbes
      { mot: "réaliser", pieges: ["réalizer", "réalisé", "réallisser"], phrase: "Il faut du temps pour {} une peinture." },
      { mot: "voir", pieges: ["voire", "voar", "vouar"], phrase: "On peut {} des chevaux sur les murs." },
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
      { mot: "aussi", pieges: ["ausi", "ossi", "aussie"], phrase: "On voit {} des cerfs sur les murs." },
      { mot: "mais", pieges: ["mai", "mes", "maix"], phrase: "Il fait noir, {} nous avons une lampe." },
      { mot: "plus", pieges: ["plu", "pluss", "plut"], phrase: "Le bison est {} gros que le cerf." },
      { mot: "souvent", pieges: ["souvant", "souvend", "souven"], phrase: "Les artistes peignaient {} des chevaux." },
      { mot: "pendant", pieges: ["pandant", "pendent", "pendan"], phrase: "Nous avons chuchoté {} la visite." },
      { mot: "très", pieges: ["trés", "trais", "trè"], phrase: "La grotte est {} sombre." },
      { mot: "peu", pieges: ["peut", "peux", "peue"], phrase: "Il y a {} de lumière dans la grotte." },
      { mot: "entre", pieges: ["antre", "entr", "entres"], phrase: "Le cheval est peint {} deux bisons." },
      { mot: "beaucoup", pieges: ["beaucou", "boucoup", "beaucoups"], phrase: "Il y a {} d'animaux sur les murs." },
      { mot: "au fond", pieges: ["au fonds", "o fond", "au font"], phrase: "Le bison est peint {} de la grotte." },
      { mot: "précisément", pieges: ["précisement", "précisémment", "préscisément"], phrase: "L'artiste a dessiné l'œil {}." }
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
