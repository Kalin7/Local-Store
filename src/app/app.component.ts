import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/auth.service';
import { CounterService } from './core/service/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  visitors?: {};

  constructor(
    private sVisitor: CounterService,
    private sAuth: AuthService
  ) {
    this.sVisitor.createVisitorCounter('email').subscribe();
    this.sVisitor.getNumberOfVisitors().subscribe((res) => {this.visitors = res});
  }

  ngOnInit(): void {
  }
}
