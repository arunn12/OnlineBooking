import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-viewbooking-form',
  templateUrl: './viewbooking-form.component.html',
  styleUrls: ['./viewbooking-form.component.css']
})
export class ViewbookingFormComponent implements OnInit {
  card: any;
  constructor(private http: Http) {

   this.http.get('http://192.168.192.47:8081/patient', {}).subscribe(response => {
    
      this.card = JSON.parse(response["_body"]);
      console.log(response);
      console.log(this.card);
    });
  }

  ngOnInit() {
  }

}