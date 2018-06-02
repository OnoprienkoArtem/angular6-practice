import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-module',
  templateUrl: './time-module.component.html',
  styleUrls: ['./time-module.component.scss']
})
export class TimeModuleComponent implements OnInit {

  date = new Date();

  hours: number = this.date.getHours();
  min: number = this.date.getMinutes();
  year: number = this.date.getFullYear();
  day: number = this.date.getDate();
  month: number = this.date.getMonth();
  monthList: string[] = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  currentMonth = this.monthList[this.month];
  message: string = ''; 
 
  constructor() { }

  ngOnInit() {   
    if (this.hours > 21 || this.hours < 9) {
      this.message = 'С утра будет завтрак';
    } else if (this.hours > 9 || this.hours < 14) {
      this.message = 'Не пропустите обед';
    } else {
      this.message = 'Время близится к ужину';
    }
  }

}
