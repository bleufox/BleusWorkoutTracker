const express = require("express");
const router = express.Router();

const viewsRoute = require("./html.js")
const viewsApi = require("./api.js")


router.use('/', viewsRoute)
router.use('/api', viewsApi)

module.exports = router