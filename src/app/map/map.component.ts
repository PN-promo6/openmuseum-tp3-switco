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

  constructor() { }

  private initMuseumMap(): void {
    this.map = L.map('map', {
      center: [46.227638, 2.213749],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    // const marker = L.marker([39.8282, -98.5795]);
    // marker.addTo(this.map);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([46.227638, 2.213749], { icon: myIcon }).bindPopup('Toupi Kun').addTo(this.map).openPopup();
  }

  ngAfterViewInit(): void {

    this.initMuseumMap();
  }

}