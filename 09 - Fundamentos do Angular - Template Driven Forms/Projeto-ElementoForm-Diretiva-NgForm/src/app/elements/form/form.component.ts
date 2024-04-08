import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements AfterViewInit {
  // Aula 03
  @ViewChild('meuForm') form!: NgForm;
  ngAfterViewInit() {
    console.log(this.form);
  }

  // Aula 04
  inputText: string = 'Texto Inicial';
  textarea: string = 'Descrição inicial';
  select: string = '1';
  radioButton: string = '1';
  checkbox: boolean = true;

  onSubmit(form: NgForm) {
    console.log('onSubmit', form.value);
    // form.value['nome'] = 'Texto Alterado';
    // console.log(this.inputText);
  }

  onReset(form: NgForm) {
    form.reset();
    console.log('onReset', form.value);
    console.log(this.inputText);
    console.log(this.textarea);
    console.log(this.select);
    console.log(this.radioButton);
    console.log(this.checkbox);

    setTimeout(() => {
      console.log(form.value);
    }, 1000);
  }
}
