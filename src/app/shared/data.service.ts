import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    const header = new HttpHeaders().set('Accept', 'application/json');
   }

  /* getCurrentTitle(title: number) {
   return this.http.get(`https://oneom.tk/serial/${title}`, { header });
  } */
}
