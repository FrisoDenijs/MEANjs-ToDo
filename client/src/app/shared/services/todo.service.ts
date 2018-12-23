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

  details(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  list() {
    return this.http.get(this.baseUrl);
  }

  update(todo: Todo) {
    return this.http.put(`${this.baseUrl}/${todo._id}`, todo);
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
