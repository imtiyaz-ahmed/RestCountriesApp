import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.css'],
  providers: [Location]
})
export class OceaniaComponent implements OnInit {

  oceaniaRegion$: Object;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.appService.getRegionOceania().subscribe(
      data => this.oceaniaRegion$ =  data
    );
  }

  goBack(): any {
    this.location.back();
  } // end of goBack method

}
