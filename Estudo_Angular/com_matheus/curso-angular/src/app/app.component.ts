import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Miguel';

  userData = {
    gmail: 'miguel@gmail.com',
    role: 'Admin',
  };  

  title = 'curso-angular';
}
