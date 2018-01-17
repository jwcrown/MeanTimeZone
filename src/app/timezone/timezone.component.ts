import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  time:any;
  zone:any;
  constructor(){
    this.time = Date.now();
    this.zone = 'UTC';
  }
  onButtonClick(new_zone) {
    if (new_zone == "clear"){
      this.zone = "UTC";
    }
    else{
      this.zone =new_zone;
    }

  //   if (event = "PST"){
  //     this.time = Date.now();
  //   }
  //   if (event = "MST"){
  //     this.time = new Date(now.getTime() + (1*1000*60*60));
  //   }
  //   if (event = "CST"){
  //     this.time = new Date(now.getTime() + (2*1000*60*60));
  //   }
  //   if (event = "EST"){
  //     this.time = new Date(now.getTime() + (3*1000*60*60));
  //   }
  }
  ngOnInit() {
  }

}
