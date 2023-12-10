
import express from 'express';
import {createTour, updateTour, deleteTour, getSingleTour, getAllTour} from "./../controllers/tourController.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router= express.Router();

//create new tour
router.post("/", verifyAdmin, createTour);

//update new tour
router.put("/:id", verifyAdmin, updateTour); 

//delete new tour
router.delete("/:id", verifyAdmin, deleteTour);

//get Single new tour
router.get("/:id", getSingleTour);

//create new tour
router.get("/", getAllTour);

export default router;