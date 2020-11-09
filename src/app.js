import {hot} from 'react-hot-loader';
import React from 'react';
import './App.css';
import TodoList from './Todos/TodoList';

const App = () => (
    <div className="App">
        <TodoList/>
    </div>
);

export default hot(module)(App);