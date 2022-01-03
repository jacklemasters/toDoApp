import React, { Component } from 'react'

class TodoItems extends Component {
    createTasks = item => {
    return (
        <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
        </li>
    )
    }
    render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList font-bold text-black rounded p-4  mb-4 self-center sm:w-48 md:w-64 lg:w-72">{listItems}</ul>
    }
}

export default TodoItems