import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { AfricaComponent } from './regions/africa/africa.component';
import { AmericasComponent } from './regions/americas/americas.component';
import { AsiaComponent } from './regions/asia/asia.component';
import { EuropeComponent } from './regions/europe/europe.component';
import { OceaniaComponent } from './regions/oceania/oceania.component';
import { SingleCountryComponent } from './single-country/single-country.component';

import { AppService } from './app.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'africa', component: AfricaComponent },
  { path: 'americas', component: AmericasComponent },
  { path: 'asia', component: AsiaComponent },
  { path: 'europe', component: EuropeComponent },
  { path: 'oceania', component: OceaniaComponent },
  { path: 'single-country/:country', component: SingleCountryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AfricaComponent,
    AmericasComponent,
    AsiaComponent,
    EuropeComponent,
    OceaniaComponent,
    SingleCountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
