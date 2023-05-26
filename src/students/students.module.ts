import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { StudentsRoutingModule } from './students-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';

import { DisplayStudentComponent } from './display-student/display-student.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, StudentsRoutingModule,AddStudentComponent,DisplayStudentComponent]
})
export class StudentsModule { }
