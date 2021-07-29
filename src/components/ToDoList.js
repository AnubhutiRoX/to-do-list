import {ToDoItem} from './ToDoItem';

export const ToDoList = ({todoItems, onRemove}) => {
    return (
        <ul>
            {todoItems.map(item => {
                return (
                    <ToDoItem key={item.id} item={item} onRemove={onRemove} />
                )
            })}
        </ul>
    );
}