import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.css']
})
export class ContactsFormComponent {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
    {id: 3, name: 'Post'}

  ];

  contactTimes = [
    {id: 1, time: '9am - 10am'},
    {id: 2, time: '10am - 11am'},
    {id: 3, time: '11am - 12pm'},

  ];

  log(x) {console.log(x); }
  submit(x) {console.log(x); }
}
