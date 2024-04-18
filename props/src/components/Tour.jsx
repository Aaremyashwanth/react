import React from 'react'


const Tour = ({friend}) => {
    let success=friend.length===0 ? <h1>not going trip</h1>: <h2>going trip</h2>
  return (
    <>
        {success}

    </>
  )
}

export default Tour