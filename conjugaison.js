// ============================================================
//  CONJUGAISON — les verbes à réviser (jeu « Conjugaison »)
// ============================================================
//
//  Pour chaque verbe :
//    infinitif : le verbe à l'infinitif
//    formes    : je, tu, il, nous, vous, ils (sans le pronom).
//                Quand deux formes sont justes : "paie|paye".
//    pieges    : pour chaque personne, deux fautes crédibles
//                (jamais une forme juste).

const CONJUGAISON = {
  pour: "grande",
  titre: "Le présent des verbes du 1er groupe (cas particuliers)",
  verbes: [
    {
      infinitif: "appeler",
      formes: ["appelle", "appelles", "appelle", "appelons", "appelez", "appellent"],
      pieges: [["appele", "apelle"], ["appeles", "appelle"], ["appele", "appelles"], ["appellons", "apelons"], ["appellez", "appeler"], ["appelent", "appelle"]]
    },
    {
      infinitif: "payer",
      formes: ["paie|paye", "paies|payes", "paie|paye", "payons", "payez", "paient|payent"],
      pieges: [["pai", "paies"], ["paie", "pais"], ["paies", "pait"], ["paions", "payont"], ["paiez", "payer"], ["paie", "payes"]]
    },
    {
      infinitif: "appuyer",
      formes: ["appuie", "appuies", "appuie", "appuyons", "appuyez", "appuient"],
      pieges: [["appuye", "apuie"], ["appuyes", "appuie"], ["appuye", "appuies"], ["appuions", "apuyons"], ["appuiez", "appuyer"], ["appuyent", "appuie"]]
    },
    {
      infinitif: "nettoyer",
      formes: ["nettoie", "nettoies", "nettoie", "nettoyons", "nettoyez", "nettoient"],
      pieges: [["nettoye", "netoie"], ["nettoyes", "nettoie"], ["nettoye", "nettoies"], ["nettoions", "netoyons"], ["nettoiez", "nettoyer"], ["nettoyent", "nettoie"]]
    }
  ]
};
