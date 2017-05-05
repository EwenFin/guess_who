import React from 'react'
import ReactDOM from 'react-dom'

class CharacteristicSelector extends React.Component {
    
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event){
    this.setState({selectedIndex: event.target.value});
    const selectedCharacteristic = this.props.characteristics[event.target.value]
    this.props.setSelectedCharacteristic(selectedCharacteristic)
  }


  render() {

      const options = this.props.characteristics.map((characteristic, index) => {
      return <option value={index} key={index}>{characteristic}</option>
    })

    return (
      <select id="characteristics" value = {this.state.selectedIndex} onChange = {this.handleChange}>
        {options}
      </select>
    );
  }
}

export default CharacteristicSelector;