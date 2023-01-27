import React from 'react'
import Card from './Card'
import '../ThankYou.css'
import thankYouImg from '../media/illustration-thank-you.svg'

const ThankYou = ({ rating }) => {
  return (
    <Card>
      <div className="thank-you-img-container">
        <img src={thankYouImg} alt="" />
      </div>
      <div className="selected">
        <p>You selected {rating} out of 5 stars</p>
      </div>
      <p>THANK YOU FOR YOUR INPUT!</p>
    </Card>
  )
}

export default ThankYou
