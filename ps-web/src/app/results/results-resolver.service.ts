import { LoopBackFilter } from './../shared/sdk/models/BaseModels';
import { Observable } from 'rxjs/Observable';
import { Promosport } from './../shared/sdk/models/Promosport';
import { PromosportApi } from './../shared/sdk/services/custom/Promosport';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import 'rxjs/add/observable/of';

@Injectable()
export class ResultsResolverService implements Resolve<Promosport> {

    constructor(private promosportApi: PromosportApi, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Promosport> {
        const id = route.params['id'];
        const filter: LoopBackFilter = { include:  { matches: ['localTeam', 'visitorTeam']}};
        return this.promosportApi.findById(id, filter);
    }

}
