import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasAtributosComponent } from './components/directivas-atributos/directivas-atributos.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CurrencyPipe } from '@angular/common';
import { UppercasecustomPipe } from './uppercasecustom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributosComponent,
    PipesComponent,
    UppercasecustomPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CurrencyPipe, UppercasecustomPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
