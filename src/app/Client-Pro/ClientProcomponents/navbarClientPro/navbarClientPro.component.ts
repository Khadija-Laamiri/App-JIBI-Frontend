import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebarClientPro/sidebarClientPro.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-clientPro',
  templateUrl: './navbarClientPro.component.html',
  styleUrls: ['./navbarClientPro.component.scss']
})
export class NavbarClientProComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  logout() {
    this.router.navigate(['/login']);
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
        titlee = titlee.slice( 1 );
    }

    for (let item = 0; item < this.listTitles.length; item++) {
        if (this.listTitles[item].path === titlee) {
            return this.listTitles[item].title;
        }
    }
    return '';
  }

}