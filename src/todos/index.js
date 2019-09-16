import React from 'react'

import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'

const Todos = () => {
  return (
    <div>
      <AddTodo></AddTodo>
      <VisibleTodoList></VisibleTodoList>
      <Footer></Footer>
    </div>
  )
}

export default Todos
