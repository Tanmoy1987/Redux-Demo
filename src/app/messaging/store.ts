import { DECREMENT, INCREMENT } from "./action"
import { tassign } from 'tassign'

export interface IMessagingState {
    newMessages: number
}

export const MESSAGING_INITIAL_STATE: IMessagingState = {
    newMessages: 0
}

function increment(state: IMessagingState): IMessagingState{
    return tassign(state, { newMessages: state.newMessages + 1 }); 
}
function decrement(state: IMessagingState): IMessagingState{
    return tassign(state, { newMessages: state.newMessages - 1 }); 
}

export function messagingReducer(state: IMessagingState= MESSAGING_INITIAL_STATE, action: any) {
    switch(action.type) {
        case INCREMENT: 
            return increment(state);            
        case DECREMENT:
            return decrement(state);
    }
    return state ?? MESSAGING_INITIAL_STATE;
}

//Object.assign({}, state, { counter: state== undefined ? 0 : state.counter + 1 });
//{ counter: state== undefined ? 0 : state.counter + 1 } 