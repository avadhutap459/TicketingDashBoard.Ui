import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AuthInterceptor } from './Interceptor/AuthInterceptor';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { ComponentOne } from './Demo/components/component-one/component-one';
import { ComponentTwo } from './Demo/components/component-two/component-two';

@NgModule({
  declarations: [
    App,
    ComponentOne,
    ComponentTwo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    provideStore(),
    
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
