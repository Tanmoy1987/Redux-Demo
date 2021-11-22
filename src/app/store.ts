import { DECREMENT, INCREMENT } from "./action"
import { tassign } from 'tassign'

export interface IAppState {
    counter: number
}
export const INITIAL_STATE: IAppState = {
    counter: 0
}

export function rootReducer(state: IAppState= INITIAL_STATE, action: any) {
    switch(action.type) {
        case INCREMENT: 
            return tassign(state, { counter: state.counter + 1 });             
        case DECREMENT:
            return tassign(state, { counter: state.counter - 1 });
    }
    return state ?? INITIAL_STATE;
}

//Object.assign({}, state, { counter: state== undefined ? 0 : state.counter + 1 });
//{ counter: state== undefined ? 0 : state.counter + 1 } 