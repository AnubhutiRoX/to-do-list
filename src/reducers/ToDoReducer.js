import {ADD_TODO_ITEM, REMOVE_TODO_ITEM} from '../actions/types';

export default function(state=[], action) {
    switch(action.type) {
        case ADD_TODO_ITEM:
            return [...state, action.payload];
        case REMOVE_TODO_ITEM:
            const updatedState = state.filter(item => item.id!==action.payload);
            return updatedState;
        default:
            return state;
    }
}