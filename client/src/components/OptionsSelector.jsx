import React from 'react'
import ReactDOM from 'react-dom'

class OptionsSelector extends React.Component {
    
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedOption: undefined,
    }
  }

  handleChange(event){
    this.setState({selectedOption: event.target.value});
    let selectedOption= null
    if(this.props.selectedCharacteristic ==='hair colour'){
      selectedOption = this.props.hair[event.target.value]
    }else if(this.props.selectedCharacteristic ==='eye colour'){
      selectedOption = this.props.eyes[event.target.value]
    }else if(this.props.selectedCharacteristic ==='glasses'){
      selectedOption = this.props.glasses[event.target.value]
    }else if(this.props.selectedCharacteristic ==='hat'){
      selectedOption = this.props.hat[event.target.value]
    }else if(this.props.selectedCharacteristic ==='mask'){
      selectedOption = this.props.mask[event.target.value]
    } 

    
    this.props.setSelectedOption(selectedOption)
    

  }

  setCharacteristicMenu(characteristic){
    this.setState({SelectedCharacteristicMenu: characteristic })
  }


  render() {
    let options = null;
    if(this.props.selectedCharacteristic ==='hair colour'){
     options = this.props.hair.map((hair, index) => {
      return <option value={index} key={index}>{hair}</option>
    })
  }else if(this.props.selectedCharacteristic ==='eye colour'){
     options = this.props.eyes.map((eyes, index) => {
      return <option value={index} key={index}>{eyes}</option>
    })
  }else if(this.props.selectedCharacteristic ==='glasses'){
     options = this.props.glasses.map((glasses, index) => {
      return <option value={index} key={index}>{glasses.toString()}</option>
    })
  }else if(this.props.selectedCharacteristic ==='hat'){
     options = this.props.hat.map((hat, index) => {
      return <option value={index} key={index}>{hat.toString()}</option>
    })
  }else if(this.props.selectedCharacteristic ==='mask'){
     options = this.props.mask.map((mask, index) => {
      return <option value={index} key={index}>{mask.toString()}</option>
    })
  }
   



    

    return (

      <select id={this.props.selectedCharacteristic} value = {this.state.selectedIndex} onChange = {this.handleChange} >
        {options}
      </select>
    );
  }
}

export default OptionsSelector;