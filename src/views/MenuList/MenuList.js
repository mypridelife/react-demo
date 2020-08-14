import React from "react"
import { Link } from "react-router-dom"
import "./MenuList.scss"

const MenuList = () => {
  return (
    <div className="p-menu-list">
      <h2>Menu</h2>

      <ul className="m-ul">
        <li>
          <Link to="/todo/list">Todo List</Link>
        </li>
        {/* <li>
          <Link to="/example/index">Example Index</Link>
        </li>
        <li>
          <Link to="/url/params">Url Params</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default MenuList
