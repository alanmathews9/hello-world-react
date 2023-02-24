import React from 'react'

function ChildComponent(props) {
  return (
    <div>
          <button onClick={props.greetHandler}>greet parent</button>
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