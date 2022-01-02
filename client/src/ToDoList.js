import React, { Component } from 'react'

class TodoList extends Component {
    componentDidUpdate() {
    this.props.inputElement.current.focus()
    }
    render() {
    return (
        <div className="todoListMain">
        <nav className="flex bg-sky-700 mb-8"> 
            <ul className="flex flex-grid m-4 font-bold text-lg">
                <h1 className="pr-96">React toDo App</h1>
                <li className="pr-12 pl-96"><a href="#home">Home</a></li>
                <li className="pr-12"><a href="#Login">Login</a></li>
            </ul>
        </nav>  
        <div className="flex flex-row">
            <form onSubmit={this.props.addItem}>
            <input
                className="p-4 border-2 border-sky-500 w-48 text-base h-14 mb-4"
                placeholder="Task"
                ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
            />
            <button className="p-2 border-2 border-red-700 bg-red-500 w-24 h-14" type="submit"> Add Task </button>
            </form>
        </div>
        </div>
    )
    }
}

export default TodoList