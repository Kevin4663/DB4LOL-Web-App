import { useState } from "react";
import Navbar from "../components/Navbar";
import ChampRoster from "../components/ChampRoster.jsx";
import ChampPortrait from "../components/ChampPortrait.jsx";

const BuildPage = () => {
  const [selectedChamp, setSelectedChamp] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex gap-6 p-6">
        <ChampRoster onSelectChamp={setSelectedChamp} />

        <ChampPortrait
          champ={selectedChamp}
          onClear={() => setSelectedChamp(null)}
        />
      </div>
    </div>
  );
};

export default BuildPage;
