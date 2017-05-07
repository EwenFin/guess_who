import React from 'react'
import ReactDOM from 'react-dom'
import Characters from '../components/Characters.jsx'
import CharacteristicSelector from '../components/CharacteristicSelector.jsx'
import OptionsSelector from '../components/OptionsSelector.jsx'

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
    selectedOption: null
    }
  }



setSelectedCharacteristic(characteristic){
  this.setState({selectedCharacteristic: characteristic})
}

setSelectedOption(option){
  this.setState({selectedOption: option})
}

render(){
  return(
    <div>
      <Characters/>
      <CharacteristicSelector characteristics = {this.state.characteristics}setSelectedCharacteristic ={this.setSelectedCharacteristic.bind(this)}/>

      <OptionsSelector  selectedCharacteristic = {this.state.selectedCharacteristic} hair = {this.state.hair} eyes = {this.state.eyes} glasses = {this.state.glasses} hat= {this.state.hat} mask = {this.state.mask} setSelectedOption ={this.setSelectedOption.bind(this)}/>

      <button id ="question">Question</button>
      <button id ="guess">Guess</button>
    </div>
    )
}
}

export default GameContainer