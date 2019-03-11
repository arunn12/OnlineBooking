import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-view-second',
  templateUrl: './view-second.component.html',
  styleUrls: ['./view-second.component.css']
})
export class ViewSecondComponent implements OnInit {
  card: any;
  constructor(private http: Http) {

   this.http.get('http://192.168.192.47:8081/mynew', {}).subscribe(response => {
    
      this.card = JSON.parse(response["_body"]);
      console.log(response);
      console.log(this.card);
    });
  }

  ngOnInit() {
  }

}
