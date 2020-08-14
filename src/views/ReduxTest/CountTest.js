import React, { Component } from "react"
import { connect, Provider } from "react-redux"
import { bindActionCreators, createStore, combineReducers } from "redux"

// count Reducer
const countReducer = function (state = { count: 0 }, action) {
  switch (action.type) {
    case "PLUS_ONE":
      return { count: state.count + 1 }
    case "MINUS_ONE":
      return { count: state.count - 1 }

    default:
      return state
  }
}
// actions
function plusOne() {
  return {
    type: "PLUS_ONE",
  }
}
function minusOne() {
  return {
    type: "MINUS_ONE",
  }
}

// component
export class CountComponent extends Component {
  render() {
    const { count, plusOne, minusOne } = this.props
    return (
      <div
        style={{
          padding: "40px",
        }}
      >
        <button
          style={{
            width: "120px",
            height: "40px",
            fontSize: "28px",
            backgroundColor: "#e0e1e2",
            border: "none",
          }}
          onClick={plusOne}
        >
          +
        </button>
        <span
          style={{
            margin: "20px",
          }}
        >
          {count}
        </span>
        <button
          style={{
            width: "120px",
            height: "40px",
            fontSize: "28px",
            backgroundColor: "#e0e1e2",
            border: "none",
          }}
          onClick={minusOne}
        >
          -
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.countStore.count,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ plusOne, minusOne }, dispatch)
}

const ConnectedCount = connect(mapStateToProps, mapDispatchToProps)(CountComponent)

// todo reducer
const todoReducer = (state = {}) => state

// create store
const store = createStore(
  combineReducers({
    todoStore: todoReducer,
    countStore: countReducer,
  })
)
store.subscribe(() => console.log("store", store.getState()))

// use
export default class CountTest extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCount />
      </Provider>
    )
  }
}
