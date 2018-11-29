import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'; //Permet l'accès au type observable
import 'rxjs/add/observable/interval'; //la méthode  interval() , qui crée un Observable qui émet un chiffre croissant
          //à intervalles réguliers et qui prend le nombre de millisecondes souhaité pour l'intervalle comme argument.

/*
  Quand Angular rencontre la balise <app-root> dans le document HTML,
  il sait qu'il doit en remplacer le contenu par celui du template  app.component.html,
  en appliquant les styles  app.component.scss,
  le tout géré par la logique du fichier app.component.ts .
 */
@Component({
  //Nom de la zone "contenu"
  selector: 'app-root',
  //Template -> code HTML à injecter
  templateUrl: './app.component.html',
  //Feuilles de style
  styleUrls: ['./app.component.scss']
})

  export class AppComponent implements OnInit {

      secondes: string;

      ngOnInit() {
        //counter reçoit un chiffre croissant à chaque seconde
        const counter = Observable.interval(1000);
        //la Fonction  subscribe()  prend comme arguments entre une et trois fonctions anonymes
        // pour gérer les trois types d'informations que cet Observable peut envoyer : des données,
        // une erreur ou un message  complete
        counter.subscribe(
            (value) => {
              this.secondes = value;
            },
            (error) => {
              console.log('Uh-oh, an error occurred! : ' + error);
            },
            () => {
              console.log('Observable complete!');
            }
        );
      }
  }
