import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { JwtService } from 'src/app/core/service/jwt.service';
import { StorageService } from 'src/app/core/service/storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private sStorage: StorageService,
    private sAuth: AuthService,
    private sJwt: JwtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const token = this.sStorage.getStorage()
    const decodedToken = this.sJwt.decodeUserToken(token);
    this.logout(token, decodedToken.id);
    this.sAuth.getIsUserLogedIn(false);
    this.router.navigate(['/']);
  }

  logout(token: string, id: string) {
    this.sAuth.logoutUser({token, id}).subscribe();

  }
  

}
