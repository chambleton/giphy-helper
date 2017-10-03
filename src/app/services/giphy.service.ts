import { Injectable } from '@angular/core';
import { Giphy } from './giphy.model';

@Injectable()
export class GiphyService {

  constructor() { }

  getGiphies(): Promise<Giphy[]> {
    
    var giphies: Giphy[] = [
      { caption: "Whoa!", imageUrl: "http://media1.giphy.com/media/f3OTIn9dXTcnC/giphy-downsized.gif", clickCount: 0 },
      { caption: "You have done well", imageUrl: "http://media2.giphy.com/media/9g8PH1MbwTy4o/giphy-downsized.gif", clickCount: 0 }
    ];
 
    return Promise.resolve(giphies);
  }


}
