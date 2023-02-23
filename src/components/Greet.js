import React from 'react'

const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>
                sup {props.name} aka {props.god}
            </h1>
            {props.children} 
        </div>
    )
}
export default Greet
//props are used to have more properties. it gives oppertunity for optional inputs
//ex: added class god and used it using props.god
//since this is a functional component we dont need to use this
//children props can be used using props.children
//ex: the para tag in App.js is a child prop