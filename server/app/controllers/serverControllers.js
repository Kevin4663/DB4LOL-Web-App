import { getLatestVersion } from "../services/riotServices.js";
import { getChampsFromDB } from "../services/dbServices.js";

export const getVersion = async (req, res) => {
  try {
    const version = await getLatestVersion();
    return res.status(200).json({ version });
  } catch (err) {
    console.error("Error fetching version:", err.message);
    return res.status(500).json({ error: "Failed to get version" });
  }
};

export const getChampList = async (req, res) => {
  try {
    const champList = await getChampsFromDB();
    return res.status(200).json({ champList });
  } catch (error) {
    console.error("Error fetching champ list:", err.message);
    return res.status(500).json({ error: "Failed to get champ" });
  }
};
