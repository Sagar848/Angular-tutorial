import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  buttonClickStatus = false;
  buttonClickArray = [];
  initialCountValue = 1;
  constructor() { }

  ngOnInit(): void {
  }


  togglePara(){
    this.initialCountValue++;
    this.buttonClickArray.push(this.initialCountValue);
    this.buttonClickStatus = true;
  }

}
