import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { StatusIconPipe } from './pipes/status-icon.pipe';

import localPt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localPt, 'pt-BR');

@NgModule({
  declarations: [AppComponent, StatusPipe, StatusIconPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
