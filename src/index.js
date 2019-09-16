import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'typeface-roboto'

import Game from './squares/index'
import SignIn from './blog/index'
import Todos from './todos/index'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game/">game</Link>
            </li>
            <li>
              <Link to="/signin/">signin</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Game} />
        <Route path="/game/" component={Game} />
        <Route path="/signin/" component={SignIn} />
        <Route path="/todos/" component={Todos} />
      </div>
    </Router>
  )
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
