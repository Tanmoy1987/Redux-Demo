import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ADD_TODO, REMOVE_TODO } from '../action';
import { todo } from 'src/app/model/todo';
import { ToDoService } from 'src/app/service/to-do.service';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'toDoList',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  //todoItems: todo[] = [];
  @select((s:IAppState) => s.tasking.todoList) todoList: any;
  constructor(private ngRedux: NgRedux<IAppState>
        ,private service: ToDoService) { }

  ngOnInit(): void {
    /*this.service.getAll()
    .subscribe((data) => {
      this.todoItems = data;
    });*/
  }

  addItem(el: HTMLInputElement): void {
    //let newItem: todo= {id: 1, name: el.value};
    this.ngRedux.dispatch({type: ADD_TODO, value: el.value});
    /*this.service.create(newItem)
      .subscribe((result: any) =>{
        if(result) {
         
          //this.todoItems.push({id: result.id, name: result.name});
        }
      });*/
    el.value = "";
  }

  removeItem(todoItem: todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, value: todoItem.id});
    /*let item = this.todoItems.indexOf(todoItem, 0);
    if(item > -1) {
      this.service.delete(todoItem.id)
      .subscribe(() => {
        this.todoItems.splice(item, 1);
      });
    }*/
  }
}
