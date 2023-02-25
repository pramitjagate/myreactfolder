import React, { Component } from 'react'
import "./global.css"
import Counter from './countercomponent/Counter'
import Faker from './Faker'
import Toast from './Toast'
import Hooks from './Hooks';
import Counter1 from './Counter1'
import Events from './components/Events';

export default class App extends Component {
  render() {
    return (
      <>
        <Events />
      </>
    )
  }
}
