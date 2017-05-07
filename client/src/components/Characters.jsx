import React from 'react';
import ReactDOM from 'react-dom'
// import Card from './Card.jsx'

class Characters extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){

    const characters = this.props.characters.map((character, index) => {
    return <button value={index} key={index} onClick = { ()  => console.log(character.name + "clicked")}><img src = {character.img}/>{character.name}</button>
  })


    return(
      <div>
      {characters}
      </div>
      )
      }
      
  }

export default Characters

