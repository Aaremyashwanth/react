import data from "./data"
import './App.css'
import List from "./component/List"


function App() {
  
  
  return (
    <>  
    <main className="container">
      <ul className="comment-container">
      {data.map(({id,name,email,body})=>{
        return( 
        <>
        <List key={id}name={name}email={email}body={body} ></List>
        </>)
      })}
      
      
      
      
      
       {/* <li className="comment">
        <div className="comment-header">
          <h3 >email</h3>
          <h3>name</h3>
          <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, culpa.</p>
        </div>
       </li> */}
      
      
       
       
      </ul>
    </main>

    
    
    </>
    
  )
}

export default App
