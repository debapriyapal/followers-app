import { map } from 'rxjs/operators';
import { Observable , combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-archive-details',
  templateUrl: './blog-archive-details.component.html',
  styleUrls: ['./blog-archive-details.component.css']
})
export class BlogArchiveDetailsComponent implements OnInit {

  archive = {
    year: '',
    month: ''
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap
    ]).pipe(
      map(params => {
        this.archive['year'] = params[0].get('year');
        this.archive['month'] = params[0].get('month');
      })
    ).subscribe();
  }

  viewAll() {
    this.router.navigate(['']);
  }

}
