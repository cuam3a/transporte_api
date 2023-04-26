import { Router } from "express";
import { add, edit, getById, list, remove, addDetail, removeDetail, listDetail, getByIdDetail, getByUser } from "../controllers/operational";

const router = Router();
router.get("/:s?", list);
router.get("/one/:id", getById)
router.post("/", add);
router.put("/:id", edit);
router.delete("/:id", remove);
router.get("/detail/:s?", listDetail);
router.get("/detail/one/:id", getByIdDetail)
router.post("/detail/", addDetail);
router.delete("/detail/:id", removeDetail);
router.get("/user/:id", getByUser);
export { router };