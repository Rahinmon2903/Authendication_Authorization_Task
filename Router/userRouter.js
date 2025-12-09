import express from "express";
import { getCurrentUser, getUsers, userLogin, userRegister } from "../Controller/userController.js";
import { adminMiddleware } from "../Middleware/adminMiddleware.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";

const router=express.Router();

router.post("/register",userRegister)
router.post("/login",userLogin)
router.get("/getdata",adminMiddleware,getUsers)
router.get("/me", authMiddleware, getCurrentUser);







export default router;