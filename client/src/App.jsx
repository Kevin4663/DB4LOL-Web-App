import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import BuildPage from "./pages/BuildPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import StatPage from "./pages/StatPage.jsx";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-gradient-to-r from-[#383636] to-[#291b1b]" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stat" element={<StatPage />} />
      </Routes>
    </div>
  );
};

export default App;
