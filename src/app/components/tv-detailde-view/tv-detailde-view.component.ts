import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TusService } from '../../shared/tus.service';
import { TmdbService } from '../../shared/tmdb.service';

@Component({
  selector: 'app-tv-detailde-view',
  templateUrl: './tv-detailde-view.component.html',
  styleUrls: ['./tv-detailde-view.component.css']
})
export class TvDetaildeViewComponent implements OnInit {
  private tvdetail: Array<object> = [];
  private episodes: Array<object> = [];
  private sub: any;
  private id: number;
  private genre: any;
  language: any;
  name: any;

  constructor(private tus: TusService,
    private route: ActivatedRoute,
    private tmdb: TmdbService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);
    this.getInfo();
    this.getep(this.name);
  }

  getInfo() {
    this.tus.getdetails(this.id).subscribe((data: Array<object>) => {
     this.tvdetail = data;
     this.genre = data['genres'];
     this.name = data['original_name'];
     console.log(typeof this.name);
     this.getep(this.name);
    });
  }

  getep(name: string) {
    this.tus.getEpisodes(name).subscribe((eps: Array<object>) => {
      this.episodes = eps;
      console.log(this.episodes);
    });
  }

}
