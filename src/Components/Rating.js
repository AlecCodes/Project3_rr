import React from 'react'
import Card from './Card'
import './Rating.css'
import starImg from '../media/icon-star.svg'

const Rating = () => {
  return (
    <Card>
      <div className="star-img-container">
        <img src={starImg} alt="" />
      </div>
      <p className="text">How would you rate this restaurant?</p>
      <div className="rating">
        <div className="rating-containter">1</div>
        <div className="rating-containter">2</div>
        <div className="rating-containter">3</div>
        <div className="rating-containter">4</div>
        <div className="rating-containter">5</div>
        
      </div>
      <button className="submit-btn">Submit</button>
    </Card>
  )
}

export default Rating
