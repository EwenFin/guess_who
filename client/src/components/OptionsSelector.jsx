import React from 'react'
import ReactDOM from 'react-dom'

class OptionsSelector extends React.Component {
    
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedOptionsIndex: undefined
    }
  }

  handleChange(event, characteristic){
    this.setState({selectedOptionsIndex: event.target.value});
    selectedOptionsIndex= this.props.characteristic[event.target.value]
    this.props.setSelectedOption(selectedOptionsIndex)
  }


  render() {
    if()
      const options = this.props.hair.map((hair, index) => {
      return <option value={index} key={index}>{hair}</option>
    })



  

    return (
      <select id="options" value = {this.state.selectedIndex} onChange = {this.handleChange}>
        {options}
      </select>
    );
  }
}

export default OptionsSelector;