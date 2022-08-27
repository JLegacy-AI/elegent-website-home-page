import React from 'react'

function ServiceCard(props) {
  return (
    <div className='rounded-lg w-[300px] bg-black flex justify-center items-center space-y-3 flex-col p-[50px]'>
        <img className='w-[100px]' src={props.image} alt="logo"/>
        <span className='text-white text-center text-2xl font-heading'>{props.heading}</span>
        <span className='text-white font-sub-headings text-justify'>{props.text}</span>
            <li className='h-12 w-36 bg-[#f8f8ff] rounded-full font-bold flex items-center justify-center'><a className='font-sub-headings text-black' href="/">Read More</a></li>
    </div>
  )
}

export default ServiceCard
