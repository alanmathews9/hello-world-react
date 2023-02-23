import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage() { 
        this.setState({
            message: 'thanks for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message

//TUTORIAL 10

/*over here we're trying to change text when a button is clicked
however to implement this if we use props then it wont work
as props are immutable
so we use state as shown below, it provides the ability to change the text*/