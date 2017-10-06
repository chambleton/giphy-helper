import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdToolbarModule, MdCardModule, MdListModule, MdIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Ng2Webstorage } from 'ng2-webstorage';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InlineEditComponent } from './dashboard/inline-edit/inline-edit.component';
import { GiphyService } from './services/giphy.service';
import { ClipboardService } from './services/clipboard.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    Ng2Webstorage,
    HttpModule,
    MdButtonModule, MdInputModule, MdToolbarModule, MdListModule, MdIconModule, MdCardModule
  ],
  providers: [GiphyService, ClipboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

