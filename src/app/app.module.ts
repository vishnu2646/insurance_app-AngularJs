import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { CompagineComponent } from './compagine/compagine.component';
import { BrokersComponent } from './brokers/brokers.component';
import { BrokersDetailComponent } from './brokers-detail/brokers-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDetailsComponent,
    CompagineComponent,
    BrokersComponent,
    BrokersDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
