import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MdChipsModule, MdIconModule } from '@angular/material';
import { InlineTagsComponent } from '../inline-tags/inline-tags.component';

describe('InlineTagsComponent', () => {
  let component: InlineTagsComponent;
  let fixture: ComponentFixture<InlineTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MdChipsModule, MdIconModule ],
      declarations: [ InlineTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTagsComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
