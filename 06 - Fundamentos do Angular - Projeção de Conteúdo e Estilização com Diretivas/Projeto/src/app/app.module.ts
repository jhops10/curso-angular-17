import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompTextoComponent } from './comp-texto/comp-texto.component';
import { CardHeaderDirective } from './directives/card-header.directive';
import { CardContentDirective } from './directives/card-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompTextoComponent,
    CardHeaderDirective,
    CardContentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
