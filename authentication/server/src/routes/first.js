import express from "express";
const router = express.Router();

router.get("/", (_, res) => {
  return res.send("First!");
});

export default router;