import express from "express";
const router = express.Router();
import {
  addToMyList,
  getAddedItem,
  deleteItem,
} from "../controllers/UserController.js";

router.post("/add", addToMyList);
router.get("/liked/:email", getAddedItem);
router.put("/delete", deleteItem);
export default router;
