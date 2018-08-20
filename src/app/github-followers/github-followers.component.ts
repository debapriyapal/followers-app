import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers = [];
  constructor(
    private router: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {

    const obs = combineLatest([
      this.router.paramMap,
      this.router.queryParamMap
    ]).pipe(
      switchMap(params => {
        console.log(params[1].get('page'));
        console.log(params[1].get('order'));
        return this.service.fetchAll();
      })
    ).subscribe(followers => this.followers = followers);

    /**obs.subscribe(params=>{
      console.log(params[1].get('page'));
      console.log(params[1].get('order'));
      this.service.fetchAll()
      .subscribe(followers=> this.followers = followers);
    })*/


  }

}
