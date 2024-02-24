import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountDetailsItemComponent } from './components/account-details-item/account-details-item.component';
import { CreditCardDetailsComponent } from './components/credit-card-details/credit-card-details.component';
import { BordelessItemListComponent } from './components/bordeless-item-list/bordeless-item-list.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CardTitleComponent } from './components/card-title/card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ItemListComponent,
    AccountDetailsComponent,
    AccountDetailsItemComponent,
    CreditCardDetailsComponent,
    BordelessItemListComponent,
    CardLineComponent,
    CardTitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
