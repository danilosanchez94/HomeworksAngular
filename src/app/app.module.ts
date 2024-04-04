import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasAtributosComponent } from './components/directivas-atributos/directivas-atributos.component';
import { DirectivasAtributosEstructuralesComponent } from './components/directivas-atributos-estructurales/directivas-atributos-estructurales.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributosComponent,
    DirectivasAtributosEstructuralesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
