import React from 'react'

const AboutMe = () => {
  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-35  flex flex-col justify-center ">
      <div className='mt-15 text-[14px] '>
        <p className='text-gray-400'>Software Developer <span className='text-black'>Muchammad Ibrahim Al Amin</span></p>
        <p className='mt-2 text-gray-400'>Currently at <span className='text-black'>Nesabatechno</span></p>
      </div>
      <div className='my-10'>
        <h1 className='my-6 text-3xl' >
          Nice to meet you!
        </h1>
        <p className='my-6'>
          I’ve been working professionally in product design for six years, focusing on 0→1 product development, complex financial flows, and highly interactive interfaces.
        </p>
        <p>
          My approach is rooted in understanding user behavior, aligning design decisions with business goals,
          and crafting digital products that are visually strong, intuitive, and scalable.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
