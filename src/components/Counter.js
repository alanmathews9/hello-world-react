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
        //this.setState({
        //    count: this.state.count + 1
        //},console.log('call back value: ',this.state.count))
        //console.log(this.state.count)
        this.setState((prevState) => ({
            count: prevState.count+1
        }))
    }
    increment5() { 
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
        <div>
            <div>Count -{this.state.count}</div>
            <button onClick={() => this.increment5()}>increment</button>
        </div>
    )
  }
}

export default Counter

//TUTORIAL 11

/*if we use the state method(line commented with state,count)
then the console value will keep on incrementing, however the ui will no rerender for each click,
in that case on every click of the ui the value isnt displayed as required value it just remains at count 0

that is where we use setState, here for every click the ui is re rendered so the changes are shown in the ui
(this code under setState)*/

/*in case the code has to executed after the state has been updated then place the code in the call back function
which is the 2nd argument in the setState method*/

/*lets consider the case where we have to increment the counter by 5, if we simply run the increment() function 5 times, then we dont get desired ouput
this is because after each value is being repeated so, in console the count value is printed as lets say 1, 5 times
but we need it to go count 0 then count 5, so we have to use the parameter as a function and not an object, if we use a function previous state then,
when we run the function 5 times, each time the value is printed according to previous value*/