import React from 'react'
import HeroImage from '../images/metaverse.png'
import svgImage from '../images/hero-back.svg'

function Hero() {
  return (
      <div>
        <img className=' ' src={svgImage} alt="background-svg" />
        <div>
            <img className='absolute z' src={HeroImage} alt="hero-section"/>
        </div>
        <div className='list-none flex flex-col'>
            <span className='text-[]'>About US</span>
            <span>We Digitilize Business</span>
            <span>With Elegand Designs</span>
            <li><a href="/">Read More</a></li>
        </div>
    </div>
  )
}

export default Hero
