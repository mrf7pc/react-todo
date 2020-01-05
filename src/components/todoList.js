import React from 'react';
import './todoList.css';
import TodoItem from './todoItem';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export default class TodoList extends React.Component {
    render() {
        const {todos,clearList,handleDelete,handleEdit,moveItem} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-center">Todo List</h3>
                <DndProvider backend={HTML5Backend}>
                {todos.map((item, i) => {
                    return <TodoItem key={item.id} title={item.title} handleDelete={()=> handleDelete(item.id)} handleEdit={()=> handleEdit(item.id)} moveItem={moveItem} index={i} id={item.id}/>
                })}
                </DndProvider>
                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>Clear List</button>
            </ul>
        );
    }
}