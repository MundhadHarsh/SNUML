import express from "express";
const router = express.Router()
import {predict } from "./ControllerML.js";


router.get("/predict", predict)

export default router 
