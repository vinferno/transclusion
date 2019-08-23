import { Injectable } from '@angular/core';

const Constants = {
  patterns: {
    PHONE_REGEX_MASK:  /(\d{0,3})(\d{0,3})(\d{0,4})/,
  }
};

@Injectable ( {
  providedIn : 'root'
} )
export class MaskService {

  constructor () {
  }

  public phoneFormat(input: string): string {
    console.log('format: Phone', input);
    const maskedInput = input.replace(/\D/g, '').match(Constants.patterns.PHONE_REGEX_MASK);
    const result = !maskedInput[ 2 ]
      ? maskedInput[ 1 ]
      : '(' + maskedInput[ 1 ] + ') ' + maskedInput[ 2 ] + (maskedInput[ 3 ]
      ? '-' + maskedInput[ 3 ]
      : '');

    console.log('result: phoneFormat', result);
    return result;
  }

  public digitsOnlyFormat(input: string): string {
    console.log('format: DigitsOnly', input);
    const result = input.replace(/\D/g, '');
    console.log('result: DigitsOnly', result);
    return result;
  }

  public alphaWithSpacesFormat(input: string): string {

    console.log('format: AlphaWithSpaces', input);
    const result = input.replace(/^\s/, '').replace(/[^a-zA-Z ]+/g, '');

    console.log('result: AlphaWithSpace', result);
    return result;
  }

  public trimmedFormat(input: string): string{
    return input.trim();
  }

  public socialFormat ( value ) {
    return '(555)555-5555';
  }

  public last4Format ( value ) {
    return '(555)555-5555';
  }

  public last5Format ( value ) {
    return '(555)555-5555';
  }

  public systemNumberFormat ( value ) {
    return '(555)555-5555';
  }

  public weightFormat ( value ) {
    return '(555)555-5555';
  }

  public zipCodeFormat ( value ) {
    return '(555)555-5555';
  }

}
