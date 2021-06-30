import express from "express";
import argon2 from "argon2";
import db from "../../models/index";

console.log("db >>> ", db.sequelize.models);
const {Authentication1} = db.sequelize.models;
const router = express.Router();

router.get("/", async(_, res) => {
  return res.send("First!");
});

router.post("/", async(req, res) => {
  console.log("body >>> ", req.body, req.params, req.query);
  const {username, password} = req.body;
  if (!username || !password) {
    return res.send({
      success: false,
      message: "username/password not provided",
    }).status(402);
  }

  const hash = await argon2.hash(password, {
    type: argon2.argon2id,
    hashLength: 40,
  });
  console.log("Hash >>> ", hash);
  const user = await Authentication1.create({
    username,
    password: hash,
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
  const user = await Authentication1.findOne({where: {username}});
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid username/password",
    });
  }

  console.log("user >>> ", user);
  const hashCheck = await argon2.verify(user.password, password);
  if (!hashCheck) {
    return res.status(401).json({
      success: false,
      message: "Invalid username/password",
    });
  }

  return res.status(200).json({
    success: true,
    data: {
      user: {
        id: user.id,
      },
    }
  });
});

export default router;