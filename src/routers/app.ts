import { Router } from "express";
import { login, userInformation, live } from "../controllers/app";
import { checkJwt } from "../middlewares/session";

const router = Router();
router.post("/login", login);
router.get("/live", live);
router.get("/userInformation", checkJwt, userInformation)

export { router };