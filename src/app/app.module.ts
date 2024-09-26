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

import { SimplerutaComponent } from './components/simpleruta/simpleruta.component';
import { RouterModule } from '@angular/router';
import { DynamicrouteComponent } from './components/dynamicroute/dynamicroute.component';
@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributosComponent,
    DirectivasAtributosEstructuralesComponent,
    CapitalizeDirectiveDirective,
    CapitalizeDirectivasComponent,
    PipesComponent,
    UppercasecustomPipe,
    SimplerutaComponent,
    DynamicrouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModuleModule,
    ProviderinjectableModule,
    RootInjectable1Module,
    RootInjectable2Module,

  ],
  providers: [CurrencyPipe, UppercasecustomPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
