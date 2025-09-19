import { Link } from "react-router";
import { useEffect, useState } from "react";
import api from "../lib/axios.js";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [version, setVersion] = useState("");

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const res = await api.get("/version");
        setVersion(res.data.version);
      } catch (error) {
        console.error("Error fetching version:", error.response || error);
        toast.error("Failed to load version");
      }
    };

    fetchVersion();
  }, []);

  return (
    <header>
      <div className="mx-auto maxw-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary tracking-tighter">
            DB4LOL
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/"} className="btn btn-ghost">
              <span className="text-primary">Home</span>
            </Link>
            <Link to={"/build"} className="btn btn-ghost">
              <span className="text-primary">Build</span>
            </Link>
            <Link to={"/stat"} className="btn btn-ghost">
              <span className="text-primary">Stat</span>
            </Link>
            <Link to={"/about"} className="btn btn-ghost">
              <span className="text-primary">About</span>
            </Link>
            <Link
              to={
                "https://www.leagueoflegends.com/en-us/news/tags/patch-notes/"
              }
              target="_blank"
              className="btn btn-ghost"
            >
              <span className="text-primary">{version || "Loading..."}</span>
            </Link>
            <Link
              to={"https://github.com/Kevin4663"}
              target="_blank"
              className="btn btn-ghost"
            >
              <span className="text-primary">Github</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
