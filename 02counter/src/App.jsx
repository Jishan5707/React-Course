import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  const addValue = () => {
    console.log("value added", counter);
    setCounter(counter+1)
  }

  const removeValue = () => {
    console.log("clicked",counter);
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value : {counter} </h2>
    <button onClick={addValue}>Add value </button>
    <button onClick={removeValue}>Remove Button</button>
    </>
  )
}

export default App
