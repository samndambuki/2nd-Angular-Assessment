import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';



const routes: Routes = [
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'displaystudent', component: DisplayStudentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
