import React, { Component, createRef } from 'react'

export default class Refscbc extends Component {
    constructor(){
        super()
        this.state={company: "qspider"}
        this.divRef=createRef()
    }
    changeCompany=()=>{

        this.setState({ company: "jjspider"})
        
        this.divRef.current.style.color="red"

    }
  render() {
    return (
        <>
      <div ref={this.divRef}>{this.state.company}</div>
      <button onClick={this.changeCompany} >CHANGE</button>
      </>
    )
  }
}
