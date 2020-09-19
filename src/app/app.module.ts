import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DataGetService } from './shared/data-get.service';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EventsService } from './events-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    // AngularFirestore,
    // Observable,
    // EventsObject,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
      // AngularFireDatabaseModule
  ],
  providers: [DataGetService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
