import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='Newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder="Enter your email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter