
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
      if (!this.active) { 
          this.value = 'false'; 
      } else { 
          this.value = 'true'; 
      } 
  } 
}
