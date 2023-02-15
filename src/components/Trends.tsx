import React from 'react'
import TrendCard from './TrendCard'

const Trends = () => {
  return (
    <div className='w-full px-[90px] pb-[260px] flex flex-col gap-6 bg-black'>
      <p className='text-white font-raleway font-semibold text-2xl'>Market Trends</p>
      <div className='w-full flex justify-between items-center gap-3'>
        <TrendCard/>
        <TrendCard/>
        <TrendCard/>
        <TrendCard/>
      </div>
    </div>
  )
}

export default Trends