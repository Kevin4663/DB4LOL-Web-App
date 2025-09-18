import express from "express";
import pg from "pg";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import pool from "./app/db.js"
import { getLatestVersion } from "./app/services/riotServices.js";
import { getSummonerPUUID } from "./app/services/riotServices.js";

const app = express();
const port = 3000;
app.set("view engine", "ejs")

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware
app.use(express.static(path.join(__dirname, "public")))
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


//ROUTES

//home
app.get("/", async (req, res) => {
    try{
        res.render('index', { currentPage: "home" })
    }catch (err){
        console.log(err.message);
    }
});

//about
app.get("/about", async (req, res) => {
    try{
        res.render('about', { currentPage: "about" })
    }catch (err){
        console.log(err.message);
    }
})

//build
app.get("/build", async (req, res) => {
    try{
        res.render('build', { currentPage: "build" })
    }catch (err){
        console.log(err.message);
    }
})

//stat
app.get("/stat", async (req, res) => {
    try{
        res.render('stat', { currentPage: "stat", puuid: null})
    }catch (err){
        console.log(err.message);
    }
})

app.post("/stat", async (req, res) => {
    try{
        const { gameName, tagline } = req.body;
        const puuid = await getSummonerPUUID(gameName, tagline);
        res.render("stat", { currentPage: "stat", puuid });
    }catch (err){
        res.render("stat", { currentPage: "stat", puuid: "Error fetching PUUID" });
        console.log(err.message);
    }
})

app.listen(port, () => {
    console.log(`listening on ${port} @ http://localhost:3000/`)
    
});