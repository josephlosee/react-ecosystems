import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({todo, onRemovePressed}) => {
  return <div className="todo-item-container">
    <h3>{todo}</h3>
    <div className="todo-buttons-container">
      <button className="completed-button">Mark as Completed</button>
      <button clasName="remove-button" onClick={()=>onRemovePressed(todo.text)}>Remove</button>
      </div>
    </div>;
}

export default TodoListItem;