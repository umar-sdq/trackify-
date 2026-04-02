import express from "express";
import { getMe, updateMe } from "../controllers/user-controller.js";
import { checkAuth } from "../util/check-auth.js";

const router = express.Router();

router.use(checkAuth);

router.get("/me", getMe);
router.patch("/me", updateMe);

export default router;