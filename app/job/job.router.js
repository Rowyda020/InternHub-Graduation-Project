const express = require("express");
const router = express.Router();
const jonCon = require("./job.controller.js");

const verifyToken = require("../middlewares/verifyToken.js");
const { myMullter, HME } = require("../utils/multer.js");

router.get("/jobs",jonCon.getAllJobs)
router.get("/recommendedjobs",verifyToken,jonCon.recommendedJobs)

router.get("/applications",verifyToken,jonCon.Applications)
router.get("/jobdetails/:jobId",jonCon.jobDetails)

// router.get('/jobsfiltration',jonCon.getJobs);

router.get('/jobapplicants/:jobId', verifyToken, jonCon.jobApplicants)

router.get("/apply_requirement/:jobId",verifyToken,jonCon.applyPageDetails)
router.get("/topbrands",jonCon.topBrands)
router.get("/newjobs",jonCon.newjobs)


module.exports = router;
