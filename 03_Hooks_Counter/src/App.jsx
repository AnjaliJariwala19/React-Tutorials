import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//React controls the UI. And for the UI updation react uses HOOKS.
// Hooks have various method which is use for UI updation.
// Hook updates every specified element in whole screen.
//<button onClick={adding()}> --> it will directly execute the adding() function
// <button onClick={adding}> --> on clicking the the button it will execute the function.

function App() {

  let [counter,setCounter] = useState(5) //react hook
  
  //let counter = 5;

  const adding =()=>{
    counter = counter + 1
    setCounter(counter)
    //console.log(counter)
  }

  const subtracting =() =>{
    counter = counter - 1
    setCounter(counter)
    //console.log(counter)

  }

  return (
    <>
    <h1>Anjali's</h1>
    <h2>Counter : {counter}</h2>
    <button onClick={adding}>Plus One</button> 
    <br/>
    <br/>
    <button onClick={subtracting}>Minus One</button>
    <br />
    <p>Current counter value:{counter}</p>
    </>
  )
}

export default App
