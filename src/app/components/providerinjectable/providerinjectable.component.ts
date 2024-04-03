import { Component } from '@angular/core';
import { ProviderinjectableService } from '../../services/providerinjectable.service';

@Component({
  selector: 'app-providerinjectable',
  templateUrl: './providerinjectable.component.html',
  styleUrl: './providerinjectable.component.scss',
  providers:[ProviderinjectableService]
})
export class ProviderinjectableComponent {
  constructor(
    public provider: ProviderinjectableService
  ) { }
  data : string=this.provider.getValue();
}
