import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  links: object[] = [
    { path: '/time', label: 'time-module', active: 'button-active' },
    { path: '/countdown', label: 'countdown-module', active: 'button-active' }
  ];
}
