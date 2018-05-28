import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-module',
  templateUrl: './time-module.component.html',
  styleUrls: ['./time-module.component.scss']
})
export class TimeModuleComponent implements OnInit {

  time = Date.now();

 

  constructor() { }

  ngOnInit() {
   
  }

}
