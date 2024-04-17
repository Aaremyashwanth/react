import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  let gadjets=["mouse","mobile","computer","eardopes"];

  return (
    <center>
    
      <div>
        <h1>list-group</h1>
      <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> 
 </div>
    <ul class="list-group">
{gadjets.map((items)=> 
(<li class="list-group-items">{items}</li>))}
    </ul> 
        
    </center>
  )
}

export default App
