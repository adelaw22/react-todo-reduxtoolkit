import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid } from 'uuid'

export const todoSlice = createSlice({
    name: 'todo',
    initialState:[],
    reducers:{
        addTodo: (state, action) => {
            const todoArr = {
                id: uuid(),
                value: action.payload
            }
            return [...state, todoArr];
        },

        updateTodo: (state, action) => {
            const {id, value} = action.payload

            const todo = state.find((item)=> item.id === id );
            todo.value= value
        },

        deleteTodo: (state, action)=>{
            const todo= state.filter((item)=> item.id !== action.payload)
            return todo
        }
        
    }
})

export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer;
