import { ResultsResolverService } from './results-resolver.service';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent
  },
  {
    path: ':id',
    component: DetailsComponent,
    resolve: { promosport: ResultsResolverService }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ResultsRoutingModule { }
