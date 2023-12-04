# *Projet Marvel-App*
## Installation 

Récupérr le projet en local et installer les dépendances

``` bash
git clone url-du-projet
cd Marvel
npm install
```
## Lancement
``` bash
npm start
```
L'application est accesible sur : http://localhost:3000/

## Test
Exécution des tests unitaires en mode watch, c'est à dire que les tests sont relancés a chaque modification de code

``` bash
npm test
```
Execution des tests uniquement une fois avec un rapport detaillé de la couverture du code
``` bash
npm run test:coverage
```

# Conception

Le projet est composé de 4 pages :
* Home : (Page d'accueil)  Liste des Personnes
* Character : Page de détail du personnage
* About : Page d'information sur l'application 
* Contact : Page de contact

``` mermaid
stateDiagram-v2
home --> About : /about
home --> contact : /contact
home --> Character : /Character/id