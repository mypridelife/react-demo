import React, { Component } from "react"
import "./TodoList.scss"
class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      items: (localStorage.getItem("items") && JSON.parse(localStorage.getItem("items"))) || [],
      text: "",
      filter: "all",
    }
  }
  componentDidUpdate() {
    localStorage.setItem("items", JSON.stringify(this.state.items))
  }
  handleInputChange(e) {
    this.setState({
      text: e.target.value,
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.text.length === 0) {
      return
    }
    const newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false,
    }
    this.setState({
      items: [...this.state.items, newItem],
      text: "",
    })
  }
  handleItemStateChange(id, checked) {
    const temps = this.state.items.map((item) => {
      if (item.id === id) {
        item.done = checked
      }
      return item
    })
    this.setState({
      items: temps,
    })
  }
  setFilter(filter) {
    this.setState({
      filter,
    })
  }
  filterItems() {
    console.log("filterItems")

    let temp
    if (this.state.filter === "done") {
      temp = this.state.items.filter((item) => {
        return item.done
      })
      console.log("temp", temp)
    } else if (this.state.filter === "not") {
      temp = this.state.items.filter((item) => {
        return !item.done
      })
      console.log("not temp", temp)
    } else {
      temp = this.state.items
    }
    return temp
  }
  handleClear() {
    this.setState({
      items: [],
    })
  }

  render() {
    return (
      <div className="p-todo-list">
        <form onSubmit={this.handleSubmit.bind(this)} className="m-form">
          <div className="form-body">
            <label htmlFor="new-input-todo">what needs to be done?</label>
            <input
              id="new-input-todo"
              name="input-todo"
              value={this.state.text}
              onChange={this.handleInputChange.bind(this)}
              placeholder="todo"
              autoFocus
            />
          </div>
          <div className="form-bottom">
            <button type="submit" className="u-button">
              Add One
            </button>
          </div>
        </form>

        <div className="m-filter">
          <button
            className={(this.state.filter === "all" ? "u-button-active" : "") + ` u-button`}
            onClick={this.setFilter.bind(this, "all")}
          >
            All
          </button>
          <button
            className={(this.state.filter === "done" ? "u-button-active" : "") + ` u-button`}
            onClick={this.setFilter.bind(this, "done")}
          >
            Done
          </button>
          <button
            className={(this.state.filter === "not" ? "u-button-active" : "") + ` u-button`}
            onClick={this.setFilter.bind(this, "not")}
          >
            Not
          </button>
          <button className="u-button" onClick={this.handleClear.bind(this)}>
            Clear
          </button>
        </div>

        <TodoItem
          propsItems={this.filterItems()}
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

export default TodoList
