import React from 'react';
import './todoList.css';
import TodoItem from './todoItem';

export default class TodoList extends React.Component {
    render() {
        const {todos,clearList,handleDelete,handleEdit} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-center">Todo List</h3>
                {todos.map(item => {
                    return <TodoItem key={item.id} title={item.title} handleDelete={()=> handleDelete(item.id)} handleEdit={()=> handleEdit(item.id)}/>
                })}
                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>Clear List</button>
            </ul>
        );
    }
}