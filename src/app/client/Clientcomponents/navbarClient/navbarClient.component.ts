import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebarClient/sidebarClient.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbarClient.component.html',
  styleUrls: ['./navbarClient.component.scss']
})
export class NavbarClientComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  constructor(location: Location, private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        titlee = this.listTitles[item].title;
      }
    }

    if (titlee.toLowerCase().includes('paiement') || titlee.toLowerCase().includes('validate') || titlee.toLowerCase().includes('confirm') ) {
      titlee = 'paiement';
    }

    return titlee;
  }
}
