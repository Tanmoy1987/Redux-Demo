import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { DECREMENT, INCREMENT } from '../../action'
import { IAppState } from '../../store';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @select('counter') countOfClick: any;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  Increment() {
    this.ngRedux.dispatch({type: INCREMENT});
  }
  Decrement() {
    this.ngRedux.dispatch({type: DECREMENT });
  }

}
