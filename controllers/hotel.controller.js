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
        description: req.body.description,
        image: req.body.image
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

// Find a single Hotel with an id
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
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    Hotel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Hotel with id=${id}. Maybe Hotel was not found!`
                });
            } else res.send({ message: "Hotel was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Hotel with id=" + id
            });
        });
};

// Delete a Hotel with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Hotel.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Hotel with id=${id}. Maybe Hotel was not found!`
                });
            } else {
                res.send({
                    message: "Hotel was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Hotel with id=" + id
            });
        });
};
