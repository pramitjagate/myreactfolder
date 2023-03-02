import React, { Component } from 'react'
import "./global.css"
import Counter from './countercomponent/Counter'
import Faker from './Faker'
import Toast from './Toast'
import Hooks from './Hooks';
import Counter1 from './Counter1'
import Events from './components/Events';
import Refscbc from './Refscbc'
import Playpause from './Playpause'
import Refsfbc from './Refsfbc'
import Conditionalrendering from './Conditionalrendering'
import Box from './UIform/Box'
import Box2 from './UIform/Box2'
import Controlledformcbc from './forms/Controlledformcbc'
import Controlformfbc from './forms/Controlformfbc'

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Box />
        <Box2 /> */}
        {/* <Controlledformcbc /> */}
        <Controlformfbc />

      </>
    )
  }
}
