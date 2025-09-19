import express from "express"

//import controllers
import { getVersion } from "../controllers/serverControllers.js";

const router = express.Router();

//ROUTES
//version
router.get("/version", getVersion());

export default router
