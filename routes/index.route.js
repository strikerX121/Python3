import { Router } from "express";
import indexDomain from "../domains/index.domain.js";
import EMR from "../helpers/message.helper.js";

const indexRouter = Router(),
  { welcome } = indexDomain,
  {
    ROUTES: {
      INDEX_ENDPOINTS: { WELCOME },
    },
  } = EMR;

indexRouter.get(WELCOME, welcome);

export default indexRouter;
