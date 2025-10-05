import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";

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
    <header className="">
      <div className="mx-auto p-4">
        <div className="flex items-center justify-between">
          <p className="text-4xl font-bold font-[PixelifySans]">DB4LOL</p>
          <div className="flex items-center gap-2">
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
