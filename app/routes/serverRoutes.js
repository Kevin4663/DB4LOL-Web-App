import express from "express"
import { getPUUID, renderPage } from "../controllers/serverControllers.js";

const router = express.Router();

//ROUTES
//home
router.get("/", renderPage("home"));

//about
router.get("/about", renderPage("about"));

//build
router.get("/build", renderPage("build"));

//stat
router.get("/stat", renderPage("stat"));
router.post("/stat", getPUUID)

export default router
