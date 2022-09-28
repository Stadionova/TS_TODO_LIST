import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actions';

interface Item {
    id: number,
    value: string
}

interface Action {
    type: string;
    payload: Item;
}

const initialState: Item[] = [];

export const todoItemsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return [...state, action.payload];
        case DELETE_TODO_ITEM:
            return state.filter((state: { id: any; }) => state.id !== action.payload.id);
        default:
            return state;
    }
}
