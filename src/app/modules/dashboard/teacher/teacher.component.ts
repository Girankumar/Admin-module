import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  colleges: college[] = [
    {id:1 ,Teacher_ID:'5',Teacher_Name:'A',Teacher_Department:'admin',Qualification:'phd'},  
        {id:2 ,Teacher_ID:'6',Teacher_Name:'B',Teacher_Department:'admin',Qualification:'phd'},  
        {id:3,Teacher_ID:'7',Teacher_Name:'C',Teacher_Department:'admin',Qualification:'phd'},  
        {id:4,Teacher_ID:'8',Teacher_Name:'D',Teacher_Department:'admin',Qualification:'phd'},  
    
  ]
}
class college {  
  id! : number;  
  Teacher_ID! : string;  
  Teacher_Name! : string;  
  Teacher_Department! : string;  
  Qualification!:string

}
