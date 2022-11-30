import React from 'react'
import { imgSrc } from '../static'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero__wrapper'>
            <div className="hero__image">    
                <img src={imgSrc.hero} alt="" />
            </div>
            <h1 className='hero__title'>Online Experiences</h1>
            <p className='hero__text'>Join unique interactive activities led by one of a kind hosts-all without leaving home</p>
        </div>
    </div>
  )
}

export default Hero