import {useEffect, useState} from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1280)

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth)
    window.addEventListener("resize", handleResize)
    handleResize()
    
    return () => window.removeEventListener("resize", handleResize)

  }, [])

  return windowSize
}

export default useWindowSize