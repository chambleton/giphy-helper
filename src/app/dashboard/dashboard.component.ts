import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { Giphy } from '../services/giphy.model';
import { ClipboardService } from '../services/clipboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  public searchText: string;
  public savedGiphies: Giphy[];
  public imageCopied: boolean = false;

  constructor(public GiphyService: GiphyService, public ClipboardService: ClipboardService) { }

  ngOnInit() {
    this.savedGiphies = this.GiphyService.getSavedGiphies();   
  }

  public clearSearch() {
    this.searchText = "";
    this.GiphyService.searchGiphies = [];
  }

  public addGiphy(giphy: any) {
    this.ClipboardService.copy(giphy.url);
    var newGiphy: Giphy = { caption: "New", imageUrl: giphy.url, clickCount: 0};
    this.GiphyService.add(newGiphy);
  }

  public copyGiphy(giphy: Giphy) {
    this.ClipboardService.copy(giphy.imageUrl);
    giphy.clickCount++;
    this.GiphyService.edit(giphy);
    this.imageCopied = true;

    setTimeout(() => {
      this.imageCopied = false;
    }, 3000);
  }

  public deleteGiphy(giphy: Giphy) {        
    this.GiphyService.delete(giphy);    
  }

}
