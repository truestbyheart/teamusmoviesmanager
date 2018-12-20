import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { TmdbService } from '../../shared/tmdb.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  private sub: any;
  private keyword: String;
  result: object[];
  genreids: Number;
  name: any;
  realGenre: Array<String> = [];
  public pageload = true;
  constructor(private route: ActivatedRoute,
    private tmdb: TmdbService ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pageload = false;
      }, 2000);
      this.sub = this.route.params.subscribe(params => {
        this.keyword = params['name'];
        this.pageload = false;
        this.getSearchResult(this.keyword);
      });


  }

  getSearchResult(key: String) {
    this.tmdb.searchMe(key).subscribe((data: any) => {
    this.result = data['results'];

    });

  }



}
