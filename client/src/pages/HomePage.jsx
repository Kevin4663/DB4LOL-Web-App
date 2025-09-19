import { useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI"
import axios from "axios"
import { Link } from "react-router"

const HomePage = () => {
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