import express from "express";

//import controllers
import { getChampList, getVersion } from "../controllers/serverControllers.js";

const router = express.Router();

//ROUTES
//version
router.get("/version", getVersion);

router.get("/champlist", getChampList);

export default router;
