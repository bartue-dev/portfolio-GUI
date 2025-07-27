import { Outlet } from "react-router"
import Navbar from "./common/Navbar"
import ScrollToTop from "./common/ScrollToTop"
import Footer from "./common/Footer"

function App() {
  return (
    <div className="bg-gray-100 relative">
      <ScrollToTop/>
      <div className="bg-white w-[90%] min-h-screen flex flex-col justify-between text-gray-600 py-3 m-auto">
        <Navbar/>
        <div className="justify-items-center px-8 sm:px-20 lg:px-40">
          <Outlet/>
        </div>
        <Footer/>
      </div>   
    </div>
   
  )
}

export default App
