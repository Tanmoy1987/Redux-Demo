import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { IAppState } from 'src/app/store';
import { DECREMENT, INCREMENT } from '../action'


@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @select((s: IAppState) => s.messaging.newMessages) newMessages: any;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  Increment() {
    this.ngRedux.dispatch({type: INCREMENT});
  }
  Decrement() {
    this.ngRedux.dispatch({type: DECREMENT });
  }

}
