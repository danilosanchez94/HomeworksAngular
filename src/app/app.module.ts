import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasAtributosComponent } from './components/directivas-atributos/directivas-atributos.component';
import { DirectivasAtributosEstructuralesComponent } from './components/directivas-atributos-estructurales/directivas-atributos-estructurales.component';
import { CapitalizeDirectiveDirective } from './directivas/capitalize-directive.directive';
import { CapitalizeDirectivasComponent } from './components/capitalize-directivas/capitalize-directivas.component';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';
import { PipesComponent } from './components/pipes/pipes.component';
import { CurrencyPipe } from '@angular/common';
import { UppercasecustomPipe } from './uppercasecustom.pipe';
import { ProviderinjectableModule } from './providerinjectable.module';
import { RootInjectable2Module } from './root-injectable2.module';
import { RootInjectable1Module } from './root-injectable1.module';
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
    DialognombreComponent,
    DirectivasAtributosEstructuralesComponent,
    CapitalizeDirectiveDirective,
    CapitalizeDirectivasComponent,
    PipesComponent,
    UppercasecustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialModules,
    FormsModule
  ],
  providers: [
    AppRoutingModule,
    MyFirstModuleModule,
    ProviderinjectableModule,
    RootInjectable1Module,
    RootInjectable2Module,
    CurrencyPipe,
    UppercasecustomPipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
