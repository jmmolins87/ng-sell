

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function customEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null; // Don't validate empty values to allow required validator to handle them
    }
    const hasAtSymbol = value.includes('@');
    const hasDotSymbol = value.includes('.');
    const emailValid = hasAtSymbol && hasDotSymbol;
    return !emailValid ? { customEmail: true } : null;
  };
}