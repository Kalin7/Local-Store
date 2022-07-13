import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/service/storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private sStorage: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sStorage.clearStorage();
    this.router.navigate(['/']);
  }
  

}
