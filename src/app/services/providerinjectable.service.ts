import { Injectable } from '@angular/core';
import { ProviderinjectableModule } from '../providerinjectable.module';

@Injectable({
  providedIn: ProviderinjectableModule
})
export class ProviderinjectableService {

  constructor() { }
  getValue(){
    return "TestService";
  }

}
