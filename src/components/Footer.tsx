const Footer = () => {
  return (
    <div className='px-[90px] py-[48.5px] w-full bg-black text-white grid grid-cols-12 border-t-[1px] border-white border-opacity-5'>
      <div className='flex flex-col col-span-6'>
        <p className='font-raleway text-2xl'>Crypto<span className='text-[#0FAE96] font-bold cursor-pointer'>Cap</span> </p>
        <div className="flex justify-start items-center gap-4 mt-[71px] mb-[34px]">
          <img src="images/instagram.png" alt=""  className="cursor-pointer hover:scale-125 transition-all duration-200"/>
          <img src="images/facebook.png" alt=""  className="cursor-pointer hover:scale-125 transition-all duration-200"/>
          <img src="images/twitter.png" alt=""  className="cursor-pointer hover:scale-125 transition-all duration-200"/>
          <img src="images/youtube.png" alt="" className="cursor-pointer hover:scale-125 transition-all duration-200" />
        </div>
        <p className="font-roboto text-[#B6B6B6]">2021 CoinMarketCap. All rights reserved</p>
      </div>
      <div className="col-span-2 flex flex-col gap-5">
        <p className="footer-title">About Us</p>
        <p className="footer-item">About</p>
        <p className="footer-item">Careers</p>
        <p className="footer-item">Blog</p>
        <p className="footer-item">Legal & privacy</p>
      </div>
      <div className="col-span-2 flex flex-col gap-5">
        <p className="footer-title">Services</p>
        <p className="footer-item">Applications</p>
        <p className="footer-item">Buy Crypto</p>
        <p className="footer-item">Affilliate</p>
        <p className="footer-item">Institutional Services</p>
      </div>
      <div className="col-span-2 flex flex-col gap-5">
        <p className="footer-title">Learn</p>
        <p className="footer-item">What is Cryptocurency?</p>
        <p className="footer-item">Crypto Basic</p>
        <p className="footer-item">Tips and Tutorials</p>
        <p className="footer-item">Market Update</p>
      </div>
    </div>
  )
}

export default Footer