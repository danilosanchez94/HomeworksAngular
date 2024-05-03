import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function validateUnique(control: AbstractControl) {
  if (control.value) {
    const formArray = control.parent?.parent
      ? (control.parent.parent as FormGroup)
      : null;

    console.log(control.value);
    console.log(formArray);

    if (formArray) {
      var array = formArray.value['photos'].map(function (x: string) {
        return x;
      });
      delete array[array.length - 1];
      var array = formArray.value['photos'].map(function (x: string) {
        return x;
      });
      if (array.includes(control.value[control.value.length - 1])) {
        return { duplicateName: true };
      }
      return null;
    }
  }
  return null;
}
/*
export function validateUnique(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      if (control.value) {
        const formArray = control.parent
          ? (control.parent as FormGroup)
          : null;

          console.log(control.value);
          console.log(formArray);

        if (formArray) {
          var array=formArray.value["photos"].map(function(x:string){
            return x;
          })
        delete array[array.length-1];
        var array=formArray.value["photos"].map(function(x:string){
          return x;
        })
         if(array.includes(control.value[control.value.length-1])){
          return { duplicateName: true }
         }
          return null;

        }
      }
      return null;
  
    }
}*/
