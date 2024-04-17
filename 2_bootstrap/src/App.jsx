import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  let gadjets=["moto"];
  let check=gadjets.length===0 ? <h1>no gadjets</h1>:<h1>i have</h1>
  return (
    <center>
    
      <div>
      {/**  bootstrap */}
        <h1>list-group</h1>
      <ul className="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> 
 </div>
 {/**  condition */}
 {check}
 {/* {gadjets.length===0 &&<h1>i dont have Gadjets</h1>} */}

 
 {/**  mapping */}
    <ul className="list-group"><h1>gadjetslist</h1>
{gadjets.map((items)=> 
(<li key={items} className="list-group-items">{items}</li>))}
    </ul> 

        
    </center>
  )
}

export default App

