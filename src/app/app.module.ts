import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasAtributosComponent } from './components/directivas-atributos/directivas-atributos.component';
import { ProviderinjectableModule } from './providerinjectable.module';
import { RootInjectable2Module } from './root-injectable2.module';
import { RootInjectable1Module } from './root-injectable1.module';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProviderinjectableModule,
    RootInjectable1Module,
    RootInjectable2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
