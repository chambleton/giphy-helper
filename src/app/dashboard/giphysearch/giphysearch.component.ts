import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { Giphy } from '../../services/giphy.model';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
  selector: 'giphy-search',
  templateUrl: './giphysearch.component.html',
  styleUrls: ['./giphysearch.component.scss']
})
export class GiphySearchComponent implements OnInit {

  public searchText: string;

  constructor(public GiphyService: GiphyService, private ClipboardService: ClipboardService) { }

  ngOnInit() {
  }

  
  public clearSearch() {
    this.searchText = "";
    this.GiphyService.searchGiphies = [];
  }
  
  public addGiphy(giphy: any) {
    this.ClipboardService.copy(giphy.url);
    var newGiphy: Giphy = { caption: "New", tags: [], imageUrl: giphy.url, clickCount: 0};
    this.GiphyService.add(newGiphy);
  }

}
