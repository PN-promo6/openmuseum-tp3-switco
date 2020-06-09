import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Museum } from '../models/museum/museum';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})

export class MuseumDetailComponent implements OnInit {

  public museum: Museum;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const museum_id = this.route.snapshot.params['museumId']; // dans cette route, tu prends une photo du paramètre qui s'appelle museum_id

    this.dataService.fetchMuseumById(museum_id)
      .subscribe(
        res => {
          this.museum = res;
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }
}