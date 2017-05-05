import React from 'react'
import ReactDOM from 'react-dom'
import Board from '../components/Board.jsx'
import CharacteristicSelector from '../components/CharacteristicSelector.jsx'
import OptionsSelector from '../components/OptionsSelector.jsx'

class GameContainer extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    characteristics:['hair colour', 'eye colour', 'glasses', 'hat', 'Brexit vote' ],
    hair:['blonde', 'brown', 'ginger', 'black', 'grey'],
    eyes:['brown', 'green', 'blue','grey'],
    glasses:[true, false],
    hat:[true, false],
    Brexit:['remain','leave'],
    winner: null,
    selectedCharacteristic: null,
    selectedOption:null
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
      <CharacteristicSelector characteristics = {this.state.characteristics}setSelectedCharacteristic ={this.setSelectedCharacteristic.bind(this)}/>

      <OptionsSelector  selectedCharacteristic = {this.state.selectedCharacteristic} hair = {this.state.hair} eyes = {this.state.eyes} glasses = {this.state.glasses} hat= {this.state.hat} brexit = {this.state.Brexit} setSelectedOption ={this.setSelectedOption.bind(this)}/>
    </div>
    )
}
}

export default GameContainer