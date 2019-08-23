import {Directive, ElementRef, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {MaskService} from '../services/mask.service';
import {Subscription} from 'rxjs';

type MaskTypes = 'phone' | 'social' | 'last4' | 'last5' | 'systemNumber' | 'weight' | 'zipCode' | 'alphaWithSpaces';

@Directive({
  selector: '[vfText][maskForm][maskFormControlName]'
})
export class TextDirective implements OnInit, OnDestroy {
  @Input()
  public vfText: MaskTypes;
  @Input()
  public maskForm: FormGroup;
  @Input()
  public maskFormControlName: string;
  @Input()
  public payloadMask: string;

  @Input()
  public validations: ValidatorFn[];

  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    console.log('on init');

    this.maskForm.addControl(
      this.maskFormControlName,
      this.fb.control(
        '39903',
        Validators.compose(
          this.validations ? this.validations : []
        )
      )
    );

    this.setValues(this.maskForm.get(this.maskFormControlName).value);

    this.subscriptions.push(
      this.maskForm.get(this.maskFormControlName).valueChanges.subscribe(value => {
        if (this.el.nativeElement.value !== this.maskService[this.vfText + 'Format'](value)) {
          if ( this.payloadMask && value !== this.maskService[this.payloadMask + 'Format'](this.el.nativeElement.value) ) {
            this.el.nativeElement.value = this.maskService[this.vfText + 'Format'](value);
          }
        }
      })
    );

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  @HostListener('input') onInput(): void {
    console.log('input');
    this.setValues(null);
  }


  @HostListener('paste') onPaste(): void {

  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent): void {
    if (this.vfText === 'last4') {
      return;
    }
    if (this.vfText === 'last5') {
      return;
    }
    if (this.vfText === 'phone') {
      return;
    }
    if (this.vfText === 'social') {
      return;
    }
    if (this.vfText === 'systemNumber') {
      return;
    }
    if (this.vfText === 'weight') {
      return;
    }
    if (this.vfText === 'zipCode') {
      return;
    }
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent): void {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent): void {
    e.preventDefault();
  }

  constructor(
    public el: ElementRef,
    public maskService: MaskService,
    private fb: FormBuilder,
  ) {
  }

  private setValues(input: string) {
    const maskName = this.vfText + 'Format';
    console.log('maskName', maskName, this.maskService[maskName]);
    const masked = this.maskService[maskName](input ? input : this.el.nativeElement.value);
    this.el.nativeElement.value = masked;
    console.log('payloadMask', this.payloadMask);
    this.maskForm.get(this.maskFormControlName)
      .setValue(this.payloadMask ? this.maskService[this.payloadMask + 'Format'](masked) : masked);
  }
}

