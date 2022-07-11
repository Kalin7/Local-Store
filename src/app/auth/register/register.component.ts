import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAt, faLock, faPhone, faUser,  } from '@fortawesome/free-solid-svg-icons';

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
    check: new FormControl(false, [Validators.required])

  })
  constructor(
    library: FaIconLibrary,
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
    console.log(this.registerForm.value)
  }
}


