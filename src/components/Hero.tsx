import React from 'react'

const Hero = () => {
  return (
      <div className='w-[100vw] pt-[88px] pb-[166px] flex flex-col justify-center items-center bg-black'>
        <div className='flex flex-col items-center font-raleway font-bold text-4xl gap-7'>
          <p className='text-white'>Start and Build Your Crypto Portfolio Here</p>
          <p className='text-[#B6B6B6] px-[20%] font-roboto font-light text-lg text-center'>
          Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.
          </p>
          <button className='btn-primary w-[190px] mt-[50px]'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero