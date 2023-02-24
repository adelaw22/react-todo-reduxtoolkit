import React from 'react'
import styles from '../styles/modules/title.module.scss'

const PageTtile = ({ children, ...rest }) => {
  return (
    <p style={styles.title} {...rest}>
      {children}
    </p>
  )
}

export default PageTtile
