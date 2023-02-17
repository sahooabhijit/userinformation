import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dateVal  =new Date();
  userinfo:any[]=[];

  constructor(
		private Http: HttpClient
    ) { }

  ngOnInit(): void {
    this.getUserInformation();
  }

  getUserInformation(){
    this.Http.get('https://jsonplaceholder.typicode.com/users')
			.subscribe((resp: any) => {
        this.userinfo = resp;
			},
      error => {
        this.userinfo = [];
      }
    );

  }

}
