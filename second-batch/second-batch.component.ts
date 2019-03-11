import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-second-batch',
  templateUrl: './second-batch.component.html',
  styleUrls: ['./second-batch.component.css']
})
export class SecondBatchComponent implements OnInit {
 booked: any;
 samp: any;


  constructor(private http: Http, public route: ActivatedRoute, private alerts: AlertsService) {
    this.booked = {
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

  goBooks() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(this.booked);

    console.log(this.booked);
    this.http.post('http://192.168.192.47:8081/second', body, { headers: headers }).subscribe(response => {
    console.log(response);
    });



  }
}
