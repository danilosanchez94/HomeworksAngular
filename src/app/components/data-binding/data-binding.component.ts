import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  text: string = 'Hello World';
  textTwoWay: string = 'Hello World';
  clickMe() {
    alert('I was triggered by an event');
  }
}
