import TrendCard from './TrendCard'
import { useState } from 'react'
import { cryptosList } from '../lib/dummyData'

const Trends = () => {
  const [cryptos, setCryptos] = useState(cryptosList)

  return (
    <div className='w-full px-[90px] pb-[260px] flex flex-col gap-6 bg-black'>
      <p className='text-white font-raleway font-semibold text-2xl'>Market Trends</p>
      <div className='w-full flex justify-between items-center gap-3'>
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
            setCryptos={setCryptos}
          />
          )
        })}
      </div>
    </div>
  )
}

export default Trends