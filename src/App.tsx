import Navbar from "./common/Navbar"
import Home from "./page/homepage/Home"

function App() {
  return (
    <div className="bg-gray-100">
      <div className="bg-white w-[90%] h-screen flex flex-col justify-between text-gray-700 py-3 px-25 m-auto">
        <Navbar/>
        <Home />
        <h1>This Footer</h1>
      </div>   
    </div>
   
  )
}

export default App
