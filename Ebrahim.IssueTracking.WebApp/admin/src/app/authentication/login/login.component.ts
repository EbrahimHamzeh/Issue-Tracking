import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/core/models/credentials';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: Credentials = { username: '', password: '', rememberMe: false };
  error = '';
  returnUrl: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authService.logout(false);

    // tslint:disable-next-line:no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.error = '';
    this.authService.login(this.model)
      .subscribe(isLoggedIn => {
        if (isLoggedIn) {
          if (this.returnUrl) {
            this.router.navigate([this.returnUrl]);
          } else {
            this.router.navigate(['/dashboard/panel/list']);
          }
        }
      },
        (error: HttpErrorResponse) => {
          console.error('Login error', error);
          if (error.status === 401) {
            this.error = 'Invalid User name or Password. Please try again.';
          } else {
            this.error = `${error.statusText}: ${error.message}`;
          }
        });
  }

}
