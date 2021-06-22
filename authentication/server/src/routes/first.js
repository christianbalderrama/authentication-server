import express from "express";
import db from "../../models/index";

console.log("db >>> ", db.sequelize.models);
const {Authentication1} = db.sequelize.models;
const router = express.Router();

router.get("/", async(_, res) => {
  return res.send("First!");
});

router.post("/", async(req, res) => {
  console.log("body >>> ", req.body);
  const {username, password} = req.body;
  const user = await Authentication1.create({
    username,
    password
  });

  console.log("User >>> ", user);

  return res.status(200);
});

export default router;