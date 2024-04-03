import { Injectable } from '@angular/core';
import { ProviderinjectableModule } from '../providerinjectable.module';

@Injectable({
  providedIn: ProviderinjectableModule,
})
export class ProviderinjectableService {
  list: string[] = ['one', 'two'];
  constructor() {}
}
