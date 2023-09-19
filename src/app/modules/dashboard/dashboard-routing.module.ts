import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { CollegedataComponent } from './collegedata/collegedata.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AgreementComponent } from './agreement/agreement.component';
import { PaymentsComponent } from './payments/payments.component';
import { ImagesComponent } from './images/images.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from '../public/components/homepage/homepage.component';
const routes: Routes = [
  {path:'', component:DashboardComponent,
children:[
 { path:'addform', component: AddFormComponent},
 { path:'collegedata', component: CollegedataComponent},
 {path:'course', component: CourseComponent},
 {path:'student', component: StudentComponent},
 {path:'trainer', component: TrainerComponent},
 {path:'teacher', component: TeacherComponent},
 {path:'agreement', component: AgreementComponent},
 {path:'payments', component:PaymentsComponent},
 {path:'images', component:ImagesComponent},
 
] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
