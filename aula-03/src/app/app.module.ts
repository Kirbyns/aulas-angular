import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './views/interpolation/interpolation.component';
import { Exercicio01Component } from './views/exercicio01/exercicio01.component';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';
import { Exercicio03Component } from './views/exercicio03/exercicio03.component';
import { Exercicio04Component } from './views/exercicio04/exercicio04.component';
import { EventBindingComponent } from './views/event-binding/event-binding.component';
import { Exercicio05Component } from './views/exercicio05/exercicio05.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    Exercicio01Component,
    Exercicio02Component,
    Exercicio03Component,
    Exercicio04Component,
    EventBindingComponent,
    Exercicio05Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
