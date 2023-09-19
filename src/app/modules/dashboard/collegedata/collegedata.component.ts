import { Component } from '@angular/core';

@Component({
  selector: 'app-collegedata',
  templateUrl: './collegedata.component.html',
  styleUrls: ['./collegedata.component.scss']
})
export class CollegedataComponent {
  college!: string
  colleges: college[] = [
    {id:1 ,college:'kct',address:'saravanampatti',contact:'admin'},  
        {id:2 ,college:'psg',address:'peelemedu',contact:'admin'},  
        {id:3,college:'Anthony Russo, Joe Russo',address:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',contact:'May 6, 2016'},  
        {id:4,college:'Bryan Singer',address:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',contact:'May 27, 2016'},  
    
  ]


}
class college {  
  id! : number;  
  college! : string;  
  address! : string;  
  contact! : string;  

}
