import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {

  region$: Object;

  constructor(private route: ActivatedRoute, private appService: AppService) {
    this.route.params.subscribe(
      params => this.region$ = params.name
    );
  }

  ngOnInit() {
    this.appService.getSingleContry(this.region$).subscribe(
      data => this.region$ = data
    );
  }

}
