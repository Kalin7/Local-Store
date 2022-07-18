import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isUser: boolean = false;
  constructor(
    library: FaIconLibrary,
    private sAuth: AuthService,

  ) { 
    library.addIcons(
      faArrowRightToBracket,
      faArrowRightFromBracket, 
    ) 
  }

  ngOnInit(): void {
    this.sAuth.islogedIn$.subscribe((res) => this.isUser = res);
  }

}
