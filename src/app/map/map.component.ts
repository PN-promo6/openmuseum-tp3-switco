import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

  private map: any;
  @Input() museumCoord: number[];
  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: '../../../assets//marker-icon.png',
      shadowUrl: '../../../assets/marker-shadow.png'
    })
  };

  constructor() { }

  private initMuseumMap(): void {
    this.map = L.map('map', {
      center: [this.museumCoord[0], this.museumCoord[1]],
      zoom: 5,
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = L.marker([this.museumCoord[0], this.museumCoord[1]], this.icon);
    marker.addTo(this.map);
  }

  ngAfterViewInit(): void {

    this.initMuseumMap();
  }
}