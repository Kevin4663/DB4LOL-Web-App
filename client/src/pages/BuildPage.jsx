import { useState } from "react";
import Navbar from "../components/Navbar";
import ChampRoster from "../components/ChampRoster.jsx";
import ChampPortrait from "../components/ChampPortrait.jsx";

const BuildPage = () => {
  const [selectedChamp, setSelectedChamp] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 p-5 gap-1 items-start">
        <ChampPortrait
          champ={selectedChamp}
          onClear={() => setSelectedChamp(null)}
        />
        <ChampRoster onSelectChamp={setSelectedChamp}/>
      </div>
    </div>
  );
};

export default BuildPage;
