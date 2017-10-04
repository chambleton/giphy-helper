import { Injectable } from '@angular/core';
import { Giphy } from './giphy.model';

@Injectable()
export class GiphyService {

  constructor() { }

  getSavedGiphies(): Promise<Giphy[]> {    
    var giphies: Giphy[] = [
      { caption: "Whoa!", imageUrl: "http://media1.giphy.com/media/f3OTIn9dXTcnC/giphy-downsized.gif", clickCount: 0 },
      { caption: "sarcasm", imageUrl: "http://media4.giphy.com/media/12xWfDQcGkbU1W/giphy-downsized.gif", clickCount: 0 },
      { caption: "You have done well", imageUrl: "http://media2.giphy.com/media/9g8PH1MbwTy4o/giphy-downsized.gif", clickCount: 0 }
    ];
 
    return Promise.resolve(giphies);
  }

  searchGiphies(searchText: string): Promise<string[]> {    
    var giphies: any[] = [
      { url: "http://media3.giphy.com/media/9E5wP1RiPvnos/giphy-downsized.gif" },
      { url: "http://media4.giphy.com/media/4PvP4zij51Lyw/giphy-downsized.gif" },
      { url: "http://media4.giphy.com/media/tjoC7APba5XGg/giphy-downsized.gif" }
    ];
 
    return Promise.resolve(giphies);
  }

}
