import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
    /*constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render () {
        return (
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Remove</button>{this.props.todo.text}
            </div>
        );
    }*/
    render() {
        const {title,handleDelete} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        );
    }
}