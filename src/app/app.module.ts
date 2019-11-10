import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CreateModule } from './create/create.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // CreateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
