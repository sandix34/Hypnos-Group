const mongoose = require("mongoose");

const Hotel = mongoose.model(
    "Hotel",
    new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },

        },
        { timestamps: true }
    )
);

module.exports = Hotel;
