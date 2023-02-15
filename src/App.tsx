import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MarketUpdete from "./components/MarketUpdete";
import Navbar from "./components/Navbar";
import Trends from "./components/Trends";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useWindowSize } from "./lib";

const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#11011E] px-[45px] 2xl:px-[90px] min-h-screen text-white">
        {
          useWindowSize() > 1280 ? 
            <div>
              <Navbar />
              <Hero />
              <Trends />
              <MarketUpdete />
              <Footer/>
            </div>
            :
            <p className="text-center pt-4">Sorry, For seeing the app you need to use larger devices!</p>
        }
      </div>
    </QueryClientProvider>
  );
}

export default App;
