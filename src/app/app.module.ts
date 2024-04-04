import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasAtributosComponent } from './components/directivas-atributos/directivas-atributos.component';
import { DirectivasAtributosEstructuralesComponent } from './components/directivas-atributos-estructurales/directivas-atributos-estructurales.component';

import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributosComponent,
    DirectivasAtributosEstructuralesComponent,
    DataBindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
