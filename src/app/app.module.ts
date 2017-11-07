import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';

import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    DashboardModule,
    MdToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

