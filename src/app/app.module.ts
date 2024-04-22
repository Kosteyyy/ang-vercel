import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  APP_CONFIG,
  AppConfigService,
  initializeApp,
} from './app-config.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: environment,
    },
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
