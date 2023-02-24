import React, { Component } from 'react'
import { faker } from '@faker-js/faker';

export default class Faker extends Component {

  constructor(){
    super()
    this.state = {
      data: faker.image.avatar()
    }
  }

  handleChange=()=>{
    this.setState({
      data: faker.image.avatar()
    })
  }
  render() {
    return (
      <div>
        <img src={this.state.data} alt="" /> <br />
      <button onClick={this.handleChange}>CHANGE IMAGE</button>
      </div>
    )
    
  }
}
