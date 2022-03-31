const db = require("../models");
const Hotel = db.hotel;
const User = db.user;

// Create and Save a new Hotel with is manager
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Hotel
    const hotel = new Hotel({
        name: req.body.name,
        city: req.body.city,
        address: req.body.address,
        description: req.body.description
    });

    // Save Hotel in the database
    hotel.save((err, hotel) => {
        if (err) {
            res.status(500).send({ message: err });
        } if (req.body.manager) {
            User.findOne( { username: req.body.manager }, (err, user) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                hotel.user = user.username;
                hotel.save((err, data) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
                    res.send(data);
                });
            });
        }
    });
}

// Retrieve all Hotels from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    Hotel.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving hotels."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Hotel.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Hotel with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Hotel with id=" + id });
        });
};

// Update a Hotel by the id in the request
exports.update = (req, res) => {

};

// Delete a Hotel with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Hotel from the database.
exports.deleteAll = (req, res) => {

};
