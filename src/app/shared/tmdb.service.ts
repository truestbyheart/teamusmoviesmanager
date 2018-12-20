import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private api_key = 'b8d25429d24bd53e8efe9922190e3e91';

  constructor(private http: HttpClient) {}

  getTrending() {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${this.api_key}`
    );
  }

  getGenre() {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        this.api_key
      }&language=en-US`
    );
  }

  getMovieDetail(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        this.api_key
      }&language=en-US`
    );
  }

  getMovieCredits(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.api_key}`
    );
  }

  getPerson(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${this.api_key}`
    );
  }

  getPersonMovie(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${
        this.api_key
      }&language=en-US`
    );
  }

  searchMe(term: String) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${
        this.api_key
      }&language=en-US&query=${term}&page=1&include_adult=true`
    );
  }

  genreName() {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        this.api_key
      }&language=en-US`
    );
  }

  getTvCredits(id: Number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${
        this.api_key
      }&language=en-US`
    );
  }

  getVideos(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
        this.api_key
      }&language=en-US`
    );
  }

  getPopularMovies(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        this.api_key
      }&language=en-US&page=${id}`
    );
  }

  getPopularSeries(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${
        this.api_key
      }&language=en-US&page=${id}`
    );
  }

  getTvVideos(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.api_key}&language=en-US`
    );
  }
}
