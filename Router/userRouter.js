import express from "express";
import { getUsers, userLogin, userRegister } from "../Controller/userController.js";
import { adminMiddleware } from "../Middleware/adminMiddleware.js";

const router=express.Router();

router.post("/register",userRegister)
router.post("/login",userLogin)
router.get("/getdata",adminMiddleware,getUsers)






export default router;