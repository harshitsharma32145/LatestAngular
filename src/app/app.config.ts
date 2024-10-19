import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {   provideState, provideStore } from '@ngrx/store'; 
import {  reducerData } from './redux/counter.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [provideStore({ app: reducerData }),
    provideState(
      // {name:'count',reducer:reducer}
    {
      name:'tableData',
      reducer:reducerData
    }),
     provideZoneChangeDetection({ eventCoalescing: true }), 
     provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),provideToastr(), provideAnimationsAsync()]
};
