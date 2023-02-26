import React from 'react'
import { getClasses } from '../utils/getClasses'
import styles from '../styles/modules/button.module.scss'

const CustomBtn = ({ type, variant = 'primary', children, ...rest }) => {
  const btnColor = {
    Primary: 'primary',
    Secondary: 'secondary',
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

export function SelectBtn({ children, id, ...rest }) {
  return (
    <select
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  )
}

export default CustomBtn
