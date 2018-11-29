import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-vue',
  templateUrl: './appareil-vue.component.html',
  styleUrls: ['./appareil-vue.component.scss']
})
export class AppareilVueComponent implements OnInit {
  title = 'Premier site angular scss';
  isAuth = false;

  //lastUpdate = new Date(); //DatePipe
  //Promise dans ce cas permet de faire une simulation de communication
  //avec un serveur. dans ce cas nous avons une réponse 'date' en 2secondes
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

//Array appareils
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

//appareilService correspond à l'instance de ce service créé dans  AppModule
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

//ngOnInit()  d'un component est exécutée une fois par instance au moment de la création
//du component par Angular, et après son constructeur.
//On l'utilise très souvent pour initialiser des données une fois le component créé
  ngOnInit() {
      this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
      if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
        this.appareilService.switchOffAll();
      } else {
        return null;
      }
  }

}
