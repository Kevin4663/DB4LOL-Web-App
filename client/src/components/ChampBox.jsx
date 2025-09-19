const ChampBox = ({ champ }) => {
  return (
    <div className="flex flex-col items-center w-max">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/15.18.1/img/champion/${champ.icon}`}
        alt={`champ-${champ.name}`}
        className="w-10 h-10"
      />
    </div>
  );
};
export default ChampBox;
