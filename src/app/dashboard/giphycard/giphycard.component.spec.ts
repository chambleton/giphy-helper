import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MdCardModule, MdChipsModule } from '@angular/material';
import { InlineEditComponent } from '../inline-edit/inline-edit.component';
import { InlineTagsComponent } from '../inline-tags/inline-tags.component';

import { GiphyCardComponent } from './giphycard.component';
import { GiphyService } from '../../services/giphy.service';
import { LocalStorageService } from 'ng2-webstorage';
import { HttpModule } from '@angular/http';
import { ClipboardService } from '../../services/clipboard.service';

describe('GiphycardComponent', () => {
  let component: GiphyCardComponent;
  let fixture: ComponentFixture<GiphyCardComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
