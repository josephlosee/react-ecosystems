import React from 'react';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import {markTodoAsCompleted, removeTodo} from './actions';
import TodoListItem from './TodoListItem';
import './TodoListItem.css';

const TodoList = ({todos = [], onRemovePressed, onCompletedPressed}) => {
  return (<div className="list-wrapper">
    <NewTodoForm/>
    { todos.map(todo => 
      <TodoListItem 
        todo={todo} 
        onRemovePressed={onRemovePressed} 
        onCompletedPressed={onCompletedPressed}/>)}
  </div>
  );
}

const mapStateToProps = state => {
  return { todos: state.todos };
}

const mapDispatchToProps = dispatch => {
  return { 
    onRemovePressed: (text) => {
      return dispatch(removeTodo(text))
    },
    onCompletedPressed: (text) =>  {
      return dispatch(markTodoAsCompleted(text))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);