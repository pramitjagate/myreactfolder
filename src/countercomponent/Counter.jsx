import React, { Component } from 'react'

export default class Counter extends Component {
    constructor()
    {
        super()
        this.state={counter:0}
    }


    handleIncrement=()=>{
        this.setState({counter :this.state.counter+1})
    }
    handleDecrement=()=>{
        this.setState({counter :this.state.counter-1})
    }
    handleReset=()=>{
        this.setState({counter :0})
    }
  render() {
    return (
    <div id='mainBlock'>
      <div id='main'>
        <nav></nav>
        <div id='upper'><h1>{this.state.counter}</h1></div>
        <div id='lower'>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleReset}>RESET</button>
        </div>
      </div>
     </div>
    )
  }
}
