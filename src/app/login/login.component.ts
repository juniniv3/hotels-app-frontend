import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Login } from '../domain/auth/dto/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService){  }
  loading: boolean = false;
  loginUserData: Login | undefined;
  loginError: boolean = false;
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(){
    this.loading = true;
    this.authService.logIn(this.profileForm.value.email, this.profileForm.value.password).subscribe(
      result => {
        this.loading = false;
        this.loginUserData =  result;
        this.loginError = false;
      },
      err => {
        this.loading = false;
        if(err.status === 401)
        this.loginError = true
      }
    )
  }

}
