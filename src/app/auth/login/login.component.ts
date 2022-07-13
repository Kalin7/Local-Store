import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { catchError, Observable, of, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { FormDataService } from 'src/app/core/service/form-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    check: new FormControl(false)
  });

  user$?: Observable<any>
  error?: string;
  isError: boolean = false;

  constructor(
    library: FaIconLibrary,
    private sAuth: AuthService,
    private sForm: FormDataService
  ) { 
    library.addIcons(
      faAt,
      faLock
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.user$ = this.sAuth.loginUser(this.sForm.getUserLoginData, this.loginForm.value);
    this.user$.subscribe(
      { 
        next: (res) => {
        },
        error: (err) => {
          this.error = err.err;
          console.log(this.error);
        }
      }
    );
  }

  hide(): void {
   this.error = undefined;
  }
}
