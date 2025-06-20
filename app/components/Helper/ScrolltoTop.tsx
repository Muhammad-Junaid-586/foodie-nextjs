'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrolltoTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show and hide functionality for the scroll to top
  useEffect(()=>{
    const toggleVisibility = ()=>{
      if(window.scrollY >300){
        setIsVisible(true)
      }else{
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)

    return()=> window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      })
  }
  return (
    <div className='fixed bottom-4 right-4 animate-pulse'>{
      isVisible && (<button className='bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer focus:outline-none' onClick={scrollToTop}>
        <FaArrowUp />
      </button>)
    }</div>
  )
}

export default ScrolltoTop