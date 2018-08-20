import { AbstractControl } from '@angular/forms';
import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  topics = new FormArray([]);
  form = new FormGroup({
    topics: this.topics
  });

  addTopic(control: HTMLInputElement) {
    this.topics.push(new FormControl(control.value));
    control.value = '';
  }

  removeTopic(control: AbstractControl) {
    const index = this.topics.controls.indexOf(control);
    this.topics.removeAt(index);
  }
}
