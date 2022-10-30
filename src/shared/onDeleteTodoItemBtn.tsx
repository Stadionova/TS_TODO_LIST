import { store } from "..";
import { addTodoItem, deleteTodoItem } from "../reducer/actionsCreators";

export const onDeleteTodoItemBtn = (
  id: number,
  itemId: number,
  setNextItemId: (itemId: number) => void,
  setInputValue: (inputValue: string) => void
) => {
  store.dispatch(deleteTodoItem({ id }));
  setNextItemId(itemId - 1);
  setInputValue("");
};
