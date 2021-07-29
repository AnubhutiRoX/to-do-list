import {ADD_TODO_ITEM, REMOVE_TODO_ITEM} from './types';

export function AddToDo(item) {
    return {
        type: ADD_TODO_ITEM,
        payload: item
    }
}

export function RemoveToDo(id) {
    return {
        type: REMOVE_TODO_ITEM,
        payload: id
    }
}