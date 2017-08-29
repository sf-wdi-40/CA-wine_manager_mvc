const express = require("express");
const router = express.Router();

//This is the convention

// GET /wines -> index
// GET /wines/:id -> show
// POST /wines -> create
// GET /wines/:id/edit -> edit
// PUT /wines/:id -> update
// DELETE /wines/:id -> destroy

router.get("/", require("./controllers/index"));

module.exports = router;
