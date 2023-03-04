import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo, deleteTodo } from '../slices/todoSlice'
import CustomBtn from './CustomBtn'
import CustomInput from './CustomInput'

const TodoCard = ({todoItem}) => {
  const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)
    const [updatedValue, setUpdatedValue] = useState(todoItem.value)

    const handleUpdate=()=>{
      const payload ={id: todoItem.id, value: updatedValue}
    dispatch(updateTodo(payload))
    cancelHandler()
    }

    const cancelHandler = ()=>{
      setIsEdit(false)
    }

    const handleDelete = ()=>{
      dispatch(deleteTodo(todoItem.id))
    }

  return(
   <>
    {isEdit ? (<>
    <CustomInput inputValue={updatedValue} setInputValue={setUpdatedValue}/>
    <div>
      <CustomBtn variant='secondary' onClick={handleUpdate}>Save</CustomBtn>
      <CustomBtn variant='secondary' onClick={cancelHandler}>Cancel</CustomBtn>
    </div>
    </>) : (<>
    <span>{todoItem.value}</span>
    <div>
    <CustomBtn variant='secondary' onClick={()=>setIsEdit(!isEdit)}>Edit</CustomBtn>
      <CustomBtn variant='secondary' onClick={handleDelete}>Delete</CustomBtn>
    </div>
    </>)}
   </>
   )
  
}

export default TodoCard