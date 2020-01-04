import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
    /*constructor(props) {
        super(props)
        this.state = {value: ''};
        this.handleChange=this.handleChange.bind(this);
        this.addTodo=this.addTodo.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    addTodo(todo) {
        if(todo.length > 0) { //non-empty entry
            this.props.addTodo(todo);
            this.setState({value: ''});
        }
    }

    render () {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
            </div>
        );
    }*/
    render() {
        const {item,handleChange,addTodo,editItem} = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={addTodo}> 
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="Enter a todo list item" value={item} onChange={handleChange}/>
                    </div>
                    <button type="submit" className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>{editItem ? "Edit Item" : "Add Item"}</button>
                </form>
            </div>  
        );
    }
}