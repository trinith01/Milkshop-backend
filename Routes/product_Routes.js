import { Router } from "express";
import { getAllProducts , getProductById, createProduct,updateProduct , deleteProduct } from "../controllers/prducts.js";

const productRouter = Router();
productRouter.get("/", getAllProducts).post("/",createProduct)
productRouter.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct)

export default productRouter;
