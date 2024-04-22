import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular14-test-setup';
  constructor() {
    console.log('API_KEY: ', process.env['NG_APP_API_KEY']);
  }
}
