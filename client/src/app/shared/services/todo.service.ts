import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly baseUrl = ``;
  constructor(private http: HttpClient) { }

  create(todo: Todo) {
    return this.http.post(this.baseUrl, todo);
  }


}
