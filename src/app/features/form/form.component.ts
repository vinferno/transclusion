import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vf-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  constructor(public fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['vinson', Validators.compose([Validators.required])],
      phone: ['343432', Validators.compose([Validators.required])]
    });
    console.log('form value', this.form.value);
  }

}
