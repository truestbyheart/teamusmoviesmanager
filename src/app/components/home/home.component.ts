import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../shared/tmdb.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public list: Array<object> = [];
  public genre: Array<object> = [];
  constructor(private api: TmdbService, private router: Router) {}

  ngOnInit() {
    this.showPopular();
  }

  showPopular(): void {
    this.api.getTrending().subscribe((data: Array<object>) => {
      this.list = data['results'];
      console.log(this.list);
    });
  }


}
