import React, {useState} from 'react';
import { connect } from 'react-redux';
import {createTodo} from './actions'
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const {inputValue, setInputValue} = useState("");

  return (
    <div className="new-todo-form">
      <input className="new-todo-input" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder="New Todo Here!"/>
      <button className="new-todo-button" onClick={
        ()=>{
          const isDuplicateText = todos.some(todo => todo.text === inputValue);
          if (!isDuplicateText){
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}>
          To Do</button>
    </div>
  );
}

//State in this case is the entire Redux state
//mapStateToProps takes the state stuff and maps it to this component's props
const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: text=>dispatch(createTodo(text))
});

//connect is a higher order function: Returns a new 'Redux-Connected' component of the second argument
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);