import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasAtributosComponent } from './components/directivas-atributos/directivas-atributos.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialComponent } from './components/material/material.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { DialognombreComponent } from './components/dialognombre/dialognombre.component';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

const materialModules = [
  MatButtonModule,
  MatDialogModule,
  MatDialogContent,
  MatFormField,
  MatLabel,
  MatFormFieldModule
];
@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributosComponent,
    MaterialComponent,
    DialognombreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialModules,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
