import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./util/db.js";
import transactionRoutes from "./routes/transaction-routes.js";
import userRoutes from "./routes/user-routes.js";

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Trackify API running");
});

app.use("/api/transactions", transactionRoutes);
app.use("/api/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});