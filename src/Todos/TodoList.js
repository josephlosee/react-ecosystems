import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoListItem.css';

const TodoList = ({todos = ["Hello", "Agrajag"]}) => {
  return (<div className="list-wrapper">
    <NewTodoForm/>
    { todos.map(todo => <TodoListItem todo={todo}/>)}
  </div>
  );
}

export default TodoList;