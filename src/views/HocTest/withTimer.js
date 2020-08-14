import React from "react"

export default function withTimer(WrappedComponent) {
  return class extends React.Component {
    state = { time: new Date(), inputMsg: "", messages: [] }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
      clearInterval(this.timerID)
    }

    tick() {
      this.setState({
        time: new Date(),
      })
    }

    handleInput = (evt) => {
      this.setState({
        inputMsg: evt.target.value,
      })
    }
    handleSend = () => {
      const text = this.state.inputMsg

      if (text) {
        const newMessages = [...this.state.messages, text]
        this.setState({
          messages: newMessages,
          inputMsg: "",
        })
      }
    }
    render() {
      return (
        <WrappedComponent
          time={this.state.time}
          inputMsg={this.state.inputMsg}
          messages={this.state.messages}
          handleInput={this.handleInput}
          handleSend={this.handleSend}
          {...this.props}
        />
      )
    }
  }
}
