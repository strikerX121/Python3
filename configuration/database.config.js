import config from "./app.config.js";
import mySql from "mysql";

const connection = mySql.createConnection({
  host: config.SQL_HOST,
  user: config.SQL_USER,
  password: config.SQL_PASSWORD,
  database: config.SQL_DATABASE,
});

export default connection;