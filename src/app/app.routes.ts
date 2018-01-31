import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'cost-share', loadChildren: 'app/cost-share/cost-share.module#CostShareModule'},
            {path: 'provider-network-setup' , loadChildren: 'app/provider-network/provider-network.module#ProviderNetworkModule'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
