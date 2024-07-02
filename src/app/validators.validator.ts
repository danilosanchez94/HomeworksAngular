import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function validateUnique(control: AbstractControl) {
  const formArray = control as FormArray;

  if (!formArray || !formArray.controls) {
    return null;
  }

  const valuesSet = new Set<any>();

  // Check each control value in the form array
  for (const controlName in formArray.controls) {
    if (formArray.controls.hasOwnProperty(controlName)) {
      let controlValue = formArray.controls[controlName].value;
      if (controlValue.tag != null || controlValue.tag != undefined) {
        controlValue = controlValue.tag;
      }
      if (valuesSet.has(controlValue)) {
        return { duplicateName: true };
      }

      valuesSet.add(controlValue);
    }
  }

  return null;
}

export function atLeastOneItemValidator(control: AbstractControl) {
  const formArray = control as FormArray;
  let value = formArray.value[0];
  if (formArray.value[0].tag != null || formArray.value[0].tag != undefined) {
    value = formArray.value[0].tag;
  }
  if (formArray && value === '') {
    return { atLeastOneItem: true };
  }

  return null;
}
