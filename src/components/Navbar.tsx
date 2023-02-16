
const Navbar = () => {
  const navItems = ['Home', 'Business', 'Trade', 'Target', 'Learn']
  return (
    <div className='w-full flex flex-wrap justify-between items-center gap-10 text-white'>
      <p className='font-raleway text-2xl'>Crypto<span className='text-customGreen font-bold cursor-pointer'>Cap</span> </p>
      <div className='w-[448px] flex py-12 flex-wrap justify-between px-[10px] items-center gap-10 font-raleway'>
        {navItems.map((item: string, index: number) => {
          return (
            <p key={`navItem${index}`} className={`${item === 'Home' ? 'font-semibold text-[rgb(15,174,150)] hover:text-green-300' : 'font-thin hover:text-customGreen'} cursor-pointer   transition-all duration-200`}>
              {item}
            </p>
          )
        })}
      </div>
      <div className="w-[205px] justify-between items-center hidden xl:flex ">
        <div className="flex items-center x">
        <div className="mr-3 cursor-pointer hover:text-customGreen transition-all duration-200">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.252 8C2.08416 8.6534 1.99949 9.32538 2 10C2 10.69 2.088 11.36 2.252 12H5.1C4.96518 10.6701 4.96518 9.32993 5.1 8H2.252ZM3.07 6H5.416C5.682 4.783 6.066 3.693 6.537 2.786C5.08518 3.48542 3.87722 4.60523 3.07 6ZM17.748 8H14.9C15.0348 9.32993 15.0348 10.6701 14.9 12H17.748C18.0847 10.6879 18.0847 9.31208 17.748 8ZM16.93 6C16.1228 4.60523 14.9148 3.48542 13.463 2.786C13.935 3.693 14.318 4.783 14.584 6H16.93ZM7.112 8C7.03708 8.66403 6.99968 9.33176 7 10C7 10.685 7.038 11.355 7.112 12H12.888C13.0386 10.6709 13.0386 9.32908 12.888 8H7.112ZM7.47 6H12.53C12.348 5.2483 12.0855 4.51841 11.747 3.823C11.119 2.568 10.447 2 10 2C9.552 2 8.881 2.568 8.253 3.823C7.938 4.455 7.673 5.19 7.47 6ZM3.07 14C3.87722 15.3948 5.08518 16.5146 6.537 17.214C6.065 16.307 5.682 15.217 5.416 14H3.07ZM16.93 14H14.584C14.318 15.217 13.934 16.307 13.463 17.214C14.9148 16.5146 16.1228 15.3948 16.93 14ZM7.47 14C7.673 14.81 7.938 15.545 8.253 16.177C8.881 17.432 9.553 18 10 18C10.448 18 11.119 17.432 11.747 16.177C12.062 15.545 12.327 14.81 12.53 14H7.47ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20Z" fill="#C6C6C6"/>
          </svg>
        </div>
        <p className="font-raleway font-semibold cursor-pointer">EN</p>
          <p className="font-raleway font-semibold ml-[5.75px] mr-[27.31px] cursor-pointer">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3333 0L6.21921 4.293L2.10508 0L0.75 1.414L6.21921 7.121L11.6884 1.414L10.3333 0Z" fill="#B6B6B6"/>
            </svg>
          </p>
          
        </div>
        <button className="btn-primary">Login</button>
      </div>
    </div>
  )
}

export default Navbar