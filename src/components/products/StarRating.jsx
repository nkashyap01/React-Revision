import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ noOfStars = 3 }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex)

  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex)

  }
  function handleMouseLeave(getCurrentIndex) {
    setHover(rating)

  }
  return (
    <div>
      {
        [...Array(noOfStars)].map((_, index) => {
          index += 1
          return <FaStar key={index}
            onClick={() => handleClick(index)}
            className={index <= (hover || rating) ? 'text-orange-500' : 'text-black'}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        })
      }
    </div>
  )
}

export default StarRating