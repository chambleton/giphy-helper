import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule, MdChipsModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { GiphyCardComponent } from './giphycard/giphycard.component';
import { GiphySearchComponent } from './giphysearch/giphysearch.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { InlineTagsComponent } from './inline-tags/inline-tags.component';

import { GiphyService } from '../services/giphy.service';
import { LocalStorageService } from 'ng2-webstorage';
import { ClipboardService } from '../services/clipboard.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent,
        GiphySearchComponent,
        GiphyCardComponent,
        InlineEditComponent,
        InlineTagsComponent
      ],
      imports: [FormsModule, MdCardModule, MdChipsModule, HttpModule],
      providers: [ GiphyService, LocalStorageService, ClipboardService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

