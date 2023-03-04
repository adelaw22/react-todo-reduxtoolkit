import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import TodoCard from './TodoCard'

import styles from '../styles/modules/app.module.scss'

const AppContent = () => {
  const todos = useSelector((state) => state.todos)

  console.log(todos)

  return (
   <div className={styles.appContent}>
 
     {todos.map((item) =>(
      <TodoCard key={item.id}>
        <TodoItem todoItem={item}/>
      </TodoCard>
    ))}
   </div>
    
  )
}

export default AppContent