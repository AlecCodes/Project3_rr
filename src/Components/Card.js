import React from 'react'
import './Card.css'

const Card = (props) => {
  return <div className="card">{props.children} Card</div>
}

export default Card
