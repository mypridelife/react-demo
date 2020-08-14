import { combineReducers } from "redux"
// add Reducer
export const addReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ONE":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.done = action.checked
        }
        return todo
      })
    case "CLEAR":
      return []
    default:
      return state
  }
}
export const addOne = (item) => {
  return {
    type: "ADD_ONE",
    ...item,
  }
}
export const toggleTodo = (item) => {
  return {
    type: "TOGGLE_TODO",
    ...item,
  }
}
export const clearItems = () => {
  return {
    type: "CLEAR",
  }
}
// filter Reducer
export const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case "SET_FILTER":
      console.log("filterReducer", action)
      return action.filterType
    default:
      return state
  }
}
export const setFilter = (item) => {
  console.log("setFilter", item)

  return {
    type: "SET_FILTER",
    ...item,
  }
}

const todoReducer = combineReducers({
  items: addReducer,
  filterType: filterReducer,
})
export default todoReducer
