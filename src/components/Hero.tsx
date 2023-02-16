const Hero = () => {
  return (
    <div className='relative w-full pt-[88px] pb-[166px] flex flex-col justify-center items-center min-h-[470px]'>
      <div className='absolute grid grid-cols-2 top-0 left-[202px] right-[188px] w-[calc(100%-390px)] h-full opacity-25 z-10'>
        <div className='blur-[200px] bg-[#7000FF] w-full h-full' />
        <div className='blur-[200px] bg-[#FF00C7] w-full h-full' />
      </div>
      <div className='absolute top-[100px] min-h-[246px] z-20'>
        <div className='flex flex-col items-center font-raleway font-bold text-4xl gap-7'>
          <p className='text-white text-center'>Start and Build Your Crypto Portfolio Here</p>
          <p className='text-grayText px-[20%] font-roboto font-light text-lg text-center'>
          Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.
          </p>
          <button className='btn-primary w-[190px] mt-[22px]'>Get Started</button>
      </div>
        </div>
    </div>
  )
}

export default Hero