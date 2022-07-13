import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAt, faLock, faPhone, faUser,  } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/core/interface';
import { AuthService } from 'src/app/core/service/auth.service';
import { FormDataService } from 'src/app/core/service/form-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rePass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    check: new FormControl(false)

  });

  user!: IUser;
  error?: string;
  
  constructor(
    library: FaIconLibrary,
    private sAuth: AuthService,
    private sForm: FormDataService,
    private router: Router
  ) { 
    library.addIcons(
      faAt,
      faLock,
      faPhone,
      faUser
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.sAuth.registerUser(this.sForm.getUserRegisterData, this.registerForm.value)
              .subscribe({
                next: () => {
                  alert("Register successful");
                  this.router.navigate(['/auth/user/login']);
                },
                error: (err) => {
                  this.error = err.error.msg
                }
              });
  }

  hide(): void {
    this.error = undefined;
  }

}


