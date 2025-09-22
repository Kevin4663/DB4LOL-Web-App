import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ChampRoster from "../components/ChampRoster.jsx";

const BuildPage = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <ChampRoster />
    </div>
  );
};

export default BuildPage;
