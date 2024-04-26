import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgTemplateOutlet } from '@angular/common';
import { Component, Inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {  ProductFormGroup, ProductPhotosFormGroupT, ProductPricesFormGroupT, ProductFormGroupT} from './dialog-create-product.type';
import { validateUnique } from '../../validatorUnique.validator';




@Component({
  standalone: true,
  imports: [
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    NgTemplateOutlet,
    ReactiveFormsModule,
    MatExpansionModule,
    MatAccordion,
    FormsModule,
    MatDialogModule,

  ],
  selector: 'app-dialog-create-product',
  templateUrl: './dialog-create-product.component.html',
  styleUrl: './dialog-create-product.component.scss',



})
export class DialogCreateProductComponent {
  @ViewChild(MatAccordion, { static: true })
  protected matAccordion!: MatAccordion;

  @ViewChildren(MatExpansionPanel)
  protected matExpansionPanels!: QueryList<MatExpansionPanel>;

    constructor(
      public dialogRef: MatDialogRef<DialogCreateProductComponent>) {}
      arrPhotos:string[]=[];
    ngOnInit() {
    }
    private sentenceValidators: Array<ValidatorFn> = [
      Validators.required,
      Validators.minLength(2)

    ];
    private TagValidator: Array<ValidatorFn> = [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern("^[a-zA-Z0-9 ]+$")
    ];

    private getNewPhoto(): ProductPhotosFormGroupT {
      return new FormControl('', {
        nonNullable: true,
        validators: validateUnique
      });
    }
 
    private getNewPrice(): ProductPricesFormGroupT {
      return new FormGroup({
        tag: new FormControl('', {
          nonNullable: true,
          validators: this.TagValidator,
        }),
      
        price: new FormControl(0, {
          nonNullable: true,
          validators: Validators.required,
        })
      });
    }
   protected productForm: ProductFormGroup = new FormGroup({
      
   product: new FormGroup({
      title: new FormControl('', {
          nonNullable: true,
          validators: this.sentenceValidators,
        }),
        description: new FormControl('', {
          nonNullable: true,
          validators: this.sentenceValidators,
        }),
      }),
      prices: new FormArray(
        [this.getNewPrice()],
        Validators.minLength(1)
      ),
      photos: new FormArray([this.getNewPhoto()])
    });
  
    cancelar() {
      this.dialogRef.close();
    }
    addPrice(): void {
    this.productForm.controls.prices.push(this.getNewPrice());
  }
   removePrice(priceIndex: number): void {
    if (this.productForm.controls.prices.controls.length > 1) {
      this.productForm.controls.prices.removeAt(priceIndex);
    }
  }
  protected addPhoto(): void {
    this.productForm.controls.photos.push(this.getNewPhoto());
  }
  protected removePhoto(skillIndex: number): void {
    if (this.productForm.controls.photos.length > 1) {
      this.productForm.controls.photos.removeAt(skillIndex);
    }
  }


onSubmit(){
  this.dialogRef.close(this.productForm.value);
}
    
  }

