import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../app/student.service';
import { Student } from 'src/student.interface';

@Component({
  selector: 'app-display-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-student.component.html',
  providers: [StudentService],
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }
}
