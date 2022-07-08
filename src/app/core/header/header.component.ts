import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    library: FaIconLibrary
  ) { 
    library.addIcons(
      faArrowRightToBracket,
      faArrowRightFromBracket,
      
    ) 
  }

  ngOnInit(): void {
  }

}
