import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-archive-home',
  templateUrl: './blog-archive-home.component.html',
  styleUrls: ['./blog-archive-home.component.css']
})
export class BlogArchiveHomeComponent implements OnInit {


  archives;
  constructor() {
    this.archives = [
      {
        year: 2017,
        month: 1
      },
      {
        year: 2017,
        month: 2
      },
      {
        year: 2017,
        month: 3
      }
    ];
  }

  ngOnInit() {
  }

}
