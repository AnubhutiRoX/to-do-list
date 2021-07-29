export const ToDoItem = ({item, onRemove}) => {

    const removeToDoHandler = () => {
        onRemove(item.id);
    };

    return (
        <li>
            {item.todoItem} <button onClick={removeToDoHandler}> Remove </button>
        </li>
    );
}