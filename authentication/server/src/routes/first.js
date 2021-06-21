import express from "express";
import db from "../../models/index";

console.log("db >>> ", db.sequelize.models);
const {User} = db.sequelize.models;
const router = express.Router();

router.get("/", async(_, res) => {
  return res.send("First!");
});

router.post("/", async(req, res) => {
  console.log("body >>> ", req.body);
  return res.send("Success");
});


router.get("/user", async(_, res) => {
  const user = await User.create({
    firstName: "test",
    lastName: "test",
    email: "test@gmail.com",
  });

  return res.send(user);
});

export default router;