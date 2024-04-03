import { Component } from '@angular/core';
import { InjectableRootService } from '../../services/injectable-root.service';

@Component({
  selector: 'app-root-injectable2',
  templateUrl: './root-injectable2.component.html',
  styleUrl: './root-injectable2.component.scss'
})
export class RootInjectable2Component {
  constructor(
    public root: InjectableRootService
  ) { }
}
