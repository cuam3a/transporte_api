import { Router } from "express";
import { login, userInformation, live } from "../controllers/app";
import { checkJwt } from "../middlewares/session";

const router = Router();
router.get("/live", live);
router.post("/login", login);
//router.get("/userInformation", checkJwt, userInformation)

export { router };