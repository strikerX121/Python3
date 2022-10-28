import config from "./app.config.js";
import Sequelize from "sequelize";

const connection = new Sequelize(
  config.SQL_DATABASE,
  config.SQL_USER,
  config.SQL_PASSWORD,
  {
    host: config.SQL_HOST,
    port: 3306,
    dialect: "mysql",
    operatorsAliases: 0,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default connection;
