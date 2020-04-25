import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuseumService } from '../services/openmuseum.service';

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
  museumville: string;
  museumTelephone: string;
  museumAdress: string;
  museumWebsite: string;
  museumFax: string;
  museumCoord: number[];

  constructor(private museumService: MuseumService, private route: ActivatedRoute) { }

  ngOnInit() {
    const museumRef = this.route.snapshot.params['museumRef']; // dans cette route, tu prends une photo du paramètre qui s'appelle (ici) mueseumRef
    this.museumName = this.museumService.getMuseumByRefMusee(museumRef).nom_du_musee;
    this.museumOpening = this.museumService.getMuseumByRefMusee(museumRef).periode_ouverture;
    this.museumZip = this.museumService.getMuseumByRefMusee(museumRef).cp;
    this.museumville = this.museumService.getMuseumByRefMusee(museumRef).ville;
    this.museumTelephone = this.museumService.getMuseumByRefMusee(museumRef).telephone;
    this.museumAdress = this.museumService.getMuseumByRefMusee(museumRef).adr;
    this.museumWebsite = this.museumService.getMuseumByRefMusee(museumRef).sitweb;
    this.museumFax = this.museumService.getMuseumByRefMusee(museumRef).fax;
    this.museumCoord = this.museumService.getMuseumByRefMusee(museumRef).coordonnees_cp;

  }
}
