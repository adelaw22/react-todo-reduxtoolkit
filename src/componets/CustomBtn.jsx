import React from 'react'
import { getClasses } from '../utils/getClasses'
import styles from '../styles/modules/button.module.scss'

const CustomBtn = ({ type, variant, children, ...rest }) => {
  const btnColor = {
    primary: 'primary',
    secondary: 'secondary',
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={getClasses([
        styles.button,
        styles[`button--${btnColor[variant]}`],
      ])}
      {...rest}
    >
      {children}
    </button>
  )
}

export default CustomBtn
