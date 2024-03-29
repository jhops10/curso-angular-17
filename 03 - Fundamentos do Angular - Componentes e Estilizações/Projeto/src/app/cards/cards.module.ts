import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonRoxoComponent } from '../card-button-roxo/card-button-roxo.component';
//Angular Material
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardButtonCancelComponent,
    CardButtonRoxoComponent,
  ],
  imports: [CommonModule, MatSliderModule],
  exports: [CardComponent, CardButtonComponent, CardRoxoComponent],
})
export class CardsModule {}
