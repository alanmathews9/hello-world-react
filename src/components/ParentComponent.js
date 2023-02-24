import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            parentName:'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
     greetParent(childName) { 
         alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent} />
            </div>
                
        )
      }
}

export default ParentComponent

//TUTORIAL 15

/*
This is a class, with a constructor and a method in it called greet parent
the aim to pass a method from child to parent and that is done using props
in other words props are used for communication between parent and child
in the render and return we call the Childcomponent(line 19) and a method called greetHandler 
which is specified onclick of the button, refer childcomponent.js, and this greethandler refers to greetparent 
which alerts browser with message
note that childcomponent.js needs to imported 
and also the since greetparent is used for a function outside, we need to bind as shown inside constructor

now go to child component . js for the remaingin comments
*/

/*using arrow function we can also pass parameters from child to parent
we have added a parameter childName on the greetparent method which is passed from child component.js
*/