import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profiles: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:54986/api/profiles').subscribe(
      data=>{
        this.profiles = data;
      }
    )
  }
}
