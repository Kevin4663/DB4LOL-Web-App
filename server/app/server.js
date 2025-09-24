import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";

import serverRoutes from "./routes/serverRoutes.js";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import { updateAllDatabase } from "./services/dbServices.js";

import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(rateLimiter);
app.use("", serverRoutes);

connectDB().then(async () => {
  try {
    await updateAllDatabase();
    console.log("Database good");
  } catch (err) {
    console.error("Error updating database:", err);
  }
  app.listen(port, () => {
    console.log(`listening on ${port} @ http://localhost:${port}/`);
  });
});
