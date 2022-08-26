import React from 'react'
import logo from '../images/corporate-tech-computer-logo.png'


function Navbar() {
  return (
    <nav className='w-full sticky top-0 h-20 bg-[#f8f8ff] flex p-[40px] z-50'>
        <div className='flex items-center justify-center'>
            <img className='h-12' src={logo} alt="logo" />
            <span className='ml-1 flex flex-col'>
                <span className='text-[15px] font-heading'>Elegent Websites</span>
                <span className='text-[6px] font-heading'>DEVELOPING PROFESSIONAL WEBSITES</span>
            </span>
        </div>
        <div className='flex-1 list-none flex space-x-10 justify-end items-center'>
            <li><a className='font-heading' href="/">Home</a></li>
            <li><a className='font-heading' href="/">Services</a></li>
            <li><a className='font-heading' href="/">Portfolio</a></li>
            <li><a className='font-heading' href="/">About Us</a></li>
            <li><a className='font-heading' href="/">Contact Us</a></li>
            <li className='h-12 w-36 bg-[#f25270] rounded-full flex items-center justify-center'><a className='font-sub-headings text-[#f8f8ff]' href="/">New Offers</a></li>
        </div>
    </nav>
  )
}

export default Navbar


// #282120
// #020202
// #c6488c
// #f8f8ff