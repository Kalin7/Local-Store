import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-valid',
  templateUrl: './form-valid.component.html',
  styleUrls: ['./form-valid.component.css']
})
export class FormValidComponent implements OnInit {

  constructor(
    library: FaIconLibrary
  ) { 
    library.addIcons(
      faCheck
    )
  }

  ngOnInit(): void {
  }

}
