import guardianModel from "../models/guardian.model.js";
import commonHelper from "../helpers/common.helper.js";

const { createOne, retrieveMany, retrieveOne, updateOne, deleteOne } =
  commonHelper;

const createGuardian = async (data) => {
    return await createOne(guardianModel, { ...data });
  },
  retrieveGuardians = async (data) => {
    return await retrieveMany(guardianModel, { ...data });
  },
  updateGuardianDetail = async (data, filter) => {
    return await updateOne(guardianModel, { ...data }, { ...filter });
  },
  retrieveGuardianDetailById = async (data) => {
    return await retrieveOne(guardianModel, { ...data });
  },
  deleteGuardian = async (data) => {
    return await deleteOne(guardianModel, { ...data });
  },
  guardianService = {
    createGuardian,
    retrieveGuardians,
    updateGuardianDetail,
    retrieveGuardianDetailById,
    deleteGuardian,
  };

export default guardianService;
