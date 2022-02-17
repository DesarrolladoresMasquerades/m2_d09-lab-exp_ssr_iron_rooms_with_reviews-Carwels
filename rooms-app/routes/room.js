const router = require("express").Router();

const User = require("../models/User.model");
const Room = require("../models/Room.model");


router.get("/new-room", (req, res) => {
   res.render("rooms/new-room")
})
router.get("/", (req, res) => {

    Room.find()
    .then((rooms) => {
        res.render("rooms/rooms", {rooms})
    })
})


router.post("/new-room", (req, res) => {
    console.log(req.body)
    const {name, description, imgUrl, owner, reviews} = req.body

    Room.create({name, description, imgUrl, owner, reviews})
    .then(() => res.redirect("/rooms"))
    .catch((error) => {
        console.log(error)
        res.render("rooms/new-room")
    })
})

router.get("/rooms/:id", (req, res) => {
    Room.findById(req.params.id)
      .then((room) => {
        res.render("rooms/room-details", room);
      })
      .catch((err) => {
        console.log(err);
      });
  });






// router.route("/rooms/new-room")
// .get((req, res) => {
//     User.find().then((users) => {
//         res.render("rooms/new-room", {users})
//     })
// })
// .post((req, res) => {
//     const {name, description, imgUrl, owner, reviews} = req.body
//     Room.create({name, description, imgUrl, owner, reviews}).then(() => {
//         res.redirect("/rooms")
//     })
// })

module.exports = router;