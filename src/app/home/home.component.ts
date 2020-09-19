import { Component, OnInit } from '@angular/core';
import { DataGetService } from '../shared/data-get.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private map;
  constructor(public dataGetService: DataGetService) { }

	private initMap(): void {
	  this.map = L.map('map', {
	    center: [ 39.8282, -98.5795 ],
	    zoom: 3
	  });
	}
  ngOnInit() {
    this.dataGetService.getCategories();

  }
}
