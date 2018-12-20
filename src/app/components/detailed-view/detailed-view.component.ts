import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TmdbService } from '../../shared/tmdb.service';
import { YtsService } from '../../shared/yts.service';
import { TusService } from '../../shared/tus.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  private sub: any;
  private id: any;
  private genre: any;
  private movieDetail: Array<object> = [];
  private credits: Array<object> = [];
  private language: Array<object> = [];
  private passMe: string;
  private Downlables = [];
  private url: Array<object> = [];
  private gMagnet: Array<object> = [];
  private link_1337: Array<object> = [];
  private link_1337_gMagnet: Array<object> = [];
  private name: String = 'movies';
  link_1337_magnet: any;
  magnet: any;
  magnetHash: any;
  magnetUrl: any;
  link_limetorrent: object[];


  constructor(
    private route: ActivatedRoute,
    private tmdb: TmdbService,
    private yts: YtsService,
    private sanitizer: DomSanitizer,
    private tus: TusService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.feedMe();
    this.getCredit();
  }

  feedMe() {
    this.tmdb.getMovieDetail(this.id).subscribe((Data: Array<object>) => {
      this.movieDetail = Data;
      this.genre = Data['genres'];
      this.language = Data['spoken_languages'];
      this.passMe = this.movieDetail['original_title'];
      this.getDownloadFile(this.passMe);
      this.getIt_1337(this.passMe);
      this.getIt_limetorrent(this.passMe);
    });
  }

  getCredit() {
    this.tmdb.getMovieCredits(this.id).subscribe((Data: Array<object>) => {
      this.credits = Data['cast'];
    });
  }

  getDownloadFile(title: string) {
    this.yts.getDownlodableTorrent(title).subscribe((data: Array<object>) => {
      this.Downlables = data['data']['movies'][0]['torrents'];
      for ( let i = 0; i < this.Downlables.length; i++)  {
        this.magnetHash = data['data']['movies'][0]['torrents'][i]['hash'];
        this.magnetUrl = data['data']['movies'][0]['torrents'][i]['url'];
        // tslint:disable-next-line:max-line-length
        this.magnet = `magnet:?xt=urn:btih:${this.magnetHash}&dn=${this.magnetUrl}+Encoded+Movie+Name&tr=http://track.one:1234/announce&tr=udp://track.two:80`;
        this.gMagnet.push(this.magnet);
      }
    });
  }

  cleanURL(oldURL): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }

  getIt_1337 (name: any) {
    this.tus.getmovie_1337(name).subscribe((data: Array<object> ) => {
       this.link_1337 = data;
     for ( let i = 0; i < this.link_1337.length; i++) {
        this.link_1337_magnet = data[i]['magnet'];
      this.link_1337_gMagnet.push(this.link_1337_magnet);
       }
    });
  }

  getIt_limetorrent (name: any) {
    this.tus.getmovie_limetorrent(name).subscribe((data: Array<object> ) => {
       this.link_limetorrent = data;
    });
  }

}
