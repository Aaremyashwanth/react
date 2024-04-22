import React,{useState} from 'react'


   


const Usestate1 = () => {
    const college={
        top1:"vnrvjiet",
        top2:"cbit",
        top3:"vjm"}
    ;
    
    const[instution,setinstution]=useState(college);
    const change1=()=>{setinstution({
        ...college,
        top1:"grr"})}
  return (
    <>
        <h1>{instution.top1}</h1>
        <button onClick={change1}>swap</button>
        <h2>{instution.top2}</h2>
        <p>{instution.top3}</p>
    </>
  )
}

export default Usestate1