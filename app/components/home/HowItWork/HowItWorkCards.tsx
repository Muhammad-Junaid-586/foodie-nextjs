import Image from 'next/image'
import React from 'react'

type Props = {
  image : string,
  title : string,
  description : string,
  num : string
}

const HowItWorkCards = ({image , title , description , num}:Props) => {
  return (
    <div>
      <div className='relative'>
        <Image src={image} alt='img' width={250} height={250} className='object-contain mx-auto' />
      
      <div className='w-14 h-14 bg-pink-600 text-white text-xl font-bold flex items-center justify-center flex-col absolute top-0 left-0 rounded-full'>{num}</div>
    </div>

    <h1 className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-2">{title}</h1>
    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{description}</p>
    <p className='mt-6 text-base font-bold text-blue-800 dark:text-blue-400 hover:text-blue-600 transition-all duration-200 text-center cursor-pointer'>Start Earning &rarr;</p>
    </div>
  )
}

export default HowItWorkCards