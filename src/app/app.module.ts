import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasAtributosComponent } from './components/directivas-atributos/directivas-atributos.component';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
