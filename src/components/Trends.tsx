import TrendCard from './TrendCard'
import { useState } from 'react'
import { cryptosList } from '../lib/dummyData'
import { CryptoObject } from '../lib/interfaces'

const Trends = () => {
  const [cryptos, setCryptos] = useState<CryptoObject[]>(cryptosList)

  return (
    <div className='relative w-full flex flex-col gap-6 min-h-[243px] mb-[97px]'>
      <div className='absolute w-[375px] h-[545px] bg-[#7000FF] blur-[200px] opacity-25 z-10' />
      <p className='text-white font-raleway font-semibold text-2xl'>Market Trends</p>
      <div className='absolute grid grid-cols-4 min-h-[187px] top-14 gap-3 z-20 w-full'>
        {cryptos.slice(0, 4).map((crypto) => {
          return (
              <TrendCard
                key={crypto.id}
                icon={crypto.icon}
                abrv={crypto.abrv}
                name={crypto.name}
                price={crypto.price}
                diff={crypto.diff}
                chart={crypto.chart}
              />
          )
        })}
      </div>
    </div>
  )
}

export default Trends