import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';

import { Giphy } from '../../services/giphy.model';
import { GiphyService } from '../../services/giphy.service';
import { LocalStorageService } from 'ng2-webstorage';
import { GiphySearchComponent } from './giphysearch.component';
import { HttpModule } from '@angular/http';
import { ClipboardService } from '../../services/clipboard.service';

describe('GiphySearchComponent', () => {
  let component: GiphySearchComponent;
  let giphyService: GiphyService;
  let clipboardService: ClipboardService;
  let fixture: ComponentFixture<GiphySearchComponent>;
  var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MdCardModule, HttpModule ],
      declarations: [ GiphySearchComponent ],
      providers: [ GiphyService, LocalStorageService, ClipboardService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphySearchComponent);
    component = fixture.componentInstance;

    giphyService = TestBed.get(GiphyService);
    clipboardService = TestBed.get(ClipboardService);

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should clear results and text for clearSearch', () => {
    component.searchText = "abc";
    giphyService.searchGiphies = ["a", "b"];

    component.clearSearch();
    expect(component.searchText).toBe("");
    expect(giphyService.searchGiphies.length).toBe(0);
  });

  it('should call svc copy when addGiphy', () => {
    var spy = spyOn(clipboardService, 'copy');    
    component.addGiphy(giphy);    
    expect(spy).toHaveBeenCalled();
  });

  it('should call svc add when addGiphy', () => {
    var spy = spyOn(giphyService, 'add');    
    component.addGiphy(giphy);    
    expect(spy).toHaveBeenCalled();
  });

});
