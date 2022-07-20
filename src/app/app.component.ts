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
  visitors$?: Observable<{}>;
  check$?: Observable<boolean>;
  token?: string;
  visitorId?: string;
  isUser?: boolean;
  
  constructor(
    private sVisitor: CounterService,
    private sStorage: StorageService,
    private sAuth: AuthService,
    private sJwt: JwtService,
  ) {
    this.visitors$ = this.sVisitor.getNumberOfVisitors();
    this.token = this.sStorage.getStorage();
    this.getState();
  }

  ngOnInit(): void {
  }

  getState() {
    if (this.token && !this.sJwt.isUserTokenExpired(this.token)) {
      this.visitorId = this.sJwt.decodeUserToken(this.token).id;
      this.check$ = this.sAuth.isTokenBlacklisted(this.token, this.visitorId);
    }else {
      this.isUser = false;
    }
    this.sVisitor.createVisitorCounter(this.visitorId!).subscribe();
  }
}
