import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {TmdbService} from '../../shared/tmdb.service';

@Component({
  selector: 'app-preview-cast',
  templateUrl: './preview-cast.component.html',
  styleUrls: ['./preview-cast.component.css']
})
export class PreviewCastComponent implements OnInit {
   private sub: any;
   private id: number;
   private credits: Array<object>;
  actorPicture = [];

  constructor(
    private route: ActivatedRoute,
    private tmdb: TmdbService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getCredit(this.id);
  }

  getCredit(id: number) {
    this.tmdb.getMovieCredits(id).subscribe((data: Array<object>) => {
    this.credits = data['cast'];
    for ( let i = 0; i < this.credits.length; i++) {
      if (data['cast'][i]['profile_path'] != null) {
        this.actorPicture.push(data['cast'][i]);
      }
    }
    });
  }

}
