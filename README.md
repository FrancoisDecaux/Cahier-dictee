# Cahier de dictée

Petits jeux pour réviser les mots de la dictée de la semaine, pensés pour l'iPad.

## Changer la liste de la semaine

Tout se passe dans **`mots.js`** : remplacer le titre et les mots de la liste concernée (`grande` ou `petite`).

Un mot s'écrit soit simplement (`"la cathédrale",`), soit avec des pièges et une phrase d'exemple :

```js
{ mot: "vers", pieges: ["ver", "vert"], phrase: "Nous marchons {} la cathédrale." },
```

Il est aussi possible de modifier une liste directement dans l'app, via « Espace parent » (valable uniquement sur l'appareil utilisé).

## Les jeux

1. **Le bon mot** : choisir la bonne orthographe parmi trois.
2. **Les lettres cachées** : compléter les lettres manquantes (jamais les mêmes d'une fois à l'autre).
3. **Le mot en morceaux** : remettre lettres ou syllabes dans l'ordre.
4. **La dictée** : écouter le mot et l'écrire.
5. **Le flash** : voir le mot quelques secondes, puis l'écrire de mémoire.
6. **Le grand mélange** : un peu de chaque.

Chaque partie compte 10 mots. Les mots ratés reviennent plus souvent dans les parties suivantes.

## Tables de multiplication

Depuis l'accueil, le bouton « Tables de multiplication » ouvre `tables.html`. On choisit les tables à réviser (de 2 à 9), puis un jeu :

1. **Le bon résultat** : choisir la bonne réponse parmi quatre.
2. **Le calcul** : taper le résultat sur le pavé numérique.
3. **Le nombre caché** : trouver le nombre qui manque (7 × ? = 56).
4. **Le chrono** : dix calculs le plus vite possible.
5. **Le grand mélange** : un peu de chaque.

Après une erreur, la correction donne une astuce (fois 9 = fois 10 moins une fois…). « Revoir les tables » permet de lire et d'écouter les tables, « Mes progrès » montre les calculs sus et ratés.

## Conjugaison

Le bouton « Conjugaison » de l'accueil ouvre `conjugaison.html`. Les verbes sont dans **`conjugaison.js`**. Deux jeux : choisir le verbe bien écrit parmi trois, ou l'écrire au clavier. Après une erreur, le verbe est affiché en entier avec la bonne personne surlignée.
