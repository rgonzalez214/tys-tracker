import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
let cashedInDate = 0;
let currentDayCount = 0;
@Component({
  selector: 'tool-bar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit{
  
  currentTime = formatDate(Date.now(), 'hh:mm:ss', 'en-US');
  todayDay = Number(formatDate(Date.now(), 'dd', 'en-US'));



ngOnInit(): void {
  setInterval(()=>{
    this.currentTime = formatDate(Date.now(), 'hh:mm:ss', 'en-US');
    this.todayDay = Number(formatDate(Date.now(), 'dd', 'en-US'));
  }, 1000);
 
}
    


  
  


   
  


}

