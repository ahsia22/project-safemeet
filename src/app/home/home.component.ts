import { Component, OnInit } from '@angular/core';
import { DataGetService } from '../shared/data-get.service';
import { latLng, tileLayer } from 'leaflet';
import { IEvent } from '../interfaces/event'
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

    var data_input : IEvent = {
      event_name: 'Recretional Outing',
      event_description: 'For Eric\'s Birthday',
      time: new Date(),
      attendees: ['Eric', 'Sky', 'Solomon', 'Alex'],
      coord_lat: 42.296650,
      coord_lon: -83.721287
    };

    this.dataGetService.getCategories();
    // this.dataGetService.createEvent(data_input);

    var hello;
    this.dataGetService.getEvents().subscribe(res =>{
      hello = res;
      console.log(hello);
    });
  }
}
