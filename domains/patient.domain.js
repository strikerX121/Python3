import patientModel from "../models/patient.model.js";

const addPatient = [
    async (req, res) => {
      let patient = await patientModel.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          dob: req.body.dob,
      });
      console.log("patient", patient);
      res.json({ status: true, message: "patient added successfully" });
      // send200(res, { status: true, message: USER_LOGOUT_SUCCESS, data: null });
    },
  ],
  patientDomain = {
    addPatient,
  };

export default patientDomain;
