import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {
   private api_key = 'b8d25429d24bd53e8efe9922190e3e91';

  constructor(private http: HttpClient) { }

  getTrending() {
    return this.http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.api_key}`);
  }

  getGenre() {
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}&language=en-US`);
  }


  getMovieDetail(id: any) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}&language=en-US`);
  }

  getMovieCredits(id: any) {
   return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.api_key}`);
  }


}
