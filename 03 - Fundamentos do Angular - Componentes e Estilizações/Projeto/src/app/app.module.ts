import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { CardButtonRoxoComponent } from './card-button-roxo/card-button-roxo.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CardsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
