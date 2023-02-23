import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() { 
        //state.count = this.state.count + 1
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
  render() {
    return (
        <div>
            <div>Count -{this.state.count}</div>
            <button onClick={() => this.increment()}>increment</button>
        </div>
    )
  }
}

export default Counter

/*if we use the state method(line commented with state,count)
then the console value will keep on incrementing, however the ui will no rerender for each click,
in that case on every click of the ui the value isnt displayed as required value it just remains at count 0

that is where we use setState, here for every click the ui is re rendered so the changes are shown in the ui
(this code under setState)*/
