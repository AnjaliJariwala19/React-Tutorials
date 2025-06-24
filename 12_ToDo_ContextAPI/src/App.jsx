import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { ToDoProvider } from './Context/ToDoContext'

function App() {
  const [todos,setTodos] = useState([])

  // This is an individual "todo" it is taken from down there and not from state variable as above
  const addTodo = (todo) =>  {
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])

  }
  //prevTodo is just a variable such as n
  const updateTodo = (id,updateTodo) =>{
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? updateTodo : prevTodo)))
  }

  const deleteTodo = (id)=>{
    setTodos((prev) => prev.filter((prevTodo)=> prevTodo.id != id) )
  }

  const toggleTodo = (id) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  //local Storage
  useEffect(()=>{
    const todo = JSON.parse((localStorage.getItem("ToDo"))) 
    //console.log(todo)
    if (todo && todo.length > 0){
      setTodos(todo)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("ToDo",JSON.stringify(todos))
    //console.log(todos)
  },[todos])

  return (
    <ToDoProvider value ={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key ={todo.id} className='w-full'>
                <TodoItem todo = {todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
