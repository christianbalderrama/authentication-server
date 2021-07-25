import "regenerator-runtime";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as env from "custom-env";
import {client, sequelize} from "./database";

// Load .env
env.env(process.env.NODE_ENV);
console.log("NODE_ENV >>> ", process.env.NODE_ENV);
console.log("ENV >>> ", process.env);

import first from "./routes/first";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("dev"));
app.use("/first", first);

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

app.get("/db/sequelize", async(_, res) => {
  try {
    await sequelize.authenticate();
    return res.send("Sequelize successfully connected to Postgres");
  } catch (err) {
    return res.status(403).send(err);
  }
});

app.listen(port, () => console.log(`Server is now listening to port: ${port}`));
