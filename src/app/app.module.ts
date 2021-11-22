import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgRedux, NgReduxModule} from '@angular-redux/store'
import { AppRoutingModule } from './app-routing.module';
import { MessagingModule } from './messaging/messaging.module';

import { AppComponent } from './app.component';
import { IAppState, INITIAL_STATE, rootReducer } from './store';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    MessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
