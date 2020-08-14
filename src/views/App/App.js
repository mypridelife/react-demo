import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import TodoList from "../TodoList/TodoList"
import todoReducer from "../TodoList/reducer"

// create store
const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(() => console.log("store", store.getState()))

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
}
export default App
