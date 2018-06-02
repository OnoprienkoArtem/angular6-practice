import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-module',
  templateUrl: './countdown-module.component.html',
  styleUrls: ['./countdown-module.component.scss']
})
export class CountdownModuleComponent implements OnInit {

  constructor() { }

  targetDate = new Date(2018, 6, 10);
  targetDay = this.targetDate.getDate();


  currentDate = new Date();
  currentDay = this.currentDate.getDate();

  howRest = this.targetDay - this.currentDay;
  mesagge: string = '';

  ngOnInit() {
    if (this.howRest !== 0) {
      this.mesagge = 'до целевой даты осталось ' + this.howRest + ' дн';      
    } else {
      this.mesagge = 'этот день наступил'; 
    }


  }

}
