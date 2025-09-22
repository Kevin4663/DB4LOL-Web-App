const RIOT_API_KEY = process.env.RIOT_API_KEY;

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
  } catch (error) {
    console.error("Error fetching summoner data:", error);
    return null;
  }
};
