import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  const [tcolor, setTcolor] = useState("black")

  const toggling = () => {
    if (color === "white") {
      setColor('#1d293d');
      setTcolor('white')
    }
    else {
      setColor('white');
      setTcolor('black');
    }
  }

  return (
    <>
      <div class="flex h-screen w-full flex-col items-center justify-center gap-6" style={{ backgroundColor: color, color: tcolor }}>
        <h1 className='text-4xl font-bold m-8'>Dark Mode Check</h1>
        <label class="relative inline-flex cursor-pointer items-center">
          <input onClick={toggling} id="switch" type="checkbox" class="peer sr-only" />
          <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
        </label>
      </div>

    </>
  )
}

export default App
