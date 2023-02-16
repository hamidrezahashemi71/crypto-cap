import { cryptosList } from '../lib/dummyData'
import { getRequest } from '../lib/axios/baseConfig'
import { useQuery } from '@tanstack/react-query'
import { Coins, CryptoObject } from '../lib/interfaces'
import LoadingSpinner from './LoadingSpinner'

const CryptoList = ({intervalTime} : {intervalTime : number}) => {
  const getCoinPrices = async () => await getRequest('')
  const { data: coins, isLoading } = useQuery<Coins>({
    queryKey: ["prices"],
    queryFn: getCoinPrices,
    refetchInterval: intervalTime,
  }); 


  if(isLoading) return <LoadingSpinner/>
  return (
      <div className="mt-[31px] w-full custom-transparent-bg border-[1px] border-white border-opacity-5 z-50">
          <div className='grid grid-cols-12 w-full text-center py-[21.69px] text-grayText font-roboto  border-[1px] border-white border-opacity-5'>
            <p className='col-span-1'>NO</p>
            <p className='col-span-3'>NAME</p>
            <p className='col-span-2'>LAST PRICE</p>
            <p className='col-span-1'>CHANGE</p>
            <p className='col-span-3'>MARKET STATS</p>
            <p className='col-span-2'>TRADE</p>
          </div>
      <div>
        {cryptosList.map((crypto : CryptoObject) => {
          return (
            <div key={crypto.id} className='grid grid-cols-12 text-center items-center py-[9.19px] text-grayText font-roboto  border-[1px] border-white border-opacity-5'>
              <p className='col-span-1'>{ crypto.id }</p>
              <div className='flex justify-start items-center gap-[22px] font-roboto font-normal text-grayText col-span-3'>
                <img src={crypto.icon} alt="" />
                <p>{ crypto.name}</p>
                <p>|</p>
                <p>{ crypto.abrv}</p>
              </div>
              {
                coins![crypto.findInApiKey]?.usd ?
                  <p className='col-span-2'>${coins![crypto.findInApiKey]?.usd}</p>
                  :
                  <p className='col-span-2 text-customRed'>unavailable</p>
              }
              <p className={`${crypto.diff < 0 ? 'text-customRed' : 'text-grayText'} col-span-1`}>{crypto.diff}%</p>
              <div className='flex justify-center col-span-3'>
                <img src={crypto.chart} alt="" />
              </div>
              <div className='flex justify-center col-span-2'>
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