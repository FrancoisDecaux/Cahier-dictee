# Cahier de dictée

Jeu d'orthographe pour deux sœurs (iPad), publié sur GitHub Pages depuis la branche `main` :
https://francoisdecaux.github.io/Cahier-dictee/

Tout le jeu est dans `index.html`. Les listes de mots sont dans `mots.js`.

## Mise à jour hebdomadaire de la liste (la demande la plus fréquente)

Le parent envoie une photo ou un texte de la liste de la semaine, en précisant pour qui :
- `grande` : CM1, niveau 2, listes d'environ 40 mots
- `petite` : CE1, niveau 1, une dizaine de mots, parfois avec déterminants

Marche à suivre :
1. Retranscrire la liste sans faute (accents, majuscules, apostrophes droites `'`).
2. Dans `mots.js`, remplacer `titre` et `mots` de la bonne liste. Ne pas toucher à l'autre liste.
3. Garder les déterminants tels qu'écrits sur la fiche (« la cathédrale », « l'art »).
   Un couple « un vitrail/des vitraux » devient deux mots.
4. Pour chaque mot, écrire :
   - `pieges` : 3 fautes crédibles pour un enfant de cet âge (consonne doublée ou non, accent,
     lettre muette, an/en, s/ss/c/ç, eau/au/o, ph/f, h muet, homophones…).
     Jamais le mot juste, jamais une forme qui serait juste dans la phrase.
   - `phrase` : une phrase courte, simple, adaptée à l'âge, avec `{}` à la place du mot.
     La phrase doit lever l'ambiguïté des homophones (vers / vert / verre).
     Pour la petite (CE1), des phrases très courtes et un vocabulaire simple.
5. Vérifier la syntaxe : `node -e "eval(require('fs').readFileSync('mots.js','utf8')+';console.log(Object.keys(LISTES))')"`
6. Commit sur `main` et push : le site se met à jour en 1 à 2 minutes.

Répondre au parent en français, en le tutoyant.
