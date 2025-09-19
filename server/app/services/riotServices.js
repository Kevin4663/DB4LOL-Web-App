const RIOT_API_KEY = process.env.RIOT_API_KEY;

export const getLatestVersion = async () => {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const data = await res.json();
    const version = data[0]; // current version
    return version;
  } catch (err) {
    console.error("Error fetching latest version:", err);
    return null;
  }
};

export const getSummonerPUUID = async (gameName, tagline) => {
  try {
    const link = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagline}?api_key=${RIOT_API_KEY}`;
    const res = await fetch(link);

    if (!res.ok) {
      const errorBody = await res.text();
      console.error(`Riot API Error (${res.status}):`, errorBody);
      return null;
    }

    const dataObject = await res.json();
    const puuid = dataObject.puuid;
    return puuid;
  } catch (err) {
    console.error("Error fetching summoner data:", err);
    return null;
  }
};
