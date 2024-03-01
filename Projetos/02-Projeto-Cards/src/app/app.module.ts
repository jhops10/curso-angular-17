import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountDetailsItemComponent } from './components/account-details-item/account-details-item.component';
import { CreditCardDetailsComponent } from './components/credit-card-details/credit-card-details.component';

import { CardLineComponent } from './components/card-line/card-line.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { ClientInfosCardComponent } from './components/client-infos-card/client-infos-card.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { CommentaryComponent } from './components/commentary/commentary.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderDirective } from './components/card/directives/card-header.directive';
import { CardContentDirective } from './components/card/directives/card-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    AccountDetailsComponent,
    AccountDetailsItemComponent,
    CreditCardDetailsComponent,
    CardLineComponent,
    CardTitleComponent,
    ClientInfosCardComponent,
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    CommentaryComponent,
    CardComponent,
    CardHeaderDirective,
    CardContentDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
