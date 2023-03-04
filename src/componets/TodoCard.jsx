import React from 'react'
import styles from '../styles/modules/app.module.scss'

const TodoCard = ({children, ...rest}) => {
  return (
    <div className={styles.card} {...rest}>{children}</div>
  )
}

export default TodoCard