import React from 'react'
import ReactDOM from 'react-dom'
import Characters from '../components/Characters.jsx'
import CharacteristicSelector from '../components/CharacteristicSelector.jsx'
import OptionsSelector from '../components/OptionsSelector.jsx'
import CharacterSelector from '../components/CharacterSelector.jsx'

class GameContainer extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    characteristics:['hair colour', 'eye colour', 'glasses', 'hat', 'mask' ],
    hair:['blonde', 'brown', 'ginger', 'black', 'no hair!'],
    eyes:['brown', 'green', 'blue','grey'],
    glasses:[true, false],
    hat:[true, false],
    mask:[true,false],
    winner: null,
    selectedCharacteristic: null,
    selectedOption: null,
    selectedCharacter: null,
    characters: [{name: "Bob", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/1.png'}, {name: "Claire", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/2.png'}, {name: "Fiona", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat: false, mask: 'false', img:'../img/3.png'}, {name: "Suzy", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/4.png'}, {name: "Anne", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/5.png'}, {name: "Andy", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/6.png'}, {name: "Nick", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/7.png'}, {name: "Cat", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/8.png'}, {name: "Gail", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/9.png'}, {name: "Mike", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/10.png'}, {name: "Simon", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/11.png'}, {name: "Adam", hairColour: 'no hair', eyeColour: 'blue', glasses:true, hat:false, mask: 'false', img:'../img/12.png'}]
    }
  }



setSelectedCharacteristic(characteristic){
  this.setState({selectedCharacteristic: characteristic})
}

setSelectedOption(option){
  this.setState({selectedOption: option})
}

setSelectedCharacter(character){
  this.setState({selectedCharacter: character})
}

render(){
  return(
    <div>
      <Characters characters = {this.state.characters}/>
      <CharacteristicSelector characteristics = {this.state.characteristics}setSelectedCharacteristic ={this.setSelectedCharacteristic.bind(this)}/>

      <OptionsSelector  selectedCharacteristic = {this.state.selectedCharacteristic} hair = {this.state.hair} eyes = {this.state.eyes} glasses = {this.state.glasses} hat= {this.state.hat} mask = {this.state.mask} setSelectedOption ={this.setSelectedOption.bind(this)}/>

      <button id ="question">Question</button>
      <button id ="guess">Guess</button>

      <CharacterSelector characters = {this.state.characters} setSelectedCharacter = {this.setSelectedCharacter.bind(this)}/>
    </div>
    )
}
}

export default GameContainer