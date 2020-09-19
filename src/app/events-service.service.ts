import { Injectable } from '@angular/core';
import { Timestamp } from 'rxjs/Rx';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class EventsObject {
  id: string;

  event_name: string;
  event_description: string;
  time: Timestamp<any>;
  names: Array<string>;
  
}

export class EventsService {
  constructor(private firestore: AngularFirestore) { }
}
