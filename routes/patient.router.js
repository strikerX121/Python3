import { Router } from "express";
import patientDomain from "../domains/patient.domain.js";
import EMR from "../helpers/message.helper.js";

const patientRouter = Router(),
  { addPatient } = patientDomain,
  {
    ROUTES: {
      PATIENT_ENDPOINTS: { ADD_PATIENT },
    },
  } = EMR;

patientRouter.post(ADD_PATIENT, addPatient);

export default patientRouter;
