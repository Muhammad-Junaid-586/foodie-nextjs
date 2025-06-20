'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Restaurents from './Restaurents/Restaurents'
import Category from './Category/Category'
import HowItWork from './HowItWork/HowItWork'
import About from './About/About'
import ClientReview from './ClientReview/ClientReview'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function Home() {

  
useEffect(()=>{
  const initAOS = async()=>{
await import("aos")
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: true,
      anchorPlacement: 'top-bottom',
      });


  }
  initAOS()
}, [])

  return (
    <div className='overflow-hidden '>
      <Hero />
      <Restaurents />
      <Category />
      <HowItWork />
      <About />
      <ClientReview />
      
    </div>
  )
}

export default Home