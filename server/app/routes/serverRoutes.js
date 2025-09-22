import express from "express";

//import controllers
import { sendChampIcons } from "../controllers/serverControllers.js";

const router = express.Router();

//ROUTES
router.get("/champ-icons", sendChampIcons);

export default router;
