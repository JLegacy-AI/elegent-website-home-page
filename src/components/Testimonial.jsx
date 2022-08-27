import React from 'react'
import {useState} from 'react'
import TestimonialCard from './TestimonialCard'
import SVG from '../images/card-logo-1.svg'

function Testimonial() {
    
    const [testimonialData, setTestimonialData] = useState([
        {
            url: SVG,
            heading: 'Evan White',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        },
        {
            url: SVG,
            heading: 'Evan White',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        },
        {
            url: SVG,
            heading: 'Evan White',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        }
    ])

  return (
    <div className='flex flex-col justify-center items-center p-[120px]'>
      <span className='font-heading text-2xl'>Testimonials</span>
      <span className='font-heading text-4xl'>Read What Others</span>
      <span className='font-heading text-4xl'>Have to Say</span>
      <div className='flex-1 mt-[100px] w-full justify-between flex items-center space-x-8 '>
            {
                testimonialData.map((ele, ind) => {
                    return <TestimonialCard key={ind} name={ele.heading} url={ele.url} text={ele.text}/>
                })
            }
      </div>
    </div>
  )
}

export default Testimonial;
