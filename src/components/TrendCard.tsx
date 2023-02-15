const TrendCard = (props: any) => {
  const {icon, abrv, name, price, diff, chart, setCryptos} = props
  return (
    <div className='w-[297px] bg-gray-900 rounded-2xl px-7 py-[18px]'>
      <div className='flex flex-col gap-[35px]'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center gap-[14px]'>
            <img src={icon} alt="Rodi" />
            <p className='font-raleway font-semibold text-[white] text-sm'>{abrv}</p>
            <span className='w-full bg-[#C6C6C6] py-1 px-[6px] text-sm cursor-pointer hover:bg-gray-600 rounded-[4px] hover:text-white transition-all duration-200s'>
              {name.toUpperCase()}
            </span>
          </div>
          <div className='w-[34px] h-[34px] rounded-full bg-gray-500 flex justify-center items-center hover:scale-110 transition-all duration-200 cursor-pointer '>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.54595 1.08395L14.7383 1.79106M14.7383 1.79106L15.4454 10.9834M14.7383 1.79106L1.26166 15.2677" stroke="#B6B6B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <p className='font-roboto font-medium text-2xl text-white'>${price}</p>
            <p className='font-roboto font-medium text-lg text-[#B6B6B6]'>{diff}%</p>
          </div>
          <img src={chart} alt="chart" />
        </div>
      </div>
    </div>
  )
}

export default TrendCard