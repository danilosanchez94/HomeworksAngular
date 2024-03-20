
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HomeworkAngularDs';
  value='true';
  active = true; 
  changeColor() { 
      this.active = !this.active; 
      this.value = this.active ? 'true' : 'false';


  } 
}
