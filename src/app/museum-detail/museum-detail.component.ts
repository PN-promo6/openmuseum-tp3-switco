import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuseumService } from '../services/openmuseum.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})

export class MuseumDetailComponent implements OnInit {
  museumRef: string;
  museumName: string;
  museumOpening: string;
  museumZip: string;
  museumCity: string;
  museumTelephone: string;
  museumAdress: string;
  museumWebsite: string;
  museumFax: string;

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  constructor(private museumService: MuseumService, private route: ActivatedRoute, private leafletModule: LeafletModule) { }

  ngOnInit() {
    const museumRef = this.route.snapshot.params['museumRef']; // dans cette route, tu prends une photo du paramètre qui s'appelle (ici) mueseumRef
    this.museumName = this.museumService.getMuseumByRefMusee(museumRef).name;
    this.museumOpening = this.museumService.getMuseumByRefMusee(museumRef).opening;
    this.museumZip = this.museumService.getMuseumByRefMusee(museumRef).zip;
    this.museumCity = this.museumService.getMuseumByRefMusee(museumRef).city;
    this.museumTelephone = this.museumService.getMuseumByRefMusee(museumRef).telephone;
    this.museumAdress = this.museumService.getMuseumByRefMusee(museumRef).adress;
    this.museumWebsite = this.museumService.getMuseumByRefMusee(museumRef).website;
    this.museumFax = this.museumService.getMuseumByRefMusee(museumRef).fax;
  }
}
