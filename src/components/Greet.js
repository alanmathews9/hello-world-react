import React from 'react'

const Greet = props => {
    const {name, god} = props
    return (
        <div>
            <h1>
                sup {name} aka {god}
                {/*sup {props.name} aka {props.god}*/}
            </h1>
            {props.children} 
        </div>
    )
}
export default Greet

//TUTORIAL 9

/*props are used to have more properties. it gives oppertunity for optional inputs
ex: added class god and used it using props.god
since this is a functional component we dont need to use this
children props can be used using props.children
ex: the para tag in App.js is a child prop*/

//TUTORIAL 12

/*if you notice line 4, we use const and assign objects to props, tht way we can destructure props
and we dont need to use this.name(this.objName) in the syntax and show in the commented line 9*/