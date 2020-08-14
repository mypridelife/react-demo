import React, { Component } from "react"
import ToDo from "./ToDo"
import FlavorForm from "./FlavorForm"

class ExampleIndex extends Component {
  render() {
    return (
      <div>
        <ToDo />
        <FlavorForm />
      </div>
    )
  }
}

export default ExampleIndex
