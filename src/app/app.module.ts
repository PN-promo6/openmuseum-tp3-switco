import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AddMuseumComponent } from './add-museum/add-museum.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data-service/data.service';
import { IndexComponent } from './index/index.component';
import { MapComponent } from './map/map.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleMuseumComponent } from './single-museum/single-museum.component';

@NgModule({
  declarations: [
    AddMuseumComponent,
    AppComponent,
    IndexComponent,
    MapComponent,
    MuseumDetailComponent,
    NavbarComponent,
    NotFoundComponent,
    SingleMuseumComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],

  providers: [
    DataService
  ],

  bootstrap: [
    AppComponent
  ]

})

export class AppModule { }
