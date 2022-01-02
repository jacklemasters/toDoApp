import React, { Component } from 'react'

class TodoList extends Component {
    componentDidUpdate() {
    this.props.inputElement.current.focus()
    }
    render() {
    return (
        <div className="todoListMain">
        <div className="text-3xl font-bold underline">Test</div>  
        <div className="flex flex-row">
            <form onSubmit={this.props.addItem}>
            <input
                className="p-4 border-2 border-sky-500 w-48 text-base h-14"
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