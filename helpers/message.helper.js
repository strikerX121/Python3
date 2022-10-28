const EMR = {
  APP_NAME: "EMR",
  MESSAGES: {
    CONNECTION_SUCCESS: "Connection to database established",
    CONNECTION_ERR: "Error with database connection",
    ENV_NOT_FOUND_ERR: "No .env found. Please add .env to app root",
    SERVER_STARTED: "Server listening at PORT",
    PATIENT_REG_SUCCESS: "Patient Added successfully.",
    LST_PATIENT: "Patient list",
    PATIENT_DETAILS: "Patient details",
    DATA_UNAVL: "No data available",
    EMAIL_EXISTS_ERR: "Email is already taken",
    PATIENT_NOT_FOUND_ERR: "Patient Not found",
    UPDATE_SUCCESS: "Updated successfully",
    GUARDIAN_REG_SUCCESS: "Guardian Added successfully.",
    GUARDIAN_NOT_FOUND_ERR: "Guardian Not found",
    GUARDIAN_DELETE_SUCCESS: "Guardian deleted successfully.",
  },
  PATHS: {
    PATH_USER_AVATAR: "public/uploads/avatar",
    PATH_VIEW: "views",
    PATH_IMAGES: "public/images",
    PATH_FRONTEND: "build",
  },
  ROUTES: {
    ROUTE_INDEX: "/",
    ROUTE_PATIENT: "/patient",
    ROUTE_GUARDIAN: "/guardian",
    INDEX_ENDPOINTS: {
      WELCOME: "/welcome",
    },
    PATIENT_ENDPOINTS: {
      ADD_PATIENT: "/add",
      RETRIEVE_PATIENTS: "/all",
      RETRIEVE_PATIENTS_DETAIL: "/details/:id",
      UPDATE_PATIENT: "/update",
    },
    GUARDIAN_ENDPOINTS: {
      ADD_GUARDIAN: "/add",
      UPDATE_GUARDIAN: "/update",
      DELETE_GUARDIAN: "/delete",
    },
  },
};

export default EMR;
