import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data-service/data.service';
import { Museum } from '../models/museum/museum';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public museums: Museum[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchMuseums()
      .subscribe(
        res => {
          this.museums = res;
          console.log(res);
        },
        error => {
          console.log(error);
        });
  }
}
