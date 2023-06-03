import express from "express";
import { getUser, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get("/find/:userid", getUser) //this was userId
router.put("/", updateUser)

export default router