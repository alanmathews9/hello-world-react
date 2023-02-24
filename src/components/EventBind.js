import React, { Component } from 'react'
class EventBind extends Component {



    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() { 
        this.setState(
            {message:'goodbye' }
        )
        console.log(this) 
    }
    render() {
      return (
          <div>
              <div>{this.state.message}</div>
              {/*<button onClick={this.clickHandler.bind(this)} >Click</button>*/}
              {/*<button onClick={() => this.clickHandler()} >Click</button>*/}
              <button onClick={this.clickHandler} >Click</button>
          </div>
      )
    }
}

export default EventBind

//TUTORIAL 14

/*
reason for binding is because of the way this keyword works in react
event binding, the best way is to do binding in the constructor, this i referred to in line 12

other 2 ways to do event binding is binding in the render method, 2nd method uses arrow function
the commented lines 25 and 26 are methods 1 and 2
however these methods are not ideal so we always opt for binding in constructor
*/