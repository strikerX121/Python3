import express, { json, urlencoded, static as expressStatic } from "express";
import logger from "morgan";
import cors from "cors";
import { createServer } from "http";
import indexRouter from "./routes/index.route.js";
import patientRouter from "./routes/patient.route.js";
import guardianRouter from "./routes/guardian.route.js";
import connection from "./configuration/database.config.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import { existsSync } from "fs";
import EMR from "./helpers/message.helper.js";
import config from "./configuration/app.config.js";

const app = express(),
  attachCoreMiddlewares = async () => {
    checkEnv();
    app.use(logger("dev"));
    app.use(json());
    app.use(urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(
      expressStatic(EMR.PATHS.PATH_FRONTEND)
    );
  },
  attachExternalMiddlewares = async () => {
    app.use(cors());
    app.use(
      session({
        secret: EMR.APP_NAME,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
      })
    );
  },
  attachRouters = async () => {
    app.use(EMR.ROUTES.ROUTE_INDEX, indexRouter);
    app.use(EMR.ROUTES.ROUTE_PATIENT, patientRouter);
    app.use(EMR.ROUTES.ROUTE_GUARDIAN, guardianRouter);
  },
  connectToDatabase = async () => {
    connection
      .authenticate()
      .then(async () => {
        console.log(EMR.MESSAGES.CONNECTION_SUCCESS);
        await listenToServer();
      })
      .catch((err) => {
        console.error.bind(console, EMR.MESSAGES.CONNECTION_ERR);
      });
  },
  checkEnv = () => {
    if (!existsSync(".env")) {
      console.log(EMR.MESSAGES.ENV_NOT_FOUND_ERR);
      process.exit(1);
    }
  },
  listenToServer = async () => {
    const server = createServer(app);
    server.listen(Number(config.PORT));
    server.once("listening", () =>
      console.log(EMR.MESSAGES.SERVER_STARTED.replace("PORT", config.PORT))
    );
    server.on("error", (error) => {
      throw error;
    });
  },
  applicationStack = {
    app,
    attachCoreMiddlewares,
    attachExternalMiddlewares,
    attachRouters,
    connectToDatabase,
  };

export default applicationStack;
