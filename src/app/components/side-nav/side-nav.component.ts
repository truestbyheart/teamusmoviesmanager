import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: [
    trigger('slideIn', [
      state('hidden', style({
      opacity: '0',
      })),
      state('displayed', style({
        opacity: '1',
        margin: '152% 0 0 40%',
        transform: 'rotateZ(0deg)'
      })),

      transition('hidden <=> displayed', animate('880ms ease-in' , style({
        margin: '173% 0 0 43%', transform: 'rotateZ(-45deg)', opacity: '1'
      })))
    ])
  ]
})
export class SideNavComponent implements OnInit {
  private showBar: Boolean = false;
  requestId: any;
  state = 'hidden';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
   }

  ngOnInit() {
  }

  goToSearch(term: String) {
   this.router.navigate(['/search', term]);
   this.showBar = !this.showBar;
  }

  showbar() {
    this.showBar = !this.showBar;
  }

  showMe() {
   this.state = this.state === 'hidden' ? 'displayed' : 'hidden';
  }
}
