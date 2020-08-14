import React from "react"
import withTimer from "../c06/withTimer"

const MessageList = function (props) {
  return (
    <ul>
      {props.messages.map((msg) => (
        <li key={msg}>{msg}</li>
      ))}
    </ul>
  )
}

const ChatApp = function (props) {
  return (
    <div>
      <MessageList messages={props.messages} />
      <div>
        <input value={props.inputMsg} onChange={props.handleInput} />
        <button onClick={props.handleSend}>Send</button>
      </div>
      <h2>{props.time.toLocaleString()}</h2>
    </div>
  )
}

export default withTimer(ChatApp)
