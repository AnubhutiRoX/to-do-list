import {connect} from 'react-redux';
import { ToDoList } from "./components/ToDoList";
import {AddToDo} from './components/AddToDo';
import * as actions from './actions';
import {useStore} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'

const initialTodoItems = [
  {id: '1', todoItem: 'Learn React'},
  {id: '2', todoItem: 'Buy Grocery'},
  {id: '3', todoItem: 'Learn Angular'},
  {id: '4', todoItem: 'Learn Microservice'}
]

const App = (props) => {
  const dispatch = useDispatch()

  // const [todoItems, setToDoItems] = useState(props.initialTodoItems);
  const addHandler = (item) => {
    console.log('addHandler-', {id: Math.random(), todoItem: item});
    dispatch(actions.AddToDo({id: Math.random(), todoItem: item}));
    // setToDoItems([...todoItems, {id: Math.random(), todoItem: item}]);
  }

  const onRemove = (id) => {
    // setToDoItems(todoItems.filter(item => item.id!==id));
    dispatch(actions.RemoveToDo(id));
  }

  return (
    <div className="App">
      <AddToDo onAdd={addHandler} />
      <ToDoList todoItems={props.todoItems} onRemove={onRemove} />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('state.toDoItems-', state.toDoItems);
  return {
    todoItems: state.toDoItems
  };
}

export default connect(mapStateToProps, actions)(App);
