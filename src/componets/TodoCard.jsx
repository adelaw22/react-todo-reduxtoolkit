import React from 'react'

const TodoCard = ({children, ...rest}) => {
  return (
    <div {...rest}>{children}</div>
  )
}

export default TodoCard