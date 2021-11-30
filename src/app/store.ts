import { combineReducers } from "redux";
import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from "./messaging/store";
import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';

export interface IAppState {
    tasking: ITaskingState,
    messaging: IMessagingState
}
export const INITIAL_STATE: IAppState = {
    tasking: TASKING_INITIAL_STATE,
    messaging: MESSAGING_INITIAL_STATE
}
export const rootReducer = combineReducers({
    tasking: taskingReducer,
    messaging: messagingReducer
});
/*
export function rootReducer(state: IAppState= INITIAL_STATE, action: any) {
    return state ?? INITIAL_STATE;
}*/

//Object.assign({}, state, { counter: state== undefined ? 0 : state.counter + 1 });
//{ counter: state== undefined ? 0 : state.counter + 1 } 