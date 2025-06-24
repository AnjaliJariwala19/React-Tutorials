import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todoSlice'


function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [editingId, setEditingId] = useState(null)
    const [textMsg, setTextMsg] = useState('')

    const handleUpdate = (id) =>{
        if (id === editingId){
            dispatch(updateTodo({id, text:textMsg}))
            setEditingId(null)
        }
    }

    const handleEdit = (todo) =>{
        setEditingId(todo.id)
        setTextMsg(todo.text)
    }

    return (
        <>
            <div className='m-auto my-4 w-fit bg-pink-600  p-3 text-3xl font-bold rounded-3xl text-white'>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editingId === todo.id ? (
                            <input
                                value={textMsg}
                                onChange={(e) => setTextMsg(e.target.value)}
                                className="bg-gray-700 text-white px-2 py-1 rounded w-full mr-4"
                            />
                        ) : (
                            <div className="text-white w-full mr-4">{todo.text}</div>
                        )}

                        {editingId === todo.id ? (
                            <button
                                onClick={() => handleUpdate(todo.id)}
                                className="text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md mr-2"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                onClick={() => handleEdit(todo)}
                                className="text-white bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-md mr-2"
                            >
                                Edit
                            </button>
                        )}

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos