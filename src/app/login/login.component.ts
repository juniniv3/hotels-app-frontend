import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading: boolean = false;
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
