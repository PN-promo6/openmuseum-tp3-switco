import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MuseumService} from '../services/openmuseum.service'

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  museumName:string;
  museumDescription:string;

  constructor(private MuseumService: MuseumService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
