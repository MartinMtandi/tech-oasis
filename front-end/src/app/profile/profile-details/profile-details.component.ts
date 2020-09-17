import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})

export class ProfileDetailsComponent implements OnInit {
  @Input() profiles : any
  profileIndex : number = 0;
  profile:any;

  ngOnInit(){
    this.profile=this.profiles[this.profileIndex];
  }

  first(){
    this.profileIndex=0;
    this.executeMove();
  }

  previous(){
    if(this.profileIndex>0){
      this.profileIndex=this.profileIndex-1;
      this.executeMove();
    }else{
      alert("Could not navigate to previous!");
    }
  }

  next(){
    if(this.profileIndex<this.profiles.length-1){
      this.profileIndex=this.profileIndex+1;
      this.executeMove();
    }else{
      alert("Could not navigate to next!");
    }
  }

  last(){
    this.profileIndex=this.profiles.length-1;
    this.executeMove();
  }

  executeMove(){
    this.profile=this.profiles[this.profileIndex];
  }
}
