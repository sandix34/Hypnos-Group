const db = require("../models");
const Hotel = db.hotel;

// Create and Save a new Hotel
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
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });
    // Save Hotel in the database
    hotel
        .save(hotel)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Hotel."
            });
        });
};

// Retrieve all Hotels from the database.
exports.findAll = (req, res) => {

};

// Find a single Hotel with an id
exports.findOne = (req, res) => {

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

// Find all published Hotel
exports.findAllPublished = (req, res) => {

};