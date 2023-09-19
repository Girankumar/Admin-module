import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  studentName = 'John Doe';
  college!: string
  colleges: college[] = [
    { college_ID: 1, Student_ID: '21', Roll_No: '4',Student_Name:'john' ,Department: 'admin',contact:344545},
    { college_ID: 2, Student_ID: '22', Roll_No: '5', Student_Name:'john'  ,Department: 'admin', contact:545454},
    { college_ID: 3, Student_ID: '23', Roll_No: '6', Student_Name:'john' ,Department: 'May 6, 2016', contact:34545454},
    { college_ID: 4, Student_ID: '24', Roll_No: '7', Student_Name:'john' ,Department: 'May 27, 2016', contact:3454544},

  ]


}
class college {
  college_ID!: number;
  Student_ID!: string;
  Roll_No!: string;
  Department!: string;
  Student_Name!:string;
  contact!:number

}
