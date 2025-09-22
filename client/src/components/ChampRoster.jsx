import { useEffect, useState } from "react";
import api from "../lib/axios.js";
import { toast } from "react-hot-toast";
import ChampBox from "../components/ChampBox";

const ChampRoster = () => {
  const [champIcons, setChampList] = useState([]);

  useEffect(() => {
    const fetchChampIcons = async () => {
      try {
        const res = await api.get("/champ-icons");
        setChampList(res.data.champIcons);
      } catch (error) {
        console.log("Error loading Champ Icons");
        console.log(error.response);
        if (error.response?.status === 429) {
        } else {
          toast.error("Failed to load Champs Icons");
        }
      }
    };

    fetchChampIcons();
  }, []);

  return (
    <div>
      <div className="pl-6 text-2xl text-primary p-2 w-max">
        <p>Champions</p>
      </div>
      <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-10 gap-1 w-max pl-6">
        {champIcons.map((champ, index) => (
          <ChampBox champ={champ} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ChampRoster;
