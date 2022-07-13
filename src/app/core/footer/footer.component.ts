import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() ctr?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
