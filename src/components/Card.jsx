import { Star } from '@mui/icons-material'
import React from 'react'

function Card({item}) {
let badgeText

  if (item.openSpots === 0) {
    badgeText = "SOLD OUT"
  }
  else if (item.location === "Online") {
    badgeText = "ONLINE" 
  }

  return (
    <div className='card'>
      
      {badgeText && <div className="card__badge">
         {badgeText} 
      </div>}

      <div className="card__image">
        <img src={item.coverImg} alt="" />
      </div>

      <div className="card__rating">
        <Star/>
        <span>{item.rating} </span>
        <span className='gray'>{`(${item.stats.reviewCount}) .`}</span>
        <span className='gray'>{item.location}</span>
      </div>

      <p className='card__title'>{item.stats.title}</p>

      <p><span className='bold'> From ${item.price} </span> / person </p>

    </div>
  )
}

export default Card