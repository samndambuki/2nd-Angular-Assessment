import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from 'src/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];
  private studentsSubject: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);

  constructor() { }

  addStudent(student: Student) {
    const students = this.studentsSubject.getValue();
    students.push(student);
    this.studentsSubject.next([...this.students]);
  }

  getStudents(): Observable<Student[]> {
    return this.studentsSubject.asObservable();
  }
}
