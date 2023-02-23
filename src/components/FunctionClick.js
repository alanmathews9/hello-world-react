import React from 'react'

function FunctionClick() {

    function clickHandler() { 
        console.log('clicked')
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick

//TUTORIAL 13

/* event are camel cased in react
and we pass a function instead of a string
 the reason why we dont add a paranthesis at the end of clickHnadler on line 11
 is that if we do it will be a function call and we'll get undesired output, 
 hence we just specify the function name and not call it */