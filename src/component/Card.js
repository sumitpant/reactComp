import React from 'react'
import './Card.css'
const Card = ({text,image}) => {
  console.log("text",text);
  return (
    <div className="card">
      <img src={image} className='image'/>
      <div>
      </div>

      </div>
  )
}

export default Card