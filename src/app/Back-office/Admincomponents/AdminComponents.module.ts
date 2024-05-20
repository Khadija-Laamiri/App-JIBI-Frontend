import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarAdminComponent } from './sidebarAdmin/sidebarAdmin.component';
import { NavbarAdminComponent } from './navbarAdmin/navbarAdmin.component';
import { FooterAdminComponent } from './footerAdmin/footerAdmin.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterAdminComponent,
    NavbarAdminComponent,
    SidebarAdminComponent
  ],
  exports: [
    FooterAdminComponent,
    NavbarAdminComponent,
    SidebarAdminComponent
  ]
})
export class AdminComponentsModule { }