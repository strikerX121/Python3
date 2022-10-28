import { Router } from "express";
import guardianDomain from "../domains/guardian.domain.js";
import EMR from "../helpers/message.helper.js";

const guardianRouter = Router(),
  { addGuardian, updateGuardianDetailById, deleteGuardianById } =
    guardianDomain,
  {
    ROUTES: {
      GUARDIAN_ENDPOINTS: { ADD_GUARDIAN, UPDATE_GUARDIAN, DELETE_GUARDIAN },
    },
  } = EMR;

guardianRouter.post(ADD_GUARDIAN, addGuardian);
guardianRouter.post(UPDATE_GUARDIAN, updateGuardianDetailById);
guardianRouter.post(DELETE_GUARDIAN, deleteGuardianById);

export default guardianRouter;
