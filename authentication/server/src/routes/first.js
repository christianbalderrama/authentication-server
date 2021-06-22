import express, { response } from "express";
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

  return res.send({
    success: true,
    message: "OK"
  });
});

router.post("/login", async(req, res) => {
  console.log("body >>> ", req.body);
  const {username, password} = req.body;
  const user = await Authentication1.findOne({
    where: {
      username,
      password
    }
  });

  if (!user) {
    return res.send({
      success: false,
      message: "Invalid username/password",
    }).status(401);
  }

  return res.send({
    success: true,
    data: {
      user,
    }
  });
});

export default router;