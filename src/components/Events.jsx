import React, { Component } from 'react'

export default class Events extends Component {
    constructor(){
    super()
    this.state={userName:null}
    }

    componentDidMount()
    {
        let inp =document.querySelector("input")
        inp.addEventListener("keypress",()=>{
            this.setState({userName:inp.value})
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <input type="text" placeholder='enter name' />
      </div>
    )
  }
}
