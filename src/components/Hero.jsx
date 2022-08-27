import React from 'react'
import HeroImage from '../images/metaverse.png'
import svgImage from '../images/hero-back.svg'

function Hero() {
  return (
      <div className='flex h-[600px]'>
        <div className='absolute h-full w-full bg-[#f2f2f2] -z-20'></div>
        <img className=' absolute -z-10' src={svgImage} alt="background-svg" />
        <div className='flex-1 list-none flex flex-col justify-center pl-[120px] space-y-4'>
            <span className='text-black font-heading text-2xl '>About US</span>
            <span className='text-[#f2f2f2] font-heading font-bold text-5xl leading-[60px]'>We Digitilize Business<br/>With Elegand Designs</span>
            <li className='h-12 w-36 bg-black rounded-full font-bold flex items-center justify-center'><a className='font-sub-headings text-[#f8f8ff]' href="/">Read More</a></li>
        </div>
        <div className='flex-1 flex justify-center items-end'>
            <img className='h-[500px]' src={HeroImage} alt="hero-section"/>
        </div>
    </div>
  )
}

export default Hero
