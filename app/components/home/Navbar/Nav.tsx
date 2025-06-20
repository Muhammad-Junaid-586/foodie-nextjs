'use client'
import { navLink } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { MdDeliveryDining } from 'react-icons/md'
import ThemeToggler from '../../Helper/ThemeToggler'


type Props = {
  openNav : ()=> void
}
const Nav = ({openNav}:Props) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(()=>{
    const handler = ()=>{
      if (window.scrollY>90) setNavBg(true)
        if (window.scrollY<90) setNavBg(false)
    }
  window.addEventListener('scroll', handler)
  return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <div className={`transition-all ${navBg ? 'bg-white dark:bg-gray-900 shadow-md' : 'fixed'} duration-200 h-[12vh] z-[100] fixed w-full`} >
      <div className='flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto'>
        <div className='flex items-center space-x-2 '>
          <div className='w-10 h-10 bg-blue-900 dark:bg-white rounded-full flex items-center justify-center flex-col'>
            <MdDeliveryDining className='w-6 h-6 text-white dark:text-black'/>
          </div>
          <h1 className='text-xl hidden sm:block md:text-2xl text-black dark:text-white font-bold'>Foodie</h1>
        </div>

        {/* navlinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLink.map((link)=>(
            <Link key={link.id} href={link.url} className=' text-black dark:text-white hover:text-green-700 dark:hover:text-green-400 font-bold transition-all duration-200'>
              <p>{link.label}</p>
            </Link>
          ))}
        </div>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          {/* join now button */}
          <button className='bg-blue-950 dark:bg-white  px-8 py-2.5 text-white dark:text-black  font-bold rounded-lg hover:bg-black dark:hover:bg-gray-200 transition-all duration-300 cursor-pointer'>Join Now</button>
          {/* theme toggler */}
          <ThemeToggler />
          {/* menu icons */}
          <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-blue-950 dark:text-white lg:hidden'/>
        </div>
      </div>
    </div>
  )
}

export default Nav