import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TmdbService } from '../../shared/tmdb.service';

@Component({
  selector: 'app-full-cast',
  templateUrl: './full-cast.component.html',
  styleUrls: ['./full-cast.component.css']
})
export class FullCastComponent implements OnInit {
  private id: any;
  private sub: any;
  credits: any;
  crew: any;
  isTrue: string;
  crewIsEmpty = false;
  picture: any;

  actorList = [];
  actorPicture = [];
  crewPicture = [];

  constructor(
    private route: ActivatedRoute,
    private tmdb: TmdbService) {}

  ngOnInit() {
   this.route.queryParams.subscribe(Params => {
   this.isTrue = Params['series'];
   this.id = Params['id'];
   });
   if (this.isTrue === 'false') {
    this.getCredit(this.id);
   } else {
    this.getTvCredit(this.id);
   }

  }

  getCredit(id: number) {
    this.tmdb.getMovieCredits(id).subscribe((data: Array<object>) => {
    this.credits = data['cast'];
    this.crew = data['crew'];

   for ( let i = 0; i < this.credits.length; i++) {
     if (data['cast'][i]['profile_path'] != null) {
       this.actorPicture.push(data['cast'][i]);
     }
   }
   for ( let i = 0; i < this.crew.length; i++) {
     if (data['crew'][i]['profile_path'] != null) {
       this.crewPicture.push(data['crew'][i]);
     }
   }


    if (this.crew.length > 0) {
      this.crewIsEmpty = true;
    }
    });
  }

  getTvCredit(id: Number) {
    this.tmdb.getTvCredits(id).subscribe((data: Array<object>) => {
     this.credits = data['cast'];
     this.crew = data['crew'];

     for ( let i = 0; i < this.credits.length; i++) {
      if (data['cast'][i]['profile_path'] != null) {
        this.actorPicture.push(data['cast'][i]);
      }
    }
    for ( let i = 0; i < this.crew.length; i++) {
      if (data['crew'][i]['profile_path'] != null) {
        this.crewPicture.push(data['crew'][i]);
      }
    }
     if (this.crew.length > 0) {
       this.crewIsEmpty = true;
     }
    });
   }
}
