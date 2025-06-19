import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  //useState hook
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [trigger, setTrigger] = useState(false);
  //useRef hook
  /*The useRef Hook is a built-in React Hook that returns a mutable reference object (ref) that persists across renders.*/
  const passwordRef = useRef(null);


  /*The useCallback Hook is a built-in React Hook that memoizes a callback function, preventing it from being recreated on every render unless its dependencies change. This is useful for optimizing and memorizing performance, especially when passing functions as props to child components.*/
  //useCallback hook
  const PasswordGenerator = useCallback(() => {
    var pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+~`|}{[]:';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass +=  str.charAt(char)
    }
    setPassword(pass)


  }, [length, numAllowed, charAllowed, setPassword])

  
  const CopyingPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)},[password])

  /*useEffect is a React Hook that lets you synchronize a component with an external system. The useEffect in ReactJS is used to handle the side effects such as fetching data and updating DOM.*/
  //useEffect hook
  useEffect(()=>{
    PasswordGenerator()
  },[length, numAllowed, charAllowed,trigger, PasswordGenerator])

  return (
    <>
      <h1 className='text-4xl font-bold text-center m-8 text-white'>Password Generator</h1>

      <div className='w-full max-w-3xl h-40 bg-emerald-100 m-auto rounded-3xl shadow-2xl px-5 py-4'>

        <div className=' flex shadow rounded-lg overflow-hidden my-4'>
          <input type='text' placeholder='Generated Password' value={password} readOnly ref={passwordRef} className='outline-none w-full py-1 px-3 bg-white'></input>
          <button onClick={() => setTrigger((prev) => !prev)} className='bg-blue-600 px-6 py-2  text-white font-semibold shadow-md active:scale-95 border-amber-50 border-1'>Generate</button>
          <button onClick={CopyingPasswordToClipboard}  className='bg-blue-600 px-6 py-2  text-white font-semibold shadow-md active:scale-95 border-amber-50 border-1'>Copy</button>
        </div>

        <div className='flex text-md my-9 font-mono justify-between'>
          <div className='flex items-center gap-x-1'>
            <input type='range'min={8} max={50} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' checked={numAllowed} onChange={()=> {setNumAllowed((prev) => !prev)}}></input>
            <label>Include Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' checked={charAllowed} onChange={()=> {setCharAllowed((prev) => !prev)}}></input>
            <label>Include Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
