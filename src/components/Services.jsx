import React from 'react'
import { useState } from 'react'
import ServiceCard from './ServiceCard'
import SVG from '../images/card-logo-1.svg'


function Services() {
    const [cardsData, setCardsData] = useState([
        {
            url: SVG,
            heading: 'Shopify Store Development',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio repudiandae maxime, error repellat delectus fuga iusto, vitae maiores, dolorem nulla! Vero possimus ab cumque tempora ipsam non molestias tempore'
        },
        {
            url: SVG,
            heading: 'Shopify Store Development',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio repudiandae maxime, error repellat delectus fuga iusto, vitae maiores, dolorem nulla! Vero possimus ab cumque tempora ipsam non molestias tempore'
        },
        {
            url: SVG,
            heading: 'Shopify Store Development',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio repudiandae maxime, error repellat delectus fuga iusto, vitae maiores, dolorem nulla! Vero possimus ab cumque tempora ipsam non molestias tempore'
        }
    ])

  return (
      <div className='flex p-[120px] justify-between'>
        {
            cardsData.map((element, index) => {
                return <ServiceCard key={index} image={element.url} heading={element.heading} text={element.text}/>
            })
        }
    </div>
  )
}

export default Services
