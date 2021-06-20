import "regenerator-runtime";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import client from "./database";

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", async(_, res) => {
  return res.send("Hello, world!");
});

app.get("/db", async(_, res) => {
  try {
    await client.connect();
    return res.send(`Successsfully connected to ${process.env.PG_DATABASE}`).status(200);
  } catch (err) {
    console.log(err);
    return res.status(403).send(err);
  }
});

app.listen(port, () => console.log(`Server is now listening to port: ${port}`));
