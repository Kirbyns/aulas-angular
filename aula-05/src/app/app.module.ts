import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExemplongifComponent } from './views/exemplongif/exemplongif.component';
import { Exercicio01Component } from './views/exercicio01/exercicio01.component';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';
import { ExemploNgforComponent } from './views/exemplo-ngfor/exemplo-ngfor.component';
import { Exercicio03Component } from './views/exercicio03/exercicio03.component';
import { Exercicio04Component } from './views/exercicio04/exercicio04.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemplongifComponent,
    Exercicio01Component,
    Exercicio02Component,
    ExemploNgforComponent,
    Exercicio03Component,
    Exercicio04Component
  ],
  imports: [
    BrowserModule ,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
