import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todoSlice'
import CustomBtn from './CustomBtn'
import CustomInput from './CustomInput'

const AppHeader = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    e.preventDefault
      dispatch(addTodo(inputValue))
    
  }

  return (
    <>
    <CustomInput inputValue={inputValue} setInputValue={setInputValue}/>
    <CustomBtn variant='primary' type='button' onClick={handleChange}>Add Task</CustomBtn>
    </>
  )
}

export default AppHeader