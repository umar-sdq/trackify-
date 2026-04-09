import express from "express";
import { getMe, updateMe } from "../controllers/user-controller.js";
import { checkAuth } from "../util/check-auth.js";

const router = express.Router();

console.log("user-routes loaded");

router.get("/test", (req, res) => {
  res.json({ ok: true, route: "/api/users/test" });
});

router.use(checkAuth);

router.get("/me", getMe);
router.patch("/me", updateMe);

export default router;