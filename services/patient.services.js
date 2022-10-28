import patientModel from "../models/patient.model.js";
import commonHelper from "../helpers/common.helper.js";

const { createOne, retrieveMany, retrieveOne, updateOne } = commonHelper;

const createPatient = async (data) => {
    return await createOne(patientModel, { ...data });
  },
  retrievePatients = async (data) => {
    return await retrieveMany(patientModel, { ...data });
  },
  retrievePatientDetailById = async (data) => {
    return await retrieveOne(patientModel, { ...data });
  },
  updatePatientDetail = async (data, filter) => {
    return await updateOne(patientModel, { ...data }, { ...filter });
  },
  patientService = {
    createPatient,
    retrievePatients,
    retrievePatientDetailById,
    updatePatientDetail,
  };

export default patientService;
