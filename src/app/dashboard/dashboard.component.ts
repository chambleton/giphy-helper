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

  public pastedUrl: string;
  public filterText: string;
  public filteredGiphies: Giphy[];  
  public imageCopied: boolean = false;

  constructor(public GiphyService: GiphyService, 
              private ClipboardService: ClipboardService) { }

  ngOnInit() {
    this.filteredGiphies = this.GiphyService.getSavedGiphies();   
  }

  public onGiphyDeleted(giphy: Giphy) {
    this.filterGiphies(null);
  }

  public onGiphyCopied(giphy: Giphy) {
    this.imageCopied = true;

    setTimeout(() => {
      this.imageCopied = false;
    }, 3000);
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

  public filterGiphies($event) {    
    if (this.filterText && this.filterText.length > 0) {
      this.filteredGiphies = this.GiphyService.filterGiphies(this.filterText);      
    }
    else {
      this.filteredGiphies = this.GiphyService.getSavedGiphies();
    }
  }

  public pastedGiphyUrl($event) {
    if (this.pastedUrl && this.pastedUrl.length > 5) {
      var newGiphy: Giphy = { caption: "New", tags: [], imageUrl: this.pastedUrl, clickCount: 0};
      this.GiphyService.add(newGiphy);
      this.pastedUrl = "";
    }    
  }

}
