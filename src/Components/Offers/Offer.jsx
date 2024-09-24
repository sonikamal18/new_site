import React from 'react'
import './Offer.css'
import exclucive_img from '../Assets/exclusive_image.png'
export const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON THE BEST SELLER PRODUCTS</p>
            <button> CHECK NOW</button>
        </div>
        <div className="offer-right">
            <img src={exclucive_img} alt="" />
        </div>
    </div>
  )
}
