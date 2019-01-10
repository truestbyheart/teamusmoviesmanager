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
      display: 'none',
      width: '0',
      padding: '0'
      }))
    ])
  ]
})
export class SideNavComponent implements OnInit {
  private showBar: Boolean = false;
  requestId: any;

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
}
