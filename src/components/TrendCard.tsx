import React from 'react'

const TrendCard = () => {
  return (
    <div className='w-[297px] bg-gray-900 rounded-2xl px-7 py-[18px]'>
      <div className='flex flex-col gap-[35px]'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center gap-[14px]'>
            <img src="images/bitcoin.png" alt="Rodi" />
            <p className='font-raleway font-semibold text-[white] text-sm'>BTC</p>
            <span className='bg-[#C6C6C6] w-full py-1 px-[6px] text-lg cursor-pointer hover:bg-gray-600 rounded-[4px] hover:text-white transition-all duration-200s'>BITCOIN</span>
          </div>
          <div className='w-[34px] h-[34px] rounded-full bg-gray-500 flex justify-center items-center hover:scale-110 transition-all duration-200 cursor-pointer '>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.54595 1.08395L14.7383 1.79106M14.7383 1.79106L15.4454 10.9834M14.7383 1.79106L1.26166 15.2677" stroke="#B6B6B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <p className='font-roboto font-medium text-2xl text-white'>$56,624.54</p>
            <p className='font-roboto font-medium text-lg text-[#B6B6B6]'>1.41%</p>
          </div>
          <img src="images/chart-state.png" alt="chart" />
        </div>
      </div>
    </div>
  )
}

export default TrendCard