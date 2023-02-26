import React from 'react'
import styles from '../styles/modules/title.module.scss'

const PageTtile = ({ children, ...rest }) => {
  return (
    <p className={styles.title} {...rest}>
      {children}
    </p>
  )
}

export default PageTtile
