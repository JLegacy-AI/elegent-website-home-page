import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUS from '../components/AboutUS'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutUS/>
        <Services/>
        <Testimonial/>
        <Footer/>
    </>
  )
}

export default Home
