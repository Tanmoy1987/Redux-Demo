import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgRedux, NgReduxModule} from '@angular-redux/store'
import { AppRoutingModule } from './app-routing.module';
import { MessagingModule } from './messaging/messaging.module';
import { TaskingModule } from './tasking/tasking.module';

import { AppComponent } from './app.component';
import { IAppState, INITIAL_STATE, rootReducer } from './store';
import { ToDoService } from './service/to-do.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule,
    MessagingModule,
    TaskingModule
  ],
  providers: [ ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
