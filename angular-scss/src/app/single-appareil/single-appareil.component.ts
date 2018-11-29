import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //ActivatedRoute permet l'utilisation de paramètres
                                                  //dans les routes tels que l'id.
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']; //snapshot contient les paramètres de l'url
                                                  // on attribut ici le paramètre id à la constante id
      this.name = this.appareilService.getAppareilById(+id).name; //utiliser  +  avant  id  dans l'appel
                                                                  //pour envoyer la variable comme nombre.
      this.status = this.appareilService.getAppareilById(+id).status;
  }

}
