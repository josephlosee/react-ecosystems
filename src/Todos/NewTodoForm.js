import React, {useState} from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
  const {inputValue, setInputValue} = useState("");

  return <div className="new-todo-form">
    <input className="new-todo-input" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder="New Todo Here!"/>
    <button className="new-todo-button">To Do</button>
  </div>
}

export default NewTodoForm;