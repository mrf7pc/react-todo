import React, { Component }from 'react';
import './App.css';
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from 'uuid'
import update from 'immutability-helper'

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
  }*/

  state={
    todos:[],
    id:uuid(),
    item:'',
    editItem:false,
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
    const filteredItems=this.state.todos.filter(item => item.id !== id)
    this.setState({
      todos:filteredItems
    })
  }

  handleEdit = (id)=> {
    const filteredItems=this.state.todos.filter(item => item.id !== id)
    const selectedItem=this.state.todos.find(item => item.id === id)
    this.setState({
      todos:filteredItems,
      item:selectedItem.title,
      editItem:true,
      id:id
    })
  }

  moveItem = (dragIndex, hoverIndex) => {
    const { todos } = this.state
    const dragItem = todos[dragIndex]

    this.setState(
      update(this.state, {
        todos: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragItem]],
        },
      }),
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} addTodo={this.addTodo} editItem={this.state.editItem}/>
            <TodoList todos={this.state.todos} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} moveItem={this.moveItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
