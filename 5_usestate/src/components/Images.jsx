import React,{useState} from 'react'
import data from '../data/data'


const Images = () => {
    
  return (
    <div>{data.map(({title,url,thumbnailUrl})=>{
        return <div className="div">
          <p>{title}</p>
          <a href={url}><button>submit</button></a>
          <img src={thumbnailUrl} alt="loading" />
  
        </div>
      })}</div>
  )
}

export default Images