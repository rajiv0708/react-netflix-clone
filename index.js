import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./db/connectDB.js";
import userRoutes from "./routes/UserRoutes.js";
const port = process.env.PORT || "8000";
const DATABASE_URL = process.env.DATABASE_URI;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

connectDB(DATABASE_URL);
app.get("/user", (req, res) => {
  res.send("Hello From the Server Side...");
});
app.use("/user/v1", userRoutes);

// To access static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server Started Successfully at Port ${port}`);
});
