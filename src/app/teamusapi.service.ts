import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Series } from './series';
import { Name } from './series';

@Injectable({
  providedIn: 'root'
})
export class TeamusapiService {
  private baseUrl = 'https://teamusapi.000webhostapp.com/index.php';
  private api_key = 'b8d25429d24bd53e8efe9922190e3e91';
  series: Series[];
  name: Name[];

  constructor(private http: HttpClient) { }


  getSeries(title: String): Observable<Series[]> {
    return this.http.get(`${this.baseUrl}/todaytvseries/${title}`).pipe(
      map((res) => {
        this.series = res['data'];
        return this.series;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong.');
  }

  getdetails(id: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.api_key}&language=en-US&append_to_response=last_episode_to_air`);
  }
}
