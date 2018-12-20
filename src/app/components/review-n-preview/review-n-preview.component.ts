import { Component, OnInit, Input } from '@angular/core';

import { TmdbService } from '../../shared/tmdb.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-review-n-preview',
  templateUrl: './review-n-preview.component.html',
  styleUrls: ['./review-n-preview.component.css']
})
export class ReviewNPreviewComponent implements OnInit {

 @Input() id: number;
 @Input() name: String;
  list: any;
  link: any;
  pure_links: any = [];
  tv: any = [];
  text: string;

  constructor(private tmdb: TmdbService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(this.name);
    if (this.name === 'series') {
     this.getTvTrailer(this.id);
     console.log(this.name);
     console.log(this.id);
    } else  if (this.name === 'movies') {
      this.getTrailer(this.id);
      console.log(this.name);
    }


  }

  getTrailer(id: number) {
    this.tmdb.getVideos(id).subscribe((data: Array<object>) => {
    this.list = data['results'];
    for ( let i = 0; i < this.list.length; i++) {
     this.link = { url: '//www.youtube.com/embed/' + data['results'][i]['key']};
     this.pure_links.push(this.link);

    }
    });
  }

  getTvTrailer(id: number) {
  this.tmdb.getTvVideos(id).subscribe((data: any) => {
   this.tv = data['results'];
  if (this.tv) {
    for ( let i = 0; i < this.tv.length; i++) {
      this.link = { url: '//www.youtube.com/embed/' + data['results'][i]['key']};
      this.pure_links.push(this.link);
     }
  } else {
    this.text = 'there is no trailer at the momemt';
  }

  });
  }

}
