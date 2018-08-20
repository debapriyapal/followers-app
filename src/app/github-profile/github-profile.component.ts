import { combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(params => {
      console.log(params[0].get('username'));
      console.log(params[0].get('id'));
      console.log(params[1].get('page'));
      console.log(params[1].get('order'));
    });

    /**this.route.paramMap
      .subscribe(params=>{
        console.log(params.get('username'));
      })*/
  }

  submit() {
    console.log('in submit');
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'new'}
    });
  }

}
