import { getChampsDataFromDB } from "../services/dbServices.js";

export const sendChampData = async (req, res) => {
  try {
    const champData = await getChampsDataFromDB();
    // returns an array of champ Data
    return res.status(200).json({ champData });
  } catch (error) {
    console.error("Error sending champ Data:", error.message);
    return res.status(500).json({ error: "Failed to get champ Data" });
  }
};
