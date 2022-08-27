import React from 'react'
import SVG from '../images/footer-logo.png'
import logo from '../images/card-logo-1.svg'

function Footer() {
  return (
    <div class="bg-black flex p-[120px]">
        <div className='flex-1 flex flex-col justify-end items-start space-y-4'>
            <img className='w-[450px] mb-[40px]' src={SVG} alt='logo'/>
            <p className='font-heading text-white text-lg'>Subscribe Our Newsletters</p>
            <input className='outline-none text-bold placeholder:text-[#F25170] placeholder:text-bold placeholder:font-heading p-[10px] w-[330px] h-[50px] rounded-md text-[#F25170]' type="text" placeholder='Enter Your Email Address'/>
            <li className='h-12 w-36 bg-[#f25270] rounded-full flex items-center justify-center'><a className='font-sub-headings text-[#f8f8ff]' href="/">SUBSCRIBE</a></li>
        </div>
        <div className='flex-1 flex flex-col pt-[30px]'>
            <div className='flex-1 flex'>
              <div className='flex-1 list-none space-y-1'>
                <p className='text-[#f25270] text-xl font-bold'>QUICK LINKS</p>
                <li className='text-white text-sm'><a href="/">ABOUT US</a></li>
                <li className='text-white text-sm'><a href="/">SERVICES</a></li>
                <li className='text-white text-sm'><a href="/">PORTFOLIOS</a></li>
              </div>
              <div className='flex-1 list-none  space-y-1'>
                <p className='text-[#f25270] text-xl font-bold'>CONTACTS</p>
                <li className='text-white text-sm'><a href="/">DISCORD</a></li>
                <li className='text-white text-sm'><a href="/">EMAIL</a></li>
              </div>
            </div>
            <div className='flex'>
              <img className='w-[100px] translate-x-1' src={logo} alt="logo" />
              <img className='w-[100px] -translate-x-5' src={logo} alt="logo" />
              <img className='w-[100px] -translate-x-10' src={logo} alt="logo" />
              <img className='w-[100px] -translate-x-16' src={logo} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default Footer