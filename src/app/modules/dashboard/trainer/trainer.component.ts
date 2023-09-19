import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent {
  colleges: college[] = [
    {id:1 ,Trainer_id:'kct',Trainer_Details:'saravanampatti',Trainer_Name:'A'},  
        {id:2 ,Trainer_id:'psg',Trainer_Details:'peelemedu',Trainer_Name:'B'},  
        {id:3,Trainer_id:'Anthony Russo, Joe Russo',Trainer_Details:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',Trainer_Name:'C'},  
        {id:4,Trainer_id:'Bryan Singer',Trainer_Details:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',Trainer_Name:'D'},  
    
  ]
}
class college {  
  id! : number;  
  Trainer_id! : string;  
  Trainer_Details! : string;  
  Trainer_Name! : string;  
} 

