const express = require("express");
const router = express.Router();
const htmlRoute = require("./html")
const htmlApi = require("./api")

router.use('/', htmlRoute)
router.use('/api', htmlApi)

module.exports = router