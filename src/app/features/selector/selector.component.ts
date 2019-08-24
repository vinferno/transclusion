import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MaskService } from '../../services/mask.service';

@Component ( {
  selector : 'vf-selector',
  templateUrl : './selector.component.html',
  styleUrls : [ './selector.component.scss' ]
} )
export class SelectorComponent implements OnInit, OnDestroy {
  @Input ()
  public list: any[];
  @Input ()
  public maskForm: FormGroup;
  @Input ()
  public maskFormControlName: string;
  @Input ()
  public payloadMask: string;

  @Input ()
  public validations: ValidatorFn[];

  private subscriptions: Subscription[] = [];
  public selectedItem = null;

  constructor (
    public el: ElementRef,
    public maskService: MaskService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit (): void {
    console.log ( 'on init' );

    if ( !this.maskForm.get ( this.maskFormControlName ) ) {
      this.maskForm.addControl (
        this.maskFormControlName,
        this.fb.control (
          '39903',
          Validators.compose (
            this.validations ? this.validations : []
          )
        )
      );
    }


    this.setValues ( this.maskForm.get ( this.maskFormControlName ).value );

    this.subscriptions.push (
      this.maskForm.get ( this.maskFormControlName ).valueChanges.subscribe ( value => {
        console.log ( 'value', value );
      } )
    );

  }

  ngOnDestroy (): void {
    this.subscriptions.forEach ( sub => {
      sub.unsubscribe ();
    } );
  }

  private setValues ( input: string ) {
    console.log ( 'set value' );
  }

  public selectItem(item) {
    this.selectedItem = item;
  }
}
