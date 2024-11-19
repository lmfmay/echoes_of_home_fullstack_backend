import express from "express";
import talentCtrls from "../controllers/talentControllers.mjs";

const router = express.Router();

router
    .route ('/')
    // @route:   GET api/talents
    // @desc:    get list of talents from DB
    // @access:  Public
    .get(talentCtrls.getAllTalent);


export default router