import React from 'react'
import RestaurentCard from './RestaurentCard'

export default function Restaurents() {
  return (
    <div className='pt-16 pb-16'>
      {/* section heading */}
      <div className="text-xl sm:text-2xl text-center font-extrabold">
        Available Restaurant Nearby Area
      </div>

      {/*  */}
      <div className="mx-auto w-[80%] grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <RestaurentCard  image="/images/r1.jpg" title="Pizza Hut Delicious Pizza" />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">

          <RestaurentCard  image="/images/r2.jpg" title="Chipotle Mexican Grill (2675 Geary Boulevard)" />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <RestaurentCard  image="/images/r3.jpg" title="McDonald's® Burgers (Fillmore)" />
           </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <RestaurentCard  image="/images/r4.jpg" title="The Baked Bear San Francisco" />
           </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <RestaurentCard  image="/images/r5.jpg" title="Shake Shack (3060 Fillmore Street)" />
           </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
          <RestaurentCard  image="/images/r6.jpg" title="Chubby Noodle Chinese Takeout " />
        </div>
      </div>

      <div className='mt-16 text-center'>
        <button className='px-9 py-2.5 sm:px-12 sm:py-3.5 cursor-pointer rounded-full font-bold text-base sm:text-lg bg-cyan-700 text-white dark:text-black hover:bg-blue-950 transition-all duration-300 dark:bg-cyan-300 dark:hover:bg-cyan-200 '>Discover More &rarr;</button>
      </div>
    </div>
  )
}
