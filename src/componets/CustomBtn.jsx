import React from 'react'
import { getClasses } from '../utils/getClasses'
import styles from '../styles/modules/button.modules.scss'

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
    <button
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </button>
  )
}

export default CustomBtn
