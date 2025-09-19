import { getLatestVersion } from "../services/riotServices.js";

export const getVersion = () => {
    return async (req, res) => {
        try{
            const version = await getLatestVersion();
            res.json({ version });
        }catch (err){
            res.status(500).json({ error: "Failed to get version" });
            console.error(err.message);
        }
    }
}