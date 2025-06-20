'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1
  }
};

const ClientReview = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-xl sm:text-2xl text-center font-extrabold'>What People Say About Us</h1>
      <div className='mt-16 w-[80%] mx-auto'>
        <Carousel
  
  showDots={false}
  responsive={responsive}
  
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
 
>
  <ReviewCard reviewTitle='Great Work!' userName='jassica roe' userImage = "/images/c1.png" role="UI UX Designer"  />
  <ReviewCard reviewTitle='Creative Work!' userName='jani Doe' userImage = "/images/c2.png" role="Website Developer"  />
  <ReviewCard reviewTitle='Awesome Work!' userName='vivik kumar' userImage = "/images/c3.png" role="Graphic Designer"  />
</Carousel>
      </div>
    </div>
  )
}

export default ClientReview