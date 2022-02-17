const router = require("express").Router();

const User = require("../models/User.model");
const Room = require("../models/Room.model");

router.get("/new-room", (req, res) => {
   res.render("./rooms/new-room")
})

module.exports = router;