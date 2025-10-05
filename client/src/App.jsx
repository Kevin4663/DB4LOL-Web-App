import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import BuildPage from "./pages/BuildPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import StatPage from "./pages/StatPage.jsx";
import BuildRune from "./pages/BuildWizard/BuildRune.jsx";
import BuildItem from "./pages/BuildWizard/BuildItem.jsx";
import BuildExport from "./pages/BuildWizard/BuildExport.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/build/rune" element={<BuildRune />} />
        <Route path="/build/item" element={<BuildItem />} />
        <Route path="/build/export" element={<BuildExport />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stat" element={<StatPage />} />
      </Routes>
    </div>
  );
};

export default App;
