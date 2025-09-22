import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
import api from "../lib/axios.js";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [currentVersion, setCurrentVersion] = useState("");

  useEffect(() => {
    const fetchVerison = async () => {
      const res = await fetch(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      );
      const allVersions = await res.json();
      setCurrentVersion(allVersions[0]);
    };

    fetchVerison();
  }, []);

  return (
    <header>
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary tracking-tighter">
            DB4LOL
          </h1>
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `btn btn-ghost ${isActive ? "underline font-bold" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/build"
              className={({ isActive }) =>
                `btn btn-ghost ${isActive ? "underline font-bold" : ""}`
              }
            >
              Build
            </NavLink>
            <NavLink
              to="/stat"
              className={({ isActive }) =>
                `btn btn-ghost ${isActive ? "underline font-bold" : ""}`
              }
            >
              Stat
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `btn btn-ghost ${isActive ? "underline font-bold" : ""}`
              }
            >
              About
            </NavLink>
            <Link
              to={
                "https://www.leagueoflegends.com/en-us/news/tags/patch-notes/"
              }
              target="_blank"
              className="btn btn-ghost"
            >
              {currentVersion || "Loading..."}
            </Link>
            <Link
              to={"https://github.com/Kevin4663"}
              target="_blank"
              className="btn btn-ghost"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
