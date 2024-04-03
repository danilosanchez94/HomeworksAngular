import { Component } from '@angular/core';
import { ProviderinjectableService } from '../../services/providerinjectable.service';
import { InjectableRootService } from '../../services/injectable-root.service';

@Component({
  selector: 'app-root-injectable1',
  templateUrl: './root-injectable1.component.html',
  styleUrl: './root-injectable1.component.scss',
})
export class RootInjectable1Component {
  constructor(public root: InjectableRootService) {}
}
