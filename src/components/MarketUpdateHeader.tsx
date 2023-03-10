import { useState } from "react"
import { filterList } from "../lib/dummyData"
import { FilterListItem } from "../lib/interfaces"

const MarketUpdateHeader = () => {
  const [filterData, setFilterData] = useState<FilterListItem[]>(filterList)
  return (
    <div className='flex flex-col gap-[22px] text-white'>
      <p className="font-raleway font-bold text-4xl">Market Update</p>
      <p className="font-roboto text-grayText text-lg">Cryptocurrency Categories</p>
      <div className='flex justify-between items-center'>
        <div className='flex items-center justify-between gap-3 w-max'>
          {filterData.map((filterItem: FilterListItem) => {
            return (
              <div
                className={`flex items-center justify-center w-max p-[10px] rounded-md cursor-pointer font-roboto transition-all duration-200
               ${filterItem.selected ? 'bg-white text-black' : 'custom-transparent-bg hover:bg-white hover:text-black'}`}
              key={filterItem.id}
              >
                {filterItem.name}
              </div>
            )
          })}
        </div>
        <div className="relative w-[20%] flex items-center">
          <input
            className='flex w-full p-[13px] pl-[46px] custom-transparent-bg rounded-[6px] border-[1px] border-white border-opacity-10 outline-none text-white'
            placeholder="Search Coin"
          />
          <img src="images/search-icon.png" alt="search-icon" className="absolute top-[16px] left-[13px]" />
        </div>
      </div>
    </div>
  )
}

export default MarketUpdateHeader