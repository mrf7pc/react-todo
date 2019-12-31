import React from 'react';
import './App.css';
import Header from './components/header'
import TodoInput from './components/todoInput'

function App() {
  return (
    <div className="App">
      <div className="todo-wrapper">
        <Header />
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
