import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { Giphy } from '../services/giphy.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {


  public giphies: Giphy[];

  constructor(private GiphyService: GiphyService) { }

  ngOnInit() {
    this.getGiphies();
  }

  private getGiphies() {
    this.GiphyService.getGiphies().then(giphies => {
      this.giphies = giphies;
      console.log(this.giphies);
    });
  }

}
