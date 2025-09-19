import { getLatestVersion } from "../services/riotServices.js";

export const getVersion = async (req, res) => {
    try {
        const version = await getLatestVersion();
        return res.status(200).json({ version });
    } catch (err) {
        console.error("Error fetching version:", err.message);
        return res.status(500).json({ error: "Failed to get version" });
    }
};