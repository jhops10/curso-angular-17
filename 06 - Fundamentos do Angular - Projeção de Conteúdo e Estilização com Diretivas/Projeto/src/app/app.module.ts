import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompTextoComponent } from './comp-texto/comp-texto.component';
import { CardHeaderDirective } from './directives/base/card-header.directive';
import { CardContentDirective } from './directives/base/card-content.directive';
import { CardMainTextDirective } from './directives/texts/card-main-text.directive';
import { CardSubTextDirective } from './directives/texts/card-sub-text.directive';
import { CardDescriptionTextDirective } from './directives/texts/card-description-text.directive';
import { CardSmallImageDirective } from './directives/images/card-small-image.directive';
import { CardLargeImageDirective } from './directives/images/card-large-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompTextoComponent,
    CardHeaderDirective,
    CardContentDirective,
    CardMainTextDirective,
    CardSubTextDirective,
    CardDescriptionTextDirective,
    CardSmallImageDirective,
    CardLargeImageDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
