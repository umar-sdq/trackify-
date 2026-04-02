import express from "express";
import {
  addTransaction,
  getUserTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transaction-controller.js";
import { checkAuth } from "../util/check-auth.js";

const router = express.Router();

router.use(checkAuth);

router.post("/", addTransaction);
router.get("/", getUserTransactions);
router.get("/:id", getTransactionById);
router.patch("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

export default router;