import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class YtsService {
  apiRoot = 'https://yts.am/api/v2/';
  constructor(private yts: HttpClient) { }

   getDownlodableTorrent(term: any) {
     return this.yts.get(`${this.apiRoot}/list_movies.json?query_term=${term}`);
   }
}
