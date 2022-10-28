import EMR from "../helpers/message.helper.js";
import responseHelper from "../helpers/response.helper.js";
import guardianService from "../services/guardian.services.js";

const {
    MESSAGES: { GUARDIAN_REG_SUCCESS, UPDATE_SUCCESS, GUARDIAN_DELETE_SUCCESS },
  } = EMR,
  { send200, send404 } = responseHelper,
  {
    createGuardian,
    retrieveGuardianDetailById,
    updateGuardianDetail,
    deleteGuardian,
  } = guardianService;

const addGuardian = [
    async (req, res) => {
      await createGuardian({ ...req.body });
      send200(res, {
        status: true,
        message: GUARDIAN_REG_SUCCESS,
        data: null,
      });
    },
  ],
  updateGuardianDetailById = [
    async (req, res) => {
      const {
        body: { guardianId, fullName, relation, phone },
      } = req;

      let guardianDetail = await retrieveGuardianDetailById({
        where: { guardianId: guardianId },
      });
      if (!guardianDetail)
        send404(res, {
          status: false,
          message: GUARDIAN_NOT_FOUND_ERR,
          data: null,
        });
      else {
        let updateObj = {};
        if (fullName) updateObj.fullName = fullName;
        if (relation) updateObj.relation = relation;
        if (phone) updateObj.phone = phone;
        await updateGuardianDetail(updateObj, {
          where: { guardianId: guardianId },
        });
        send200(res, { status: true, message: UPDATE_SUCCESS, data: null });
      }
    },
  ],
  deleteGuardianById = [
    async (req, res) => {
      await deleteGuardian({
        where: { guardianId: req.body.guardianId },
      });
      send200(res, {
        status: true,
        message: GUARDIAN_DELETE_SUCCESS,
        data: null,
      });
    },
  ],
  guardianDomain = {
    addGuardian,
    updateGuardianDetailById,
    deleteGuardianById,
  };

export default guardianDomain;
