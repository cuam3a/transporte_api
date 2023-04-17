import { Router } from "express";
import { add, edit, getById, list, remove } from "../controllers/transport";

const router = Router();
router.get("/:s?", list);
router.get("/one/:id", getById)
router.post("/", add);
router.put("/:id", edit);
router.delete("/:id", remove);

export { router };