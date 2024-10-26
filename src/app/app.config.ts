import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading/loading.interceptor';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { NgxSpinner } from 'ngx-spinner';
import { provideToastr, ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideToastr(),
    importProvidersFrom(NgxSpinner,HttpClientModule, BrowserAnimationsModule,ToastrModule,RouterModule),
    provideAnimations(), provideRouter(routes, withViewTransitions()), provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([errorInterceptor, loadingInterceptor]))]
};
