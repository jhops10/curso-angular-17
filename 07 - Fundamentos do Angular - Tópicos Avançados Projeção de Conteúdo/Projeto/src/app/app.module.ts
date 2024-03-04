import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MeuCompComponent } from './meu-comp/meu-comp.component';
import { Card02Component } from './card02/card02.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MeuCompComponent,
    Card02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
