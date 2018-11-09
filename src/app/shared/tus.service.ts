import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TusService {
  private api_key = 'b8d25429d24bd53e8efe9922190e3e91';
  private api_root = 'http://localhost:3000/todaytvseries/';

  constructor(private http: HttpClient) { }


 getdetails(id: number) {
   // tslint:disable-next-line:max-line-length
   return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.api_key}&language=en-US&append_to_response=last_episode_to_air`);
 }

 getEpisodes(name: any) {
 return this.http.get(`${this.api_root}${name}`);
 }
}
