import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MdCardModule, MdChipsModule } from '@angular/material';
import { InlineEditComponent } from '../inline-edit/inline-edit.component';
import { InlineTagsComponent } from '../inline-tags/inline-tags.component';

import { GiphyCardComponent } from './giphycard.component';
import { GiphyService } from '../../services/giphy.service';
import { Giphy } from '../../services/giphy.model';
import { LocalStorageService } from 'ng2-webstorage';
import { HttpModule } from '@angular/http';
import { ClipboardService } from '../../services/clipboard.service';

describe('GiphyCardComponent', () => {
  let component: GiphyCardComponent;
  let giphyService: GiphyService;
  let clipboardService: ClipboardService;
  let fixture: ComponentFixture<GiphyCardComponent>;
  var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MdCardModule, MdChipsModule, HttpModule ],
      declarations: [ GiphyCardComponent, InlineEditComponent, InlineTagsComponent ],
      providers: [GiphyService, LocalStorageService, ClipboardService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyCardComponent);
    component = fixture.componentInstance;
    component.giphy = new Giphy();

    giphyService = TestBed.get(GiphyService);
    clipboardService = TestBed.get(ClipboardService);

    fixture.detectChanges();
  });

  it('should call svc edit() when editCaption', () => {
    var spy = spyOn(giphyService, 'edit');    
    component.editCaption({}, giphy);    
    expect(spy).toHaveBeenCalled();
  });

  it('should call svc editTags when onTagsUpdated', () => {
    var spy = spyOn(giphyService, 'editTags');    
    component.onTagsUpdated([], giphy);    
    expect(spy).toHaveBeenCalled();
  });

  it('should inc count when copyGiphyUrl ', () => {    
    var initial = giphy.clickCount;
    component.copyGiphyUrl(giphy);    
    expect(giphy.clickCount).toBe(initial+1);
  });

  it('should call svc edit when copyGiphyUrl ', () => {
    var spy = spyOn(giphyService, 'edit');    
    component.copyGiphyUrl(giphy);    
    expect(spy).toHaveBeenCalled();
  });

  it('should call cs copy when copyGiphyUrl ', () => {
    var spy = spyOn(clipboardService, 'copy');    
    component.copyGiphyUrl(giphy);    
    expect(spy).toHaveBeenCalled();
  });

  it('should emit copied event when copyGiphyUrl ', (done) => {
    component.giphyCopied.subscribe(g => {
      expect(g).toEqual(giphy);
      done();
    });
            
    component.copyGiphyUrl(giphy);        
  });
  
  it('should call svc delete when deleteGiphy ', () => {
    var spy = spyOn(giphyService, 'delete');    
    component.deleteGiphy(giphy);    
    expect(spy).toHaveBeenCalled();
  });

  it('should emit delete event when deleteGiphy ', (done) => {
    component.giphyDeleted.subscribe(g => {
      expect(g).toEqual(giphy);
      done();
    });
            
    component.deleteGiphy(giphy);        
  });

});
