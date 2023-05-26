import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../../app/student.service';
import { Student } from 'src/student.interface';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  providers: [StudentService],
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudentForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) { }

  ngOnInit(): void {
    this.addStudentForm = this.formBuilder.group({
      name:['',[Validators.required]],
      age:['',[Validators.required,Validators.min(0)]],
      email:['',[Validators.required,Validators.email,Validators.pattern(/.*@thejitu\.com$/)]]
    })
  }

  get name(){
    return this.addStudentForm?.get('name');
  }

  get age(){
    return this.addStudentForm?.get('age');
  }

  get email(){
    return this.addStudentForm?.get('email')
  }

  onSubmit(){
    if(this.addStudentForm?.invalid){
      return;      
    }

    
  console.log(this.addStudentForm?.value)
  this.addStudentForm?.reset();

  const student: Student = {
    name: this.name?.value,
    age: this.age?.value,
    email: this.email?.value,
  };
  this.studentService.addStudent(student);
  }
}
