import React from "react"
import { HashRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

function UrlParams() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/url/params/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/url/params/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/url/params/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/url/params/modus-create">Modus Create</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/url/params/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  )
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams()

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  )
}

export default UrlParams
