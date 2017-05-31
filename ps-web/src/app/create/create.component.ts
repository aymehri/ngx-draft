import { Component, OnInit } from '@angular/core';

import { PromosportApi } from './../shared/sdk/services/custom/Promosport';
import { Promosport } from './../shared/sdk/models/Promosport';
import { LoopBackFilter } from './../shared/sdk/models/BaseModels';

import { Match } from './models/match';
import { Grille } from './models/grille';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/count';

@Component({
  selector: 'pm-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public promosport: Promosport = new Promosport();

  matchs: Array<Match>;
  grilles: Array<Grille>;
  filteredGrille: Grille;

  price = 0;

  constructor(private promosportApi: PromosportApi) { }

  ngOnInit() {
    let filter : LoopBackFilter ={
      order : 'finishDate DESC',
      include:  { matches: ['localTeam', 'visitorTeam']},
      where : { online : true }
    };
    this.promosportApi.findOne(filter).subscribe(
      (result: Promosport) => this.promosport = result
    );

    this.matchs = [
      { localTeam: 'Taraji', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji2', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji3', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji4', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji5', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji6', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji7', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji8', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji9', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji10', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji11', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji12', visitorTeam: 'Club', x1: false, xx: false, x2: false },
      { localTeam: 'Taraji13', visitorTeam: 'Club', x1: false, xx: false, x2: false }
    ];

    this.grilles = [
      { nbDouble: 2, nbTriple: 0, montant: 850, isMax: false },
      { nbDouble: 3, nbTriple: 0, montant: 1450, isMax: false },
      { nbDouble: 4, nbTriple: 0, montant: 2650, isMax: false },
      { nbDouble: 5, nbTriple: 0, montant: 5050, isMax: false },
      { nbDouble: 6, nbTriple: 0, montant: 9850, isMax: false },
      { nbDouble: 7, nbTriple: 0, montant: 19450, isMax: false },
      { nbDouble: 8, nbTriple: 0, montant: 38650, isMax: false },
      { nbDouble: 9, nbTriple: 0, montant: 77050, isMax: false },
      { nbDouble: 10, nbTriple: 0, montant: 153850, isMax: false },
      { nbDouble: 11, nbTriple: 0, montant: 307450, isMax: true },

      { nbDouble: 1, nbTriple: 1, montant: 1150, isMax: false },
      { nbDouble: 2, nbTriple: 1, montant: 2050, isMax: false },
      { nbDouble: 3, nbTriple: 1, montant: 3850, isMax: false },
      { nbDouble: 4, nbTriple: 1, montant: 7450, isMax: false },
      { nbDouble: 5, nbTriple: 1, montant: 14650, isMax: false },
      { nbDouble: 6, nbTriple: 1, montant: 29050, isMax: false },
      { nbDouble: 7, nbTriple: 1, montant: 57850, isMax: false },
      { nbDouble: 8, nbTriple: 1, montant: 11545, isMax: false },
      { nbDouble: 9, nbTriple: 1, montant: 230650, isMax: false },
      { nbDouble: 10, nbTriple: 1, montant: 461050, isMax: true },

      { nbDouble: 0, nbTriple: 2, montant: 1600, isMax: false },
      { nbDouble: 1, nbTriple: 2, montant: 2950, isMax: false },
      { nbDouble: 2, nbTriple: 2, montant: 5650, isMax: false },
      { nbDouble: 3, nbTriple: 2, montant: 11050, isMax: false },
      { nbDouble: 4, nbTriple: 2, montant: 21850, isMax: false },
      { nbDouble: 5, nbTriple: 2, montant: 43450, isMax: false },
      { nbDouble: 6, nbTriple: 2, montant: 86650, isMax: false },
      { nbDouble: 7, nbTriple: 2, montant: 173050, isMax: false },
      { nbDouble: 8, nbTriple: 2, montant: 345850, isMax: true },

      { nbDouble: 0, nbTriple: 3, montant: 4300, isMax: false },
      { nbDouble: 1, nbTriple: 3, montant: 8350, isMax: false },
      { nbDouble: 2, nbTriple: 3, montant: 16450, isMax: false },
      { nbDouble: 3, nbTriple: 3, montant: 32650, isMax: false },
      { nbDouble: 4, nbTriple: 3, montant: 65050, isMax: false },
      { nbDouble: 5, nbTriple: 3, montant: 129850, isMax: false },
      { nbDouble: 6, nbTriple: 3, montant: 259450, isMax: false },
      { nbDouble: 7, nbTriple: 3, montant: 518650, isMax: true },

      { nbDouble: 0, nbTriple: 4, montant: 12400, isMax: false },
      { nbDouble: 1, nbTriple: 4, montant: 24550, isMax: false },
      { nbDouble: 2, nbTriple: 4, montant: 48850, isMax: false },
      { nbDouble: 3, nbTriple: 4, montant: 97450, isMax: false },
      { nbDouble: 4, nbTriple: 4, montant: 194650, isMax: false },
      { nbDouble: 5, nbTriple: 4, montant: 389050, isMax: true },

      { nbDouble: 0, nbTriple: 5, montant: 36700, isMax: false },
      { nbDouble: 1, nbTriple: 5, montant: 73150, isMax: false },
      { nbDouble: 2, nbTriple: 5, montant: 146050, isMax: false },
      { nbDouble: 3, nbTriple: 5, montant: 291850, isMax: false },
      { nbDouble: 4, nbTriple: 5, montant: 583450, isMax: true },

      { nbDouble: 0, nbTriple: 6, montant: 109600, isMax: false },
      { nbDouble: 1, nbTriple: 6, montant: 218950, isMax: false },
      { nbDouble: 2, nbTriple: 6, montant: 437650, isMax: true },

      { nbDouble: 0, nbTriple: 7, montant: 328300, isMax: true }
    ];
  }

  refreshPrice(e) {
    for (const match of this.matchs) {
      let countChecked = 0;
      if (match.x1) {
        countChecked++;
      }
      if (match.xx) {
        countChecked++;
      }
      if (match.x2) {
        countChecked++;
      }
      match.countChecked = countChecked;
    }

    const countDouble = this.matchs.filter(match => match.countChecked === 2).length;
    const countTriple = this.matchs.filter(match => match.countChecked === 3).length;

    this.filteredGrille = this.grilles
      .find(grille => grille.nbDouble === countDouble && grille.nbTriple === countTriple);
    if (this.filteredGrille) {
      this.price = this.filteredGrille.montant;
    } else {
      this.price = 0;
    }
    console.log(this.filteredGrille);
  }

  disableCondition(match): boolean {
    let countChecked = 0;
    if (match.x1) {
      countChecked++;
    }
    if (match.xx) {
      countChecked++;
    }
    if (match.x2) {
      countChecked++;
    }

    if (this.filteredGrille) {
      if (this.filteredGrille.isMax && countChecked > 0) {
        return true;
      }
    }
    return false;
  }

}
