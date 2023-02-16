import MarketUpdateHeader from './MarketUpdateHeader'
import CryptoList from './CryptoList'

const MarketUpdete = () => {
  return (
    <div className='w-full'>
      <MarketUpdateHeader />
      <CryptoList intervalTime={ 10000 } />
      <p className='mt-[41px] pb-[21px] underline text-customGreen font-raleway font-semibold cursor-pointer hover:text-[#71ffea] transition-all duration-200'>
        See All Coins
      </p>
    </div>
  )
}

export default MarketUpdete