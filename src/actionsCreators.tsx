import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actions';

export const addTodoItem = ({ itemId, inputValue }: { itemId: number, inputValue: string }) => ({
    type: ADD_TODO_ITEM,
    payload: {
        id: itemId,
        value: inputValue
    }
});

export const deleteTodoItem = ({ id }: { id: number }) => ({
    type: DELETE_TODO_ITEM,
    payload: {
        id: id
    }
});
