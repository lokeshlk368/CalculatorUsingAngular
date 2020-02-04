import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatorUsingAngular';

  public num1:number;
  public num2:number;
  public result:number;

  Addition()
  {
    this.result=this.num1+this.num2;
  }
  Subtraction()
  {
    this.result=this.num1-this.num2;
  }
  Multification()
  {
    this.result=this.num1*this.num2;
  }
  Division()
  {
    this.result=(this.num1)/(this.num2);
  }
}
