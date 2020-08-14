import React from "react"
// import MenuList from "../MenuList/MenuList"
// import ExampleIndex from "../example/ExampleIndex"
// import UrlParams from "../UrlParams/UrlParams"
import TodoList from "../TodoList/TodoList"
import CountTest from "../ReduxTest/CountTest"

import { HashRouter as Router, Switch, Route } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* exact 精确匹配 */}
          {/* <Route exact path="/" children={<MenuList />} /> */}
          <Route path="/todo/list" children={<TodoList />} />
          <Route path="/redux/count" children={<CountTest />} />
          {/* <Route path="/example/index" children={<ExampleIndex />} />
          <Route path="/url/params" children={<UrlParams />} /> */}
        </Switch>
      </Router>
    )
  }
}

export default App
