import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAt, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    library: FaIconLibrary,
  ) { 
    library.addIcons(
      faAt,
      faLock,
      faPhone
    )
  }

  ngOnInit(): void {
  }

}
