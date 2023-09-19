import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  colleges: college[] = [
    {id:1 ,course_id:'kct',CourseDetails:'saravanampatti',Course_Name:'admin'},  
        {id:2 ,course_id:'psg',CourseDetails:'peelemedu',Course_Name:'admin'},  
        {id:3,course_id:'Anthony Russo, Joe Russo',CourseDetails:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',Course_Name:'May 6, 2016'},  
        {id:4,course_id:'Bryan Singer',CourseDetails:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',Course_Name:'May 27, 2016'},  
    
  ]
}
class college {  
  id! : number;  
  course_id! : string;  
  CourseDetails! : string;  
  Course_Name! : string;  

}
