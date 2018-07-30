import React, { Component } from 'react'
import { getRandomColor, getReducedColor  } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }
 
 

 handleClick = () => {
  const generatedColor = getRandomColor()
  this.setState({
    color: generatedColor,
    childColor: getReducedColor(generatedColor)
  })

 }
 handleChildClick = (e) => {
  e.stopPropagation();
  const newChildColor = getRandomColor()
  this.setState({
    childColor: newChildColor
  })
 }
 
  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleClick={this.handleChildClick}  />
        <Tier2 color={this.state.childColor} handleClick={this.handleChildClick}  />
      </div>
    )
  }
}
