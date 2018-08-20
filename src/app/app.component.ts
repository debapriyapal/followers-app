import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //courses = [1,2]
  viewMode = 'test';
  courses ;
  isSelected = false;
  canSave = true;

  task = {
    id: 1,
    assignee: null
  };

  public addCourse() {
    const course = {
      ID: this.courses.length + 1,
      Name: 'Course ' + (this.courses.length + 1)
    };
    this.courses.push(course);
  }

  public removeCourse(course) {
    console.log(course);
    this.courses.splice(this.courses.indexOf(course), 1);
  }

  loadCourse() {
    this.courses = [
      {ID : 1, Name : 'Course 1'},
      {ID : 2, Name : 'Course 2'},
      {ID : 3, Name : 'Course 3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.ID : undefined;
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
