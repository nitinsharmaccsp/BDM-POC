import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { GlobalService } from './services/global.service';
import { AuthenticationService } from './services/authentication.service';
import { BdmSelectComponent } from './components/bdm-select/bdm-select.component';
import { BdmModalComponent } from './components/bdm-modal/bdm-modal.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [        
    CommonModule ,
    FormsModule
    ],
    declarations: [
        BdmModalComponent,
        BdmSelectComponent
    ],
    // exports: [
    //   BdmModalComponent,
    //   BdmSelectComponent,
    //   AuthenticationService,
    //   GlobalService
    // ],
    providers:[ AuthenticationService,GlobalService]
})
export class CommonComponentModule {}


