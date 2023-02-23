import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, god } = this.props
        return <h1>welcome {name} aka {god}</h1>
        //return <h1>welcome {this.props.name} aka {this.props.god}</h1>
    }
}
export default Welcome

//TUTORIAL 6

/*in case of class components we have to use this. before props.
that is the main difference compared to functional components*/

//TUTORIAL 12


/*destructuring is mentioned in greet.js ka last comment, read that first
similarly we do it for class components
but obviosuly we have to use this keyword as it is a class component
line 5 is used to destructure the props, and it comes under the render block
commented line 7 is what we use without destructuring*/
