import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import localeEsAr from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsAr, 'es-Ar');
import { AppComponent } from './app.component';
import { Environment } from '@front/environment';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { IbisDevFeatureShellModule } from '@front/ibis-dev/feature-shell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    IbisDevFeatureShellModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: Environment, useValue: environment },
    { provide: LOCALE_ID, useValue: 'es-Ar'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
