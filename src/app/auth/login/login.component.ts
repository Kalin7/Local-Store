import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/service/auth.service';
import { FormDataService } from 'src/app/core/service/form-data.service';
import { StorageService } from 'src/app/core/service/storage.service';

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

  token?: any;
  error?: string;
  isError: boolean = false;

  constructor(
    library: FaIconLibrary,
    private sAuth: AuthService,
    private sForm: FormDataService,
    private sStorage: StorageService,
    private router: Router
  ) { 
    library.addIcons(
      faAt,
      faLock
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.sAuth.loginUser(this.sForm.getUserLoginData, this.loginForm.value)
              .subscribe(
                  { 
                    next: (res) => {
                      this.token = res;
                      this.sStorage.setStorage(this.token);
                      this.sAuth.getIsUserLogedIn(true);
                      this.router.navigate(['/home'])
                    },
                    error: (err) => {
                      this.error = err.error.msg;
                    }
                  }
              );
  }

  hide(): void {
   this.error = undefined;
  }
}
