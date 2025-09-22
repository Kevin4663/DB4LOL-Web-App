import { getChampsIconsFromDB } from "../services/dbServices.js";

export const sendChampIcons = async (req, res) => {
  try {
    const champIcons = await getChampsIconsFromDB();
    // returns an array of champ icons
    return res.status(200).json({ champIcons });
  } catch (error) {
    console.error("Error sending champ Icons:", error.message);
    return res.status(500).json({ error: "Failed to get champ Icons" });
  }
};
