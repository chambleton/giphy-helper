
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MdChipInputEvent, ENTER} from '@angular/material';

const COMMA = 188;

@Component({
  selector: 'inline-chips',
  templateUrl: 'inline-chips.component.html',
  styleUrls: ['inline-chips.component.scss']
})

export class InlineChipsComponent {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  showAddButton: boolean = true;

  @Input() tags: any[];
  @Output() tagsUpdated: EventEmitter<any[]> = new EventEmitter<any[]>();

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];


  add(event: MdChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    if (!this.tags) {
      this.tags = [];
    }

    // Add our person
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    
    this.showAddButton = true;
    this.tagsUpdated.emit(this.tags);
  }

  remove(tag: any): void {
    let index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.tagsUpdated.emit(this.tags);
    }    
  }
}
