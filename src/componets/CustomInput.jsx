import React, { useState } from 'react'
import styles from '../styles/modules/input.module.scss'

const CustomInput = ({inputValue, setInputValue}) => {

  return (
    <>
        <input className={styles.input} type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
    </>
  )
}

export default CustomInput;