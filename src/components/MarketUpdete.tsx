import MarketUpdateHeader from './MarketUpdateHeader'
import CryptoList from './CryptoList'
import Footer from './Footer'

const MarketUpdete = () => {

  return (
    <div className='w-full'>
      <MarketUpdateHeader />
      <CryptoList intervalTime={ 10000 } />
      <p className='mt-[41px] pb-[21px] underline text-[#0FAE96] font-raleway font-semibold cursor-pointer hover:text-[#71ffea] transition-all duration-200'>
        See All Coins
      </p>
      <Footer/>
    </div>
  )
}

export default MarketUpdete