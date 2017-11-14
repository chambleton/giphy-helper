import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MdChipsModule, MdIconModule, MdChipInputEvent } from '@angular/material';
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
    
    component.tags = [];
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should add an item', () => {
    var event: any = {input: {}, value: "tag"};    
    
    component.add(event);
    expect(component.tags[0].name).toBe(event.value);    
  });

  it('should remove an item', () => {
    var event1: any = {input: {}, value: "tag1"};        
    component.add(event1);
    var event2: any = {input: {}, value: "tag2"};        
    component.add(event2);
    
    component.remove(event2)
    expect(component.tags[0].name).toBe(event1.value);    
  });

});
