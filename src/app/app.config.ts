import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {   provideState, provideStore } from '@ngrx/store'; 
import { reducer } from './redux/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideStore(),
    provideState({name:'count',reducer:reducer}),
     provideZoneChangeDetection({ eventCoalescing: true }), 
     provideRouter(routes), provideClientHydration()]
};
