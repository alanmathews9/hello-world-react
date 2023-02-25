import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin : true
      }
    }
    render() {
        //if-else method
        // if (this.state.isLoggedin) {
        //     return <div>Welcome alan</div>
        // }
        // else { 
        //     return <div>Welcome guest</div>
        // }

        //element variables method
        // let message
        // if (this.state.isLoggedin) {
        //     message = <div>Welcome alan</div>
        // }
        // else {
        //     message = <div>Welcome guest</div>
        // }
        // return <div>{message}</div>
        
        //ternary conditional method
        // return (
        //     this.state.isLoggedin ? 
        //     <div>Welcome alan</div> :
        //     <div>Welcome guest</div>
        // )
        
        //method 4(this is for when we want return for true and nothing for false)
        return this.state.isLoggedin && <div>Welcome alan</div>
    }
        
}

export default UserGreeting

//TUTORIAL 16

