import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  keyframes
} from '@angular/animations';

import { TmdbService } from '../../shared/tmdb.service';

@Component({
  selector: 'app-star-details',
  templateUrl: './star-details.component.html',
  styleUrls: ['./star-details.component.css'],
  animations: [
    trigger('move', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => left', [
        style({ transform: 'translateX(100%)' }),
        animate(200)
      ]),
      transition('left => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ]),
      transition('void => right', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('right => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class StarDetailsComponent implements OnInit {
  private id: any;
  private sub: any;
  private personal: any;
  private aka: any;
  private imagesUrl: Array<object> = [];
  private creditsAct: any;
  private Act: any;
  private image: any;
  private imageLink: any;
  state = 'void';
  disableSliderButtons: Boolean = false;
  Crew: any;

  constructor(private route: ActivatedRoute, private tmdb: TmdbService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getPersonDetail(this.id);
    this.getPersonsCredit(this.id);
  }

  getPersonDetail(id: any) {
    this.tmdb.getPerson(id).subscribe((data: Array<object>) => {
      this.personal = data;
      this.aka = data['also_known_as'];
    });
  }

  getPersonsCredit(id: any) {
    this.tmdb.getPersonMovie(id).subscribe((data: Array<object>) => {
      this.Act = data['cast'];
      this.Crew = data['crew'];

    });
  }

 // animations

 imageRotate(arr, reverse) {
  if (reverse) { arr.unshift(arr.pop()); } else { arr.push(arr.shift()); }
  return arr;
}

moveLeft() {
  if (this.disableSliderButtons) {
    return;
  }
  this.state = 'right';
  this.imageRotate(this.Act, true);
}

moveRight() {
  if (this.disableSliderButtons) {
    return;
  }
  this.state = 'left';
  this.imageRotate(this.Act, false);
}

onFinish($event) {
  this.state = 'void';
  this.disableSliderButtons = false;
}

onStart($event) {
  this.disableSliderButtons = true;
}







  // tslint:disable-next-line:eofline
}
