import { HeaderDetail } from './../models/header-detail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private API_KEY = 'b8d25429d24bd53e8efe9922190e3e91';

  constructor(private http: HttpClient) {}

  getTrending() {
    return this.http.get<HeaderDetail[]>(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${this.API_KEY}`
    );
  }

  getGenre() {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?API_KEY=${this.API_KEY}&language=en-US`
    );
  }

  getMovieDetail(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?API_KEY=${this.API_KEY}&language=en-US`
    );
  }

  getMovieCredits(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?API_KEY=${this.API_KEY}`
    );
  }

  getPerson(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${id}?API_KEY=${this.API_KEY}`
    );
  }

  getPersonMovie(id: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?API_KEY=${this.API_KEY}&language=en-US`
    );
  }

  searchMe(term: String) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(
      `https://api.themoviedb.org/3/search/multi?API_KEY=${this.API_KEY}&language=en-US&query=${term}&page=1&include_adult=true`
    );
  }

  genreName() {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?API_KEY=${this.API_KEY}&language=en-US`
    );
  }

  getTvCredits(id: Number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?API_KEY=${this.API_KEY}&language=en-US`
    );
  }

  getVideos(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?API_KEY=${this.API_KEY}&language=en-US`
    );
  }

  getPopularMovies(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?API_KEY=${this.API_KEY}&language=en-US&page=${id}`
    );
  }

  getPopularSeries(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?API_KEY=${this.API_KEY}&language=en-US&page=${id}`
    );
  }

  getTvVideos(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?API_KEY=${this.API_KEY}&language=en-US`
    );
  }
}
