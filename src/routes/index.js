const express = require("express");
const router = express.Router();
const authRoute = require("./auth");
const userRoute = require("./user");
const profileRoute = require("./profile");
const skillsRoute = require("./skills");
const workExpRoute = require("./workExperiences");
const portfolioRoute = require("./portfolio");

router.use("/api/auth", authRoute);
router.use("/api/user", userRoute);
router.use("/api/profile", profileRoute);
router.use("/api/skills", skillsRoute);
router.use("/api/workExp", workExpRoute);
router.use("/api/portfolio", portfolioRoute);
  
module.exports = router;
