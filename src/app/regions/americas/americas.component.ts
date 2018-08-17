import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-americas',
  templateUrl: './americas.component.html',
  styleUrls: ['./americas.component.css'],
  providers: [Location]
})
export class AmericasComponent implements OnInit {

  americasRegion$: Object;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.appService.getRegionAmericas().subscribe(
      data => this.americasRegion$ = data
    );
  }

  goBack(): any {
    this.location.back();
  } // end of goBack method

}
