const express = require("express");
const router = express.Router();
const htmlRoute = require("./html.js")
const htmlApi = require("./api.js")

router.use('/', htmlRoute)
router.use('/api', htmlApi)

module.exports = router