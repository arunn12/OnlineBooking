import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})

export class BookingFormComponent implements OnInit {
  booking: any;
  samp: any;


  constructor(private http: Http, public route: ActivatedRoute, private alerts: AlertsService) {
    this.booking = {
      name: '',
      mail: '',
      mobile: '',
      city: '',
      post: '',
      country: '',
      date:'',
      bookingtime: '',

    }
  }

  ngOnInit() {
  }

  goBook() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(this.booking);

    console.log(this.booking);
    this.http.post('http://192.168.192.47:8081/mybook', body, { headers: headers }).subscribe(response => {
    console.log(response);
    });



  }
}