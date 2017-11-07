import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { Giphy } from '../../services/giphy.model';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
  selector: 'giphy-card',
  templateUrl: './giphycard.component.html',
  styleUrls: ['./giphycard.component.scss']
})

export class GiphyCardComponent implements OnInit {

  @Input() giphy: Giphy;
  @Output() giphyCopied: EventEmitter<any> = new EventEmitter<any>();
  @Output() giphyDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private GiphyService: GiphyService,
              private ClipboardService: ClipboardService) { 

  }

  ngOnInit() {
  }

  
  public editCaption($event: any, giphy: Giphy) {
    this.GiphyService.edit(giphy);
  }

  public onTagsUpdated($tags: any[], giphy: Giphy) {
    this.GiphyService.editTags(giphy, $tags);
  }
  
  public copyGiphyUrl(giphy: Giphy) {
    this.ClipboardService.copy(giphy.imageUrl);
    giphy.clickCount++;
    this.GiphyService.edit(giphy);
    this.giphyCopied.emit(giphy);
  }

  public deleteGiphy(giphy: Giphy) {        
    this.GiphyService.delete(giphy);
    this.giphyDeleted.emit(giphy);
  }

}
