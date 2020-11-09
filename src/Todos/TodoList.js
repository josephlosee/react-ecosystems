import React from 'react';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import {removeTodo} from './actions';
import TodoListItem from './TodoListItem';
import './TodoListItem.css';

const TodoList = ({todos = [], onRemovePressed}) => {
  return (<div className="list-wrapper">
    <NewTodoForm/>
    { todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>)}
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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);