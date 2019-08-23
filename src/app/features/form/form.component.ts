import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vf-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public validators =  Validators;
  constructor(public fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
    });
    console.log('form value', this.form.value);
  }

}
