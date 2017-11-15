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
  let giphyService: GiphyService;

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
    giphyService = TestBed.get(GiphyService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should call svc filterGiphies if has filtertext', () => {
    var spy = spyOn(giphyService, 'filterGiphies');    
    component.filterText = "a";
    component.filterGiphies(undefined);
    expect(spy).toHaveBeenCalled();
  });

  it('should call svc getSavedGiphies if no filtertext', () => {
    var spy = spyOn(giphyService, 'getSavedGiphies');    
    component.filterText = "";
    component.filterGiphies(undefined);
    expect(spy).toHaveBeenCalled();
  });

  it('should call svc add if has valid pastedUrl', () => {
    var spy = spyOn(giphyService, 'add');    
    component.pastedUrl = "abcdef";
    component.pastedGiphyUrl(undefined);
    expect(spy).toHaveBeenCalled();
  });

  it('should not call svc add if invalid pastedUrl', () => {
    var spy = spyOn(giphyService, 'add');    
    component.pastedUrl = "abcde";
    component.pastedGiphyUrl(undefined);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should not call svc add if no pastedUrl', () => {
    var spy = spyOn(giphyService, 'add');    
    component.pastedUrl = "";
    component.pastedGiphyUrl(undefined);
    expect(spy).not.toHaveBeenCalled();
  });

});

