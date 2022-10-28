import EMR from "../helpers/message.helper.js";
import responseHelper from "../helpers/response.helper.js";
import patientService from "../services/patient.services.js";
import guardianService from "../services/guardian.services.js";
import guardianModel from "../models/guardian.model.js";
const {
    MESSAGES: {
      PATIENT_REG_SUCCESS,
      LST_PATIENT,
      PATIENT_DETAILS,
      DATA_UNAVL,
      EMAIL_EXISTS_ERR,
      PATIENT_NOT_FOUND_ERR,
      UPDATE_SUCCESS,
    },
  } = EMR,
  { send200, send404, send403 } = responseHelper,
  {
    createPatient,
    retrievePatients,
    retrievePatientDetailById,
    updatePatientDetail,
  } = patientService,
  { createGuardian, retrieveGuardians } = guardianService;

const addPatient = [
    async (req, res) => {
      const {
        body: { email, guardianArr },
      } = req;
      let patientExists = await retrievePatientDetailById({
        where: { email: email },
      });
      if (patientExists) {
        send403(res, {
          status: false,
          message: EMAIL_EXISTS_ERR,
          data: null,
        });
      } else {
        let patient = await createPatient({ ...req.body, status: "active" });
        guardianArr.forEach(async (item) => {
          await createGuardian({
            ...item,
            patientId: patient.dataValues.patientId,
          });
        });
        send200(res, {
          status: true,
          message: PATIENT_REG_SUCCESS,
          data: null,
        });
      }
    },
  ],
  retrieveAllPatients = [
    async (req, res) => {
      let patientList = await retrievePatients({
        attributes: [
          "patientId",
          "firstName",
          "lastName",
          "dob",
          "email",
          "phone",
          "status",
        ],
      });
      send200(res, { status: true, message: LST_PATIENT, data: patientList });
    },
  ],
  retrievePatientDetails = [
    async (req, res) => {
      const {
        params: { id: patientId },
      } = req;

      let patientDetail = await retrievePatientDetailById({
        where: { patientId: patientId },
      });
      let guardian = await retrieveGuardians({
        where: { patientId: patientId },
        attributes: [
          "patientId",
          "guardianId",
          "fullName",
          "relation",
          "phone",
        ],
      });
      if (!patientDetail)
        send404(res, {
          status: false,
          message: DATA_UNAVL,
          data: null,
        });
      else {
        send200(res, {
          status: true,
          message: PATIENT_DETAILS,
          data: { ...patientDetail.dataValues, guardian: guardian },
        });
      }
    },
  ],
  updatePatientDetailById = [
    async (req, res) => {
      const {
        body: {
          patientId,
          firstName,
          lastName,
          dob,
          gender,
          phone,
          email,
          address1,
          address2,
          city,
          zip,
          state,
          country,
          medicalIssues,
          presentMedicalIssues,
          currentMedication,
          allergies,
          medicalRefferedBy,
          insuranceCompany,
          policyNumber,
          expirationDate,
          otherRefferedBy,
          status,
        },
      } = req;

      let patientDetail = await retrievePatientDetailById({
        where: { patientId: patientId },
      });
      if (!patientDetail)
        send404(res, {
          status: false,
          message: PATIENT_NOT_FOUND_ERR,
          data: null,
        });
      else {
        let updateObj = {};
        if (firstName) updateObj.firstName = firstName;
        if (lastName) updateObj.lastName = lastName;
        if (dob) updateObj.dob = dob;
        if (gender) updateObj.gender = gender;
        if (phone) updateObj.phone = phone;
        if (email) updateObj.email = email;
        if (address1) updateObj.address1 = address1;
        if (address2) updateObj.address2 = address2;
        if (city) updateObj.city = city;
        if (zip) updateObj.zip = zip;
        if (state) updateObj.state = state;
        if (country) updateObj.country = country;
        if (medicalIssues) updateObj.medicalIssues = medicalIssues;
        if (presentMedicalIssues)
          updateObj.presentMedicalIssues = presentMedicalIssues;
        if (currentMedication) updateObj.currentMedication = currentMedication;
        if (allergies) updateObj.allergies = allergies;
        if (medicalRefferedBy) updateObj.medicalRefferedBy = medicalRefferedBy;
        if (insuranceCompany) updateObj.insuranceCompany = insuranceCompany;
        if (policyNumber) updateObj.policyNumber = policyNumber;
        if (expirationDate) updateObj.expirationDate = expirationDate;
        if (otherRefferedBy) updateObj.otherRefferedBy = otherRefferedBy;
        if (status) updateObj.status = status;
        await updatePatientDetail(updateObj, {
          where: { patientId: patientId },
        });
        send200(res, { status: true, message: UPDATE_SUCCESS, data: null });
      }
    },
  ],
  patientDomain = {
    addPatient,
    retrieveAllPatients,
    retrievePatientDetails,
    updatePatientDetailById,
  };

export default patientDomain;
