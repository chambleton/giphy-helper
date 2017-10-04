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
  public giphies: Giphy[];

  constructor(private GiphyService: GiphyService, private ClipboardService: ClipboardService) { }

  ngOnInit() {
    this.getSavedGiphies();
  }

  private getSavedGiphies() {
    this.GiphyService.getSavedGiphies().then(giphies => {
      this.savedGiphies = giphies;      
    });
  }

  public searchGiphies() {
    //this.searchText
  }

  public clearSearch() {
    this.searchText = "";
  }

  public copyGiphy(giphy: Giphy) {
    this.ClipboardService.copy(giphy.imageUrl);
    giphy.clickCount++;
  }
  
}
