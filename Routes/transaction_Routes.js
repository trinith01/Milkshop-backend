import { Router } from "express";
import { getAllTransactions , createTransaction, deleteTransaction ,getRecentTransactions } from "../controllers/transactionControllers.js";

const transactionRouter = Router();

transactionRouter.get("/", getAllTransactions).post("/",createTransaction).get("/recent",getRecentTransactions);
transactionRouter.route("/:id").delete(deleteTransaction);

export default transactionRouter;
