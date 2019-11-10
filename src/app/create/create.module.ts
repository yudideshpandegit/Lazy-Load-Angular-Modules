import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateRoutingModule} from './create.routing.module';

import {CreateComponent} from '../create/create.component';
import {EditComponent} from '../edit/edit.component';
import {ListComponent} from '../list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EditComponent,
    ListComponent,
    CreateComponent,
 
  ],
  imports: [
    CreateRoutingModule,
    SharedModule
  ],
  exports:[
    EditComponent
  ]
})
export class CreateModule { }
