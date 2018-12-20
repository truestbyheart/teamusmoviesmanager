import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../shared/tmdb.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  movies: any;
  movie = true;
  series = false;
  popSeries: any;
  page: any;
  pageload = true;

  constructor(
    private tmdb: TmdbService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pageload = false;
    }, 3500);
    this.route.params.subscribe(params => {
      this.page = params['page'];
      console.log(this.page);
       this.showMovies(this.page);
     this.showpopSeries(this.page);
    });
  }

   showMovies(id: number) {
     this.tmdb.getPopularMovies(id).subscribe((data: any) => {
       this.movies = data['results'];
     });
   }

   showpopSeries (id: number) {
    this.tmdb.getPopularSeries(id).subscribe((data: any) => {
      this.popSeries = data['results'];
    });
   }

   next() {
     this.page++;
     this.router.navigate(['/Browse', this.page]);
     this.pageload = true;
     setTimeout(() => {
      this.pageload = false;
    }, 3500);
   }
   back() {
    this.page--;
    if ( this.page !== 0) {
      this.router.navigate(['/Browse', this.page]);
      this.pageload = true;
     setTimeout(() => {
      this.pageload = false;
    }, 3500);
    }
  }

  showMovie () {
  this.movie = true;
  this.series = !this.series;
  }

  showSeries() {
    this.movie = !this.movie;
    this.series = true;
  }

}
