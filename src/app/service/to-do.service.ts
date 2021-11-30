import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { todo } from '../model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  url: string= "";
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3000/todoItems";
  }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  create(todoItem: todo) {
    return this.http.post(this.url, todoItem);
  }

  delete(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
}
