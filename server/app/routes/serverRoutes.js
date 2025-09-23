import express from "express";

//import controllers
import { sendChampData } from "../controllers/serverControllers.js";

const router = express.Router();

//ROUTES
router.get("/champ-data", sendChampData);

export default router;
