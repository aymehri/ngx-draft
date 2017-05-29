import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Customer } from './../shared/sdk/models/Customer';
import { SDKToken } from './../shared/sdk/models/BaseModels';
import { CustomerApi } from './../shared/sdk/services/custom/Customer';
import { LoopBackAuth } from './../shared/sdk/services/core/auth.service';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private customerApi: CustomerApi) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  login(): void{
    const login = Object.assign({}, this.loginForm.value);
    this.customerApi.login(login).subscribe(
      (token: SDKToken) => {
        console.log('Login Success');
        console.log(token);
      },
      (err: any) => {
        console.log('Login Failed');
      });
  }

  logOut(): void{
    this.customerApi.logout().subscribe(
      () => {
        console.log('Logout Success');
      },
      (err: any) => {
        console.log('Logout Failed');
      });
  }

}
