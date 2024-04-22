import React,{useState} from 'react'

const Usestate = () => {
 const[count,setcount]=useState(0)
 const increment=()=>{setcount(count+1)}
 const decrement=()=>( setcount(count-1))

  return (
    <div><div>
    <button onClick={increment}>+</button>
    <h1>{count}</h1>
    <button onClick={decrement}>-</button>
  </div></div>
  )
}

export default Usestate