import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { REMOVEALL_TODO } from '../action';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'toDoDashboard',
  templateUrl: './to-do-dashboard.component.html',
  styleUrls: ['./to-do-dashboard.component.css']
})
export class ToDoDashboardComponent implements OnInit {
  @select((s: IAppState) => s.tasking.todoList.length) todoItemCount: any
  @select((s: IAppState) => s.tasking.lastUpdateDate) lastUpdateDate: any;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  removeAll(){ 
    this.ngRedux.dispatch({type: REMOVEALL_TODO });
  }
}
