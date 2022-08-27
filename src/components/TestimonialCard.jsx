import React from 'react'

function TestimonialCard(props) {
  return (
    <>
        <div className='flex items-center justify-center p-[50px] w-[300px] flex-col space-y-5 bg-[#282120] rounded-3xl'>
            <img className='absolute -translate-y-[130px] h-[100px] w-[100px] rounded-full bg-black' src={props.url} alt="image"/>
            <p className='font-heading text-lg text-white'>{props.name}</p>
            <p className=' text-white text-sm text-center'>{props.text}</p>
        </div>
    </>
  )
}

export default TestimonialCard
