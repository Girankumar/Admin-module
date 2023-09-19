import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PublicRoutingModule } from './public-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    // AppRoutingModule
  ]
})
export class PublicModule { }
