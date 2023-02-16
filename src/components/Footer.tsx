import { SocialIconObject, FooterListItem } from "../lib/interfaces"

const Footer = () => {
  const socialIcons = [
    {id: 1, name: 'instagram', src: "images/instagram.png"},
    {id: 2, name: 'facebook', src: "images/facebook.png"},
    {id: 3, name: 'twitter', src: "images/twitter.png"},
    {id: 4, name: 'youtube', src: "images/youtube.png"},
  ]

  const footerList = [
    {id: 1, title: 'About Us', items:['About', 'Careers', 'Blog', 'Legal & privacy']},
    {id: 1, title: 'Services', items:['Applications', 'Buy Crypto', 'Affilliate', 'Institutional Services']},
    {id: 1, title: 'Learn', items:['What is Cryptocurency?', 'Crypto Basic', 'Tips and Tutorials', 'Market Update']},
  ]

  return (
    <div className='relative w-full text-white border-t-[1px] border-white border-opacity-5 min-h-[297px] z-20'>
      <div className="absolute right-0 w-[1029px] h-[628px] bg-[#60FFE7] opacity-10 blur-[200px] -translate-y-[391px] translate-x-[-90px] -z-10" />
      <div className="absolute top-12 grid grid-cols-12 w-full h-[calc(100%-48px)]">
      <div className='flex flex-col col-span-6'>
        <p className='font-raleway text-2xl'>Crypto<span className='text-customGreen font-bold cursor-pointer'>Cap</span> </p>
          <div className="flex justify-start items-center gap-4 mt-[71px] mb-[34px]">
            {socialIcons.map((icon: SocialIconObject) => {
              return (
                <img key={icon.id} src={icon.src} alt={icon.name}  className="cursor-pointer hover:scale-125 transition-all duration-200"/>
              )
            })}
        </div>
        <p className="font-roboto text-grayText">2021 CoinMarketCap. All rights reserved</p>
        </div>
        {footerList.map((footerItem: FooterListItem) => {
          return (
          <div key={footerItem.id} className="col-span-2 flex flex-col gap-5">
            <p className="footer-title">{footerItem.title}</p>
              {footerItem.items.map((item: string) => {
                return (
                  <p key={`keyfor${item}${footerItem.id}`} className="footer-item">{item}</p>
              )
            })}
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Footer