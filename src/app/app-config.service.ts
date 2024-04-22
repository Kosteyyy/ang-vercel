import { Inject, Injectable, InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<any>('app.config');

export function initializeApp(appConfigService: AppConfigService) {
  return () => appConfigService.load();
}

@Injectable()
export class AppConfigService {
  constructor(@Inject(APP_CONFIG) private config: any) {}

  load() {
    this.config.apiUrl =
      (window as any)['NG_APP_API_KEY'] || this.config.apiUrl;
    // Load other environment variables in a similar way
  }
}
