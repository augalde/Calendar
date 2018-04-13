import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public weeks : any[];
  public startDate : Date = new Date("2018/4/13");
  public startDay : number;
  public endDay: number;
  public dayOfWeek: string;


  ngOnInit(){
    this.weeks = [1,2,2];
  
  }

  createWeeks(){


  }

  //day from Monday
  getDayOfWeek():number{
    return this.startDate.getDay();
  }

  //week that we start
  weekAndDay() {

    var date = new Date,
        
        prefixes = [1,2,3,4,5];

    return prefixes[0 | date.getDate() / 7] ;

} 

  //how many days on the month
   daysInThisMonth(dateToWork) {
    var now = dateToWork;
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  } 
  
 
 weekCount(year, month_number, startDayOfWeek) {
  // month_number is in the range 1..12

  // Get the first day of week week day (0: Sunday, 1: Monday, ...)
  var firstDayOfWeek = startDayOfWeek || 0;

  var firstOfMonth = new Date(year, month_number-1, 1);
  var lastOfMonth = new Date(year, month_number, 0);
  var numberOfDaysInMonth = lastOfMonth.getDate();
  var firstWeekDay = (firstOfMonth.getDay() - firstDayOfWeek + 7) % 7;

  var used = firstWeekDay + numberOfDaysInMonth;

  return Math.ceil( used / 7);
} 

}
