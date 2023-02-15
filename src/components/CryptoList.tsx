import { cryptosList } from '../lib/dummyData'

const CryptoList = () => {
  return (
      <div className="mt-[31px] w-full bg-gray-900 border-[1px] border-white border-opacity-5">
          <div className='grid grid-cols-6 w-full text-center py-[21.69px] text-[#B6B6B6] font-roboto  border-[1px] border-white border-opacity-5'>
            <p className=''>NO</p>
            <p>NAME</p>
            <p>LAST PRICE</p>
            <p>CHANGE</p>
            <p>MARKET STATS</p>
            <p>TRADE</p>
          </div>
      <div>
        {cryptosList.map((crypto) => {
          return (
            <div key={crypto.id} className='grid grid-cols-6 text-center items-center py-[9.19px] text-[#B6B6B6] font-roboto  border-[1px] border-white border-opacity-5'>
              <p>{ crypto.id }</p>
              <div className='flex justify-center items-center gap-[22px] font-roboto font-normal text-[#B6B6B6]'>
                <img src={crypto.icon} alt="" />
                <p>{ crypto.name}</p>
                <p>|</p>
                <p>{ crypto.abrv}</p>
              </div>
              <p>${crypto.price}</p>
              <p className={`${crypto.diff < 0 ? 'text-[#AE0000]' : 'text-[#B6B6B6]'}`}>{crypto.diff}%</p>
              <div className='flex justify-center'>
                <img src={crypto.chart} alt="" />
              </div>
              <div className='flex justify-center'>
                <button className='btn-primary h-[32px]'>Trade</button>
              </div>
            </div>
          )
        })}
      </div>
      </div>
  )
}

export default CryptoList