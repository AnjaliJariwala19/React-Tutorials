import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
    <div className="duration-200 h-screen w-full" style={{backgroundColor: color}}></div>
    <div className='fixed flex top-10 flex-wrap justify-center inset-x-0'>
      <div className='fixed flex flex-wrap justify-center bg-white p-2 rounded-lg gap-2 '>

        <button onClick={() => setColor("#e7000b")} className='bg-red-600 px-6 py-2 rounded-xl text-white font-semibold shadow-md active:scale-95  '>Red</button>
        <button onClick={() => setColor("#ffdf20")} className='bg-yellow-300 px-6 py-2 rounded-xl text-white font-semibold shadow-md active:scale-95'>Yellow</button>
        <button onClick={() => setColor("#f6339a")} className='bg-pink-500 px-6 py-2 rounded-xl text-white font-semibold shadow-md active:scale-95'>Pink</button>
        <button onClick={() => setColor("#155dfc")} className='bg-blue-600 px-6 py-2 rounded-xl text-white font-semibold shadow-md active:scale-95'>Blue</button>
        <button onClick={() => setColor("#00a63e")} className='bg-green-600 px-6 py-2 rounded-xl text-white font-semibold shadow-md active:scale-95'>Green</button>
        <button onClick={() => setColor("#000000")} className='bg-black px-6 py-2 rounded-xl text-white font-semibold shadow-md active:scale-95'>Black</button>
        <button onClick={() => setColor("#9810fa")} className='bg-purple-600 px-6 py-2 rounded-xl text-white font-semibold shadow-md active:scale-95'>Purple</button>
        <button onClick={() => setColor("#0092b8")} className='bg-cyan-600 px-6 py-2 rounded-xl text-white font-semibold shadow-md active:scale-95'>Cyan</button>
        <button onClick={() => setColor("#ff6900")} className='bg-orange-500 px-6 py-2 rounded-xl text-white font-semibold shadow-md active:scale-95'>Orange</button>
        
        
      </div>
    </div>
    </>
  )
}

export default App
