import express from 'express';
import apiCtrl from '../controllers/apiController.mjs';

const router = express.Router();
// @route:   GET api/audioProfiles
// @desc:    get list of prebuilt voices from PlayHT API
// @access:  Private

router
    .route("/")
    .get(apiCtrl.getAIVoices)

export default router;