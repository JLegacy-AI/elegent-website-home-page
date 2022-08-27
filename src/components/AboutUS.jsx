import React from 'react'
import AboutUs from '../images/about-us.png'

function AboutUS() {
  return (
    <div className='w-full pt-[200px] pl-[120px] pr-[120px] pb-[120px] bg-[#f2f2f2] flex justify-center flex-col'>
        <span className='flex justify-center text-black font-heading text-3xl'>About US</span>
        <img src={AboutUs} alt="About-US-Laptop" />
    </div>
  )
}

export default AboutUS
