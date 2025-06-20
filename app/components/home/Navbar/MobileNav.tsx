import { navLink } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav : boolean,
  closeNav : ()=>void
}
const MobileNav = ({showNav, closeNav}:Props) => {

  const openNav = showNav ? 'translate-x-0' : ' translate-x-[-100%]'
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${openNav} inset-0 transform transition-all duration-500 z-[1002] h-screen bg-black opacity-70 w-full`}></div>
      {/* mobile navlinks */}
      <div className={`fixed ${openNav} text-white flex flex-col justify-center h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-950 space-y-5 z-[10050] `}>
         {navLink.map((link)=>(
                    <Link key={link.id} href={link.url} className=' text-black hover:text-green-700 font-bold transition-all duration-200'>
                      <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[25px] '>{link.label}</p>
                    </Link>
                  ))}

                  {/* close icons */}
                  <CgClose onClick={closeNav} className=' absolute top-[.7rem] right-[1.4rem] cursor-pointer sm:w-8 h-6 w-6'/>
      </div>
    </div>
  )
}

export default MobileNav