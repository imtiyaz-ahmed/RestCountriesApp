import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getAfrica() {
    this.router.navigate(['/regions', 'africa']);
  }

  getAmericas() {
    this.router.navigate(['/regions', 'americas']);
  }

  getAsia() {
    this.router.navigate(['/regions', 'asia']);
  }

  getEurope() {
    this.router.navigate(['/regions', 'europe']);
  }

  getOceania() {
    this.router.navigate(['/regions', 'oceania']);
  }


}
