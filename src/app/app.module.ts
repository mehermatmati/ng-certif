import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FeaturesModule } from './features/features.module';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  imports:      [ FormsModule , FeaturesModule, RouterModule.forRoot(AppRoutes),  BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
