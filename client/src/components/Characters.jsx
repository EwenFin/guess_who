import React from 'react';
import ReactDOM from 'react-dom'
// import Card from './Card.jsx'

class Characters extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      characters: [{name: "Bob", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/1.png'}, {name: "Leon", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/2.png'}, {name: "Mark", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/3.png'}, {name: "John", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/4.png'}, {name: "Rob", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/5.png'} ]

    }
  }

  render(){

    const characters = this.state.characters.map((character, index) => {
    return <button value={index} key={index} onClick = { ()  => console.log(character.name + "clicked")}><img src = {character.img}/></button>
  })


    return(
      <div>
      {characters}
      </div>
      )
      }
      
  }

export default Characters

