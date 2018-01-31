
//import { BdmSelectComponent } from './common/components/bdm-select/bdm-select.component';
import { FormsModule } from '@angular/forms';
import { ProviderNetworkModule } from './provider-network/provider-network.module';
import { BdmNavigationComponent } from './core/components/bdm-navigation/bdm-navigation.component';
import { BdmHeaderComponent } from './core/components/bdm-header/bdm-header.component';
import { AppRoutingModule } from './app.routes';
import { AuthenticationService } from './common/services/authentication.service';
import { GlobalService } from './common/services/global.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BdmBreadcrumbComponent } from './core/components/bdm-breadcrumb/bdm-breadcrumb.component';
//import { BdmModalComponent } from './common/components/bdm-modal/bdm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BdmHeaderComponent,
    BdmNavigationComponent,
   // BdmModalComponent,
   // BdmSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GlobalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
