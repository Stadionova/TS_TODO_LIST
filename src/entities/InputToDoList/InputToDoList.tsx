import { useState } from "react";
import { store } from "../..";
import cn from "./InputToDoList.module.scss";
import { onCreateTodoItemBtn } from "../../shared/onCreateTodoItemBtn";
import { onDeleteTodoItemBtn } from "../../shared/onDeleteTodoItemBtn";

export const InputToDoList = ({ title }: { title: string }) => {
  const todoItems = store.getState();
  const [inputValue, setInputValue] = useState<string>("");
  const [itemId, setNextItemId] = useState<number>(0);
  return (
    <div className={cn.todoList}>
      <h1 className={cn.title}>{title}</h1>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        key={itemId}
        value={inputValue}
        placeholder="type your todo item"
      />
      <button
        onClick={() =>
          onCreateTodoItemBtn(inputValue, itemId, setNextItemId, setInputValue)
        }
      >
        click on me to keep your item
      </button>
      {todoItems.map((item) => {
        return (
          <div key={item.id} className={cn.itemElem}>
            <div className={cn.item}>{item.value}</div>
            <div
              className={cn.cross}
              onClick={() =>
                onDeleteTodoItemBtn(
                  item.id,
                  itemId,
                  setNextItemId,
                  setInputValue
                )
              }
            >
              x
            </div>
          </div>
        );
      })}
    </div>
  );
};
