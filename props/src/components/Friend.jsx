import React from 'react'
import List from './List'

const Friend = ({friend}) => {
  return (
    <div>
        <ul className="list-group">
        {friend.map((plan)=> 
        <List key={plan} friend={plan}></List>
    )}
        </ul>
        </div>
  )
}

export default Friend