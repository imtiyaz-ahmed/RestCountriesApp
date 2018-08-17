import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css'],
  providers: [Location]
})
export class AfricaComponent implements OnInit {

  africaRegion$: Object;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.appService.getRegionAfrica().subscribe(
      data => this.africaRegion$ = data
    );
  }

  goBack(): any {
    this.location.back();
  } // end of goBack method

}
