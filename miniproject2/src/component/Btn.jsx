import React from 'react'
const clicked=(e,week)=>{
    console.log(e,"today sunday",week);
}
const Btn = () => {
  return (
    <div>
        <button onClick={(e)=> clicked(e,"holiday")}>submit</button>
    </div>
  )
}

export default Btn