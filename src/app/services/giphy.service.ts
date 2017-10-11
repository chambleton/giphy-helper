import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Giphy } from './giphy.model';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';

import { Observable } from 'rxjs/Observable';


const GIPHY_STORE_KEY: string = "SavedGiphies";
const GIPHY_PAGE_SIZE: number = 10;

@Injectable()
export class GiphyService {  

  @LocalStorage(GIPHY_STORE_KEY)
  private savedGiphies: Giphy[];
  private lastSearchText: string;
  private lastSearchOffset: number = 0;

  public searchGiphies: any[];

  constructor(private LocalStorageService: LocalStorageService, private Http: Http) {
    this.onInit();
   }

  private onInit() {
    if (!this.savedGiphies) {
      this.savedGiphies = [];
    }    
  }

  public add(giphy: Giphy) {
    this.savedGiphies.push(giphy);
    this.save();
  }

  public delete(giphy: Giphy) {
    this.savedGiphies.splice(this.savedGiphies.indexOf(giphy),1);
    this.save();
  }

  public edit(giphy: Giphy) {
    this.savedGiphies[this.savedGiphies.indexOf(giphy)] = giphy;
    this.save();
  }

  public editTags(giphy: Giphy, tags: any[]) {
    this.savedGiphies[this.savedGiphies.indexOf(giphy)].tags = tags;
    this.save();
  }

  private save() {
    this.LocalStorageService.store(GIPHY_STORE_KEY, this.savedGiphies);
  }

  public getSavedGiphies(): Giphy[] {
    return this.savedGiphies;
  }



  public search(searchText: string) {
    let baseUrl = 'https://api.giphy.com/v1/gifs/search?q=';
    let apiKey = '&api_key=dc6zaTOxFJmzC';
    let limiter = '&limit='; 
    let offset = '&offset=';    

    if (this.lastSearchText === searchText) {
      this.lastSearchOffset += GIPHY_PAGE_SIZE;
    }
    else {
      this.lastSearchOffset = 0;
    }

    this.lastSearchText = searchText;
    let searchUrl = baseUrl + searchText + apiKey + limiter + GIPHY_PAGE_SIZE +  offset + this.lastSearchOffset;
    
    this.Http.get(searchUrl).subscribe((res: Response) => {      
      this.searchGiphies = res.json().data;
      //console.log(this.searchGiphies); 
    });
/*
    var giphies: any[] = [
      { url: "http://media3.giphy.com/media/9E5wP1RiPvnos/giphy-downsized.gif" },
      { url: "http://media4.giphy.com/media/4PvP4zij51Lyw/giphy-downsized.gif" },
      { url: "http://media4.giphy.com/media/tjoC7APba5XGg/giphy-downsized.gif" }
    ];
 */
  }

}
