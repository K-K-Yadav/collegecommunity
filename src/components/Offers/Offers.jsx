import React from 'react'
import './Offers.css' 
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='Offers'>
        <div className="Offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>SHOP NOW</button>
        </div>
        <div className="Offers-right">
            <img src={exclusive_image} alt='' />
        </div>
    </div>
  )
}

export default Offers