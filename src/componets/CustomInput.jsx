import React, { useState } from 'react'

const CustomInput = ({inputValue, setInputValue}) => {

  return (
    <>
        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
    </>
  )
}

export default CustomInput;