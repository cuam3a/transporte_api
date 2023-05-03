import { Router } from "express";
import { login, reportOperational, live, reportOperationalDetail } from "../controllers/app";
import { checkJwt } from "../middlewares/session";

const router = Router();
router.get("/live", live);
router.post("/login", login);
router.get("/report/operational/:s?", reportOperational)
router.post("/report/operational/detail/", reportOperationalDetail)
//router.get("/userInformation", checkJwt, userInformation)

export { router };