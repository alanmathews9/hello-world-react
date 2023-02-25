import React from 'react'
import Person from './Person'
function NameList() {
    const persons = [
        {
            id: 1,
            name: 'alan',
            age: '21',
            skill:'basketball'
        },
        {
            id: 2,
            name: 'ananya',
            age: '20',
            skill: 'sleeping'
        },
        {
            id: 3,
            name: 'lisa',
            age: '20',
            skill: 'laughing'
        },

    ]
    const personList = persons.map(person => <Person person={person} />)
  return (
    <div>
          {personList}
    </div>
  )
}

export default NameList

//TUTORIAL 17

/*DIDNT UNDERSTAND THOROUGHLY REFER VIDEO AGAIN */
/*HOWEVER FIRST PART OF VIDEO ABOUT MAP FUNCTION I UNDERSTOOD
DIDNT UNDERSTAND THE REFACTORING PART FULLY REFER AGAIN */