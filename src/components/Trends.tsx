import TrendCard from './TrendCard'
import { useState } from 'react'

const Trends = () => {
  const [cryptos, setCryptos] = useState([
    {
      icon: 'images/bitcoin.png',
      abrv: 'BTC',
      name: 'bitcoin',
      price: 56624.54,
      diff: 1.41,
      chart: 'images/btc-chart.png',
    },
    {
      icon: 'images/etherium.png',
      abrv: 'ETH',
      name: 'etherium',
      price: 4267.90,
      diff: 2.22,
      chart: 'images/eth-chart.png',
    },
    {
      icon: 'images/bnb.png',
      abrv: 'BNB',
      name: 'binance',
      price: 587.74,
      diff: 0.82,
      chart: 'images/bnb-chart.png',
    },
    {
      icon: 'images/tether.png',
      abrv: 'USDT',
      name: 'tether',
      price: 0.9998,
      diff: 1.41,
      chart: 'images/tether-chart.png',
    },
  ])

  return (
    <div className='w-full px-[90px] pb-[260px] flex flex-col gap-6 bg-black'>
      <p className='text-white font-raleway font-semibold text-2xl'>Market Trends</p>
      <div className='w-full flex justify-between items-center gap-3'>
        {cryptos.map((crypto) => {
          return (
            <TrendCard
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