import React from 'react'

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist()
  }

  render() {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
  
}
