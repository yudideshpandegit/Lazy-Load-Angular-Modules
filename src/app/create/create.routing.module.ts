import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';
import { ListComponent } from '../list/list.component';

const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'edit', component: EditComponent },
    { path: '', component: CreateComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CreateRoutingModule { }