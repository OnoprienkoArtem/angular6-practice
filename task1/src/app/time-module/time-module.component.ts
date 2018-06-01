import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-module',
  templateUrl: './time-module.component.html',
  styleUrls: ['./time-module.component.scss']
})
export class TimeModuleComponent implements OnInit {

  date = new Date();

  hours = this.date.getHours();
  min = this.date.getMinutes();

  year = this.date.getFullYear();
  day = this.date.getDate();

  monthList: string[] = ['январь', 'февраль', '', '', '', '', ];

 

  constructor() { }

  ngOnInit() {
    console.log('object Date => ', this.date);
    console.log('Day => ', this.date.getDay());
    console.log(this.year);
  }

}
