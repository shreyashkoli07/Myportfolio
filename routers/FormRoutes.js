const express = require("express");
const router = express.Router();

const formcontroller = require('../controller/formcontroller');

// Routes
router.post("/", formcontroller.sendData);  // Changed route to "/submit-form"

module.exports = router;
