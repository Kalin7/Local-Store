import { Component, Input, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() isUser?: boolean;
  
  constructor(
    library: FaIconLibrary,
    private sAuth: AuthService,

  ) { 
    library.addIcons(
      faArrowRightToBracket,
      faArrowRightFromBracket, 
    );
  }

  ngOnInit(): void { 
    if (!this.isUser) {
      this.sAuth.islogedIn$.subscribe((res) => {
        this.isUser = res;
      });
    }
  }

}
