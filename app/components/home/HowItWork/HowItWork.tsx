import React from 'react'
import HowItWorkCards from './HowItWorkCards'

const HowItWork = () => {
  return (
    <div className='pt-16 pb-16 bg-white dark:bg-gray-900 transition-colors duration-300'>
      <h1 className='text-xl sm:text-3xl text-center font-extrabold text-gray-800 dark:text-white'>
        🍽 Let's See How it Works
      </h1>
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="0">
          <HowItWorkCards  num='01' image='/images/w1.png' title='Become a Delivery Man' description="As a delivery driver, you'll make reliable money—working anytime, anywhere." />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <HowItWorkCards  num='02' image='/images/w2.png' title='Become a Partner' description='Grow your business and reach new customers by partnering with us.' />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <HowItWorkCards  num='03' image='/images/w3.png' title='Try Android/iOS App' description="Get the best DoorDash experience with live order tracking." />
        </div>
      </div>
      </div>
  )
}

export default HowItWork