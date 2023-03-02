import React, { Component } from 'react'

export default class Controlledformcbc extends Component {
    constructor(){
        super()
        this.state={
            userName:"",
            password:""
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let userName=this.state.userName
        let password=this.state.password
        console.log({userName,password});
    }
  render() {
    return (
      <div>
        <form action="">
            <label htmlFor="userName">USERNAME:</label>
            <input type="text" id='userName' onChange={(e)=>{
                this.setState({userName:e.target.value})
            }}/>
            <br />
            <label htmlFor="password">PASSWORD: </label>
            <input type="text" id='password' onChange={(e)=>{
                this.setState({password:e.target.value})
            }}/>
            <br />
            <button onClick={this.handleSubmit}>SUBMIT</button>
        </form>


      </div>
    )
  }
}
