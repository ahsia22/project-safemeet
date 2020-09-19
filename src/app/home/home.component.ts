import { Component, OnInit } from '@angular/core';
import { DataGetService } from '../shared/data-get.service';
import { latLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options = {
        layers: [
          tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          })
        ],
        zoom: 7,
        center: latLng([ 46.879966, -121.726909 ])
      };
  constructor(public dataGetService: DataGetService) { }

  ngOnInit() {
    this.dataGetService.getCategories();
  }
}
