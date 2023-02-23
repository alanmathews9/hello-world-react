import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>welcome {this.props.name} aka {this.props.god}</h1>
    }
}
export default Welcome

//TUTORIAL 6

/*in case of class components we have to use this. before props.
that is the main difference compared to functional components*/