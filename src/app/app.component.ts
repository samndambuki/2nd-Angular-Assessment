import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [StudentService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';
}
