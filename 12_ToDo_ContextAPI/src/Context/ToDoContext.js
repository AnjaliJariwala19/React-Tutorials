import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
})

export const ToDoProvider = ToDoContext.Provider

export const useTodo = () =>{
    return useContext(ToDoContext)
}