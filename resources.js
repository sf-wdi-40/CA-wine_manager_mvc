const express = require("express");
const router = express.Router();

router.use("/wines", require("./resources/wines"));

module.exports = router;
