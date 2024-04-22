import React from 'react'

const List = ({id,name,email,body}) => {
  return (
    <div><li key={id}>
        <p>{id}</p>
    <h3>{name}</h3>
    <h3>{email}</h3>
    <p>{body}</p>
  </li></div>
  )
}

export default List