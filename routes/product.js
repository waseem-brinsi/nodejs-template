import express from "express";
import { body } from 'express-validator';
import multer from '../middlewares/multer-config.js';



import {addOneProduct, getAllProduct,getProductsBycategory,deleteProductByID,updateProduct} from "../controllers/product.js";
const router = express.Router();
//import upload from "../middlewares/uploads"


router.route("/products").post(multer("image",512*1024),
    body("name").isLength({min:0,max:50}),
    body("description").isLength({min:0,max:500}),
    body("prix").isNumeric().isLength({min:0,max:8}),
    body("category").isLength({min:5,max:50}),
    addOneProduct);


router.route("/products").get(getAllProduct);   

router.route("/products/:category").get(getProductsBycategory);   

router.route("/products/:productId").delete(deleteProductByID); 

router.route("/products/:id").put(updateProduct); 



export default router;