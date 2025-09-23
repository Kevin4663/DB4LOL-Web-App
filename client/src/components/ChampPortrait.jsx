import { X } from "lucide-react";

const ChampPortrait = ({ champ, onClear }) => {
  return (
    <div className="w-72 h-100 p-4 rounded-xl bg-gradient-to-br from-[#383636] to-[#291b1b] shadow-lg flex flex-col items-center justify-center text-center border-2">
      {!champ ? (
        <p>Select a champion to see details</p>
      ) : (
        <>
          <div className="self-end">
            <button
              className=" hover:text-black transition-colors"
              onClick={onClear}
            >
              <X size={18} />
            </button>
          </div>

          <img
            src={`https://ddragon.leagueoflegends.com/cdn/15.18.1/img/champion/${champ.icon}`}
            alt={champ.name}
            className="w-28 h-28 object-contain rounded-lg mb-3"
          />

          <h2 className="text-lg font-bold">{champ.name}</h2>
          <p className="text-sm mt-1">{champ.blurb}</p>
        </>
      )}
    </div>
  );
};

export default ChampPortrait;
