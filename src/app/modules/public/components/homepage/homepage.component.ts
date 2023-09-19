import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from './../../../dashboard/dashboard/dashboard.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
loginform! : FormGroup;
hide: boolean = true; 
constructor(private Router: Router){}
  ngOnInit(): void {
    this.loginform = new FormGroup({

      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)])
    })
    }
    onlogin(){
// this.Router.navigate(['/dashboard'])
    }
    login(){
this.Router.navigate(['/dashboard'])
    }
  }
