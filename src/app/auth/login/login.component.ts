import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';

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
  constructor(
    library: FaIconLibrary,
  ) { 
    library.addIcons(
      faAt,
      faLock
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm.get('email')!.value);
    console.log(this.loginForm.get('password')!.value);
    console.log(this.loginForm.get('check')!.value)
  }

}
