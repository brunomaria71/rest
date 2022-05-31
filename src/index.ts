import express from "express";
import cors from "cors";
import { createWish, getWishes } from "./services/wishlist.service";

const app = express();
app.use(express.json());
app.use(cors());
app.post("/", async (req, res) => {
  try {
    await createWish(req.body);
    res.send(201);
  } catch (e) {
    res.status(400).send({
      message: "Wish is not possible",
    });
  }
});
app.get("/", async (req, res) => {
  const wishes = await getWishes();
  res.send(wishes);
});
