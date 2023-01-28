import Square from './Square'
import '../Rating.css'
import starImg from '../media/icon-star.svg'
import React, { useState } from 'react'

const Rating = (rating, setRating, setShowThankYouPage) => {
  const [activeRatings, setActiveRatings] = useState({
    oneStar: true,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false
  })

  const handleSubmit = () => {
    if (!rating) return

    setShowThankYouPage(true)
  }

  return (
    <Square>
      <div className="star-img-container">
        <img src={starImg} alt="" />
      </div>
      <p className="text">How would you rate this restaurant?</p>
      <div className="rating">
        <div
          className={
            activeRatings.oneStar
              ? 'rating-container active'
              : 'rating-container'
          }
          onClick={() => {
            setActiveRatings({
              oneStar: true,
              twoStars: false,
              threeStars: false,
              fourStars: false,
              fiveStars: false
            })
            setRating(1)
          }}
        >
          1
        </div>
        <div
          className={
            activeRatings.twoStars
              ? 'rating-container active'
              : 'rating-container'
          }
          onClick={() => {
            setActiveRatings({
              oneStars: false,
              twoStars: true,
              threeStars: false,
              fourStars: false,
              fiveStars: false
            })
            setRating(2)
          }}
        >
          2
        </div>
        <div
          className={
            activeRatings.threeStars
              ? 'rating-container active'
              : 'rating-container'
          }
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStars: false,
              threeStars: true,
              fourStars: false,
              fiveStars: false
            })
            setRating(3)
          }}
        >
          3
        </div>
        <div
          className={
            activeRatings.fourStars
              ? 'rating-container active'
              : 'rating-container'
          }
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStars: false,
              threeStars: false,
              fourStars: true,
              fiveStars: false
            })
            setRating(4)
          }}
        >
          4
        </div>
        <div
          className={
            activeRatings.fiveStars
              ? 'rating-container active'
              : 'rating-container'
          }
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStars: false,
              threeStars: false,
              fourStars: false,
              fiveStars: true
            })
            setRating(5)
          }}
        >
          5
        </div>
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </Square>
  )
}

export default Rating
