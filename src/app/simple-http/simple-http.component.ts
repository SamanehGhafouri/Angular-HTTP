import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makeRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1') // Get request, returns an Observable so we can subscribe
      .subscribe(data => {
        this.data = data;     // set that to that Object
        this.loading = false; // Since we have a response we are not loading anymore
      });

  }

}
