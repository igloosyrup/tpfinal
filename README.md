# ProjetFinal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



==========Étape pour créer un projet Angular============
1. Créer un répertoire Workspace dans l'emplacement désiré

1. Entrer dans le répertoire et ouvrir un git bash afin d'exécuter la commande suivante pour créer un projet : ng n nomDuProjet --routing

2. Toujours dans le git bash, lancer Visual Studio code en exécutant : code .

3. Installer les librairies:
  npm i jquery
  npm i bootstrap
  npm i json-server 
  npm i @fortawesome/fontawesome-free --save

4. Configurer les options dans le fichier Angular.json du projet pour ajouter jQuery et bootstrap 
  "styles": [
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "node_modules/@fortawesome/fontawesome-free/css/all.css",
   "src/styles.css"
  ],
  "scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]

5. Dans app.module.ts, il faut importer ces 2 modules :
  import { HttpClientModule } from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  Toujours dans app.module.ts, ajouter manuellement les deux modules dans la categorie "imports"

6. Supprimer le HTML du app.component.html et le remplacer par les balises suivantes :
  |-----------------|
  | <app-navbar>    |
  | <router-outlet> |
  | <app-footer>    |

7. Dans le package.json du projet, modifier dans la section script le start pour que ça devient "start": "ng serve -o --port 5000"
On rajoute notre propre port désiré.

8. Dans la création du service de l'objet, il faut spécifier le port du http dans le constructeur : 
super(http, "http://localhost:5050/holoMembers);


9. Exécuter la commande suivante pour lancer le serveur Json dans le répertoire database: 
cd database

json-server -w holoMembers.json --port 5050
json-server -w feedbacks.json --port 6060

10. Exécuter le projet dans le terminal avec la commande : npm start