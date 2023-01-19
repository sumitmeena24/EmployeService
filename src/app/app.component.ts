import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employe Service';
  employeForm!: object;

submitform(params:object) {
    console.log("inside click",this.employeForm,params);
   return;
  }

  employeeList=[{
    firstName:'amit',
    lastName:'solanki',
    emailId:'amit.solanki@g.com',
    phoneNumber:6386,
    address:'India',
    salary:68767
  },{
    firstName:'mit',
    lastName:'sanki',
    emailId:'mit.sanki@y.com',
    phoneNumber:6988,
    address:'singapore',
    salary:5675
  },{
    firstName:'andrew',
    lastName:'mathew',
    emailId:'andrew.mathew@h.com',
    phoneNumber:6666,
    address:'australia',
    salary:7777
  }];
}
