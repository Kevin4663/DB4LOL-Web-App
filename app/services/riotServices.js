const RIOT_API_KEY = process.env.RIOT_API_KEY;

export const getLatestVersion = async () => {
    try {
        const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
        const data = await res.json();
        const version = data[0]; // current version
        return version;
    } catch (err) {
        console.error("Error fetching latest version:", err);
        return null; 
    }
};