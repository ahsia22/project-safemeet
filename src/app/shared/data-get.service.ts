import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/Rx';

@Injectable()
export class DataGetService {
  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  public categories;
  public data;
  private credentials = 'client_id=T3G1LFSOOT1SLHVM5M0Z5TAORW2G0ZDJRPO0XH4DMZ5CJJD5&client_secret=1CYBI50VHYH313YZUBM41NL2DLESNEJTIXPN5IFDPNGAYAAQ';
  private url = '';
  private location = '';
  private category = 'I look for...';
  private errorCategory: boolean = false;
  private errorLocation: boolean = false;
  private hasChanges: boolean = false;

  createEvent(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("scheduled_events")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }

  getEvents() { 
    var snapshot;
    this.firestore.collection("scheduled_events").get().subscribe(
      (result: any) => {
        snapshot = result;
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
        return snapshot;
      }
    );

    


//     return this.db.list('/products').snapshotChanges().pipe(
//   map((products: any[]) => products.map(prod => {
//     const payload = prod.payload.val();
//     const key = prod.key;
//     return <any>{ key, ...payload };
//   })),
// );
  }

  



  getCategories() {
    this.http.get('https://api.foursquare.com/v2/venues/categories&' + this.credentials + '&v=20200919')
      .subscribe(response => {this.categories = response['response'];
        return response;}
      );
  }


  getUrl() {
    this.url = 'https://api.foursquare.com/v2/venues/search?' + this.credentials + '&near=' + this.location + '&query=' + this.category + '&v=20200919&m=foursquare';
    this.http.get(this.url).subscribe(
      response => {
        this.data = response['response'];
        this.hasChanges = false;
        return response;        
      });
  }

  searchType() {
    if (this.category.length > 0 && this.category !== 'I look for...') {
      if (this.location.length > 0) {
        this.getUrl();
      } else {
        this.errorLocation = true;
      }
    } else {
      this.errorCategory = true;
    }
  }

  collectData() {
    this.selectData();
    this.searchType();
  }

  selectData() {
    this.location;
    this.category;
  }

  clearError(parameter) {
    if (parameter === 'location') {
      this.errorLocation = false;
    }else if (parameter === 'categories') {
      this.errorCategory = false;
    }
 
  }
  changed() {
    this.hasChanges = true;
  }
}
