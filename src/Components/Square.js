import React from 'react'
import '../Square.css'

const Square = (props) => {
  return <div className="square">{props.children}</div>
}

export default Square
