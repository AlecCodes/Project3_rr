import React from 'react'
import Card from './Card'

import './ThankYou.css'

import thankYouImg from '../media/illustration-thank-you.svg'

const ThankYou = ({ rating }) => {
  return (
    <Card>
      <div className="thank-you-img-container">
        <img src={thankYouImg} alt="" />
      </div>

      <div className="selected">
        <p>You selected 5 out of 5</p>
      </div>

      <h2 className="title">Thank you!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating!
      </p>
    </Card>
  )
}

export default ThankYou
