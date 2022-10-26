const EMR = {
  APP_NAME: "EMR",
  MESSAGES: {
    CONNECTION_SUCCESS: "Connection to database established",
    CONNECTION_ERR: "Error with database connection",
    ENV_NOT_FOUND_ERR: "No .env found. Please add .env to app root",
    SERVER_STARTED: "Server listening at PORT",
  },
  PATHS: {
    PATH_USER_AVATAR: "public/uploads/avatar",
    PATH_VIEW: "views",
    PATH_IMAGES: "public/images",
  },
  ROUTES: {
    ROUTE_INDEX: "/",
    ROUTE_PATIENT: "/patient",
    INDEX_ENDPOINTS: {
      WELCOME: "/welcome",
    },
    PATIENT_ENDPOINTS: {
      ADD_PATIENT: "/add",
    },
  },
};

export default EMR;
