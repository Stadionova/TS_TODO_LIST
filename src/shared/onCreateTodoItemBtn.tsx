import { store } from "..";
import { addTodoItem } from "../reducer/actionsCreators";

export const onCreateTodoItemBtn = (
  inputValue: string,
  itemId: number,
  setNextItemId: (itemId: number) => void,
  setInputValue: (inputValue: string) => void
) => {
  if (inputValue !== "") {
    store.dispatch(addTodoItem({ itemId, inputValue }));
    setNextItemId(itemId + 1);
    setInputValue("");
  }
};
