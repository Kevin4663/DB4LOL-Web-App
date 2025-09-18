import express from "express";
import cors from "cors";
import path from "path";
import serverRoutes from "./routes/serverRoutes.js"
import { fileURLToPath } from "url";
import { getLatestVersion } from "./services/riotServices.js";
import { getSummonerPUUID } from "./services/riotServices.js";
import { connectDB } from "./config/db.js"
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
    try {
        res.locals.version = await getLatestVersion();
        next();
    } catch (err) {
        console.error(err);
        res.locals.version = "unknown";
        next();
    }
});
app.use("", serverRoutes);


connectDB();

app.listen(port, () => {
    console.log(`listening on ${port} @ http://localhost:${port}/`)
    
});

