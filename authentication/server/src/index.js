import "regenerator-runtime";
import express from "express";
import morgan from "morgan";

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
const app = express();

app.use(morgan("dev"));

app.get("/", async(_, res) => {
  return res.send("Hello, world!");
});

app.listen(port, () => console.log(`Server is now listening to port: ${port}`));
