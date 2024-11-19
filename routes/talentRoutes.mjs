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
    // @access:  Public (should be private if auth in place)
    .get(talentCtrls.getOneTalent)

    // @route:   PUT api/talents/:id
    // @desc:    edit info of one talent on DB
    // @access:  Public (should be private if auth in place)
    .put(talentCtrls.updateOneTalent)

    // @route:   DELETE api/talents/:id
    // @desc:    delete one talent from DB
    // @access:  Public (should be private if auth in place)
    .delete(talentCtrls.deleteOneTalent)



export default router