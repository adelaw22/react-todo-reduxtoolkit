import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todoSlice'
import CustomBtn from './CustomBtn'
import CustomInput from './CustomInput'
import styles from '../styles/modules/app.module.scss'

const AppHeader = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    e.preventDefault
      dispatch(addTodo(inputValue))
    setInputValue("")
  }

  return (
    <div className={styles.appHeader}>
    <CustomInput inputValue={inputValue} setInputValue={setInputValue}/>
    <CustomBtn variant='primary' type='button' onClick={handleChange}>Add Task</CustomBtn>
    </div>
  )
}

export default AppHeader