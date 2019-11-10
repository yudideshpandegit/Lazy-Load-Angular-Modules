import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import {CreateComponent} from './create/create.component';
// import {EditComponent} from './edit/edit.component';
// import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'create', loadChildren:'./create/create.module#CreateModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
