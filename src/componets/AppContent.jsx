import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import TodoCard from './TodoCard'

const AppContent = () => {
  const todos = useSelector((state) => state.todos)

  console.log(todos)

  return (
   <>
 
     {todos.map((item) =>(
      <TodoCard key={item.id}>
        <TodoItem todoItem={item}/>
      </TodoCard>
    ))}
   </>
    
  )
}

export default AppContent