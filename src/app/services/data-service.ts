import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { AppError } from '../common/app-error';
import { catchError, map, delay } from 'rxjs/operators';
import { Http } from '@angular/http';
import { throwError, Observable, pipe } from 'rxjs';

export class DataService {

  constructor(private url: string, private http: Http) { }

  fetchAll() {
    return this.http.get(this.url).pipe(
        map(response => response.json()),
        catchError(this.handleError)
    );
  }

  create(resource) {
     return this.http.post(this.url, JSON.stringify(resource)).pipe(
        map(response => response.json()),
        catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead : true})).pipe(
        map(response => response.json()),
        catchError(this.handleError)
    );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    } else if (error.status === 404) {
      console.log(error);
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
