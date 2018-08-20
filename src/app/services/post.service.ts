import { DataService } from './data-service';
import { BadInput } from '../common/bad-input';
import { AppError } from '../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { EMPTY, throwError, Observable } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
