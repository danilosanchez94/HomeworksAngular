import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-atributos',
  templateUrl: './directivas-atributos.component.html',
  styleUrl: './directivas-atributos.component.scss'
})
export class DirectivasAtributosComponent {
  value:string = 'true';
  active: boolean = true;
  changeColor() {
    this.active = !this.active;
    this.value = this.active ? 'true' : 'false';
  }
}
