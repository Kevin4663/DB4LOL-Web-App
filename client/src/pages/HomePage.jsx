import { useState } from "react"
import { Link } from "react-router"
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI"


const HomePage = () => {

  // const[israteLimited, setRateLimited] = useState(true);
  // {israteLimited && <RateLimitedUI/>}

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">New Build</h1>
        <Link to={"/build"} className="btn btn-primary">
          Build
        </Link>
      </div>
    </div>
  )
}

export default HomePage