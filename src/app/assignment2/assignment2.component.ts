import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  UserName : string = '';
  buttonClickStatus = 'Button is not Clicked';

  constructor() { }

  ngOnInit(): void {
  }

  isUserNameEmpty(){
    if(this.UserName == ''){
      return true;
    }
    else{
      return false;
    }
  }

  updateUserName(){
    this.UserName = '';
    this.buttonClickStatus = 'button is Clicked';
  }

}
