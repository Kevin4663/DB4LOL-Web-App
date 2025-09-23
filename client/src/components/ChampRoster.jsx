import { useEffect, useState } from "react";
import api from "../lib/axios.js";
import { toast } from "react-hot-toast";
import ChampBox from "./ChampBox";

const ChampRoster = ({ onSelectChamp }) => {
  const [champData, setChampList] = useState([]);

  useEffect(() => {
    const fetchChampData = async () => {
      try {
        const res = await api.get("/champ-data");
        setChampList(res.data.champData);
      } catch (error) {
        console.error("Error loading Champ data", error);
        toast.error("Failed to load Champs data");
      }
    };

    fetchChampData();
  }, []);

  return (
    <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-10 gap-2">
      {champData.map((champ) => (
        <ChampBox
          key={champ._id}
          champ={champ}
          onSelect={() => onSelectChamp(champ)}
        />
      ))}
    </div>
  );
};

export default ChampRoster;
