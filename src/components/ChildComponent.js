import React from 'react'

function ChildComponent(props) {
  return (
    <div>
          <button onClick={()=>props.greetHandler('child')}>greet parent</button>
    </div>
  )
}

export default ChildComponent

//TUTORIAL 15

/*
Here we use a function with the parameter as props
and the return value is a button, with an on click event handler
onclick is refered to props.greethandler meaning using props property we refer a method called greet handler
*/

/*to pass a parameter from child to parent we use arrow functions
not before we just passed a method
onclick event handler is now a arrow functions that "calls" the greet parent method WITH A PARAMETER 'child'
instead of just "referencing" it like we used for methods
 */