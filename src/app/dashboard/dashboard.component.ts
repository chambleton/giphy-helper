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
  public filterText: string;
  public filteredGiphies: Giphy[];  
  public imageCopied: boolean = false;

  constructor(public GiphyService: GiphyService, 
              public ClipboardService: ClipboardService) { }

  ngOnInit() {
    this.filteredGiphies = this.GiphyService.getSavedGiphies();   
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

  public editCaption($event: any, giphy: Giphy) {
    this.GiphyService.edit(giphy);
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

  public allowDrop(ev) {
    //console.log("ALLOW DROP: " + ev);
    ev.preventDefault();
  }

  public drag(ev) {
    //console.log("DRAG: " + ev);
    ev.dataTransfer.setData("text", ev.target.id);
  }

  public drop(ev) {
    ev.preventDefault();
    //console.log("DROP: " + ev);
    var data = ev.dataTransfer.getData("text");
    var newGiphy: Giphy = { caption: "New", tags: [], imageUrl: data, clickCount: 0};
    this.GiphyService.add(newGiphy);
    //console.log("DATA: " + data);
    //ev.target.appendChild(document.getElementById(data));
  }
  
  public onTagsUpdated($tags: any[], giphy: Giphy) {
    this.GiphyService.editTags(giphy, $tags);
  }

  public filterGiphies($event) {
    if (this.filterText && this.filterText.length > 0) {
      this.filteredGiphies = this.GiphyService.filterGiphies(this.filterText);      
    }
    else {
      this.filteredGiphies = this.GiphyService.getSavedGiphies();
    }
  }
}
