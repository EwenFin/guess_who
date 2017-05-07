import React from 'react';
import ReactDOM from 'react-dom'

class CharacterSelector extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCharacter: ""
      
    }
  }

  render(){

    const characters = this.props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  })


    return(
      <select id="characters" value={this.state.selectedCharacter} onChange = {this.handleChange}> 
      {characters}
      </select>
      )
      }
      
  }

export default CharacterSelector