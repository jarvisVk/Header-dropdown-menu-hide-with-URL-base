import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hideElement = false;

  constructor(private router: Router) {

   }

  
  ngOnInit(): void {


    // Redirect the event
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/dashboard') {
          this.hideElement = true;
        }  else {
          this.hideElement = false;
        }
      }
    });

  }

}
