import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import api from "../lib/axios.js"
import { toast } from "react-hot-toast"; 
import ChampBox from "../components/ChampBox";
import RateLimitedUI from "../components/RateLimitedUI.jsx";

const BuildPage = () => {
  const [champList, setChampList] = useState([]);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchChampList = async () => {
      try {
        const res = await api.get("/champlist");
        setChampList(res.data.champList);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error loading Champs");
        console.log(error.response);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load Champs");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchChampList();
  }, [])

  return (

      <div className='min-h-screen '>
        <Navbar/>
        {isRateLimited && <RateLimitedUI/>}
        <div></div>
        <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-10 gap-1 w-max pl-6">
          {champList.map( (champ, index) => (
            <ChampBox champ={champ} key={index} />
          ))}
        </div>
      </div>

  )
}

export default BuildPage
