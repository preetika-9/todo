import React from 'react';
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos ]= useState([
    {id: 1, text: "Exercise", done: false},
    {id: 2, text: "Study", done: false},
    {id: 3, text: "Wash Clothes", done: false},
  ])



  return (
    <div className="App">
      <h1>Todo List</h1>

      <TodoList todos={todos} setTodos={setTodos}/> {/* component within single tag*/}
      <AddTodo setTodos={setTodos}/>
    { /* <DeleteTodo setTodos={setTodos}/> */}
    </div>
  );
}






export default App;
