import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/service/auth.service';
import { CounterService } from './core/service/counter.service';
import { JwtService } from './core/service/jwt.service';
import { StorageService } from './core/service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  visitors?: {};
  token?: string;
  isUser?: boolean;
  check$?: Observable<boolean>;
  visitorId?: string = 'none';

  constructor(
    private sVisitor: CounterService,
    private sStorage: StorageService,
    private sAuth: AuthService,
    private sJwt: JwtService,
  ) {
    this.sVisitor.getNumberOfVisitors().subscribe((res) => {this.visitors = res});
    this.token = this.sStorage.getStorage();
    this.getState();
  }

  ngOnInit(): void {
    this.sVisitor.createVisitorCounter(this.visitorId!).subscribe();
  }

  getState() {
    if (this.token && !this.sJwt.isUserTokenExpired(this.token)) {
      const id = this.sJwt.decodeUserToken(this.token).id;
      this.check$ = this.sAuth.isTokenBlacklisted(this.token, id);
    }else {
      this.isUser = false;
    }
    
  }
}
