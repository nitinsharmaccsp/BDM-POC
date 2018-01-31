
import { FormsModule } from '@angular/forms';
import { BdmSelectComponent } from './components/bdm-select/bdm-select.component';
import { BdmBreadcrumbComponent } from './../core/components/bdm-breadcrumb/bdm-breadcrumb.component';
import { ProviderNetworkRoutingModule } from './provider-network.routes';

import { GlobalService } from './../common/services/global.service';
import { ProviderNetworkService } from './provider-network.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderNetworkSetupComponent } from './provider-network-setup/provider-network-setup.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { BdmButtonComponent } from './components/bdm-button/bdm-button.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    ProviderNetworkRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ProviderNetworkSetupComponent , BdmBreadcrumbComponent , BdmSelectComponent, ConfirmationModalComponent, BdmButtonComponent],
  providers: [GlobalService , ProviderNetworkService]
})
export class ProviderNetworkModule { }
