import { getLatestVersion } from "../services/riotServices.js";

const versionFinder = async (req, res, next) => {
    try {
        res.locals.version = await getLatestVersion();
        next();
    } catch (err) {
        console.error(err);
        res.locals.version = "unknown";
        next();
    }
}

export default versionFinder