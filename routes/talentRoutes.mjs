import express from "express";
import talentCtrls from "../controllers/talentControllers.mjs";

const router = express.Router();

router
    .route ('/')
    // @route:   GET api/talents
    // @desc:    get list of talents from DB
    // @access:  Public
    .get(talentCtrls.getAllTalent)

    // @route:   POST api/talents
    // @desc:    create talent on DB
    // @access:  Public
    .post(talentCtrls.createTalent)

router
    .route ('/:id')
    // @route:   GET api/talents/:id
    // @desc:    find one talent on DB
    // @access:  Public
    .get(talentCtrls.getOneTalent)



export default router