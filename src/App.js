import React, { Component } from "react";
import './App.css'

export default class Counter extends Component {
  state = {
    count: 0
  };

  Add = () => {
    /*if (this.state.count < 10) {
      this.setState({
        count: this.state.count +1,
      })
    }*/
    this.state.count < 10 ? this.setState({ count: this.state.count + 1 }) : this.setState({ count: this.state.count })
  };

  Remove = () => {
    /*if (this.state.count > 0) {
      this.setState({
        count: this.state.count -1
      })
    }*/
    this.state.count > 0 ? this.setState({ count: this.state.count - 1 }) : this.setState({ count: this.state.count })
  };

  render() {
    return (
      <section>
        <h1>Este é o contador</h1>
        <div>
          <p>{this.state.count}</p>
          <button onClick={this.Add}>+1</button>
          <button onClick={this.Remove}>-1</button>
        </div>
      </section>
    )
  }
}