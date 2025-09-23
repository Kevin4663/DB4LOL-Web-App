import { useState } from "react";

const ChampBox = ({ champ, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative flex flex-col items-center w-max"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/15.18.1/img/champion/${champ.icon}`}
        alt={`champ-${champ.name}`}
        className="w-10 h-10 cursor-pointer"
        loading="lazy"
      />
      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 max-w-xs p-2 rounded-lg bg-black text-xs shadow-lg z-50">
          <p className="font-bold">{champ.name}</p>
        </div>
      )}
    </div>
  );
};
export default ChampBox;
