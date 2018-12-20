import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {TmdbService} from '../../shared/tmdb.service';

@Component({
  selector: 'app-tv-preview-cast',
  templateUrl: './tv-preview-cast.component.html',
  styleUrls: ['./tv-preview-cast.component.css']
})
export class TvPreviewCastComponent implements OnInit {
  private sub: any;
  private id: number;
  private credits: Array<object>;
  cast: any;
  private sizedCast: any = [];
  actorPicture: any = [];

 constructor(
   private route: ActivatedRoute,
   private tmdb: TmdbService
 ) { }

 ngOnInit() {
   this.sub = this.route.params.subscribe(params => {
     this.id = params['id'];
   });
   this.getTvCredit(this.id);

 }

 getTvCredit(id: Number) {
  this.tmdb.getTvCredits(id).subscribe((data: Array<object>) => {
   this.cast = data['cast'];

   for ( let i = 0; i < this.cast.length; i++) {
    if (data['cast'][i]['profile_path'] != null) {
      this.actorPicture.push(data['cast'][i]);
    }
  }
  });
 }

}
