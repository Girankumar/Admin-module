import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddFormComponent } from './add-form/add-form.component';
import { AgreementComponent } from './agreement/agreement.component';
import { CollegedataComponent } from './collegedata/collegedata.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImagesComponent } from './images/images.component';
import { PaymentsComponent } from './payments/payments.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TrainerComponent } from './trainer/trainer.component';
import { HomepageComponent } from '../public/components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddFormComponent,
    AgreementComponent,
    CollegedataComponent,
    CourseComponent,
    DashboardComponent,
    ImagesComponent,
    PaymentsComponent,
    StudentComponent,
    TeacherComponent,
    TrainerComponent
  ],
  imports: [
    
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ]
})
export class DashboardModule { }
