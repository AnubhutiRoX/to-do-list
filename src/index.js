import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialTodoItems = [
  {id: '1', todoItem: 'Learn React'},
  {id: '2', todoItem: 'Buy Grocery'},
  {id: '3', todoItem: 'Learn Angular'},
  {id: '4', todoItem: 'Learn Microservice'}
]

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,
  document.getElementById('root')
);
