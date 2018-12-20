import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  private showBar: Boolean = false;
  requestId: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // router.events
    // // .filter((evt) => evt instanceof NavigationStart || evt instanceof NavigationEnd)
    // .subscribe((evt) => {
    //   console.log(evt);
    //   if (evt instanceof NavigationStart) {
    //     console.log('Route Change Start!');
    //   } else if (evt instanceof NavigationEnd) {
    //     console.log('Route Change End!');
    //   }
    // });
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
