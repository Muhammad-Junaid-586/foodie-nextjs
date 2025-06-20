import Image from 'next/image'
import React from 'react'


const steps = [
  {
    number: '01',
    title: 'Easy to use application',
    description: 'We’re driven beyond just finishing the projects. We want to find solutions using our website & apps',
  },
  {
    number: '02',
    title: 'Deliver Food within 30 min',
    description: 'We’re driven beyond just finishing the projects. We want to find solutions using our website & apps',
  },
  {
    number: '03',
    title: '100% Reliable with Privacy',
    description: 'We’re driven beyond just finishing the projects. We want to find solutions using our website & apps',
  },
]


const About = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center '>
        {/* image content */}
        <div className='' data-aos="fade-right" data-aos-anchor-placement="top-center" >
          <Image src='/images/a.png' alt='img'  width={800} height={800}/>
        </div>

        {/* text content */}
        <div>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12'>We deliver our products as fast as superman can do</h1>

          <p className="text-sn sm:text-base mt-4 font-medium text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quos distinctio eaque deserunt porro doloremque.
</p>



        {/* Steps */}
      <div className="space-y-10 max-w-3xl mx-auto mt-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Left: Step Number */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full text-gray-600 opacity-40 text-xl sm:text-2xl font-bold shadow-lg">
              {step.number}
            </div>

            {/* Right: Title + Description */}
            <div>
              <h2 className="text-medium md:text-2xl  font-semibold text-gray-800 dark:text-white mb-1">
                {step.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  )
}

export default About