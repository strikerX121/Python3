import { Router } from "express";
import patientDomain from "../domains/patient.domain.js";
import EMR from "../helpers/message.helper.js";

const patientRouter = Router(),
  {
    addPatient,
    retrieveAllPatients,
    retrievePatientDetails,
    updatePatientDetailById,
  } = patientDomain,
  {
    ROUTES: {
      PATIENT_ENDPOINTS: {
        ADD_PATIENT,
        RETRIEVE_PATIENTS,
        RETRIEVE_PATIENTS_DETAIL,
        UPDATE_PATIENT,
      },
    },
  } = EMR;

patientRouter.post(ADD_PATIENT, addPatient);
patientRouter.get(RETRIEVE_PATIENTS, retrieveAllPatients);
patientRouter.get(RETRIEVE_PATIENTS_DETAIL, retrievePatientDetails);
patientRouter.post(UPDATE_PATIENT, updatePatientDetailById);

export default patientRouter;
