import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid generates a unique id for each item in the state.

const initialState = {
    todos:[{id:1, text:"Hello"}]
}

//here 'name' is the inbuilt syntax not a variable
export const todoSlice = createSlice({
    name: 'todos',
    initialState, //initialState: initialState
    reducers: {
        //It contains props and functions.
        //Every reducer function have access to state and action.
        //functionName: (state, action) => {code} is the syntax for reducer function.
        //Unlike context API, function definition and declaration takes place here only.
        addTodo: (state,action)=>{
            const entry = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(entry)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state,action)=>{
            state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? {...todo, text: action.payload.text}: todo ) )
        }

    }
})


export const{addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer

//Since it is a default export, you can import it under any name you choose 