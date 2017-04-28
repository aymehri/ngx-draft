import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { DetailsComponent } from './details/details.component';
import { ResultsResolverService } from './results-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule
  ],
  declarations: [ResultsComponent, DetailsComponent],
  providers: [ResultsResolverService]
})
export class ResultsModule { }
