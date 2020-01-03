import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from 'uuid'

class App extends Component {
  /*constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "Make dinner tonight!"},
        {id: 1, text: "Fold the laundry."},
        {id: 2, text: "Learn how to make a React App!"}
      ],
      nextId: 3
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id != id)
    })
  }*/

  state={
    todos:[],
    id:uuid(),
    item:'',
    editItem:false
  }

  handleChange = (e)=> { //no binding?
    this.setState({
      item:e.target.value
    })
  }

  addTodo = (e)=> {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }

    const updatedItems = [...this.state.todos, newItem] //takes all elements in todos, adds newItem, and puts it into updated list

    this.setState({
      todos:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })
  }

  clearList = ()=> {
    this.setState({
      todos:[]
    })
  }

  handleDelete = (id)=> {
    const filteredItems=this.state.todos.filter(item => item.id != id)
    this.setState({
      todos:filteredItems
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} addTodo={this.addTodo}/>
            <TodoList todos={this.state.todos} clearList={this.clearList} handleDelete={this.handleDelete}/>
          </div>
        </div>
      </div>
    );
  }

  /*render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <h2>React Todos</h2>
          <TodoInput/>
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }*/
}

export default App;
