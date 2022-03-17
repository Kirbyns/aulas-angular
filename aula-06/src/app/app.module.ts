import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgswitchComponent } from './views/ngswitch/ngswitch.component';
import {FormsModule} from '@angular/forms';
import { Exercicio01Component } from './views/exercicio01/exercicio01.component';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';


@NgModule({
  declarations: [
    AppComponent,
    NgswitchComponent,
    Exercicio01Component,
    Exercicio02Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
