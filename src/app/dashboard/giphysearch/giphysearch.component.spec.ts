import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';

import { GiphyService } from '../../services/giphy.service';
import { LocalStorageService } from 'ng2-webstorage';
import { GiphySearchComponent } from './giphysearch.component';
import { HttpModule } from '@angular/http';
import { ClipboardService } from '../../services/clipboard.service';

describe('GiphysearchComponent', () => {
  let component: GiphySearchComponent;
  let fixture: ComponentFixture<GiphySearchComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
