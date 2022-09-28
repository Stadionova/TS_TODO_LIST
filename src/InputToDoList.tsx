import { useState } from 'react';
import { store } from '.';
import { addTodoItem, deleteTodoItem } from './actionsCreators';
import cn from './App.module.scss';

export const InputToDoList = ({ title }: { title: string }) => {
    const todoItems = store.getState();
    const [inputValue, setInputValue] = useState<string>('');
    const [itemId, setNextItemId] = useState<number>(0);
    const onCreateTodoItemBtn = () => {
        if (inputValue !== '') {
            store.dispatch(addTodoItem({ itemId, inputValue }));
            setNextItemId(itemId + 1);
            setInputValue('');
        }
    }
    const onDeleteTodoItemBtn = (id: number) => {
        store.dispatch(deleteTodoItem({ id }));
        setNextItemId(itemId - 1);
        setInputValue('');
    }
    return (
        <div className={cn.todoList}>
            <h1 className={cn.title}>{title}</h1>
            <input onChange={(e) => setInputValue(e.target.value)} key={itemId} value={inputValue} placeholder='type your todo item' />
            <button onClick={onCreateTodoItemBtn}>click on me to keep your item</button>
            {
                todoItems.map((item) => {
                    return (
                        <div key={item.id} className={cn.itemElem}>
                            <div className={cn.item}>{item.value}</div>
                            <div className={cn.cross} onClick={() => onDeleteTodoItemBtn(item.id)}>x</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
