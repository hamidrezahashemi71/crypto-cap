import MarketUpdateHeader from './MarketUpdateHeader'
import CryptoList from './CryptoList'

const MarketUpdete = () => {
  return (
    <div className='w-full bg-black px-[90px]'>
      <MarketUpdateHeader />
      <CryptoList />
      <p className='mt-[41px] pb-[21px] underline text-[#0FAE96] font-raleway font-semibold cursor-pointer hover:text-[#71ffea] transition-all duration-200'>See All Coins</p>
    </div>
  )
}

export default MarketUpdete