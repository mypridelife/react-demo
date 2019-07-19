import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Game from './squares/index'
import SignIn from './blog/index'
import 'typeface-roboto'

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
      </div>
    </Router>
  )
}

ReactDOM.render(<AppRouter />, document.getElementById('root'))
