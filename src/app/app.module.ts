import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizeDirectiveDirective } from './directivas/capitalize-directive.directive';
import { CapitalizeDirectivasComponent } from './components/capitalize-directivas/capitalize-directivas.component';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizeDirectiveDirective,
    CapitalizeDirectivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
