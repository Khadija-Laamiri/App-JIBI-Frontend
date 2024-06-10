import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

import {MyToken} from "../../models/MyToken";
import {jwtDecode} from "jwt-decode";
import {AgentChangePasswordService} from "../../service/AgentChangePassword.service";
import {ClientChangePasswordService} from "../../service/client-change-password.service";

@Component({
  selector: 'app-client-change-password',
  templateUrl: 'client-change-password.component.html',
  styleUrls: ['client-change-password.component.scss']
})
export class ClientChangePasswordComponent implements OnInit {
  test: Date = new Date();
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private userService: ClientChangePasswordService,
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const token = this.cookieService.get('token');
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
    });
  }

  changePasswordForm = new FormGroup({
    password: new FormControl('', Validators.required)
  });

  onSubmit(changePswForm: NgForm) {
    this.userService.changePswFirstTime(changePswForm.value).subscribe(
      (response: any) => {
        console.log('Response from API:', response);
        this.router.navigate(['/client']);
      },
    );
  }

  get f() { return this.changePasswordForm.controls; }
}
