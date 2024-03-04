import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit, AfterContentInit {
  condition: boolean = false;
  @ContentChild('meuTemplate') content!: TemplateRef<any>;

  ngOnInit(): void {
    console.log('OnInit', this.content);
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit', this.content);
  }
}
