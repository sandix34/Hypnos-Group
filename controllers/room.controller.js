const db = require("../models");
const Room = db.room;

// Create and Save a new Room
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Room
    const room = new Room({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
    });

    // Save Room in the database
    room.save((err, data) => {
        if (err) {
            res.status(500).send({ message: err });
            return
        }
        res.send(data);
    });
}
