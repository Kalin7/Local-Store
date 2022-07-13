import { Component } from '@angular/core';
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
  ) {
    this.sVisitor.createVisitorCounter('email').subscribe();
    this.sVisitor.getNumberOfVisitors().subscribe((res) => {this.visitors = res});
  }


}
