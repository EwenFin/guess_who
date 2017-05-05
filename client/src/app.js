import React from 'react'
import { render } from 'react-dom'
import GameContainer from './components/GameContainer.jsx'

window.onload = () => {
  render(
    <GameContainer/>,
    document.getElementById('app')
  )
}
