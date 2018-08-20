import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.fetchAll();
  }

  createPost(input: HTMLInputElement) {
    const post: any = {title: input.value};
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post).subscribe(
      newPost => {
        console.log(post);
        post['id'] = newPost.id;
      },
      (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadInput) {
          alert('Create post error');
        } else {
          throw error;
        }
      });
  }

  fetchAll() {
    this.service.fetchAll().subscribe(
      posts => this.posts = posts);
  }

  updatePost(post) {
    /**this.http.put(this.url + "/" + post.id,JSON.stringify(post))
      .subscribe(response=>{
        console.log(response.json());
      }); */
    this.service.update(post)
    .subscribe(
      post => console.log(post),
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert(error);
        } else { throw error; }
      });
  }

  deletePost(post) {
    this.service.delete(post)
      .subscribe(
        () => this.posts.splice(this.posts.indexOf(post), 1),
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('Post already deleted..');
          } else { throw error; }
        });
  }
}
