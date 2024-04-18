import './App.css'
import Friend from './components/Friend'
import Tour from './components/Tour'

function App() {
 const friends=["shavan","navaneth"]

  return (
    <>
      <div>
       <h1>Yashwanth</h1>
       <Friend friend={friends}></Friend>
       <Tour friend={friends}></Tour>

      </div>
      
       
    </>
  )
}

export default App
