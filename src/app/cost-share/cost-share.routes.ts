import { CostShareShowOccurenceComponent } from './common-component/cost-share-show-occurence/cost-share-show-occurence.component';
import { CostShareNumberOccurenceComponent } from './common-component/cost-share-number-occurence/cost-share-number-occurence.component';
import { CostShareAddOccurenceComponent } from './common-component/cost-share-add-occurence/cost-share-add-occurence.component';
import { CostShareSetupComponent } from './common-component/cost-share-setup/cost-share-setup.component';
import { CostShareComponent } from './cost-share.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                 path: '',
                 component: CostShareComponent,
                 children : [
                    {
                        path: '',   // By Default loading  CostShareSetUpComponent on navigating to Cost-Share module.
                        component: CostShareSetupComponent
                    },
                    {
                        path: 'co-insurance',
                        children: [
                            {
                                path: '',
                                component: CostShareNumberOccurenceComponent
                            },
                            {
                                path: 'add-occurence',
                                component: CostShareAddOccurenceComponent
                            },
                            {
                                path: 'show-occurence',
                                component: CostShareShowOccurenceComponent
                            }
                        ]
                    },

                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CostShareRoutingModule {
}
