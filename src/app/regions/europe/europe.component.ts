import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css'],
  providers: [Location]
})
export class EuropeComponent implements OnInit {

  europeRegion$: Object;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.appService.getRegionEurope().subscribe(
      data => this.europeRegion$ = data
    );
  }

  goBack(): any {
    this.location.back();
  } // end of goBack method

}
