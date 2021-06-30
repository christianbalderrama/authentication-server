import {Client} from "pg";
import {Sequelize} from "sequelize";

const user = process.env.PG_USER;
const password = process.env.PG_PASSWORD;
const host = process.env.PG_HOST;
const port = process.env.PG_PORT;
const database = process.env.PG_DATABASE;

const client = new Client({
  user,
  password,
  host,
  port,
  database,
});

const sequelize = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${database}`);

export {
  client,
  sequelize,
};