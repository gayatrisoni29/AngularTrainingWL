import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  title = "Search Film Authentication Form"
  metascore = 0;
  loggedIn = false
  constructor(private authService: AuthenticationService , private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.authService.formSubmit();
    this.loggedIn = this.authService.loggedIn;
  }

  logout(){
    this.authService.logout();
    this.loggedIn = this.authService.loggedIn;
    this.router.navigateByUrl('/login');
  }


  readonly mainForm = this.formBuilder.group({
    email: ["", Validators.required],
    password:["",Validators.required],

});

}
