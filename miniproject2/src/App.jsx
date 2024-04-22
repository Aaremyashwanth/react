import data from './data/data'
import './App.css'
import Btn from './component/Btn'

function App() {
  
  
  return (
    <>
      {data.map(({title,url,thumbnailUrl})=>{
        return(
          <>
          <h1>hello</h1>
          <ul>
            
            <h1>{title}</h1>
            <p>{url}</p>
            <img src={thumbnailUrl} alt="loading" />
            <Btn></Btn>
          </ul>
          </>
        )
      })}
      <h1>miniproject2</h1>
    </>
  )
}

export default App
