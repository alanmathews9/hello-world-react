import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler(){ 
      console.log('yo i clicked it fam')
  }
  render() {
    return (
        <div>
            <button onClick={this.clickHandler}>Click me fam</button>
        </div>
    )
  }
}

export default ClassClick

//TUTORIAL 13

/*Refer comments under FunctionClick.js and its the exact same except we have to use this keyword*/