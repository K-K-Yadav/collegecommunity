import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='Hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='Hero-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt='' />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="Hero-latest-btn">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt='' />
                </div>
            </div>
            <div className='Hero-right'>
                <img src={hero_image} alt='' />

            </div>
        </div>
    )
}

export default Hero