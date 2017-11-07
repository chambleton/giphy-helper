import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule, MdChipsModule, MdInputModule, MdCardModule, MdListModule, MdIconModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Ng2Webstorage } from 'ng2-webstorage';

import { DashboardComponent } from './dashboard.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { InlineTagsComponent } from './inline-tags/inline-tags.component';
import { GiphyService } from '../services/giphy.service';
import { ClipboardService } from '../services/clipboard.service';
import { GiphyCardComponent } from './giphycard/giphycard.component';
import { GiphySearchComponent } from './giphysearch/giphysearch.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InlineEditComponent,
    InlineTagsComponent,
    GiphyCardComponent,
    GiphySearchComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpModule,    
    FlexLayoutModule,    
    FormsModule,
    Ng2Webstorage,
    MdButtonModule, MdInputModule, MdChipsModule, MdListModule, MdIconModule, MdCardModule
  ],
  providers: [GiphyService, ClipboardService],
})
export class DashboardModule {}