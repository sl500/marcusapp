import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  // styleUrls: ['./success-alert.component.css']
  styles: [`
  p {
    /* width:200px; */
    margin: 25px;
    /* padding: 10px; */
    padding: 15px;
    border: 5px solid green;
    background: lightgreen;
    ;
  }
  `]
  
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
