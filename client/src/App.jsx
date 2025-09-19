import {Route, Routes} from "react-router"

import HomePage from "./pages/HomePage.jsx"
import BuildPage from "./pages/BuildPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import StatPage from "./pages/StatPage.jsx"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stat" element={<StatPage />} />
      </Routes>
    </div>
  )
}

export default App
