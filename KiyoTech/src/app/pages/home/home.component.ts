import { Component, OnInit } from '@angular/core';
import { DatePipe, Time } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 CurrentDate = new Date()

  

  constructor( ) { }

  ngOnInit() {
    
  }

}
