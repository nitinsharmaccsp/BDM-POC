import { ProviderNetworkSetupComponent } from './provider-network-setup/provider-network-setup.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                 path: '',
                 component: ProviderNetworkSetupComponent,
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProviderNetworkRoutingModule {
}
