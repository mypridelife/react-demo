import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import "./TodoList.scss"

import { addOne, setFilter, clearItems, toggleTodo } from "./reducer"

class TodoList extends Component {
  constructor() {
    super()
    this.todoInput = React.createRef()
  }
  handleSubmit(e) {
    e.preventDefault()
    let text = this.todoInput.current.value
    if (text.length === 0) {
      return
    }
    this.props.addOne({
      id: Date.now(),
      text,
    })
    this.todoInput.current.value = ""
  }
  handleItemStateChange(id, checked) {
    this.props.toggleTodo({
      id,
      checked,
    })
  }
  handleFilter(filterType) {
    this.props.setFilter({ filterType })
  }
  handleClear() {
    this.props.clearItems()
  }

  render() {
    return (
      <div className="p-todo-list">
        <form onSubmit={this.handleSubmit.bind(this)} className="m-form">
          <div className="form-body">
            <label htmlFor="new-input-todo">what needs to be done?</label>
            <input id="new-input-todo" placeholder="todo" ref={this.todoInput} autoFocus />
          </div>
          <div className="form-bottom">
            <button type="submit" className="u-button">
              Add One
            </button>
          </div>
        </form>

        <div className="m-filter">
          <button
            className={(this.props.filterType === "all" ? "u-button-active" : "") + ` u-button`}
            onClick={this.handleFilter.bind(this, "all")}
          >
            All
          </button>
          <button
            className={(this.props.filterType === "done" ? "u-button-active" : "") + ` u-button`}
            onClick={this.handleFilter.bind(this, "done")}
          >
            Done
          </button>
          <button
            className={(this.props.filterType === "not" ? "u-button-active" : "") + ` u-button`}
            onClick={this.handleFilter.bind(this, "not")}
          >
            Not
          </button>
          <button className="u-button" onClick={this.handleClear.bind(this)}>
            Clear
          </button>
        </div>

        <TodoItem
          propsItems={this.props.items}
          propsItemStateChange={this.handleItemStateChange.bind(this)}
        />
      </div>
    )
  }
}

function TodoItem(props) {
  return (
    <div className="c-todo-item">
      <h2>Todo List</h2>
      <div className="ul-container">
        {props.propsItems.length > 0 ? (
          props.propsItems.map((item) => (
            <div className="li-item" key={item.id}>
              <input
                id={"checkbox" + item.id}
                className="m-switch"
                type="checkbox"
                checked={item.done}
                onChange={(e) => props.propsItemStateChange(item.id, e.target.checked)}
              />
              <label
                htmlFor={"checkbox" + item.id}
                className={item.done ? "u-text-done" : ` u-text`}
              >
                {item.text}
              </label>
            </div>
          ))
        ) : (
          <div className="li-none">None</div>
        )}
      </div>
    </div>
  )
}

const getVisibleTodos = (todos, filterType) => {
  switch (filterType) {
    case "all":
      return todos
    case "done":
      return todos.filter((t) => t.done)
    case "not":
      return todos.filter((t) => !t.done)
    default:
      throw new Error("Unknown filterType: " + filterType)
  }
}

const mapStateToProps = (state) => {
  return {
    items: getVisibleTodos(state.items, state.filterType),
    filterType: state.filterType,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addOne, toggleTodo, clearItems, setFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
