import { useState } from "react";

const ChampBox = ({ champ, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/15.18.1/img/champion/${champ.icon}`}
        alt={`champ-${champ.name}`}
        className="w-10 cursor-pointer shadow-lg"
        loading="lazy"
      />
      {isHovered && (
        <div className="absolute mt-2 p-2 rounded-lg bg-black border-2 z-1">
          <p className="font-bold">{champ.name}</p>
        </div>
      )}
    </div>
  );
};
export default ChampBox;
