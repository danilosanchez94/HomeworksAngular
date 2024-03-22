import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-atributos',
  templateUrl: './directivas-atributos.component.html',
  styleUrl: './directivas-atributos.component.scss'
})
export class DirectivasAtributosComponent {
  value = 'true';
  active = true;
  changeColor() {
    this.active = !this.active;
    this.value = this.active ? 'true' : 'false';
  }
}
