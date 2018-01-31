import { CostShareService } from './cost-share.service';
import { CostShareSetupComponent } from './common-component/cost-share-setup/cost-share-setup.component';
import { CostShareRoutingModule } from './cost-share.routes';
import { CostShareComponent } from './cost-share.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlobalService } from '../common/services/global.service';
import { CostShareNumberOccurenceComponent } from './common-component/cost-share-number-occurence/cost-share-number-occurence.component';
import { CostShareAddOccurenceComponent } from './common-component/cost-share-add-occurence/cost-share-add-occurence.component';
import { CostShareShowOccurenceComponent } from './common-component/cost-share-show-occurence/cost-share-show-occurence.component';
import { CostShareAddScenarioComponent } from './common-component/cost-share-add-scenario/cost-share-add-scenario.component';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    CostShareRoutingModule
  ],
  declarations: [CostShareComponent, CostShareNumberOccurenceComponent,
                 CostShareAddOccurenceComponent, CostShareShowOccurenceComponent,
                 CostShareAddScenarioComponent, CostShareSetupComponent],
  providers: [GlobalService , CostShareService]
})
export class CostShareModule { }
