import { ADD_TODO, REMOVEALL_TODO, REMOVE_TODO } from "./action"
import { tassign } from 'tassign'
import { todo } from '../model/todo';

export interface ITaskingState {
    todoList: todo[],
    lastUpdateDate: Date
}

export const TASKING_INITIAL_STATE: ITaskingState = {
    todoList: [],
    lastUpdateDate: new Date(0),
}

function addTodo(state: ITaskingState, action: any): ITaskingState {
    let newItem: todo= {id: state.todoList.length + 1, name: action.value};
    return tassign(state, { todoList: state.todoList.concat(newItem), lastUpdateDate: new Date() });
}
function removeTodo(state: ITaskingState, action: any): ITaskingState {
    return tassign(state, { todoList: state.todoList.filter(t => t.id !== action.value), lastUpdateDate: new Date() });
}
function removeAllTodo(state: ITaskingState, action: any): ITaskingState {
    return tassign(state, { todoList: new Array(0), lastUpdateDate: new Date() });
}

export function taskingReducer(state: ITaskingState= TASKING_INITIAL_STATE, action: any) {
    switch(action.type) {
        case ADD_TODO: 
            return addTodo(state, action);
        case REMOVE_TODO: 
            return removeTodo(state, action);
        case REMOVEALL_TODO: 
            return removeAllTodo(state, action);
    }
    return state ?? TASKING_INITIAL_STATE;
}

//Object.assign({}, state, { counter: state== undefined ? 0 : state.counter + 1 });
//{ counter: state== undefined ? 0 : state.counter + 1 } 