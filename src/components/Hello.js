// without using jsx
//not recommended as you can clearly see its very lengthy and tricky


import React from "react";
const Hello = () => {
    return React.createElement(
        'div',
        { id: 'hi', className: 'dummy' },
        React.createElement('h1', null, 'hey alan')
    )
}
export default Hello

//TUTORIAL 8

/*without using jsx
not recommended as you can clearly see its very lengthy and tricky*/

