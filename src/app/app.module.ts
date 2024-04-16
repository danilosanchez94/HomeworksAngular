import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasAtributosComponent } from './components/directivas-atributos/directivas-atributos.component';
import { DirectivasAtributosEstructuralesComponent } from './components/directivas-atributos-estructurales/directivas-atributos-estructurales.component';
import { CapitalizeDirectiveDirective } from './directivas/capitalize-directive.directive';
import { CapitalizeDirectivasComponent } from './components/capitalize-directivas/capitalize-directivas.component';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributosComponent,
    DirectivasAtributosEstructuralesComponent,
    CapitalizeDirectiveDirective,
    CapitalizeDirectivasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MyFirstModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
