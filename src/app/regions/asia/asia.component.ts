import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css'],
  providers: [Location]
})
export class AsiaComponent implements OnInit {

  asiaRegion$: Object;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.appService.getRegionAsia().subscribe(
      data => this.asiaRegion$ = data
    );
  }

  goBack(): any {
    this.location.back();
  } // end of goBack method

}
